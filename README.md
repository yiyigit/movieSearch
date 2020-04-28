# Your movie database

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Description

It is a single page application that allows you to log in, search movies and store your comments to these movies in the server. It allows multi-users to use at the same time and even in the same username.
<img src='images/homepage screenshot.png' />

In the homepage, it has four top rated movies for you to explore or you can search keyword for a certain movie. Be aware that lack of keyword or movie not found error massage would require you to try with a more specific keyword. 

## Login requirement

It is crucial for users to log in with valid username. We don't accept any username that includes "dog" or empty spaces. If you log out at any point, the website will redirect you to the log in page to log in again.

## Unavailable details in certain movies

When you encounters an unavailable poster or overview not found, don't panic! It is because the backend database doesn't include every movie. I apologise in advance.

## API used

The API that supports users to search by keyword is provided by https://www.omdbapi.com/. API by Brian Fritz. All content licensed under CC BY-NC 4.0.(https://creativecommons.org/licenses/by-nc/4.0/)

The API that supports users to see movie details and recommendations, top rated movies is provided by https://www.themoviedb.org/. This website follows the term of use as in https://www.themoviedb.org/terms-of-use.

## Available Scripts

For the project to start, you can run:

### `npm install` & `npm start`

Open [http://localhost:5000](http://localhost:5000) to view it in the browser.


## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

