//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming

import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;
var UserPassword = "";
const myPassword="ILoveCoding";

app.use(bodyParser.urlencoded({ extended: true }));

function customMiddleware(req, res, next) {
//   console.log(req.body);
  UserPassword = req.body["password"];
  console.log(UserPassword);
  next();
}

app.use(customMiddleware);

app.get("/", (req, res) => {
  // console.log(req.body);
  console.log(__dirname);
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/check", (req, res) => {
    if(UserPassword===myPassword){
        console.log("Correct Password!!");
        res.sendFile(__dirname + "/public/secret.html");
    }
    else{
        console.log("Incorrect Password!!");
        res.sendFile(__dirname + "/public/index.html");
    }
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

