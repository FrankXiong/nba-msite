import mongoose from 'mongoose'
let Schema = mongoose.Schema
let Article = mongoose.model('Article',ArticleSchema)

exports default Article
