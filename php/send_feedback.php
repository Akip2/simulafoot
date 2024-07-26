<?php

require_once "Mail.php";

if($_SERVER["REQUEST_METHOD"]=="POST"){

    $name=htmlspecialchars($_POST["name"]);
    $surname=htmlspecialchars($_POST["surname"]);
    $email=htmlspecialchars($_POST["email"]);
    $occupation=htmlspecialchars($_POST["occupation"]);
    $message=htmlspecialchars($_POST["message"]);


    $content=
    "
        <p><b>Nom</b> : $name</p>
        <p><b>Prénom</b> : $surname</p>
        <p><b>Email</b> : $email</p>
        <p><b>Occuption</b> : $occupation</p>
        <p><b>Avis</b> : $message</p>
    ";

    $mail=new Mail("antoinef252@gmail.com", "Avis de $surname $name", $content);
    $mail->send();
}
?>