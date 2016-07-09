var fs = require('fs');
var path = require('path');

module.exports = function(dirname, ext, callback){
    fs.readdir(dirname, function(error, list){
        if(error) 
            return callback(error);
        var filteredList = [];
        for(var i=0; i<list.length; i++){
            if(path.extname(list[i]).substring(1) == ext){
                filteredList.push(list[i]);
            }
        }
        
        return callback(null, filteredList);
    });
};






