const express = require("express");
const path = require("path");
const bcrypt = require("bcrypt");
const { collection, collection2 } = require("./config");

const app = express();

// Convert data into json
app.use(express.json());

app.use(express.urlencoded({ extended: false }));

// Use EJS as the view engine
app.set("view engine", "ejs");

// static file
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("s_login");
});

app.get("/t_login", (req, res) => {
  res.render("t_login");
});

app.get("/s_login", (req, res) => {
  res.render("s_login");
});

// login function for students
app.post("/login", async (req, res) => {
  try {
    const check = await collection.findOne({ username: req.body.username });
    if (!check) {
      res.send("Roll Number is Invalid");
    }
    
    // comparing passwords
    const isPasswordMatch = req.body.password === check.password.toString();
 
    if (isPasswordMatch) {
      res.render("home");
    } else {
      res.send("wrong password");
    }

  } catch {
    res.send("Wrong Details");
  }

});

//login function for teachers
app.post("/login2", async (req, res) => {
  try {
    const check = await collection2.findOne({ username: req.body.username });
    if (!check) {
      res.send("Roll Number is Invalid");
    }
    
    // comparing passwords
    const isPasswordMatch = req.body.password === check.password.toString();
 
    if (isPasswordMatch) {
      res.render("lecturerdash");
    } else {
      res.send("wrong password");
    }

  } catch {
    res.send("Wrong Details");
  }

});


const port = 5500;
app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
})

