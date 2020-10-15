<?php
	if (isset($_POST['submit'])){
	$name = $_POST['name'];
	$mailFrom = $_POST['email'];
	$message = $_POST['message'];
	
	$to = "arm65@njit.edu";
	$headers = "From: ". $mailFrom;
	$txt = "Email from " . $name.".\n\n" . $message; 
	
	mail($to, $txt, $headers);
	header("Location: mywebsite.html?mailsend");
{
?>