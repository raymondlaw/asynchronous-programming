// CORRECT

const dns = require("dns");
const domain = "venus.cs.qc.cuny.edu";
let data;

dns.resolve(domain, after_resolution);
function after_resolution(err, records){
    if(err){
        console.error("Failed to resolve", domain);
        next_task();
    }
    else{
        data = records;
        next_task(data);
    }
};

function next_task(input){
    console.log(input);                         // [An IP Address]
};
