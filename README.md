## About

Reference application demonstrating using DragonflyDB as an API cache in NestJS.

DragonflyDB is deployed as a docker container on [Spheron.network](https://spheron.network/).

You can create an account with (Github, Gitlab, Bitbucket or with Web3 providers such as Ethereum)[https://app.spheron.network/#/signup]

Check out the [Spheron docs](https://docs.spheron.network/) for more info!

## Local Build(MacOS)

Install dependencies:

```
npm install
```

Create your own env file:

```
cp .env.example .env
```


Spin up local environment (hot reloading included):

```
# for nest app
npm run start:dev

```

Build Docker Container for running locally on MacOS:
```
docker build --platform linux/arm64 -t nestjs-dragonflydb-cache .
```



## Production Build

Set Default Platform :
```
export DOCKER_DEFAULT_PLATFORM=linux/amd64
```

Check out the [Spheron docs for more info on deploying a Nest app](https://docs.spheron.network/server-guide/nest/)

Contact chris@spheron.network for questions!