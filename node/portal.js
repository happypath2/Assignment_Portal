var path = require('path');
var fs = require('fs');
var async = require('async');


var Portal = function Portal(dataPath) {
    this.dataPath = dataPath;
};

Portal.prototype._loadUser = function() {
    if (this._library) {
        return this._library;
    }

    var pathname = path.join(this.dataPath, "users.json");
    var input = fs.readFileSync(pathname);
    var data = JSON.parse(input);

    this._library = data;

    return this._library;
};

Portal.prototype.getUser = function() {
    this._loadUser();

    return this._library;
}




Portal.prototype.addUser = function(id, username, password,email,firstname,lastname,gender,country, callback) {

    var _this = this;
        var data1 = {
            username:username,
             password:password,
             email:email,
             firstname:firstname,
             lastname:lastname,
             gender:gender,
             country:country
        }

        var pathname = path.join(_this.dataPath, "users.json");
        var pathname = path.join(this.dataPath, "users.json");
        var input = fs.readFileSync(pathname);
        var data = JSON.parse(input);

    //         var json = JSON.parse(d)
            data.push(data1)
        
            fs.writeFileSync(pathname, JSON.stringify(data))
    //     })
return 'success'
   

};

Portal.prototype.deletePlaylist = function(id) {
    var pathname = path.join(this.dataPath, "playlists", id + ".json");

    fs.unlinkSync(pathname);
};

module.exports = Portal;