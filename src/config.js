const mongoose = require("mongoose");
const connect = mongoose.connect("mongodb+srv://abdulrahman220803:rahman_113@cluster0.futkf2v.mongodb.net/Cluster0",{});

// check connection 
connect.then(() => {
  console.log("Database connnected Successfully");
})
  .catch(() => {
    console.log("Database cannot be connected");
  });

//Schema
const LoginSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  class: {
    type: String,
    required: true,
  },
  // attendance: [
  //   // Define the structure of the attendance array
  //   // Example: { subject: "Math", totalClasses: 20, attendedClasses: 15, dayWise: [...] }
  // ]
});

const TeacherLoginSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  password: {
    type: Number,
    required: true
  }
});



//Models
const collection = new mongoose.model("Student", LoginSchema);
const collection2 = new mongoose.model("Teacher", TeacherLoginSchema);


// Uncomment the below function to check the userdata arrays
// collection.find({})
//   .then(data => {
//     console.log(data);
//   })
//   .catch(error => {
//     console.error("Error during find:", error);
//   });



module.exports = {
  collection,
  collection2
};