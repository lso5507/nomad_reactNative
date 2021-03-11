<%@page import="java.util.Stack"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ page contentType = "text/html;charset=utf-8" %>

<html>
<head>
	<title>PackageManager</title>
</head>
<body>
<script src="//code.jquery.com/jquery-1.11.0.min.js"></script>
<script type="text/javascript">

	function next(){
		   var st = $(":input:radio[name=chk_info]:checked").val();
		   if(st==null){
			   alert("한가지를 선택하세요.")
		   }
		   else{
			   var form = document.userinput;
			   form.submit(); //form action
			   
		   }
	}
	function cancle(){	
		alert("cancle!");
		location.href="http://localhost:8080/version/installform";
	}
	

	function ajax(){

	  $.ajax({
	    url: "install",
	    data: "userName=" + userName,
	    type: "POST",
	    success : function(data){
	      alert("성공")
	    },
	    error : function(){
	      alert("에러")		
	    }
	  });
	}

	
</script>
<h1>TrustCertificate V2.5</h1>
<p style="margin-left:50px">Package</p>
<form action="install" method="POST" name="userinput">
	<c:forEach var="item" items="${folder}" varStatus="status">
	     <input type="radio" name="chk_info" id="${item}"  value="${item}"> <p style="display:inline-block;">${item}</p>
	</c:forEach>
	<br>
	<input type="button" value="NEXT" onclick="next()">
	<input type="button" value="CANCLE" onclick="cancle()">
</form>
</body>
</html>
