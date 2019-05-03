# Expensify app

Expenses CRUD web application. 

Technologies

-  ReactJS using Redux to manage component state
-  Firebase database
-  Webpack as local server (Heroku as remote server)
-  styles are delivered through SASS 
-  test cases provided by Jest test tool.


## Required Tools
    [Node.JS](https://nodejs.org/en/)
    [yarn](https://www.npmjs.com/package/yarn) 

## Installation
Go to the project root folder and run
```
yarn install
```
Or
```
npn install
```

## Usage
To run this project into a local server run
```
yarn run dev-server
```

## Some interesting topics you may find:

- React 

- React router: https://reacttraining.com/react-router/

- Redux

- ES6 object destructing

- Webpack

- SASS

- Jest testing - it gets installed on package.json under script category. (yarn test or yarn test -- --watch to watch for changes)

*This project is part of Udemy React training course provided by Andrew Mead.* 

## Project Structure:

- /public folder: where resources to be served live
  - public/index.html: load all resources that generate the web page content. Contains an empty div "app" tag as entry point.

- /server folder: Express server configuration 

- /src folder: application source code
  - src/app.js: hanlde initial rendering logic based on current user authentication status
  - src/actions: redux actions definition
  - src/components: react components
  - src/firebase: firebase configurations
  - src/playground: JS6, redux and others code samples
  - src/reducers: redux reducers
  - src/routers: react routers definitions
  - src/selectors: expense list selectors
  - src/store: redux store definition
  - src/styles: SASS styles
  - src/tests: Jest test cases

- Other configuration files
  - .env.development : firebase configuration file for DEV database
  - .env.test : firebase configuration file for Test database
  - .babelrc: babel configurations
  - jest.config.json: jest ssettings
  - package.json: node/yarn dependency list
  - webpack.config.js: webpack server configurations