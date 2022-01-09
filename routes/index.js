/*var express = require('express');
var router = express.Router();

/* GET home page. */
/*router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});*/

module.exports = router;

let express = require("express");
let app = express();
let path = require("path"); //required when i want to include html page
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/public")); //this is how I am accessing static resource e.g. CSS stylesheet
const router = express.Router();

router.use(function (req, res, next) {
  let today = new Date().getDay();
  if (today === 0 || today === 6) return "we arre closed for the week";
  next();
});

app.get("/", (req, res) => {
  console.log(__dirname);
  res.sendFile(path.join(__dirname, "index.html"));
});
app.get("/contact", (req, res) => {
  console.log(req);
  res.sendFile(path.join(__dirname, "contact.html"));
});

app.get("/about", (req, res) => {
  console.log(req);
  res.sendFile(path.join(__dirname, "about.html"));
});
app.listen(3000, () => {
  console.log("started running");
});
