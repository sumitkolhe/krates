---
order: 100
icon: terminal
label: Development
---

!!!contrast So, you want to help?

Contributions are always welcome. Just create a PR and remember to be nice.
!!!

---

## Local Setup

Clone the repository to a folder of your choice.

```bash
git clone https://github.com/sumitkolhe/krates
```

This would clone the whole repository onto your machine.

## Run locally

The repository contains frontend and backend code as well. You will need to run them separately.

### Backend server

> You need MongoDB to run this application. If you don't already have MongoDB, go to the [official documentation](https://docs.mongodb.com/manual/installation/) and follow the instructions there.

Once you have MongoDB installed, run

```bash
mongo
```

Install the dependencies

```bash #
cd krates
npm install
```

Rename **.example.env** file to **.env** and fill all the required variables.

Start the backend server by running

```bash
npm run dev
```

> This will start the backend server on port `4000`

### Frontend server

Install the dependencies

```bash #
cd krates/dashboard
npm install
```

Start the frontend server by running

```bash
npm run dev
```

> This will start the backend server on port `3000`

## Production Build

To create a production build and serve it -

### Backend build

Create a production ready build

```bash
cd krates
npm run build
```

Serve the build

```bash
npm run start
```

### Frontend build

Create a production ready build

```bash
cd krates/dashboard
npm run build
```

Serve the build

```bash
npm run start
```
