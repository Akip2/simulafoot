let lightBox;

document.addEventListener("DOMContentLoaded", (event) => {
    let brochures=document.querySelectorAll(".brochure");

    let len=brochures.length;

    lightBox=document.querySelector("#article_lightbox");
    lightBox.addEventListener("click", lightBoxClick);

    for(let i=0; i<len; i++){
        let index=len-i-1;
        brochures[i].addEventListener("click", ()=>brochureClick(index));
    }

    
});

function brochureClick(index){
    let lightBoxHtml=
    `
    <img src='img/articles/${index}.jpg'>
    `

    lightBox.innerHTML=lightBoxHtml;
    lightBox.style.visibility="visible";
    lightBox.style.opacity=1;

    document.body.style.overflow="hidden";
}

function lightBoxClick(event){
    if(event.target.tagName!="IMG"){
        document.body.style.overflow="auto";
        lightBox.style.visibility="hidden";
        lightBox.style.opacity=0;
    }
}