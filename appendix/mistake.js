const fs = require("fs");
let fileContents;
fs.readFile("input/file02.txt","utf8", (err, data) => {
    fileContents = data;
});

setTimeout(
    function(){
        console.log(`Finished Reading File: `, fileContents?.length)
    }
, 1000);