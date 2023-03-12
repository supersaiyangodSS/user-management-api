const mongoose = require("mongoose");

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {console.log("mongo connected")})
  .catch((error) => {console.log(error)})

const UserSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  age: Number,
});

const User = mongoose.model("User", UserSchema);
module.exports = User;
