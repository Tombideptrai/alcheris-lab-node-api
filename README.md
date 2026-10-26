# alcheris-lab-node-api

A small to-do API for the Alcheris Studio lesson **Build and test a small API**.

It starts almost empty, with tests that fail on purpose. Each failing test is the next thing to build.

## Run it

You need Node.js 20 or newer.

```bash
npm install     # get the dependencies (Express)
npm start       # run the API at http://localhost:3000
npm test        # run every test
```

Run one test file with `node --test test/health.test.js`.

## What you will build

| Route | What it does |
| --- | --- |
| `GET /health` | Says the API is up: `{ "status": "ok" }` |
| `GET /todos` | Lists the to-dos |
| `POST /todos` | Adds a to-do from `{ "title": "..." }`, and refuses one without a title |

## Steps

The lesson moves through tagged points in this repository. If you get stuck, Alcheris Studio can reset your project to the start of any step, and your own work is saved on a branch first.

| Tag | Where the step starts |
| --- | --- |
| `step-1` | Only `GET /` exists; every test fails |
| `step-2` | `GET /health` works |
| `step-3` | `GET /todos` works |
| `step-4` | `POST /todos` works; every test passes |
