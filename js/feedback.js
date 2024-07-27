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

        let mailData=new FormData();

        let content= 
        `
            <p><b>Nom</b> : ${formData.name}</p>
            <p><b>Prénom</b> : ${formData.surname}</p>
            <p><b>Email</b> : ${formData.email}</p>
            <p><b>Occuption</b> : ${formData.occupation}</p>
            <p><b>Avis</b> : ${formData.message}</p>
        `;

        mailData.append("to", "florian.fontanez7@gmail.com");
        mailData.append("subject", `Avis de ${formData.surname} ${formData.name}`);
        mailData.append("content", content);

        sendEmail(mailData);
    }
    else{
        callback.innerText="Veuillez remplir les champs requis.";
    }
}

function sendEmail(mailData){
    callback.innerText="Envoi en cours...";

    fetch("php/email_sender.php", {
        method: 'POST',
        body: mailData
    })
    .then(response => response.text())
      .then(data => {
        if(data=="0"){
            callback.innerText ="Merci pour votre avis !";
        }
        else{
            callback.innerText ="Une erreur est survenue lors de l'envoi de l'avis. Veuillez réessayer plus tard.";
        }
      })
    .catch(error => {
        console.error('Error:', error);
        callback.innerText ="Une erreur est survenue lors de l'envoi de l'avis. Veuillez réessayer plus tard.";
    });
}