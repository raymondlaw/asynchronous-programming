/* 01 - Deompressing with Inflate */
const fs = require("fs");
const zlib = require("zlib");
const input_file = "./input/content.deflated";

fs.readFile(input_file, {encoding:null}, function after_read(err, data){
    if(err){
        console.log(err);
    }
    zlib.inflate(data, function after_decompress(err, buf){
        if(err){
            console.log(err);
        }
        else{
            console.log(buf.toString("utf8"));
            console.log(`======================================`);
            console.log(`Compressed Size : ${data.length}`);
            console.log(`Decompressed Size : ${buf.length}`);
            console.log(`======================================`);
        }
    });
});