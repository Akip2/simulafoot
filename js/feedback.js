import { sendEmail } from "./emailSender.js";

let callback
document.addEventListener("DOMContentLoaded", (event) => {
    let form=document.getElementById('feedback_form');
    callback=document.querySelector("#callback");

    form.addEventListener('submit', submit);
});

async function submit(event){
    event.preventDefault();
    
    let form=event.target;

    let formData = new FormData(form);
    const formObject = Object.fromEntries(formData);
    
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

        let subject=`Avis de ${formObject["Prénom"]} ${formObject["Nom"]}`;

        callback.innerText="Envoi en cours...";

        let res=await sendEmail(formObject, subject);


        if(res.ok){
            callback.innerText ="Merci pour votre avis !";
        }
        else{
            callback.innerText ="Une erreur est survenue lors de l'envoi de l'avis. Veuillez réessayer plus tard.";
        }
    }
    else{
        callback.innerText="Veuillez remplir les champs requis.";
    }
}