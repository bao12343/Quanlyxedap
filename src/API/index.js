import mysql from 'mysql2';
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

// var express = require('express');
// var bodyParser = require('body-parser');

// var cors = require("cors");
// var mysql = require("mysql");

var app = express();
app.use(cors());
app.use(bodyParser.json());

// mysql
var con = mysql.createConnection({
    host: "localhost",
    port: "3306",
    database: "Quanlyxedap",
    // user: "host",
    user: "DoAnA",
    password: "123456",
    insecureAuth : true
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!!!");
    var sql_query = "SELECT * FROM User";
    con.query(sql_query, function(err, results) {
        if(err) throw err;
        console.log(results);
    })
});

app.get("/all", function(req, res) {
    var sql_query = "SELECT * FROM User";
    con.query(sql_query, function(err, results) {
        if(err) throw err;
        res.send(results);
    });
})

app.post("/user/sign-up", function (req, res) {
    const { Username, Email, Password, Phone } = req.body;
    var sql = "insert into User(Username, Email, Password, Phone) values('"+Username+"', '"+Email+"','"+Password+"', '"+Phone+"')";
    con.query(sql, function (err, results) {
        if (err) throw err;
        res.send(" them thanh cong");
    });
})

app.get("/all/:id", function(req, res) {
    const {id} = req.params;
    var sql_query = "SELECT * FROM thanhtich WHERE id="+id+"";
    con.query(sql_query, function(err, results) {
        if(err) throw err;
        res.send(results);
    });
})

var server = app.listen(3000, function() {
    var host = server.address().address;
    var port = server.address().port;

    console.log("Server is listening at http://localhost:%s", port);
})