/* Resolving Two Domains Synchronously */

const dns = require("dns");
const venus = "venus.cs.qc.cuny.edu";
const mars  = "mars.cs.qc.cuny.edu";
const ip_addresses = [];

dns.resolve(venus, after_venus);
function after_venus(err, records){
    if(err){
        console.error("Failed to resolve", venus);
    }
    else{
        ip_addresses.push(records);
    }
    dns.resolve(mars, after_mars);
}
function after_mars(err, records){
    if(err){
        console.error("Failed to resolve", mars);
    }
    else{
        ip_addresses.push(records);
    }
    console.log(ip_addresses.join(", "));
}
