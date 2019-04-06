# Quasar App

> WIP
Create a new firebase app and add the provided web config to the /src/firebase/config.js file.

Go to firebase-functions folder in terminal, and run "firebase login",
after you have verified you're logged in, run firebase deploy --only functions. This will install the serverless functions firebase needs for this app.

Next go here https://docs.hasura.io/1.0/graphql/manual/getting-started/heroku-simple.html to setup a heroku quickstart application for Hasura. And get the end point on Hasura, and paste the end point in the apollo config file in /src/plugins/apollo.js