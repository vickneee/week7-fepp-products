const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, required: true }, // e.g., Admin, Seller, Buyer
    lastLogin: { type: Date, default: Date.now },
    bio: { type: String, required: true }, 
  },
  { timestamps: true, versionKey: false }

  
);

  // Add virtual field id
  userSchema.set('toJSON', {
    virtuals: true,
    transform: (doc, ret) => {
      ret.id = ret._id;
      return ret;
    }
  });

module.exports = mongoose.model("User", userSchema);