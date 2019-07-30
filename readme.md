# Cars Showcase web app

This project is still under development:
- 1st Iteration: enable CRUD features using the tools detailed below.
- 2nd Iteration (in progress): integrate with [MELI](https://github.com/mercadolibre/MercadoLibreNode) third party services to retrieve vehicle data.

Technologies

-  ReactJS + Redux to manage component state
-  Firebase database
-  Webpack as local development server (Heroku as production server)
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
Execute Test Cases
```
yarn run test
```
Debug Test Cases
```
yarn run test-debug
```


## Some interesting topics you may find:

- React 

- React router: https://reacttraining.com/react-router/

- Redux

- ES6 object destructing

- Webpack

- SASS

- Jest testing - it gets installed on package.json under script category. (yarn test or yarn test -- --watch to watch for changes)

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
  - src/selectors: vehicle list selectors
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
