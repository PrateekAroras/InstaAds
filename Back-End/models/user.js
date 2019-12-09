const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

// Define a schema
const Schema = mongoose.Schema;

const userSchema = Schema(
  {
    name: { type: String, required: true },
    username: { type: String, required: true, unique: true },
    picture: String,
    email: { type: String, required: true, unique: true },
    contact: { type: Number },
    description: { type: String },
    address: String,
    password: { type: String, required: true, minlength: 6 },
    // TODO: Add post field and reference it to another schema by id
    post: [{ type: Schema.Types.ObjectId, ref: "Post" }],
    isAdmin: { type: Boolean, default: false }
  },
  { timestamps: true }
);

// Hash the password
userSchema.pre("save", function(next) {
  this.password = bcrypt.hashSync(this.password, 10);
  next();
});

/**
 * Verifies the passwords
 * @param {string}
 * @returns {Boolean}
 */

userSchema.methods.verifyPassword = function(password) {
  return bcrypt.compareSync(password, this.password);
};

// Create user instace
const User = mongoose.model("User", userSchema);

// Export the user model
module.exports = User;
