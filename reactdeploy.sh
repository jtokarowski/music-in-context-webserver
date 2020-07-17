#!/bin/bash

#Shell script to build react UI and move into webserver for deployment

#define the directories we will be using
webserverdir="/Users/John/Dev/musicInContext/webserver"
reactuidir="/Users/John/Dev/musicInContext/reactUI"
chartsdir="/Users/John/Dev/musicInContext/reactUI/Charts"
formsdir="/Users/John/Dev/musicInContext/reactUI/Forms"

#delete files in webserver top level
cd $webserverdir
rm asset-manifest.json 
rm favicon.ico
rm logo192.png
rm logo512.png
rm manifest.json
rm precache-manifest.be59002aa4869eeaf40742a915ad169f.js
rm robots.txt
rm service-worker.js

echo "Deleted assets in webserver top level"

#delete files in webserver templates
cd $webserverdir
cd templates
rm visualizations.html
rm playlistform.html 

echo "Deleted outdated templates"

#delete files in webserver static
cd $webserverdir
cd static
rm ./css/*
rm ./js/*

echo "Deleted outdated static assets"

#build the new UI for charts and forms, copy it to the webserver, rename the templates
cd $chartsdir; npm run build
cd build

echo "Built charts UI"

#copy top level assets (only need to do this once)
cp $chartsdir/build/* "/Users/John/Dev/musicInContext/webserver"
# cp favicon.ico "/Users/John/Dev/musicInContext/webserver"
# cp logo192.png "/Users/John/Dev/musicInContext/webserver"
# cp logo512.png "/Users/John/Dev/musicInContext/webserver"
# cp manifest.json "/Users/John/Dev/musicInContext/webserver"
# cp precache-manifest.be59002aa4869eeaf40742a915ad169f.js "/Users/John/Dev/musicInContext/webserver"
# cp robots.txt "/Users/John/Dev/musicInContext/webserver"
# cp service-worker.js "/Users/John/Dev/musicInContext/webserver"

echo "Copied top level assets to webserver"

#charts
cd static
cp -R css/. "/Users/John/Dev/musicInContext/webserver/static/css"
cp -R js/. "/Users/John/Dev/musicInContext/webserver/static/js"

echo "Copied chart static assets to webserver"

cd ..
cp ./index.html "/Users/John/Dev/musicInContext/webserver/templates"
cd $webserverdir
rm index.html
cd templates
mv index.html visualizations.html

echo "Copied chart html to webserver and renamed"

#forms
cd $formsdir; npm run build

echo "Built forms UI"

cd build; cd static
cp -R css/. "/Users/John/Dev/musicInContext/webserver/static/css"
cp -R js/. "/Users/John/Dev/musicInContext/webserver/static/js"

echo "Copied chart static assets to webserver"

cd ..
cp ./index.html "/Users/John/Dev/musicInContext/webserver/templates"
cd $webserverdir; cd templates
mv index.html playlistform.html

echo "Copied chart html to webserver and renamed"

echo "Completed build and deploy"




