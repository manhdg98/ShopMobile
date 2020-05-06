'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var postspData = new Schema({
    title: String,
    content: String,
    img:{
        type: String
    },
    comment: {
        userId: { type: Schema.Types.ObjectId, ref: 'user' },
        cmt_content: String
    },
    status: Number,
    created_at: {
        type: Date,
        default: Date.now
    }
    ,
    updated_at: {
        type: Date,
        default: Date.now
    },
});

var posts = module.exports = mongoose.model('posts', postspData);

module.exports.getPost = (callback, limit) => {
    posts.find(callback).limit(limit);
}

module.exports.getDisplayPost = (callback, limit) => {
    // console.log(a);
    posts.find({status: 1}, callback).limit(limit);
}

module.exports.getPostById = (id, callback) => {
    posts.findById(id, callback);
}

module.exports.addPost = (post, callback) => {
    posts.create(post, callback);
}

module.exports.updatePost = (id, post, callback) => {
    var query = {
        _id: id
    };
    var update = {
        title: post.title,
        content: post.content,
        status: post.status,
        img: post.img,
        // comment: post.comment,  
    }
    posts.update(query,{$set: update}, callback);
}

module.exports.addComment = (id, comment, callback) => {
    var query = {
        _id: id
    };

    var update = {
        name: comment.name,
        cmt_content: comment.cmt_content
    }
    
    posts.update(query,{$push: update}, callback);
}

module.exports.removePost = (id, callback) => {
    var query = {
        _id: id
    };
    posts.remove(query, callback);
}
