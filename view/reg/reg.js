$(function(){
	$("#reg").click(function(){
		if ($("#pwd1").val()==$("#pwd2").val()) {
			var obj={
				phone:$("#phone").val(),
				pwd:$("#pwd1").val()
			}
			jqAjax("/regPost",obj);
		} else{
			$("#prompt").html("两次密码输入不一致请确认后点击注册!")
		}
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
				$("#prompt").html("注册成功");
				$("#phone").val("");
				$("#pwd1").val("");
				$("#pwd2").val("");
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