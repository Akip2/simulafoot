document.addEventListener("DOMContentLoaded", (event) => {
    let questions=document.querySelectorAll(".faq_question_header");

    questions.forEach((question)=>{
        question.addEventListener("click", questionClick)
    });
});

function questionClick(event){
    event.currentTarget.parentNode.classList.toggle("opened");
}