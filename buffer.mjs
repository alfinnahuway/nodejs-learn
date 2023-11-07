const buffer = Buffer.from("Alfin Tommy Nahuway", "utf8");
console.log(buffer.toString());
console.log(buffer.toString("hex"));

const bufferBase64 = Buffer.from("QWxmaW4gVG9tbXkgTmFodXdheQ==", "base64");

const bufferToString = bufferBase64.toString();
console.log(bufferToString);
