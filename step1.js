const fsP = require("fs").promises

async function CAT(path) {
  try {
    let content = await fsP.readfile(path, "utf8");
      console.log(content)
  } catch (err) {
      console.error(`No such file or directory: ${path}`)
  } 
   
}