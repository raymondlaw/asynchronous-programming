const fs = require("fs");
fs.readFile("input/file01.txt", "utf8", do_after_reading);
function do_after_reading(err, data){
    if(err){
        console.log(`Error Reading File`);
    }
    else{
        console.log(`Finished Reading File: `, data.length);
    }
}