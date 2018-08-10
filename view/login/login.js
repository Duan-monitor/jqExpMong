$(function(){
	$("#login").click(function(){
		var obj={
			phone:$("#phone").val(),
			pwd:$("#pwd").val()
		}
		jqAjax("/isLogin",obj)
//		getData ();
	});
})

//添加
function jqAjax (url,obj) {
	$.ajax({
		url:url,
		type:"post",
		async:true,
		data:obj,
		beforeSend:function () {
			console.log("即将执行!");
		},
		success:function (data) {
			if (data.msg==0) {
				$("#prompt").html("登录成功");
				$("#phone").val("");
				$("#pwd").val("");
			}
		},
		error:function (xhr,status,error) {
			console.log("xhr:",xhr);
			console.log("status:",status);
			console.log("error:",error);
		},
		complete:function () {
			console.log("Jquery ajax执行完成!");
		}
	})
}