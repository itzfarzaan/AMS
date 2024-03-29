const mongoose = require("mongoose");
const connect = mongoose.connect("mongodb+srv://abdulrahman220803:rahman_113@cluster0.futkf2v.mongodb.net/Cluster0",{});
// const connect = mongoose.connect("mongodb+srv://farzaan:farzaan@cluster0.3pmzznt.mongodb.net/?retryWrites=true&w=majority",{});


// check connection 
connect.then(() => {
  console.log("Database connected Successfully");
})
  .catch(() => {
    console.log("Database could not be connected");
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