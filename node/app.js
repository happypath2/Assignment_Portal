var path = require('path');
var express = require('express');
var slashes = require('connect-slashes');
var cors = require('cors');
var Portal = require('./portal');
import graphqlHTTP from "express-graphql";
const bodyParser = require('body-parser'); //NPM require
var STATIC_DIR = path.join(__dirname, '../client/build');

module.exports = function createApp(options) {
    var user = new Portal(path.join(__dirname, '../', 'graphql/data'));

    var app = express();
 
    app.use(express.static(STATIC_DIR));
    app.use(slashes(false));
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());
    app.use(cors());

    app.get('/users', function(req, res) {
        let searchterm=req.query && req.query.search ? req.query.search : '';
        if(searchterm){

 var data = user.getUser();
 var data1 = data.filter(function(res) {
     let s=(res.title).toLowerCase();
    if (s.indexOf(searchterm) !== -1) {
    return true ;
    }
  });
        res.json(data1);
        }
        else{
 var data = user.getUser();
        res.json(data);
        }
       
    });
   
   
   

    app.post('/adduser', function(req, res) {
        var data = req.body;


        var username = data.username
        var password = data.password ? data.password  : ''
        var email = data.email ? data.email : ''
        var firstname = data.firstname ? data.firstname : ''
        var lastname = data.lastname ? data.lastname : ''
        var gender = data.gender ? data.gender : ''
        var country = data.country ? data.country : 'india'
        var data = user.getUser();
        user.addUser(data.length, username, password,email,firstname,lastname,gender,country, function(err, id) {
            console.log("succe")
          return true;
        });
    });

   

   
   

    return app;
};