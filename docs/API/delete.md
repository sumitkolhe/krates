---
order: 4
icon: trash
---

# Delete

You can delete a single record, filtered records, a collection or even a complete krate.

## Deleting a single record

For deleting a single record you need to pass in the record ID.
+++ Request

```bash
curl -X DELETE 'https://krat.es/demokrate12345abcdef/record/61865154a0b2f9c31e61243b' \

```

+++ Response

```json
{
  "status": "SUCCESS",
  "message": "Data deleted succesfully"
}
```

+++

## Deleting filtered data

To delete using a filter pass the filters in `query` param. For example of query values see [Query Examples](../API/read.md#query)

+++ Request

```bash
curl -X DELETE 'https://krat.es/demokrate12345abcdef/?query=name:Tony*' \

```

+++ Response

```json
{
  "status": "SUCCESS",
  "message": "Data deleted succesfully"
}
```

+++

## Deleting the whole krate

For deleting the whole krate, pass in the krate ID.

!!! danger
This operation will delete all the data in the krate, it is recommended to always use [protected krates](../concepts/protected-krate.md) for sensitive data to avoid unwanted data manipulation.
!!!
+++ Request

```bash
curl -X DELETE 'https://krat.es/demokrate12345abcdef/' \

```

+++ Response

```json
{
  "status": "SUCCESS",
  "message": "Data deleted succesfully"
}
```

+++
