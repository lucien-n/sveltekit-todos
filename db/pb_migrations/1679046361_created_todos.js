migrate((db) => {
  const collection = new Collection({
    "id": "4b16xrqvvd5uabt",
    "created": "2023-03-17 09:46:01.311Z",
    "updated": "2023-03-17 09:46:01.311Z",
    "name": "todos",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "z680yslv",
        "name": "user_id",
        "type": "relation",
        "required": false,
        "unique": false,
        "options": {
          "collectionId": "_pb_users_auth_",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": [
            "id"
          ]
        }
      }
    ],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("4b16xrqvvd5uabt");

  return dao.deleteCollection(collection);
})
