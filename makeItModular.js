var filter = require('./filter');

filter(process.argv[2], process.argv[3], function(err, list){
    if(err) throw err;
    
    else{
        for(var i=0; i< list.length; i++){
            console.log(list[i]);
        }
    }
});

//This problem was really tough for me. 