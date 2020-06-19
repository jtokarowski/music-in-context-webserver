import json
from flask import Flask, Markup, request, redirect, render_template, jsonify
import requests
from datetime import date
from spotifyClient import auth, data
import os
from flask_wtf import FlaskForm
from wtforms import widgets, SelectMultipleField
import itertools
from collections import Counter
from operator import itemgetter

ENV = os.environ.get('ENV')
SECRET_KEY = ' ' #This doesn't actually get used, but simpleForm needs this to run

#creates instance of app
app = Flask(__name__)
app.config.from_object(__name__)

# Server-side Parameters based on where it's running
if ENV == 'dev':
    CLIENT_SIDE_URL = "http://127.0.0.1"
    PORT = 3000
    BASE_URL = "{}:{}".format(CLIENT_SIDE_URL, PORT)
    REDIRECT_URI = "{}:{}/callback/q".format(CLIENT_SIDE_URL, PORT)
    START_PAGE_LINK = "{}:{}/start".format(CLIENT_SIDE_URL, PORT)
elif ENV == 'heroku':
    CLIENT_SIDE_URL = "https://music-in-context.herokuapp.com"
    BASE_URL = CLIENT_SIDE_URL
    REDIRECT_URI = "{}/callback/q".format(CLIENT_SIDE_URL)
    START_PAGE_LINK = "{}/start".format(CLIENT_SIDE_URL)
    

@app.route("/")
def home():
    #Serve the landing page
    return render_template("landingpage.html", nextPageLink = START_PAGE_LINK)


@app.route("/start")
def index():
    # Auth Step 1: Authorize Spotify User
    authorization = auth()
    return redirect(authorization.auth_url)

@app.route("/callback/q")
def callback():
    # Auth Step 2: Requests refresh and access tokens
    authorization = auth()
    return redirect(authorization.get_accessToken(request.args['code']))

@app.route("/playlistform", methods=["GET","POST"])
def playlistform():

    #grab the tokens from the URL + intialize data class
    access_token = request.args.get("access_token")
    refresh_token = request.args.get("refresh_token")
    token_type = "Bearer" #always bearer, don't need to grab this each request
    expires_in = request.args["expires_in"]
    spotifyDataRetrieval = data(access_token)
        
    #build the link for each playlist
    allUserPlaylists = spotifyDataRetrieval.currentUserPlaylists()

    checkboxData = []
    for playlist in allUserPlaylists:
        checkboxFormatPlaylist = (spotifyDataRetrieval.URItoID(playlist['uri']),playlist['playlistName'])
        checkboxData.append(checkboxFormatPlaylist)

    #set up the checkbox classes
    class MultiCheckboxField(SelectMultipleField):
        widget = widgets.ListWidget(prefix_label=False)
        option_widget = widgets.CheckboxInput()

    class SimpleForm(FlaskForm):
        # create a list of value/description tuples
        files = [(x, y) for x,y in checkboxData]
        playlistSelections = MultiCheckboxField('Label', choices=files)

    form = SimpleForm()

    if form.validate_on_submit():
        formData = form.playlistSelections.data
        if not formData:
            return render_template("flaskform.html", form=form)
        else:
            clusterUIPage = "{}/ui?refresh_token={}&form_data={}&mode=playlist".format(BASE_URL, refresh_token, ",".join(formData))
            return redirect(clusterUIPage) 
    else:
        print(form.errors)
        #TODO better error handling

    return render_template("flaskform.html", form=form)


@app.route("/ui")
def serve():
    print('serving ui')
    return render_template('index.html') 

#instantiate app
if __name__ == "__main__":
    if ENV == 'heroku':
        app.run(debug=False)
    else:
        app.run(debug=True, port=PORT)