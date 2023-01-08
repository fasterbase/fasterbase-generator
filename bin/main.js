#! /usr/bin/env node
const fs = require("fs")

function run(){
  if(fs.existsSync("src"))
    throw new Error("src folder is already exist. Please remove it before start");

  fs.mkdirSync("src");
  fs.copyFileSync("./template/main.js","src/main.js")

}

run()

console.log("salam")