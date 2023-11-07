import fs, { write } from "fs";

const writer = fs.createWriteStream("node.log");

writer.write("Hello ");
writer.write("Alfin\n");
writer.write("Selamat Datang");

writer.close();

const reader = fs.createReadStream("node.log");

reader.addListener("data", (data) => {
  console.log(data.toString());
});
