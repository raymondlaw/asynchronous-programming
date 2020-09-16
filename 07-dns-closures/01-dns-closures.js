const dns = require("dns");
const venus = "venus.cs.qc.cuny.edu";
const mars  = "mars.cs.qc.cuny.edu";

function resolve(domain){
    dns.resolve(domain, after_resolution);
    function after_resolution (err, records){
        if(err){
            console.error("Failed to resolve", domain);
        }
        else{
            console.log(domain, records);
        }
    }
};

resolve(venus);
resolve(mars);