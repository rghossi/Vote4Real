# Vote4Real
Voting SPA (single page application)

Live demo (current progress): https://vote4real.herokuapp.com/

This is a [freeCodeCamp](https://www.freecodecamp.com/challenges/build-a-voting-app) back-end challenge implementation.

It was built using Node, MongoDB, React, Express and facebook authentication.

## Basic/required Features

* As an authenticated user, I can keep my polls and come back later to access them.
* As an authenticated user, I can share my polls with my friends.
* As an authenticated user, I can see the aggregate results of my polls.
* As an authenticated user, I can delete polls that I decide I don't want anymore.
* As an authenticated user, I can create a poll with any number of possible items.
* As an unauthenticated or authenticated user, I can see and vote on everyone's polls.
* As an unauthenticated or authenticated user, I can see the results of polls in chart form.
* As an authenticated user, if I don't like the options on a poll, I can create a new option.

## Pre Running Instructions

In order to use facebook authentication, you have to create a new app at [Facebook Developers](https://developers.facebook.com/docs/apps/register).

Then create the following file to store all sensitive data.

```
//src/config/auth.js
module.exports = {

    'facebookAuth' : {
        'clientID'      : 'YOUR_APP_ID',
        'clientSecret'  : 'YOUR_APP_SECRET',
        'callbackURL'   : 'FACEBOOK_CALLBACK_URL'
    }

};
```

An alternative is to set the following environment variables if you are running in production:

```
clientID = 'YOUR_APP_ID'
clientSecret = 'YOUR_APP_SECRET'
callbackURL = 'FACEBOOK_CALLBACK_URL'
```

And that's it! You're all set to run the application.

## Running Instructions

1st terminal tab: `npm run build`

2nd terminal tab: `sudo mongod`

3rd terminal tab: `sudo npm run dev`

Then, just open your browser at `http://localhost:3000`

PS: you have to make additional configuration if you prefer not to use `sudo` running those commands.