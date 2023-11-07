import dns from "dns/promises";

const address = await dns.lookup("alfinnahuway.vercel.app");

console.info(address.address);
console.info(address.family);
