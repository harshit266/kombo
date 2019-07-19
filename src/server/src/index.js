const express = require('express')
const routes = require('./api/v1')
const http =require('http')
const bodyParser = require('body-parser')
const initializedb = require('./db')
const cors = require("cors");
const nodeMailer = require('nodemailer');

let app = express()
// app.server = http.createServer(app)

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended:true
}))

app.use(cors());

initializedb( cb => {
    app.get('/',(req,res)=>{
        
        res.status(200).send("Welcome to new project")
    }
    )
    
    routes(app);
    app.listen(4000 ,()=>{
        console.log("server running on port "+ 4000)
    })
})