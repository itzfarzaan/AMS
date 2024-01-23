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
      res.redirect(`/home/${req.body.username}`);
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


app.get("/home/:rollNumber", async (req, res) => {
  try {
    // Fetch student data from the database using the rollNumber
    const studentData = await collection.findOne({ username: req.params.rollNumber });

    // Render the student dashboard template with the retrieved data
    res.render("home", {
      studentName: studentData.name,
      studentRollNumber: studentData.username,
      studentClass: studentData.class,
      // attendancePercentage: calculateAttendancePercentage(studentData.attendance),
    });
  } catch (error) {
    console.error("Error fetching student data:", error);
    res.status(500).send("Internal Server Error");
  }
});








const port = 5500;
app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
})

