const fs = require("fs");
const dns = require("dns");
const input_file = "input/domains.txt"

fs.readFile(input_file, {encoding:"utf8"}, after_read);
function after_read(err, data){
    if(err){
        console.error(err);
    }
    else{
        let domains = data.split('\r\n');                   //split String on newlines
        for(let i=0 ; i < domains.length; i++){
            resolve(domains[i]);
        }
    }
}
function resolve(domain){
    dns.resolve(domain, after_resolution);
    function after_resolution(err, records){
        if(err){
            console.error("Failed to resolve", domain);
        }
        else{
            console.log(domain, records);
        }
    }
}
