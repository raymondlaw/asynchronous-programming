const dns = require("dns");
const domains = ["venus.cs.qc.cuny.edu", "mars.cs.qc.cuny.edu", "earth.cs.qc.cuny.edu", "cs.qc.cuny.edu", "qc.cuny.edu", "definitely.not.a.domain", "cuny.edu"];
const ip_addresses = [];
let count = 0;

dns.resolve(domains[count], after_resolved);
function after_resolved(err, records){
    count++;
    ip_addresses.push(records);
    if(count === domains.length){
        console.log(ip_addresses);                      //all domains.length resolved
    }
    else{
        dns.resolve(domains[count], after_resolved);    //more domains to resolve
    }
}