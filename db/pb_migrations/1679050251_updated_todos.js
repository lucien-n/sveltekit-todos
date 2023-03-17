migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("4b16xrqvvd5uabt")

  collection.listRule = "user_id.id = @request.auth.id"
  collection.createRule = "user_id.id = @request.auth.id"
  collection.updateRule = "user_id.id = @request.auth.id"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("4b16xrqvvd5uabt")

  collection.listRule = null
  collection.createRule = null
  collection.updateRule = null

  return dao.saveCollection(collection)
})
