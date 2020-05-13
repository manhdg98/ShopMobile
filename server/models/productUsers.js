'use strict';

var mongoose = require('mongoose');
var async = require('async');
var pro = require("./products");
var Schema = mongoose.Schema;

var Orders = new Schema({
    idUser: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    username: {
        type:String
    },
    phone: {
        type:String
    },
    address: {
        type:String
    },
    status: {
        type: Number,
        default: 1
    },
    product: [],
    create_date: {
        type: Date,
        default: Date.now
    }
});

var productUsers = module.exports = mongoose.model('Orders', Orders);

module.exports.getProduct = (callback, limit) => {
    productUsers.find(callback).limit(limit);
}

// module.exports.findByMonth = (m, err, result) => {
//     productUsers
//       console.log(callback);
// }

// module.exports.getProductById = (id, callback) => {
//
//     productUsers.find({'idUser': ObjectId("id")}, callback);
// }

function updateProducts(products, qty, qty_bought, cb) {
    var count = 0;
    console.log(qty_bought);
    products.forEach((item, index) => {
        pro.update(
            {_id: item._id}, 
            {$set: {
                qty: qty[index] - item.amount,
                qty_bought: Number(qty_bought[index])  + Number(item.amount)
            }},
            (err, prod)=>{
            if(err){
                console.log(err)
                return cb(item);
            } 
            else {
                count ++;
                if (count === products.length) cb();
            }
        })
    })
}

module.exports.addProduct = (productUser, callback) => {
    var count = 0;
    var qty = [];
    var qty_bought = [];
    productUser.product.forEach(item => {
        pro.findById(item._id, (err, prod)=>{
            console.log(item.amount, prod.qty);
            if (err) {
                console.log('find error')
                callback(item);
            } else if (prod.qty < item.amount){
                console.log('not enough');
                callback(item);
            } else {
                count ++;
                qty.push(prod.qty);
                qty_bought.push(prod.qty_bought);
                if (count === productUser.product.length) {
                    productUsers.create(productUser, (errOrder)=>{
                        if (errOrder) callback('create Order failed');
                        else
                        updateProducts(productUser.product, qty, qty_bought, (errUpdate)=>{
                            if(errUpdate) callback(errUpdate)
                            else callback();
                        })
                    });
                }
            }
        });
    });
    // console.log("start");
    // async.eachSeries(productUser.product, function iteratee(item, cb) {
    //     console.log("aabb");
    //    pro.findById(item._id, (err, prod)=>{
    //     console.log("aabb12121");
    //        if (err) callback(err);
    //        if (prod.qty < item.amount){
    //            callback("k du hang");
    //        }
    //            cb();
           
    //    })
    // }, function done() {
    //     // productUsers.create(productUser, callback);
    // }); 
}

module.exports.updateproductUsers = (id, product, callback) => {
    console.log(product.status.id);
    console.log(id);
    var query = {
        _id: id
    };
    var update = {
        status: product.status.id
    }
    productUsers.updateOne(query,{$set: update}, callback);
}

module.exports.removeProductUser = (id, callback) => {
    var query = {
        _id: id
    };
    productUsers.remove(query, callback);
}
//mongoimport --db shops --collection shop --file data.json --jsonArray
