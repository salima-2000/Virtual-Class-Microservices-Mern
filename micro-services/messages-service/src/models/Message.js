const mongoose = require('mongoose');


// juste exemple pour le test
const CourseSchema = new mongoose.Schema(
  {
    title: {
        type: String,
    },
    description: {
      type: String,
      trim: true,
      maxlength: 500,
    },
    picture: {
      type: String,
    },
    video: {
      type: String,
    },
    professors: {
        type: [String]
    },
    followers: {
        type: [String]
    },
    likers: {
      type: [String],
      required: true,
    },
    comments: {
      type: [
        {
          commenterId:String,
          commenterPseudo: String,
          text: String,
          timestamp: Number,
        }
      ],
      required: true,
    },
  },
  {
    timestamps: true,
  }
);


module.exports = Course = mongoose.model('course', CourseSchema);