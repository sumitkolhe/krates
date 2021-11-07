---
order: 6
icon: pencil
---

# Update

Updating a record can be done directly via using the **record's ID** that you want to update.

!!! warning
Update is not a PATCH update, when updating data for a record it will overwrite the existing data and do a full update.

!!!

!!!
Bulk updates are not supported as of now.
!!!

## Updating a record

For updating a record you need to pass in the record ID along with the JSON data payload.
+++ Request

```bash
curl -X PUT 'https://krat.es/demokrate12345abcdef/61865154a0b2f9c31e61243b' \
 -H 'content-type: application/json' \
 -d '{"name": "Tony Stark", "age": 38, "aka": "Iron Man"}'
```

+++ Response

```json
{
  "_id": "61865154a0b2f9c31e61243b",
  "createdAt": "2021-11-06T09:56:36.039Z",
  "updatedAt": "2021-11-07T04:03:59.178Z",
  "name": "Tony Stark",
  "age": 38,
  "aka": "Iron Man"
}
```

+++
