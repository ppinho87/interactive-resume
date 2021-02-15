<?php 
$name = $_POST['name'];
$email = $_POST['email'];
$company = $_POST['company'];
$phone = $_POST['phone'];
$message = $_POST['message'];
$formcontent = "From: $name \n Phone: $phone \n Company: $company \n Message: $message";
$recipient = "pinhop07@gmail.com";
$subject = "Contact Form";
$mailheader = "From: $email \r\n";
mail($recipient, $subject, $formcontent, $mailheader) or die("Error!");
echo "Thank You!";
?>