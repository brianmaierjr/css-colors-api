# CSS Colors Name API - [csscolorsapi.com](https://csscolorsapi.com)

This is a simple, RESTful API that displays data about all 148 CSS Color Names. [Learn More about CSS Color Names](https://www.w3schools.com/colors/colors_names.asp). In addition to the color names, which can be used directly in CSS, it also includes RGB and HEX values, theme(light or dark, used for styling), and grouping(used for filtering).

## Features for Code Louisville Web Dev 2 January 2023

### Feature List 1

-   #### Use arrays, objects, sets or maps to store and retrieve information that is displayed in your app.

    The main array of data is in `colors.json` and is used multiple different ways within my app to present data.

-   #### Analyze data that is stored in arrays, objects, sets or maps and display information about it in your app.

    I'm utilizing data stored in objects and arrays within the `colors.json` to display data in the API different ways.

-   #### Analyze text and display useful information about it. (e.g. word/character count in an input field)
    In my "Try it Out" section of my [site](https://csscolorsapi.com) I am analyzing what a user puts in to spit out the appropriate response below the input.

### Feature List 2

-   #### Retrieve data from a third-party API and use it to display something within your app.
    Fetch is used to retrieve data on [147colors.com](https://147colors.com) for the main color list and individual color pages.

### Feature List 3

-   #### Create a node.js web server using a modern framework such as Express.js or Fastify. Serve at least one route that your app uses (must serve more than just the index.html file).
    API created with Express.js and served on Vercel with serverless functions.

## Links for Mentors Checking the Project

### API

[Documentation](https://csscolorsapi.com)

[All Colors Endpoint](https://csscolorsapi.com/api/colors)

[Single Colors Endpoint](https://csscolorsapi.com/api/colors/blue)

[Colors Group Endpoint](https://csscolorsapi.com/api/colors/group/blue)

[Colors Theme Endpoint](https://csscolorsapi.com/api/colors/theme/dark)

[GitHub Repository](https://github.com/brianmaierjr/css-colors-api)

### 147colors.com - Where the API is used

[Live Site](https://147colors.com)

[GitHub Repository](https://github.com/brianmaierjr/147-colors-astro)
