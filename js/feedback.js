import { sendEmail } from "./emailSender.js";

let callback
document.addEventListener("DOMContentLoaded", (event) => {
    let form=document.getElementById('feedback_form');
    callback=document.querySelector("#callback");

    form.addEventListener('submit', submit);
});

function submit(event){
    event.preventDefault();
    
    let form=event.target;

    let formData = new FormData(form);
    
    let requiredFields = document.querySelectorAll('[data-required_mark="required"]');

    let allfilled=true;

    requiredFields.forEach((field)=>{
        if(!field.value.trim()){
            field.classList.add("unfilled_input");
            allfilled=false;
        }
        else{
            field.classList.remove("unfilled_input");
        }
    });

    if(allfilled){
        form.reset();

        callback.innerText="Envoi en cours...";
        sendEmail("send_feedback.php", formData);
    }
    else{
        callback.innerText="Veuillez remplir les champs requis.";
    }
}