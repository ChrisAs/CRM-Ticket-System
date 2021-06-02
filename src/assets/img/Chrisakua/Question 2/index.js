const fs = require("fs");
const chokidar = require("chokidar");
const express = require("express");
const app = express();

//Port On Which Our App is running
const PORT = process.env.PORT || 3000;

/**
 *
 * @param {Absolute Path of the file} path
 * *This Function Reads the file Specified by the path
 */
const readFile = (path) => {
  /**
   * *im getting the file name so that if a
   * *file with different name comes into this folder
   * *we can create the file in the another_folder by same name and type :)
   */
  const fileName = path?.split("\\")[path?.split("\\").length - 1];

  const dataToWrite = fs.readFileSync(path, "utf8").toString(); //the actual data that is in this file

  writeFile(dataToWrite, fileName); //calling our function to create a file in another folder
};

/**
 *
 * @param {String} dataToWrite
 * @param {String} fileName
 * *This function creates a new file(if file by same name doesnot exist) or over-writes the existing file in another_folder
 * *It will write all the data to that file.
 */
const writeFile = (dataToWrite, fileName) => {
  fs.writeFileSync(__dirname + `\\another_folder\\${fileName}`, dataToWrite);
};

/**
 * *fs.watch has so many drawback so im using the
 * *Chokidar which is far more better then fs.watch
 * *In this function im watching the "folder" if new file comes or existing file changes
 * *I simply copy its content to "another_folder"
 */
chokidar.watch("./folder").on("all", (event, path) => {
  try {
    if (event === "add" || event === "change") {
      console.log({ event, path });
      readFile(path);
    }
  } catch (ex) {
    console.log(ex);
  }
});

/**
 * This is our Server :)
 */
app.listen(PORT, () => {
  console.log(`Server Started On Port ${PORT}`);
});
