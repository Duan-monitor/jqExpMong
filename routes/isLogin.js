module.exports=function(app,MongoClient,dbUrl,urlencodedParse){
	app.post("/isLogin",urlencodedParse,function(req,res){
		var obj=req.body;
//		obj.addTime=getTime();
//		obj.addDate=getDate();
		
		MongoClient.connect(dbUrl,{useNewUrlParser: true},function (err,db2) {
			if (err) {
				console.log("连接数据库失败");
			} else{
				console.log("连接数据库成功");
				var dbase = db2.db("lgAndReg");
				dbase.collection("lar").find(obj).toArray(function (err,result) {
					if (err) {
						console.log("数据添加到mongodb失败",err);
					} else{
						res.send({msg:0});
						db2.close();
					}
				})
			}
		})
	});
}