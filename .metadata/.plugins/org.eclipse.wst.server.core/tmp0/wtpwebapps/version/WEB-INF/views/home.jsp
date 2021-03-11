<%@page import="java.util.Stack"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ page contentType = "text/html;charset=utf-8" %>

<html>
<head>
	<title>Home</title>
</head>
<body>
<p>HomePage</p>
<form action="/version/upload" method="POST" enctype="multipart/form-data">

	
	<c:forEach var="item" items="${folder}" varStatus="status">	
		
	     <p>${item}</p>
	     <input value="${item}"  type="file" name="files" multiple><br><br> 
    
	</c:forEach>
	<br>
	<input type="submit" value="업로드">
</form>
</body>
</html>
