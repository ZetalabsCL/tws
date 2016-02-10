<?php

 // ++++++++++++++++++++++++++++++++++++
error_reporting(0);


 
$email_it_to_news = "your_own_email_address@some_domain.com";
$error_message_news = "Please complete the form first";

$rnd_news=$_POST['rnd_news'];
$name_news=$_POST['name_news'];
$email_news=$_POST['email_news'];

if(!isset($rnd_news) || !isset($name_news) || !isset($email_news) ) {
	echo $error_message_news;
    die();
}


	$email_from_news = $email_news;
	$email_subject_news = "Newsletter subscriber: '".stripslashes($name_news);
	$email_message_news= "New subscriber was added";
	$email_message_news .="' on ".date("d/m/Y")."\n\n";
	$email_message_news .= $name_news."'s email is: ".stripslashes($email_news);
	$email_message_news .="\n\n";

	// Always set content-type when sending HTML email
$headers_news = "MIME-Version: 1.0" . "\r\n";
$headers_news .= "Content-type:text/html;charset=UTF-8" . "\r\n";

// More headers
$headers_news .= 'From: <'.$email_from_news.'>' . "\r\n";


	mail($email_it_to_news, $email_subject_news, $email_message_news, $headers_news, '-f'.$email_from_news);			

	/*die();*/
?>