const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const bodyparser = require("body-parser");
const config = require("./config");
const cors=require('cors');
const app = express();
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));
app.use(morgan("dev"));
app.use(cors());
//console.log(config.database);
//const url="mongodb+srv://admin:admin@cluster0.hysl0.mongodb.net/<dbname>?retryWrites=true&w=majority";
mongoose.connect(
  config.database,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("success");
    }
  }
);
app.get("/", (req, res, err) => {
  res.json({
    name: "Ajinkya",
  });
});

app.listen(config.port,err=>{
  if(err){
    console.log("error connecting");
  }
  else{
    console.log(config.port+" connected");
  }
})
