import path from "path";

const file = "Alfin/Project/dertien.txt";

console.info(path.dirname(file));
console.info(path.basename(file));
console.info(path.extname(file));
console.info(path.parse(file));
console.info(process.env.PATH);
