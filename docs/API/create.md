---
order: 10
icon: file-symlink-file
---

# Create

Creating a krate simply means inserting some data into it as the first record would give existence to a krate.

## Creating a single record

You can pass a single object. This record will live in the root of your krate.

+++ Request

```bash
curl -X POST 'https://krat.es/demokrate12345abcdef' \
 -H 'content-type: application/json' \
 -d '{"name": "Tony Stark", "age": 35, "aka": "Iron Man"}'
```

+++ Response

```json
{
  "_id": "61865154a0b2f9c31e61243b",
  "createdAt": "2021-11-06T09:56:36.039Z",
  "updatedAt": "2021-11-06T09:56:36.039Z",
  "name": "Tony Stark",
  "age": 35,
  "aka": "Iron Man"
}
```

+++

## Creating multiple records

You can pass also pass an array of objects.

+++ Request

```bash
curl -X POST 'https://krat.es/demokrate12345abcdef' \
 -H 'content-type: application/json' \
 -d '[{"name": "Bucky Barnes", "age": 30, "aka": "Winter Soldier"}, {"name": "Steve Rogers", "age": 30, "aka": "Captain America"}]'
```

+++ Response

```json
[
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

## Creating records in a collection

You can also pass in an optional parameter `collection ID` in the URL to group records.

Here the collection ID is `avengers`.

+++ Request

```bash
curl -X POST 'https://krat.es/demokrate12345abcdef/avengers' \
 -H 'content-type: application/json' \
 -d '{"name": "Tony Stark", "age": 35, "aka": "Iron Man"}'
```

+++ Response

```json
{
  "_id": "61865154a0b2f9c31e61243b",
  "createdAt": "2021-11-06T09:56:36.039Z",
  "updatedAt": "2021-11-06T09:56:36.039Z",
  "name": "Tony Stark",
  "age": 35,
  "aka": "Iron Man"
}
```

+++
