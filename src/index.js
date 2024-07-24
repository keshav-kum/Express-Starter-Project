const express = require("express");
const serverConfig = require("./config/serverConfig");
const { connect } = require("mongoose");
const connectDb = require("./config/dbConfig")


const app = express();








app.listen(serverConfig.PORT, async()=>{
  await connectDb();
   console.log(`server started at port ${serverConfig.PORT}`);
});