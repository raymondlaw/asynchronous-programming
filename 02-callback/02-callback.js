const fs = require("fs");
fs.readFile("input/file01.txt", "utf8", (err, data) => {
    if(err){
        console.log(`Error Reading File`);
    }
    else{
        console.log(`Finished Reading File: `, data.length);
    }
});