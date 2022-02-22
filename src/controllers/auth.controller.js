const User = require("../model/user.model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (user && (await bcrypt.compare(password, user.password))) {
      const token = jwt.sign(
        {
          user_id: user._id,
          email,
        },
        process.env.TOKEN_KEY,
        { expiresIn: "2h" }
      );
      user.token = token;
      res.status(200).json(user);
    } else {
      res.status(400).send("Invalid credentials");
    }
  } catch (err) {
    console.log(err);
  }
};
const register = async (req, res) => {
  try {
    console.log(req.body);
    const { firstName, lastName, email, password } = req.body;
    console.log(firstName);
    const isUserFound = await User.findOne({ email });

    if (isUserFound) {
      return res.status(409).send("user aexists");
    }
    encPass = await bcrypt.hash(password, 10);

    const user = await User.create({
      first_name: firstName,
      last_name: lastName,
      email: email.toLowerCase(),
      password: encPass,
    });

    const token = jwt.sign(
      { user_id: user._id, email },
      process.env.TOKEN_KEY,
      { expiresIn: "2h" }
    );

    user.token = token;

    res.status(201).json(user);
  } catch (error) {
    console.log(error);
    res.send(error);
  }
};

module.exports = {
  login,
  register,
};
