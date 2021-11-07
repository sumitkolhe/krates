---
order: 3
icon: shield-lock
---

# Protected Krate

Protected Krates are similar to regular krates, the only difference being that protected krates require an API Key for the following operations :

| Method                                           | Description                       |
| ------------------------------------------------ | --------------------------------- |
| [!badge size="l" variant="success" text="POST"]  | Create / insert data into a krate |
| [!badge size="l" variant="success" text="PUT"]   | Update krate data                 |
| [!badge size="l" variant="danger" text="DELETE"] | Delete a krate or its data        |

!!!
Reading records is open and does not need API-KEY.
!!!

## How to create a protected krate?

Protected Krates can be created by passing the `x-api-key` header where the value is a valid **GUID/UUID**.

||| [!badge variant="contrast" size="xl" text="Headers"]

**x-api-key** : `dffa506c-fad7-4a9a-a41d-1ca1a8d83251` (this is a sample API key)

|||

+++ Request

```bash
curl -X POST 'https://krat.es/demokrate12345abcdef/avengers' \
 -H 'content-type: application/json' \
--H 'x-api-key: dffa506c-fad7-4a9a-a41d-1ca1a8d83251' \
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

You create a protected krate by pushing your first record to a new krate with an API-KEY. All the subsequent **write requests** to that krate expect the API-KEY to be passed.

!!!
Write requests include `POST` , `DELETE` , `PUT`
!!!

!!! warning
You cannot change a public krate to protected or vice versa.
!!!

### Properties

||| [!badge variant="contrast" size="xl" text="Krate ID"]

- **Length** : 20 characters
- **Type** : Alpha Numeric
  |||

  ||| [!badge variant="contrast" size="xl" text="Data"]

- **Schema** : Undefined
- **Type** : Any
  |||
