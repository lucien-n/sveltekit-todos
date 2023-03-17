migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("4b16xrqvvd5uabt")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "f6dms0rx",
    "name": "title",
    "type": "text",
    "required": true,
    "unique": false,
    "options": {
      "min": 1,
      "max": 40,
      "pattern": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ud11yvbf",
    "name": "description",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": 0,
      "max": 360,
      "pattern": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "y3ytmsgc",
    "name": "completed",
    "type": "bool",
    "required": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("4b16xrqvvd5uabt")

  // remove
  collection.schema.removeField("f6dms0rx")

  // remove
  collection.schema.removeField("ud11yvbf")

  // remove
  collection.schema.removeField("y3ytmsgc")

  return dao.saveCollection(collection)
})
