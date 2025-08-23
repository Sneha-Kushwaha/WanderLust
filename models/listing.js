const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listingSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: String,
    image: {
        type: String,
        set: (v) =>
            v === ""
                ? "C:\Users\SNEHA\Downloads\salman-saqib-z6UAWpQAhXs-unsplash.jpg"
                : v,
    },
    price: Number,
    location: String,
    country: String,
});

const Listing = mongoose.model("Listing", listingSchema);
module.export = Listing;