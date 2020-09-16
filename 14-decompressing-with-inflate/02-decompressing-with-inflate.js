/* 02 - Deompressing with Inflate */
const fs = require("fs");
const zlib = require("zlib");
const input_file = "./input/content.deflated";

fs.readFile(input_file, {encoding:null}, after_read);
function after_read(err, data){
    if(err){
        console.log(err);
    }
    zlib.inflate(data, (err, buf) => after_decompress(err, buf, data.length) );
}

function after_decompress(err, buf, compressed_size){
    if(err){
        console.log(err);
    }
    else{
        console.log(buf.toString("utf8"));
        console.log(`======================================`);
        console.log(`Compressed Size : ${compressed_size}`);
        console.log(`Decompressed Size : ${buf.length}`);
        console.log(`======================================`);
    }
}