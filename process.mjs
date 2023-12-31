import process, { exitCode } from "process";

process.addListener("exit", (exitCode) => {
  console.info(`Data exit with code ${exitCode}`);
});

console.info(process.version);
console.table(process.argv);
console.table(process.report);
