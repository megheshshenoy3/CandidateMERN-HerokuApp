const express=require('express');
const mongoose=require('mongoose');
const cors=require('cors');
const app=express()
const path = require('path');
require('dotenv').config()
const candidatefetch=require('./routes/candidateaddget');
const candidateupdatedel=require('./routes/candidateupdatedelete')

let port=process.env.PORT || 5000;

mongoose.connect("mongodb://megheshshenoy:candidate@cluster0-shard-00-00.3gcpl.mongodb.net:27017,cluster0-shard-00-01.3gcpl.mongodb.net:27017,cluster0-shard-00-02.3gcpl.mongodb.net:27017/<dbname>?ssl=true&replicaSet=atlas-1xyma7-shard-0&authSource=admin&retryWrites=true&w=majority",{useNewUrlParser:true,useCreateIndex:true,useUnifiedTopology: true});

mongoose.connect('once',()=>{
    console.log("Connected to DB");
})
// app.use(cors());
app.use(express.json());

app.use(express.static(path.join(__dirname, 'reactapp/build')));
app.use('/addfetch',candidatefetch);
app.use('/updatedelete',candidateupdatedel);
app.get('*', (request, response) => {

   response.sendFile(path.join(__dirname, 'reactapp','build','index.html'));
    
});
    
    
app.listen(port,()=>{
    console.log("Port Active");
})

