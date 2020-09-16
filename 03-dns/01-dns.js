const dns = require("dns");
const domain = "venus.cs.qc.cuny.edu";
dns.resolve(domain, after_resolution);
function after_resolution(err, records){
    if(err){
        console.error("Failed to resolve", domain);
    }
    else{
        console.log(domain, records);
    }
}