export function sendEmail(phpFile, formValues){
    fetch('php/'+phpFile, {
        method: 'POST',
        body: formValues
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
    
    /*
    emailjs.send('service_simulafoot', 'simulafoot_feedback', formValues, 'yB4zkUW-WZvgXz_5M')
    .then((response) => {
        callback.innerText="Merci pour votre avis !";
    }, (err) => {
        callback.innerText="Une erreur est survenue lors de l'envoi de l'avis. Veuillez réessayer plus tard.";

        console.log(err);
    });
    */
}