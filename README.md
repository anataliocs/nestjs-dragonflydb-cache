## About

Reference application demonstrating using DragonflyDB as an API cache in NestJS.

DragonflyDB is deployed as a docker container on [Spheron.network](https://spheron.network/).

## Local Build

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

Build Docker Container:
```
docker build -t nestjs-dragonflydb-cache .
```