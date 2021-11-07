---
order: 100
icon: home
---

# Introduction

![](../assets/banner.png)

[Krates](https://krat.es) is a free, minimalist and open-source HTTP based JSON storage service. It is meant to be easy to use and easy to self-host.

## Why use Krates?

Its hard for developers to have to setup a storage service everytime they want to prototype or test out a new project. Existing solutions either rely on big corporations that crave user data, or require a non-trivial amount of time and expertise to setup a new server for every new project.

We want to help developers focus on the frontend, and we don’t want the challenge of storing user data to get in their way. The path between a new idea and deploying to production should be short!

The backend can often be universal, generic and resuable. Krates believes in allowing anyone to store their data as easily as possible or just self host a storage service solution with a click of a button!

## Use cases

- A generic Web database: JSON store for mobile and Web apps, games, or IoT.

- Quickly prototype frontend applications: don’t lose time with server stuff, the backend for your next single page app is already there.

- Applications as static files: just host your apps on GitHub pages, your storage backend is elsewhere!

- Synchronise application data between different devices with a universal storage layer.

- Data collection: easily collect structured data from surveys, forms, analytics.

## How does krates work?

Krates is an HTTP API in front of a NoSQL database. Interactions with the server are simple HTTP requests rather than complex queries. It is meant to be minimalist and simple.

Krates provides two different ways of storing data -

**Dashboard :** The Krates dashboard is a web based interface for interacting with the APIs in an easy and visual way. It allows you to create a new krate, store, modify and delete data directly from your browser.

**HTTP Requests :** The other way to use krates is via HTTP based network requests. Make HTTP requests via a terminal, browser or even a backend server.
