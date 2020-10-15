<?php
	$name = $_POST['name'];
	$email = $_POST['email'];
	$message = $_POST['msg'];
	
	$email_body = "Name: $name . \n".
				  "Email: $email . \n\n".
				  $message . "\n";
	$to = "arm65@njit.edu";
	$headers .= "Reply-To: $email \r\n";
	
	mail($to, $headers);
	header("Location: mywebsite.html");
?>