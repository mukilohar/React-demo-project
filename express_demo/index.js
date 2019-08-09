const express = require('express')
const app = express()
const bodyParser= require('body-parser')
var mysql  = require('mysql');
var cors = require('cors');
const port = 3001

app.use(cors());
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies
var urlencodedParser = bodyParser.urlencoded({ extended: true })

var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'node_app'
  });
connection.connect(function(err){
if(!err) {
    console.log("Database is connected ... \n\n");  
} else {
    console.log("Error connecting database ... \n\n");  
}
});

app.use(bodyParser.urlencoded({extended: true}))

app.get("/getstores",function(req,res){
    var store_configuration_sql = "SELECT * from Stores";
    connection.query(store_configuration_sql, function(err, rows, fields) {
        if (!err)
            console.log('Date Fetch Successfully');
        else
            console.log('Error while performing Query.');
        res.send(rows);
    });
});


app.post("/createStore",function(req,res){
    var d = req.body;
    var insert_query = "INSERT INTO stores (`store_name`,`address`,`country`, `state`,`city`) VALUES ('"+d.store_name+"','"+d.address+"','"+d.country+"','"+d.state+"','"+d.city+"')";

    connection.query(insert_query, function(err, rows, fields) {
        if (!err)
        console.log('Store Created');
        else
        console.log('Error while performing Query.',err);
        res.send(rows);
        });
    });

app.listen(port, () => console.log(`Example app listening on port ${port}!`))