Overview

In this activity, I have created a new React-based rendition of the New York Times Article Search application. This project required me to create React components, work with helper/util functions, and utilize the React mounting lifecycle to query and display articles based on user searches. I also used Node, Express and MongoDB so that users can save articles to read later.

Check out the application here: https://polite-marks-64377.herokuapp.com/

1. Type in the article topic you would like to search. For example, "Technology."

2. Type in the year you would like to go back to in the "Start Date" field. 

3. Type in the most recent year you want the search to stop at in the "End Date" field.

4. Hit the search button and review your results below. 

5. You can now save articles to your save search or "View Article" to go directly to the article link.

6. Within your save search you can "Delete" the articles you no longer want to store on the site.

Below are instructions on how to run this app on your local machine:

Install dependencies
In your CLI, enter mongod
In a new CLI window, go to root of directory and enter node server.js
In a third CLI window, go to root and enter yarn start. This will start the webpack dev server.
Your browser should automatically open a new tab containing the app.

Dependencies
You will need to yarn install the following node modules:

express
mongoose
body-parser
bluebird
axios
react
react-dom
react-router-dom
react-scripts

Enjoy!
