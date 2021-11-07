---
order: 8
icon: book
label: Read
---

# Reading a krate

You can get all the records, a specific record or even filter records as per your need from a krate.

## Reading all records

Get all records inside a krate.

+++ Request

```bash
curl -X GET 'https://krat.es/demokrate12345abcdef'
```

+++ Response

```json
[
  {
    "_id": "61865154a0b2f9c31e61243b",
    "createdAt": "2021-11-06T09:56:36.039Z",
    "updatedAt": "2021-11-06T09:56:36.039Z",
    "name": "Tony Stark",
    "age": 35,
    "aka": "Iron Man"
  },
  {
    "_id": "61866185a0b2f9c31e61244b",
    "createdAt": "2021-11-06T11:05:41.265Z",
    "updatedAt": "2021-11-06T11:05:41.265Z",
    "name": "Bucky Barnes",
    "age": 30,
    "aka": "Winter Soldier"
  },
  {
    "_id": "61866185a0b2f9c31e61244c",
    "createdAt": "2021-11-06T11:05:41.265Z",
    "updatedAt": "2021-11-06T11:05:41.265Z",
    "name": "Steve Rogers",
    "age": 30,
    "aka": "Captain America"
  }
]
```

+++

## Reading records from a collection

Get all records inside a collection named `avengers`

+++ Request

```bash
curl -X GET 'https://krat.es/demokrate12345abcdef/avengers'
```

+++ Response

```json
[
  {
    "_id": "61865154a0b2f9c31e61243b",
    "createdAt": "2021-11-06T09:56:36.039Z",
    "updatedAt": "2021-11-06T09:56:36.039Z",
    "name": "Tony Stark",
    "age": 35,
    "aka": "Iron Man"
  }
]
```

+++

## Reading a specific record

Get a specific record with ID : `61865154a0b2f9c31e61243b`

+++ Request

```bash
curl -X GET 'https://krat.es/demokrate12345abcdef/record/61865154a0b2f9c31e61243b'
```

+++ Response

```json
[
  {
    "_id": "61865154a0b2f9c31e61243b",
    "createdAt": "2021-11-06T09:56:36.039Z",
    "updatedAt": "2021-11-06T09:56:36.039Z",
    "name": "Tony Stark",
    "age": 35,
    "aka": "Iron Man"
  }
]
```

+++

## Filter records

You can filter records inside a krate with the given parameters

| Param | Description                                                               | Default |
| ----- | ------------------------------------------------------------------------- | ------- |
| skip  | Used to skip certain no. of records. Can be used for pagination.          | 0       |
| limit | Used to limit the results to a specific count. Can be used for pagination | 25      |
| query | Query for filtering values. Check out the format below.                   |         |

!!!
Filter params are also applicable on collections. Just include the collection ID as well in the request URL along with the other filters and query.

!!!

### Query

Query is a special param that can be used to add custom filters to the request.
You can pass a filter in a query by passing them in URL param `query` as shown below:

+++ Request

```sh
curl -X GET 'https://krat.es/demokrate12345abcdef?query=name:Tony%20Stark,age:>30'
```

+++ Response

```json
[
  {
    "_id": "61865154a0b2f9c31e61243b",
    "createdAt": "2021-11-06T09:56:36.039Z",
    "updatedAt": "2021-11-06T09:56:36.039Z",
    "name": "Tony Stark",
    "age": 35,
    "aka": "Iron Man"
  }
]
```

+++

The above sample will look for the name `Tony Stark` and age greater than 30 in the given krate. You can filter on `Number`, `String` & `Boolean` values only.

**Different filters for Numeric values.**

| Description                                                          | Sample                               |
| -------------------------------------------------------------------- | ------------------------------------ |
| To filter values greater than or less than a specific value          | `query=age:>10` or `query=age:<10`   |
| To filter values greater (or less) than or equal to a specific value | `query=age:>=10` or `query=age:<=10` |
| To filter values that match a specific value.                        | `query=age:=10`                      |

**Different filters for String values.**

| Description                                                        | Sample                  |
| ------------------------------------------------------------------ | ----------------------- |
| Filter values that start with a specific string                    | `query=name:Tony*`      |
| Filter values that end with a specific string                      | `query=name:*Stark`     |
| Filter values where a specific string appears anywhere in a string | `query=name:*ny*`       |
| Filter values that match a specific string                         | `query=name:Tony Stark` |

You can combine multiple fields by separating them with commas as shown below:

```sh
https://krat.es/demokrate12345abcdef?query=name:Tony%20Stark,age:>30,aka:Iron*&limit=1
```

```sh
https://krat.es/demokrate12345abcdef?query=age:=30&limit=1
```

!!!
Some symbols used in query might get URL encoded when directly used in browsers, so the URL might look different but it would work the same.

!!!
