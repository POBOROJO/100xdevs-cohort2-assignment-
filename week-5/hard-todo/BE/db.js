const mongoose = require("mongoose");

const CardSchema = new mongoose.Schema({
    name: String,
    description: String,
    interests: [String],
    socials:[{
        name: String,
        link: String
    }]
});

const Card = mongoose.model("Card", CardSchema);

module.exports = {
    Card
};