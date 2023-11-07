import https from "https";

const endpoint = "https://eo1wks6glbyx6s8.m.pipedream.net";
const request = https.request(
  endpoint,
  {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      accept: "application/json",
    },
  },
  (resposnse) => {
    resposnse.addListener("data", (data) => {
      console.info(`Received data: ${data.toString()}`);
    });
  }
);

const body = JSON.stringify({
  firstName: "Alfin",
  lastName: "Nahuway",
});

request.write(body);
request.end();
