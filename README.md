# JobBoard OCTO

[![CircleCI](https://circleci.com/gh/octo-web-front-end-tribe/octo-job-board/tree/dev.svg?style=svg)](https://circleci.com/gh/octo-web-front-end-tribe/octo-job-board/tree/dev)

[![Coverage Status](https://coveralls.io/repos/github/octo-web-front-end-tribe/octo-job-board/badge.svg)](https://coveralls.io/github/octo-web-front-end-tribe/octo-job-board)


## Getting started

```bash
# get project sources
git clone git@github.com:octo-web-front-end-tribe/octo-job-board.git
cd octo-job-board

# install dependencies
npm install

# run tests
npm test

# configure database
npm run configure

# build Vue.js  client for production with minification
npm run build

# start the application
npm start
```

## Visualise Data in Database

#### IntelliJ IDEA (and other JetBrains products)

In project tree, find octo-job-board/server/src/db/data.development.sqlite

```bash
- Right Click 
- As Data Source
- Driver should be `SQLITE`
- OK
- Click on `Download` missing driver files
```

Database is now configure and to access it, click on Database View
(View > Database)

## Running the different environments

You can run the API server independently from the client's development one.

#### Server

```bash
cd server
npm start
```

#### Client

```bash
cd client
npm run dev
```

#### Release to production

The release to production process is as simple as running the command (from any branch):

```bash
npm run release
```
