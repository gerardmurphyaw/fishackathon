/** gear.js **/

var Item = function (data) {  
    this.data = data;
}

Item.prototype.data = {}

Item.prototype.changeName = function (name) {  
    this.data.name = name;
}

Item.findById = function (id, callback) {  
    db.get('items', {id: id}).run(function (err, data) {
        if (err) return callback(err);
        callback(null, new Item(data));
    });
}

Item.prototype.save( ) {
	
}

module.exports = Item;