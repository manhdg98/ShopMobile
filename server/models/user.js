// user model
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var passportLocalMongoose = require('passport-local-mongoose');

var user = new Schema({
    username: {
		type: String,
		required: true
	},
    password: {
	type: String,
    },
    name: {
        type: String,
    },
    phone: {
        type: String,
    },
    address: {
        type: String,
    },
    role: {
        type: String,
        default: 'user'
    },
    img: {
        type: String,
        default: 'uploads/avatars/avata.png'
    }
});

user.plugin(passportLocalMongoose);

var user = module.exports = mongoose.model('user', user);

module.exports.getUser = (callback, limit) => {
	user.find(callback).limit(limit);
}

module.exports.getUserById = (id, callback) => {
    user.findById(id, callback);
}

module.exports.removeUser = (id, callback) => {
    var query = {
        _id: id
    };
    user.remove(query, callback);
}

module.exports.updateUser = (id, userUpdate, callback) => {
    
    // User.findById(id, function(err,found){
    //     if(err){
    //         res.redirect("back")
    //         res.send('User not found with the proper ID')
    //     } else {
    //         if(user.password){
    //             found.authenticate(user.password, function(err,model,passwordError){
    //                 if(passwordError){
    //                     console.log(err)
    //                     res.send('The given password is incorrect!!');
    //                 } else if(model) {
        user.findById(id, function(err,found){
                        var query = {
                            _id: id
                        };
                        if(userUpdate.password != null && userUpdate.password != ""){
                            found.setPassword(userUpdate.password,(err,found) =>{
                                if (err) return next(err);
                                found.save();
                            });
                            // found.save();
                            
                        }
                        var update = {
                            name: userUpdate.name,
                            phone: userUpdate.phone,
                            address: userUpdate.address
                        }

                        user.updateOne(query,{$set: update}, callback);
              
                    });
                    
    //                 }
    //             });
    //         } else {
    //              res.send('Please input your account password!!');
    //         }
    //     }
    // })
}
