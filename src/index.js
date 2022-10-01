require("dotenv").config();
const cors = require("cors")
const express = require('express')
const route = require('routers')
const mongoose = require('mongoose')
const app = express()
const router = require("./routes")

app.use(express.static("public"));
app.set("json spaces", 2)
app.use(express.json());
app.use(router)

mongoose.connect(process.env.DATABASE_URL)
  .then(() => {
    console.log("DB Connected");
    app.listen({ port: process.env.PORT }, () => {
      console.log(`Server is running on port ${process.env.PORT}`);
    });
  })

  .catch((err) => {
    console.log("There was an error on the DB connection.");
    console.log(err);
  });