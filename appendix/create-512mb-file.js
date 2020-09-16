const fs = require("fs");
let largeBuffer = Buffer.from('01', 'utf-8');
for(let i=0; i <= 27; i++) {
    largeBuffer = Buffer.concat([largeBuffer, largeBuffer]);
}
fs.writeFile("input/file02.txt", largeBuffer, ()=>{
    console.log("File Written");
});
console.log("Please Wait File Writing In Progress");