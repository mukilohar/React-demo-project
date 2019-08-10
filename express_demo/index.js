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


function getStores(res, id=null){
    if(id!==null)
        var store_configuration_sql = "SELECT * from Stores where id="+id;
    else
        var store_configuration_sql = "SELECT * from Stores";

    connection.query(store_configuration_sql, function(err, rows, fields) {
        if (!err)
            console.log('Data Fetch Successfully');
        else
            console.log('Error while performing Query.');
            res.send(rows);
    });
}

app.post("/getstores",function(req,res){
    var d = req.body;
    var offset = d.sizePerPage*(d.page-1);
    if(d.searchText!==null){
        var store_query = "SELECT * FROM stores where store_name like '%"+d.searchText+"%' limit "+d.sizePerPage+" offset "+offset;
        var count_query = "SELECT count(*) as totalSize FROM stores where store_name like '%"+d.searchText+"%'";
    }
    else{
        var store_query = "SELECT * FROM stores limit "+d.sizePerPage+" offset "+offset;
        var count_query = "SELECT count(*) as totalSize FROM stores where store_name";
    }
    console.log(store_query);
    connection.query(store_query, function(err, rows, fields) {
        var data = rows;
        if (!err)
            console.log('Data Fetch Successfully');
        else
            console.log('Error while performing Query.');
        connection.query(count_query, function(err, rows, fields) {
            res.send({data, 'count':rows});
        });
           
    });
});

app.post("/getStoreDetails",function(req,res){
    var id = req.body.id;
    console.log(req.body);
    getStores(res, id);
});


app.post("/createStore",function(req,res){
    var d = req.body;
    if(d.id!==null)
        var insert_query = "Update stores set store_name='"+d.store_name+"',address='"+d.address+"',country='"+d.country+"',city='"+d.city+"',state='"+d.state+"' where id="+d.id;
    else
        var insert_query = "INSERT INTO stores (`store_name`,`address`,`country`, `state`,`city`) VALUES ('"+d.store_name+"','"+d.address+"','"+d.country+"','"+d.state+"','"+d.city+"')";

    connection.query(insert_query, function(err, rows, fields) {
        if (!err)
        console.log('Store Created');
        else
        console.log('Error while performing Query.',err);
        res.send(rows);
        });
    });

    app.post("/deleteStores",function(req,res){
        var d = req.body;
        console.log(d.data);
        console.log(d.action);
        var insert_query = "delete from stores where id in ("+d.data+")";
    
        connection.query(insert_query, function(err, rows, fields) {
            if (!err)
            console.log('Store Deleted');
            else
            console.log('Error while performing Query.',err);
            getStores(res);
            });
        });
    
app.listen(port, () => console.log(`Example app listening on port ${port}!`))