import { writeFile } from "fs";

writeFile("file-tester.txt", "hello wordl", (err) => {
  if (err) throw err;
  console.log("Success Created file-tester.txt");
});
