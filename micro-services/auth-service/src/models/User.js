const mongoose = require('mongoose');
const { isEmail } = require('validator');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema(
  {

    first_name: {
      type: String,
      lowercase: true,
    },
    last_name: {
      type: String,
      lowercase: true,
    },

    email: {
      type: String,
      required: true,
      validate: [isEmail],
      lowercase: true,
      unique: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
      max: 1024,
      minlength: 6
    },

    role: {
      type: String,
      required: true
    }



  },
  { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } }); //automatically add while insert or update the object




module.exports = User = mongoose.model("user", userSchema)