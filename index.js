const express = require("express");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 5000;

const course = require("./data/courseDetails.json");

app.use(cors());

app.get("/", (req, res) => {
  res.send("Assisnment 4 Online Course Server is running");
});

app.listen(port, ()=>{
    console.log(`ssssds ${port}`);
});

app.get("/course", (req, res) => {
    res.send(course);
  });

  app.get("/course/:id", (req, res) => {
    id = req.params.id;
    console.log(id);
    const selectedcourse = course.find((n) => n._id === id);
    res.send(selectedcourse);
  }); 