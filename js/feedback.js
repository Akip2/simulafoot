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
    let formValues = Object.fromEntries(formData.entries());
    formValues.name=formValues.name.toUpperCase();

    console.log(formValues);

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
        sendEmail(formValues);
    }
    else{
        callback.innerText="Veuillez remplir les champs requis.";
    }
}

function sendEmail(formValues){
    emailjs.send('service_simulafoot', 'template_simulafoot', formValues, 'yB4zkUW-WZvgXz_5M')
    .then((response) => {
        callback.innerText="Merci pour votre avis !";
    }, (err) => {
        callback.innerText="Une erreur est survenue lors de l'envoi de l'avis. Veuillez réessayer plus tard.";

        console.log(err);
    });
}