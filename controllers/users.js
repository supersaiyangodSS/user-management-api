const User = require("../models/Schema");

const getUsers = async (req, res) => {
  try {
    const doc = await User.find();
    res.status(200).json(doc);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "internal server error" });
  }
};

const createUser = async (req, res) => {
  const { firstName, lastName, age } = req.body;
  const newUser = new User({
    firstName,
    lastName,
    age,
  });

  try {
    let savedDoc = await newUser.save();
    res
      .status(201)
      .json({ message: `user ${savedDoc.firstName} has been created` });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "internal server error" });
  }
};

const getUser = async (req, res) => {
  const { id } = req.params;
  try {
    const findUser = await User.findById(id);
    res.send(findUser);
  } catch (err) {
    res.status(500).json({ message: "internal server error" });
    console.log(err);
  }
};

const deleteUser = async (req, res) => {
  const { id } = req.params;
  try {
    const deleteUser = await User.deleteOne({ _id: id });
    console.log(deleteUser);
    res.send(deleteUser);
  } catch (err) {
    res.status(500).json({ message: "internal server error" });
    console.log(err);
  }
};

const updateUser = async (req, res) => {
  const { id } = req.params;
  const { firstName, lastName, age } = req.body;
  try {
    const updatedUser = await User.findByIdAndUpdate(
      id,
      { firstName, lastName, age },
      { new: true }
    );
    res
      .status(200)
      .json({
        message: `user ${updatedUser.firstName} ${updatedUser.lastName} has been updated.`,
      });
  } catch (err) {
    res.status(500).json({ message: "internal server error" });
    console.log(err);
  }
};

module.exports = { getUsers, createUser, getUser, deleteUser, updateUser };
