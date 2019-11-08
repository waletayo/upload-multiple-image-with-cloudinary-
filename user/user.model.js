const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: {
        type: String,
    },
    multiple_image: {
        type: []
    }
});
const user = mongoose.model("user", userSchema, "user");
module.exports = user;
