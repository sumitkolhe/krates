# API Cheatsheet

!!!
All API endpoints use base URL - [!badge size="l" text="https://krat.es/"]
!!!

## Read data

Get all krate data

| GET | [/(krate_id)s](/) |
| --- | ----------------- |

Get data from a specific collection

| GET | [/(krate_id)/(collection_id)](/) |
| --- | -------------------------------- |

Get a particular record

| GET | [/(krate_id)/record/(record_id)](/) |
| --- | ----------------------------------- |

Filter data by a query or params

| GET | [/(krate_id)/?query=&skip=&limit=](/) |
| --- | ------------------------------------- |

## Write data

| Method | Endpoint                          | Description                |
| ------ | --------------------------------- | -------------------------- |
| POST   | [/(krate_id)"](/)                 | Write data to a krate      |
| POST   | [/(krate_id)/(collection_id)"](/) | Write data to a collection |

## Update / Modify data

| Method | Endpoint                      | Description                        |
| ------ | ----------------------------- | ---------------------------------- |
| PUT    | [/(krate_id)/(record_id)"](/) | Update data of a particular record |

## Delete data

| Method | Endpoint                      | Description                        |
| ------ | ----------------------------- | ---------------------------------- |
| DELETE | [/(krate_id)/(record_id)"](/) | Update data of a particular record |
