const fsP = require("fs").promises

async function CAT(path) {
  let content;
  try {
      content = await fsP.readfile(path, "utf8");
      console.log(content);
  } catch (err) {
      console.error(`No such file or directory: ${path}: ${err}`);
      process.exit(1);
  } 
   console.log("outside of catcher", content);
}

CAT(process.argv[2]);