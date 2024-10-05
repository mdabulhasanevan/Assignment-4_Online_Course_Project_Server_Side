const express = require("express");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 5000;

const course = require("./data/courseDetails.json");

app.use(cors());

app.get("/", (req, res) => {
  res.send("Bootcamp The Breaaking News Server is Running");
});

app.listen(port, ()=>{
    console.log(`ssssds ${port}`);
});

app.get("/course", (req, res) => {
    res.send(course);
  });