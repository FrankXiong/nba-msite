import mongoose from 'mongoose'

let Schema = mongoose.Schema
let ObjectId = Schema.Types.ObjectId

let ArticleSchema = new mongoose.Schema({
    id: {
        type: Number,
        unique:true
    },
    title: {
        type: String
    },
    from: {
        type: String
    },
    thumb: {
        type: String
    },
    desc: {
        type: String
    },
    comment: {
        type: ObjectId,
        ref: 'Comment'
    },
    meta: {
        createAt: {
            type: Date,
            default: Date.now()
        },
        updateAt: {
            type: Date,
            default: Date.now()
        }
    }
})

ArticleSchema.pre('save',(next)=>{
  let Article = this
  if(this.isNew){
    this.meta.createAt = this.meta.updateAt = Date.now()
  }else{
    this.meta.updateAt = Date.now()
  }
  next()
})

ArticleSchema.statics = {
  findById:function(id,cb){
    return this.findOne({_id:id}).exec(cb)
  },
  fetch:function(cb){
    return this.find({}).sort('meta.updateAt').exec(cb)
  },
  findByPage:function(obj,cb){
    let q = obj.searchValue || {}
    let pageNow = obj.pageNow || 1
    let pageSize = obj.pageSize || 10
    let skipFrom = (pageNow * pageSize) - pageSize
    return this
      .find(q)
      .sort('meta.updateAt')
      .skip(skipFrom)
      .limit(pageSize)
      .exec(cb)
  }
}

export default ArticleSchema 
