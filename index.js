const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const route = require("./route");
const cors = require('cors');
const { json } = require('body-parser');
mongoose.connect("mongodb+srv://user:user@cluster0.gans7.mongodb.net/Book?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true }).then(
    () => {
        const app = express();
        app.use("/api", route);
        app.use(cors());
        app.use(bodyParser.urlencoded({ extended: true }));
        app.use(express.json());
        app.listen(process.env.PORT || 3000, () => {
            console.log("Server Started on 3000 !!");
        });
    }
);