# Fullstack CI/CD final exercise

The final boss of the UniHel-course CSM14112: exercises 21-22.

The application is extracted from [here](https://github.com/tikibeni/fullstack/tree/master/osa6/redux-anecdotes).

This version pushes the anecdote-app into Heroku and utilizes CI/CD.

Other pt11 exercises [here](https://github.com/tikibeni/fullstack-part11).

## Install

```shell
~$ git clone git@github.com:tikibeni/fullstack-part11-anecdotes.git
~$ cd fullstack-part11-anecdotes
~/fullstack-part11-anecdotes$ npm install
```

## Local startup

1. Start the server (will be running at http://localhost:3001):
```shell
~/fullstack-part11-anecdotes$ npm run server
```

2. Start the client:
```shell
~/fullstack-part11-anecdotes$ npm run start
```

3. Open via browser: http://localhost:3000/

Alternatively you can build the project and run the production version:

```shell
~/fullstack-part11-anecdotes$ npm run build
~/fullstack-part11-anecdotes$ npm run start-prod
```

This will both start the server and frontend.
