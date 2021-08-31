[![codecov](https://codecov.io/gh/thuan1412/learn-express-sequelize/branch/master/graph/badge.svg?token=88KLVI4UZV)](https://codecov.io/gh/thuan1412/learn-express-sequelize)
# What do this repo do?
This repo is my toy Node.js project that I use my interested technology.

Currently, it has:
- [express](https://expressjs.com/) for web server
- [sequelize](https://sequelize.org/) for database ORM
- [travis-ci](travis-ci.com) for continuos integration
- [passportjs](https://www.passportjs.org/) for authentication (jwt and Google OAuth2.0)

TODOs:
- [ ] Job queue with bull.
- [ ] Add redis for caching
- [ ] Add server benchmark measurement
- [ ] Code coverage with `codecov`


# How to run
- Create `.env` file with the format like the `.env.sample`.
- Run `yarn install` to install required library.
- Run `yarn start` to start the server.
- Run `yarn watch` to start the server in watch mode.
