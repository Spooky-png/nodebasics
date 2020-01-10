const express = require("express");
const bodyParser = require("body-parser")
const app = express();
var urlencodedParser = bodyParser.urlencoded({ extended: false })
const session = require('express-session');
app.use(express.urlencoded({extended: true}));
app.use(express.static(__dirname + "/static"));
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.listen(8000, () => console.log("listening on port 8000"));
app.use(session({
  secret: 'keyboardkitteh',
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 60000 }
}))
app.get('/', (req, res) => {
    if(!req.session.id && !req.session.counter){
        req.session.id = 1;
        req.session.counter = 1;
    }
    else{
        req.session.counter += 1;
    }
        res.render('counter', {counter: req.session.counter});
    });
app.get('/double', (req, res) => {
    if(!req.session.id && !req.session.counter){
        req.session.id = 1;
        req.session.counter = 1;
    }
    else{
        req.session.counter *= 2;
    }
        res.render('counter', {counter: req.session.counter});
    });
app.get('/reset', (req, res) => {
    if(req.session.id){
        req.session.counter = "Fine you jerk";
    }
        res.render('counter', {counter: req.session.counter});
    });
app.get("/users", (req, res) => {
    var users_array = [
        {name: "butt", email: "michael@codingdojo.com"}, 
        {name: "Jay", email: "jay@codingdojo.com"}, 
        {name: "Brendan", email: "brendan@codingdojo.com"}, 
        {name: "Andrew", email: "andrew@codingdojo.com"}
    ];
    res.render('users', {users: users_array});
})
app.get("/cars", (req, res) => {
    res.render('cars');
})
app.get("/cats", (req, res) => {
    res.render('cats');
})
app.get("/survey", (req, res) => {
    res.render('form');
})
app.get("/results", (req, res) =>{
    res.render('results')
})
app.post("/results", urlencodedParser, (req, res) => {
    res.render('results', {data: req.body})
});
app.get("/Catdude", (req, res) => {
    var cat_array = [
        {name: "Catdude", age: "5", sleeping_spots: ["Under the bed","In a sunbeam"], food: "Pizza"}, 
    ];
    res.render('details', {cats: cat_array});
})
app.get("/Catbro", (req, res) => {
    var cat_array = [
        {name: "Catbro", age: "180", sleeping_spots: ["Coffins","Graveyards"], food: "Darkness"}, 
    ];
    res.render('details', {cats: cat_array});
})
app.get("/Angie", (req, res) => {
    var cat_array = [
        {name: "Angie", age: "26", sleeping_spots: "Smothered by doggo", food: "Cheese and cheese accessories"}, 
    ];
    res.render('details', {cats: cat_array});
})
