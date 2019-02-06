# F1 Leaderboards

I have used the [Ergast API](http://ergast.com/mrd/) to create a single page application that
presents a list that shows the F1 world champions starting from 2005 until
2015. Clicking on an item shows the list of the winners for every race for
the selected year. We also request to highlight the row when the winner
has been the world champion in the same season. 

## Description

The app has two views -

  * Leaderboard - where all winners between 2005 and 2015 are listed,
  * Season Results - lists winners of all races for a particular season.

The leaderboard contains clickable items in a list which when clicked takes the user to that particular season's results.

The leaderboard also displays the win percent of the season winners, in a intuitive bar. :)

The app also maintains a presentable layout in mobile devices.

## Technologies used

The app built using my own custom boilerplate

* React,
* Redux,
* Redux-saga,
* Typescript,
* eslint-airbnb
* Jest
* Enyzme
* Styled-components


## Running the project

### npm run start

To start the project in port 3000

### npm run lint

To run eslint, find linting issues in code

### npm run test

To run jest tests

### npm run build

To create a production build. The build process inherently runs `lint` and `test` before building. To make sure there are no errors in build code.
