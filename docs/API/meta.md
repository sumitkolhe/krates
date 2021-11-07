---
order: 2
icon: codescan
---

# Metadata

Metadata is the data about the krate that might be useful if you want to get some insight on how much data the krate contains or when it was updated, etc.

## Getting krate metadata

+++ Request

```bash
curl -X GET 'https://krat.es/meta/demokrate12345abcdef' \

```

+++ Response

```json
{
  "krateSize": 568,
  "totalCollections": 1,
  "totalRecords": 3,
  "createdAt": "2021-11-06T09:56:36.039Z",
  "updatedAt": "2021-11-07T04:03:59.178Z"
}
```

+++

- **krateSize :** Size of all data in a krate **(in Bytes).**
- **totalCollections :** Count of collections in a krate.
- **totalRecords :** Count of records in a krate.
- **createdAt :** Date of the oldest created record.
- **updatedAt :** Date of the most recent record.
