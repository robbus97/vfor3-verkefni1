<!DOCTYPE html>
<html lang="en" >
  <head>
    <meta charset="UTF-8" />
    <title>How to Get JSON Data from PHP Script using jQuery Ajax by CodexWorld</title>
	<link rel="stylesheet" type="text/css" href="stylesheet.css">
   <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <script src="getUser.js">
    </script>
  </head>
  <body>
    <h2>Fetch User Details via Ajax using jQuery, PHP & MySQL</h2>
    <input type="text" id="user_id" placeholder="id number" />
    <input type="button" id="getUser" value="Get Details"/>
    <div class="user-content" style="display: none;">
        <h4>User Details</h4>
        <p>Name: <span id="userName"></span></p>
        <p>Email: <span id="userEmail"></span></p>
        <p>Phone: <span id="userPhone"></span></p>
        <p>Register Date: <span id="userCreated"></span></p>
    </div>

<div id='debug'>
</div>
  </body>
</html>