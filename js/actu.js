//import Handlebars from "handlebars";

let template;

let jsonData;

let actuContainer;

document.addEventListener("DOMContentLoaded", (event) => {
    actuContainer=document.querySelector("#actu_container");

    const actuPrevTemplate = document.querySelector('#actu-template').innerHTML;
    template = Handlebars.compile(actuPrevTemplate);
});

async function init(){
    await fetch('actu-details.json')
    .then(async (response) => {
        jsonData=await response.json();
    });
}

export async function printAll(){
    await init();

    for(let i=jsonData.length-1; i>=0; i--){
        let actu=jsonData[i];

        actuContainer.innerHTML+=template(actu);
    }
}

export async function printAllExcept(exception){
    await init();

    exception--;

    for(let i=jsonData.length-1; i>=0; i--){
        if(i!=exception){
            let actu=jsonData[i];

            actuContainer.innerHTML+=template(actu);
        }
    }
}