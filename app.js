const express = require("express");
const fs = require("fs");
const path = require('path');
const app = express();
// use body-parser when we want to so post request by express so first install it 
const bodypaeser =require("body-parser") 
// connect with db
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/Ebookstore', {useNewUrlParser: true, useUnifiedTopology: true});
const port = 80;
// define mongoous schema
const contactSchema = new mongoose.Schema({
    Name: String,
    Phone: String,
    Email: String,
    Address: String,
    desc: String
});
//convert to model 
const contact = mongoose.model('contact', contactSchema);

const buyerSchema = new mongoose.Schema({
    Name: String,
    Address: String,
    Phone: String,
    Email: String,
    card_holder_name: String,
    Card_No: String,
    card_holder_name: String
});
//convert to model 
const buyer = mongoose.model('buyer', buyerSchema);

const renterSchema = new mongoose.Schema({
    Name: String,
    Address: String,
    Phone: String,
    Email: String
});
//convert to model 
const renter = mongoose.model('renter', renterSchema);

// EXPRESS RELATED STUFF
app.use('/static',express.static('static'))
app.use(express.urlencoded())

// PUG SPECIFIC STUFF
app.set('viwe engine','pug')
app.set('viwes',path.join(__dirname,'views'))

// Database Related code
app.post('/contact',(req,res)=>{
    var myData = new contact(req.body);
    myData.save().then(()=>{
        res.send("Our Team will Contact You Very Soon!")
    }).catch(()=>{
        res.status(400).send("error under development")
    });
})

app.post('/buyorder',(req,res)=>{
    var myData = new buyer(req.body);
    myData.save().then(()=>{
        res.send("Your Book Is Delivered In 2 Days")
    }).catch(()=>{
        res.status(400).send("error under development")
    });
})
app.post('/rentorder',(req,res)=>{
    var myData = new renter(req.body);
    myData.save().then(()=>{
        res.send("Your Book Is Delivered In 2 Days")
    }).catch(()=>{
        res.status(400).send("error under development")
    });
})

// ENDPOINT for pages
app.get('/home',(req,res)=>{
    const include = {}
    res.status(200).render('home.pug',include)
})
app.get('/about',(req,res)=>{
    const include = {}
    res.status(200).render('about.pug',include)
})
app.get('/services',(req,res)=>{
    const include = {}
    res.status(200).render('services.pug',include)
})
app.get('/contact',(req,res)=>{
    const include = {}
    res.status(200).render('contact.pug',include)
})
app.get('/myaccount',(req,res)=>{
    const include = {}
    res.status(200).render('myaccount.pug',include)
})
app.get('/myorder',(req,res)=>{
    const include = {}
    res.status(200).render('myorder.pug',include)
})
app.get('/bookonrent',(req,res)=>{
    const include = {}
    res.status(200).render('bookonrent.pug',include)
})
app.get('/mycart',(req,res)=>{
    const include = {}
    res.status(200).render('mycart.pug',include)
})
app.get('/help',(req,res)=>{
    const include = {}
    res.status(200).render('help.pug',include)
})
app.get('/buyabook',(req,res)=>{
    const include = {}
    res.status(200).render('bookonrent.pug',include)
})
app.get('/read',(req,res)=>{
    const include = {}
    res.status(200).render('read.pug',include)
})
app.post('/myaccount',(req,res)=>{
    const include = {}
    res.status(200).render('home.pug',include)
})
app.post('/bookonrent',(req,res)=>{
    const include = {}
    res.status(200).render('buyorder.pug',include)
})
app.post('/bookonrentrent',(req,res)=>{
    const include = {}
    res.status(200).render('rentorder.pug',include)
})
    
// Endoints for book
app.get('/book1', function(req, res) {
    res.sendFile(path.join(__dirname, '/books/book1.html'));
  });
app.get('/book2', function(req, res) {
    res.sendFile(path.join(__dirname, '/books/book2.html'));
  });
app.get('/book3', function(req, res) {
    res.sendFile(path.join(__dirname, '/books/book3.html'));
  });  
app.get('/book4', function(req, res) {
    res.sendFile(path.join(__dirname, '/books/book4.html'));
  });
app.get('/book5', function(req, res) {
    res.sendFile(path.join(__dirname, '/books/book5.html'));
  });  
app.get('/book6', function(req, res) {
    res.sendFile(path.join(__dirname, '/books/book6.html'));
  });
app.get('/book7', function(req, res) {
    res.sendFile(path.join(__dirname, '/books/book7.html'));
  });
app.get('/book8', function(req, res) {
    res.sendFile(path.join(__dirname, '/books/book8.html'));
  });
app.get('/book9', function(req, res) {
    res.sendFile(path.join(__dirname, '/books/book9.html'));
  });
app.get('/book10', function(req, res) {
    res.sendFile(path.join(__dirname, '/books/book10.html'));
  });
app.get('/book11', function(req, res) {
    res.sendFile(path.join(__dirname, '/books/book11.html'));
  });
  app.get('/book12', function(req, res) {
    res.sendFile(path.join(__dirname, '/books/book12.html'));
  });
// START SERVER
app.listen(port,()=>{
    console.log(`this app is runing successfully on ${port}`)
})    