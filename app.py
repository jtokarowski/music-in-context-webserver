import json
from flask import Flask, Markup, request, redirect, render_template, jsonify
import requests
from datetime import date
from spotifyClient import auth, data
import os

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

@app.route("/flowselection")
def flowselection():

    refresh_token = request.args['refresh_token']
    #need to send it the link to start the playlist and cluster flow
    clusterlink = "{}/playlistform?refresh_token={}&mode=cluster".format(BASE_URL, refresh_token)
    playlistLink = "{}/playlistform?refresh_token={}&mode=playlist".format(BASE_URL, refresh_token)
    tunnelLink = "{}/playlistform?refresh_token={}&mode=tunnel".format(BASE_URL, refresh_token)

    return render_template("flowselection.html", clusterFlowStartLink=clusterlink, playlistFlowStartLink=playlistLink, tunnelFlowStartLink=tunnelLink)

@app.route("/playlistform", methods=["GET","POST"])
def multicheckboxform():

    return render_template("playlistform.html")


@app.route("/ui")
def serve():
    print('serving ui')
    return render_template('visualizations.html') 

#instantiate app
if __name__ == "__main__":
    if ENV == 'heroku':
        app.run(debug=False)
    else:
        app.run(debug=True, port=PORT)