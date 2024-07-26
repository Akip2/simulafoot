<?php
class Mail{
    private $to;
    private $subject;
    private $content;
    private $headers;

    public function __construct($to, $subj, $cont){
        $this->to=$to;
        $this->subject="[SIMULAFOOT] $subj";
        $this->content=$cont;

        $this->headers="MIME-Version: 1.0\r\n"."Content-Type: text/html; charset=ISO-8859-1\r\n";
    }

    public function send(){
        if(mail($this->to, $this->subject, $this->content, $this->headers)){
            echo 0;
        }
        else{
            echo 1;
        }
    }
}
?>