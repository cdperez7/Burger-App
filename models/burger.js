//Import the ORM to add functions that will interact with the database
var orm = require('../config/orm.js');

//Create burger object
var burger = {
    all: function(cb){
        orm.all('burgers', function(res){
            cb(res);
        })
    },

    update: function(id,cb){
        orm.update('burgers', id, cb)
    },

    create: function(name,cb){
        orm.create('burgers', name, cb);
    }
}

//Exporting to other file
module.exports = burger;