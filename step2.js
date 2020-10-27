const fsP = require("fs").promises;
const axios = require("axios");

async function cat(path) {
  let content;
  try {
    content = await fsP.readFile(path, "utf8");
    console.log(content);
  } catch (err) {
    console.error(`No such file or directory: ${path}: ${err}`);
    process.exit(1);
  } 
console.log("outside of catcher", content);
}

let location = process.argv[2];
if (location.includes("http")) {
    webCat(location);
} else {
    cat(location);
}

async function webCat(url) {
    console.log(url);
    try {
      let content = await axios({url});

      console.log(content.data.slice(0,20));
  }catch (err) {
      console.error("You done messed up", err);
  }
} 
