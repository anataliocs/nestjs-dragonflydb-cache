## About

Reference application demonstrating using DragonflyDB as an API cache in NestJS.

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

# for redis cache
docker compose up
```
