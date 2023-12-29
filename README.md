## About

Reference application demonstrating using DragonflyDB as an API cache in NestJS.

DragonflyDB is deployed as a docker container on [Spheron.network](https://spheron.network/).

You can (create an account with Github, Gitlab, Bitbucket or with Metamask)[https://app.spheron.network/#/signup]

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



## Spheron Build

Build Docker Container for running on a [Spheron Compute Cluster](https://docs.spheron.network/compute/)
```
docker build --platform linux/amd64 -t nestjs-dragonflydb-cache .
```

For the DockerHub Repo:  https://hub.docker.com/repository/docker/chrisaspheron/nestjs-dragonflydb-cache/general

Push to DockerHub
```
docker tag nestjs-dragonflydb-cache:latest chrisaspheron/nestjs-dragonflydb-cache:latest
docker push chrisaspheron/nestjs-dragonflydb-cache:latest
```

Check out the [Spheron docs for more info on deploying a Nest app](https://docs.spheron.network/server-guide/nest/)

Contact chris@spheron.network for questions!