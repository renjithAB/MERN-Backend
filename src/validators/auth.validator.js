const Joi = require("joi");

const login = {
  body: Joi.object().keys({
    email: Joi.string().required(),
    password: Joi.string().required().min(6),
  }),
};

const register = Joi.object({
  email: Joi.string().email().lowercase().required(),
  password: Joi.string().min(6).required(),
  firstName: Joi.string(),
  lastname: Joi.string(),
});

module.exports = {
  login,
  register,
};
