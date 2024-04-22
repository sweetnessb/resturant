<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $subject = $_POST["subject"];
    $message = $_POST["message"];
    
    
    $to = "olawuyisweetness@gmail.com";
    $subject = "New Contact Form Submission: $subject";
    $headers = "From: $email";
    
    
    $messageBody = "Name: $name\n";
    $messageBody .= "Email: $email\n";
    $messageBody .= "Subject: $subject\n\n";
    $messageBody .= "Message:\n$message";
    
    
    mail($to, $subject, $messageBody, $headers);
    
    
    header("Location: thank-you.html");
    exit;
}
?>
