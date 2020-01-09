const express = require("express");
const app = express();
app.get('/', (request, response) => {
   response.send("Wow this is way better");
});
app.use(express.static(__dirname + "/static"));
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
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
app.get("/cars/new", (req, res) => {
    res.render('form');
})
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

app.listen(8000, () => console.log("listening on port 8000"));
