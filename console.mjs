import { Console } from "console";
import fs from "fs";

const file = fs.createWriteStream("dump.log");

const log = new Console({
  stdout: file,
  stderr: file,
});

log.info("Hello dear");
