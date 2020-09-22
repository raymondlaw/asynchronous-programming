const fs = require("fs");
let fileContents;
fs.readFile("input/file01.txt","utf8", (err, data) => {
    fileContents = data;
});

// console.log(`Finished Reading File: `, fileContents?.length);     // prints undefined

setTimeout(
    function(){
        console.log(`Finished Reading File: `, fileContents?.length);
    }
, 1000);
