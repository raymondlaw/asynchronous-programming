/* Preserving Order by Reserving Space */

const dns = require("dns");
const domains = ["venus.cs.qc.cuny.edu", "mars.cs.qc.cuny.edu", "cs.qc.cuny.edu", "qc.cuny.edu", "cuny.edu"];
const ip_addresses = Array(domains.length);

let count = 0;
for(let i = 0; i < domains.length; i++){
    resolve(domains[i], i);
}
function resolve(domain, index){
    dns.resolve(domain, after_resolution);
    function after_resolution(err, records){
        ip_addresses[index] = records;
        count++;
        console.log(ip_addresses);
        if(count === domains.length){
            next_task(ip_addresses.flat().join("\r\n"));
        }
    }
}
function next_task(str){
    console.log(str);
}
