module.exports=function(app,dirname,MongoClient,dbUrl,urlencodedParse){
	require("./jq")(app,dirname);
	require("./login")(app,dirname);
	require("./isLogin")(app,MongoClient,dbUrl,urlencodedParse);
	require("./reg")(app,dirname);
	require("./regPost")(app,MongoClient,dbUrl,urlencodedParse);
}
