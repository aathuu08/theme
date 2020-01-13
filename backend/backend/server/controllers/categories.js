var mongodb = require('mongodb')
var ObjectID = mongodb.ObjectID

const repository = require('./repository')
module.exports.getAllCategories = (req, res) => {
    repository.getAllCategories(req, res)
}
