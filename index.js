const express = require('express');

const Address = require('./model/models');

const bodyParser = require('body-parser');

//initialize express app
const app = express();

app.use(bodyParser.urlencoded({extended: true}))

const connectionString = 'mongodb+srv://kismatds08:Kismat109547@cluster0.ltztp.mongodb.net/adress-book?retryWrites=true&w=majority'

const mongoose = require('mongoose');

mongoose.connect(connectionString, {useNewUrlParser: true, useUnifiedTopology: true})
.then(()=>{
    console.log('Connected to DB')
})
.catch((err)=>{
    console.log(err);
});

app.listen(3000, () => {
    console.log('Listening to port 3000');
});

//adding user to address book
app.post('/register', (req,res) => {

    name = req.body.name,
    email = req.body.email,
    phone = req.body.phone,
    place = req.body.place
   
    let newAddress = new Address({
        name : name,
        email: email,
        phone: phone,
        place: place
    });

    newAddress
    .save()
    .then((address) => {
        res.send(address);
    })
    .catch((err) => {
        console.error(err);
    });
});

app.get('/:id', (req,res)=> {
    Address.findById(req.params.id, (err,address)=>{
        res.send(address);
    })
})