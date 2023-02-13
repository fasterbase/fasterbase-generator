#! /usr/bin/env node
const fs = require("fs")

function run(){
  const params = process.argv;
  
  if(!params[3])
  throw new Error("API-KEY is not provided");

  if(!params[2])
  throw new Error("Function name is not provided");

  if(fs.existsSync("src"))
    throw new Error("src folder is already exist. Please remove it before start");

  fs.mkdirSync("src");
  fs.copyFileSync(__dirname +"/template/main.js","src/main.js")
  fs.copyFileSync(__dirname +"/template/meta.json","src/meta.json")
  fs.copyFileSync(__dirname +"/template/publish.sh","src/publish.sh")
  const sh = fs.readFileSync("src/publish.sh","utf8");
  
  fs.writeFileSync("src/publish.sh",sh.replace("_NAME",params[2]))
  fs.writeFileSync("src/publish.sh",sh.replace("_TOKEN",params[3]))
}

run()