const dns = require("dns");
const venus = "venus.cs.qc.cuny.edu";
const mars  = "mars.cs.qc.cuny.edu";

dns.resolve(venus, after_venus);
console.log("Prints Immediately 01");
function after_venus (err, records){
    if(err){
        console.error("Failed to resolve", venus);
    }
    else{
        console.log(venus, records);
    }
}

dns.resolve(mars, after_mars);
console.log("Prints Immediately 02");
function after_mars(err, records){
    if(err){
        console.error("Failed to resolve", mars);
    }
    else{
        console.log(mars, records);
    }
}