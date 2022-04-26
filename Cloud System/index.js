// index.js FOR BOTH INSTANCES

const mysql = require('mysql2');
const express = require('express');
const bodyParser = require('body-parser');

// Connect to a MySQL Database
var connection = mysql.createConnection({
        host : 'localhost',
        user : 'master',
        password : 'masterpassword',
        database : 'mydb'
});

var connection1 = mysql.createConnection({
        host : '35.188.101.99',
        user : 'master',
        password : 'masterpassword',
        database : 'mydb'
});

// Establish Connection
connection.connect();
connection1.connect();

// Initialize Web Application
const app = express();
app.use(bodyParser.json());
// Handle Request to the Base IP/URL
app.get('/greeting', (req, res) => {
        res.json({
                '': 'hello world'
                });
});

// Handle Insert Operations to Database
app.post('/register', (req, res) => {
        console.log('/register');
        let n = req.body.username;
        console.log('n: ' + n);
        // Prevent SQL Injections
        //  n = n.replace(/^[0-9\s]*|[+*\r\n]/g, '');
        // Insert name
       // Insert name
        query = `INSERT INTO Users (username) VALUES ('`+n+`');`;
        console.log('query: ' + query);
        // Run Query
        connection.query(query, (e, r, f) => {
                console.log('result: ' + r);
        });
        connection1.query(query, (e, r, f) => {
                console.log('result1: ' + r);
        });
        res.json({"Message": "Add name successfully" });
});

// Handle Display  Operations to Database
app.get('/list', (req, res) => {
        console.log('/list');
        // Insert name
        query = `SELECT * FROM Users;`;
        console.log('query: ' + query);
        // Run Query
        connection.query(query, (e, r, f) => {
                console.log('Results: ' + r);
                usernames = [];
                for (let idx = 0; idx < r.length; idx++) {
                        usernames[idx] = r[idx].username;
                }
                res.json({
                         "users": usernames 
                       });
        });
});

// Handle Delete Operations to Database
app.post('/clear', (req, res) => {
        // Insert name
        query = `TRUNCATE TABLE Users;`;
        // Run Query
        connection.query(query, (e, r, f) => {
                // console.log(r);
                res.json({
                        'message' : 'All users removed.',
                        });
        });

        connection1.query(query, (e, r, f) => {
                console.log('cleared');
        });
});

// Establish a HTTP Connection
var http = require('http').Server(app);
const PORT = 80;
http.listen(PORT, function() {
        console.log('Listening');
});

	
