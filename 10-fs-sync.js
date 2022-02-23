const { readFileSync, writeFileSync } = require("fs");
console.log("start");
const first = readFileSync("./content/first.txt", "utf-8");
const second = readFileSync("./content/second.txt", "utf-8");

writeFileSync(
  "./content/result-sync.txt",
  `Here is the result: ${first}, ${second}`,
  { flag: "a" }
);
console.log("done with this task");
console.log("starting the next one");

//with writefilesync i can create a new file with an structure inside the app (example: first and second txt letters are shown up)
//with readfilesync i can read the files if i put the location of them
