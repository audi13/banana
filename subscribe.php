<?php $name = $_POST['name'];
$email = $_POST['email'];
$telp = $_POST['telp'];
$message = $_POST['message'];
$formcontent="Dear Team,\n\n Ini ada permintaan dari : \n \n Nama : $name \n Email : $email \n Telpon  : $telp \n Dan ini pesannya : \n\n $message \n Mohon difollow up ya :) \n\n Regards, \n\n Rokutsan Website.";
$recipient = "sales@rokutsan.com";
$subject = "Inquiry Form";
$mailheader = "From: sales@rokutsan.com \r\n";
mail($recipient, $subject, $formcontent, $mailheader) or die("Error!");
echo header('Location: webdesign.html');
?>
 