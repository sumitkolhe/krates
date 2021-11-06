---
order: 40
icon: rocket
label: API Reference
---

# API Cheatsheet

!!!
All API endpoints use base URL - `https://krat.es/`
!!!

## Read data

| Method | Endpoint                                                           | Description                         |
| ------ | ------------------------------------------------------------------ | ----------------------------------- |
| GET    | [!badge variant="info" text="/(krate_id)"](/)                      | Get all krate data                  |
| GET    | [!badge variant="info" text="/(krate_id)/(collection_id)"](/)      | Get data from a specific collection |
| GET    | [!badge variant="info" text="/(krate_id)/record/(record_id)"](/)   | Get a particular record             |
| GET    | [!badge variant="info" text="/(krate_id)/?query=&skip=&limit="](/) | Filter data by a query or params    |

## Write data

| Method | Endpoint                                                      | Description                |
| ------ | ------------------------------------------------------------- | -------------------------- |
| POST   | [!badge variant="info" text="/(krate_id)"](/)                 | Write data to a krate      |
| POST   | [!badge variant="info" text="/(krate_id)/(collection_id)"](/) | Write data to a collection |

## Update / Modify data

| Method | Endpoint                                                  | Description                        |
| ------ | --------------------------------------------------------- | ---------------------------------- |
| PUT    | [!badge variant="info" text="/(krate_id)/(record_id)"](/) | Update data of a particular record |

## Delete data

| Method | Endpoint                                                  | Description                        |
| ------ | --------------------------------------------------------- | ---------------------------------- |
| DELETE | [!badge variant="info" text="/(krate_id)/(record_id)"](/) | Update data of a particular record |
