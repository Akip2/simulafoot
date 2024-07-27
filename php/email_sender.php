<?php
if($_SERVER["REQUEST_METHOD"]=="POST"){
    $to=htmlspecialchars($_POST["to"]);
    $subject=htmlspecialchars($_POST["subject"]);
    $content=htmlspecialchars($_POST["content"]);

    $headers="MIME-Version: 1.0\r\n"."Content-Type: text/html; charset=ISO-8859-1\r\n";

    if(mail($to, $subject, $content, $headers)){
        echo 0;
    }
    else{
        echo 1;
    }
}
?>