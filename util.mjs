import util from "util";

const name = "Alfin";

const form = {
  firstName: "Alfin",
  lastName: "Nahuway",
};

console.info(`${JSON.stringify(form)}`);

console.log(util.format("Hello %s %s", form.firstName, form.lastName));
console.log(util.format("Hello %j", form));
