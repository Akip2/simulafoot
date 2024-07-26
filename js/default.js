let headerStatus=0;

document.addEventListener("DOMContentLoaded", (event) => {
    fetch('header.html').then(response => response.text())
    .then(data => {
        document.body.innerHTML=data+document.body.innerHTML;
        headerStatus=1;
    })
    .catch(error => {
        headerStatus=2;
        console.error('Erreur de chargement du header:', error)
    });

    fetch('footer.html').then(response => response.text())
    .then(data => {
        document.body.innerHTML+=data;
    })
    .catch(error => console.error('Erreur de chargement du footer:', error));
});

function markCurrentPage(id){
    setTimeout(function(){
        if(headerStatus==1){
            let pageLink=document.body.querySelector("#"+id);
            pageLink.classList.add("current_page");
        }
        else if(headerStatus==0){
            markCurrentPage(id);
        }
    }, 150);
}