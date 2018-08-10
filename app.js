var express = require("express");
var bodyParser = require('body-parser');

//连接数据库
var mongodb = require("mongodb");
var MongoClient=mongodb.MongoClient;
var dbUrl="mongodb://localhost:27017";

//创建express实例
var app=express();

//接收post请求
var urlencodedParse=bodyParser.urlencoded({extended:false});
app.use(bodyParser.json());

//设置静态资源
app.use(express.static("./public"));
app.use(express.static("./view"));

var router=require("./routes");
//console.log("router:",router);
//console.log("__dirname:",__dirname);
//console.log(__dirname+"/public/js/jquery-1.11.3.js");
router(app,__dirname,MongoClient,dbUrl,urlencodedParse);



app.listen(80,function(){
	console.log("OK 80");
})