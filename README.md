# nodejs_boilerplate_rest_api

đ This is all you need as a NodeJS rest API simple and secure boilerplate

## âšī¸ Informations

This api include:

- đ Loggers (winston)
- đ MongoDB database
- đĒ PROD and DEV environment
- đĄ High level of protection (HTTP headers, anti-dos, ip filter, protected routes)
- đ Express routing
- â¨ Structured api
Basic register/login route are implemented to show how to use the api.

## đ Requirements

- NodeJS installed
- MongoDB database running on your machine
    - You can install it <a href="https://www.mongodb.com/docs/manual/administration/install-community/">here</a>
    - Or run it thanks to my docker compose with command: 
    ```console
    docker-compose build; docker-compose up -d
    ```

## đ  Installation

```console
$ git clone git@github.com:nexus9111/nodejs_boilerplate_rest_api.git
$ cd nodejs_boilerplate_rest_api
$ chmod u+x easy-install.sh
$ ./easy-install.sh
```

if `easy-install.sh` does not work:

```console
$ cp .env.example .env.development
$ cp .env.example .env.production
$ npm i
```

## đ Run

Basic run:

```console
# Run with dev env:
$ npm start

# Run with autoreload dev env:
$ npm run dev

# Run with prod env:
$ npm run prod
```

## âī¸ License:

- Author: Joss C
- Last update: 05/02/2022