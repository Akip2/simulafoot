let headerStatus=0;
let footerStatus=0;

document.addEventListener("DOMContentLoaded", (event) => {
    fetch('header.html').then(response => response.text())
    .then(data => {
        document.body.querySelector("#header").innerHTML=data;
        headerStatus=1;
    })
    .catch(error => {
        headerStatus=2;
        console.error('Erreur de chargement du header:', error);
    });

    fetch('footer.html').then(response => response.text())
    .then(data => {
        document.body.querySelector("#footer").innerHTML=data;
        footerStatus=1;
    })
    .catch(error => {
        footerStatus=2;
        console.error('Erreur de chargement du footer:', error);
    });
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

function markFooterPage(id){
    setTimeout(function(){
        if(footerStatus==1){
            let pageLink=document.body.querySelector("#"+id);
            pageLink.classList.add("current_page");
        }
        else if(footerStatus==0){
            markFooterPage(id);
        }
    }, 150);
}