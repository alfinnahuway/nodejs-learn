import { setTimeout } from "timers/promises";

console.log(new Date());
const name = await setTimeout(5000, "Alfin Nahuway");

console.log(new Date());

console.log(name);
