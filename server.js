const express = require("express")
const bodyParser = require("body-parser")
const https = require("https")
const Customer = require("./models/User");
const mongoose = require("mongoose")
const validator = require("validator")


const app = express()
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static("public"))

app.get('/', (req,res)=>{
    res.sendFile(__dirname + "/index.html")
})
app.get('/register', (req,res)=>{
    res.sendFile(__dirname + "/register.html")
})

app.post('/register', (req,res)=>{
    const country = req.body.country
    const firstname = req.body.fname
    const lastname = req.body.lname
    const email = req.body.email
    const password = req.body.password
    const cpassword = req.body.cpassword
    const address = req.body.address
    const mobile = req.body.mobile
    const city = req.body.city
    const state = req.body.state
    const postalcode = req.body.postalcode
    
    
    const customer = new Customer({
        country : country,
        fname : firstname,
        lname: lastname,
        email: email,
        password: password,
        cpassword: cpassword,
        address: address,
        mobile: mobile,
        city: city,
        state: state,
        postalcode: postalcode
    })
customer 
.save()
.catch((err) => console.log(err));

if (res.statusCode === 200)
        {
            res.sendFile(__dirname + "/index.html")
        }
        else 
        {
            res.sendFile(__dirname + "/404.html")
        }

})

let port = process.env.PORT;
if (port == null || port == "") {
  port = 8000;
}

mongoose.connect("mongodb://localhost:27017/signup", {useNewUrlParser:true, useUnifiedTopology: true}, () => {
    console.log("connect to mongo")
    app.listen(8000)
})