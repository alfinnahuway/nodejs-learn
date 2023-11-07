import os from "os";

console.info(os.platform());
console.info(os.arch());
console.table(os.cpus());
console.table(os.networkInterfaces());
console.info(os.uptime());
