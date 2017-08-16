# CapstoneProject - Cash Managaer

Cash Manager is a web app for Restaurants with Delivery service to Get quick informatin about customer's address and reliable account report for employees. The app will allow you to add, delete a driver and get quick refernce to their Daily account.

# Getting Started

In order to run this app locally on your machine you need to follow a few steps to make sure everyhing is working nicely.

## Prerequisites

Before running this app you need to have installed a few things on your terminal.

1. [npm](https://www.npmjs.com/get-npm?utm_source=house&utm_medium=homepage&utm_campaign=free%20orgs&utm_term=Install%20npm "npm Install") To check if you have npm run npm --version in your terminal. If not, follow the link above for steps to install.

2. [http-server](https://www.npmjs.com/package/http-server) If you don't already have a local server, run npm install http-server. Once installed all you have to do is run hs in the root folder of the project to start hosting. You'll visit localhost:8080 in your broswer to see everything running.

## Installing

1. Fork and clone the repo onto your machine.

2. cd into the /lib folder and run npm install to download all the required dependencies.

3. You will need to get an API key from Google Maps in order to utilize location feature.

4. You will also need an API key and a firebase project.

5. Once you have created a firebase project, Create a credentials directory inside of the app directory. Create a file name "fb-creds.js" inside of the values directory, and paste the following code into your fb-creds.js. Replace "YourAPIKey" and "YourFirebaseAccount" with your API Key and project name from firebase.

``` javascript
'use strict';

app.constant('FBCreds', {
    apiKey: "YourFireBaseAPIKey",
    authDomain: "YourFirebaseAccount.firebaseapp.com",
    databaseURL: "https://YourFirebaseAccount.firebaseio.com",
    googleMapApiKey: "YourGoogleMapsAPIKey"
});
```

# Built With


* [Google Maps API](https://www.youtube.com/) - Publicly available API.

* [Bootstrap](http://getbootstrap.com/getting-started/) - A modern responsive CSS framework based on Material Design by Google.

* [Angularjs](https://angularjs.org/) - What HTML would have been, had it been designed for building web-apps.

* [Angular Google Maps](http://angular-ui.github.io/angular-google-maps/#!/) - is a set of directives to integrate Google Maps into your applications.

* [JS Hint](http://jshint.com/) - A tool that helps to detect errors and potential problems in your JavaScript code.

* [Grunt](https://gruntjs.com/) - Javascript task runner.

* [JQuery](https://jquery.com/) - The Write Less, Do More, JavaScript Library.


# Try DEMO NOW

[https://cleverbek1991.github.io/CapstoneProject/](https://cleverbek1991.github.io/CapstoneProject/)
