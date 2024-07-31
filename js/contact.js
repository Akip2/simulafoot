let callback
let statusList;

document.addEventListener("DOMContentLoaded", (event) => {
    let form=document.getElementById('devis_form');
    callback=document.getElementById("callback");
    statusList=document.getElementById("status_list");

    form.addEventListener('submit', submit);
});

function submit(event){
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

    if(formObject.status!=undefined){
        statusList.classList.remove("unfilled_input");
    }
    else{
        statusList.classList.add("unfilled_input");
        allfilled=false;
    }

    if(allfilled){
        form.reset();

        let mailData=new FormData();

        let content=createMailContent(formObject);


        mailData.append("to", "florian.fontanez7@gmail.com");
        mailData.append("subject", `Avis de ${formObject.surname} ${formObject.name}`);
        mailData.append("content", content);

        sendEmail(mailData);
    }
    else{
        callback.innerText="Veuillez remplir les champs requis.";
    }
}

function createMailContent(formObject){
    let res=
    `
        <p><b>Nom et prénom</b> : ${formObject.name_surname}</p>
    `;

    console.log(formObject.address);

    res+=formObject.address.trim() ? `<p><b>Adresse complète</b> : ${formObject.address}</p>` : "";
    res+=formObject.postal_code.trim() ? `<p><b>Code postal</b> : ${formObject.postal_code}</p>` : "";
    res+=formObject.city.trim() ? `<p><b>Ville</b> : ${formObject.city}</p>` : "";

    res+=`<p><b>Email</b> : ${formObject.email}</p>`;

    res+=formObject.phone.trim() ? `<p><b>Téléphone</b> : ${formObject.phone}</p>` : "";
    res+=formObject.company.trim() ? `<p><b>Société</b> : ${formObject.company}</p>` : "";

    res+=`<p><b>Statut</b> : ${formObject.status}</p>`;
    res+=`<p><b>Message</b> : ${formObject.message}</p>`;
    
    console.log(res);

    return res;
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
            callback.innerText ="Une erreur est survenue lors de l'envoi du formulaire. Veuillez réessayer plus tard.";
        }
      })
    .catch(error => {
        console.error('Error:', error);
        callback.innerText ="Une erreur est survenue lors de l'envoi du formulaire. Veuillez réessayer plus tard.";
    });
}