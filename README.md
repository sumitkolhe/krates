<div align="center">
<img src="./logo.svg" width="120"/>
<br>
<br>
<h2>Krates
</h2>
<p>Krates is a free HTTP based JSON storage service. It is meant to be easy to use and easy to self-host. It lets you store, read & modify JSON data over HTTP APIs for FREE.</p>

![GitHub repo size](https://img.shields.io/github/repo-size/sumitkolhe/krates?style=flat-square)
![GitHub](https://img.shields.io/github/license/sumitkolhe/krates?style=flat-square)

</div>

## 🔥Features

:white_circle: **Simple :** Zero configuration required and super easy to use.

:moneybag: **Free :** Krates is completely free to use and always will be.

:rainbow: **Backend Agnostic :** Use krates with a backend server or directly from the browser.

:closed_lock_with_key: **Protected Krates :** Protect you krates from unauthorized access.

:rocket: **Lightning Fast :** Saving your data is just a HTTP request away.

## Documentation

- Dashboard - <https://app.krat.es>

- Check out the docs at - <https://docs.krat.es>

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

> This will start the frontend server on port `3000`

## ✍️ Authors

- [**Sumit Kolhe**](https://github.com/sumitkolhe) - _Author_

## 📜 License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT) - see the [LICENSE](LICENSE) file for details.
