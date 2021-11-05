---
order: 99
icon: checklist
label: Concepts
---

# Concepts

Krates, in its essence is a JSON storage service where clients can store, modify and retrieve data.

In order to establish a sturcture for the API, krates introduces some basic concepts

| Object     | Description                                                                                       | Identifier   |
| ---------- | ------------------------------------------------------------------------------------------------- | ------------ |
| Krate      | A krate can be seen as a namespace: collection names won’t collide if stored in different krates. | KrateID      |
| Collection | A collection of records.                                                                          | CollectionID |
| Record     | The actual stored data.                                                                           | RecordID     |

### Krate

A Krate is an abstract notion used to organize collections and acts as a namespace for data storage.

!!!
A Krate ID should always be a 20 character alpha-numeric string.
!!!

### Collection

A collection is a group of records. Records are manipulated as a list and can be filtered or sorted. A JSON schema can optionally be defined on the collection.

!!!
A Collection ID should always be a 1-16 character alpha-numeric string.
!!!

### Record

A record is the smallest unit of data. By default, there is no schema, and the JSON can contain anything. A record can be individually indetified inside a krate by a unique record ID.

!!!
A Record ID is always a 24 character Hex string.
!!!
