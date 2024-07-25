const express = require("express");
const bodyParser = require('body-parser')
const serverConfig = require("./config/serverConfig");
const { connect } = require("mongoose");
const connectDb = require("./config/dbConfig")


const app = express();

app.use(bodyParser.json());
app.use(bodyParser.text());



app.post('/ping', (req,res)=>{
   console.log(req.body);
return res.json({message:"pong"})
});




app.listen(serverConfig.PORT, async()=>{
  await connectDb();
   console.log(`server started at port ${serverConfig.PORT}`);
});