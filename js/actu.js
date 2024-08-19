const p4Template = document.querySelector('#p4-template').innerHTML;


let template = Handlebars.compile(p4Template);
document.querySelector("section.main")
 .innerHTML = template( { prenom : "marcel"
, age: 42} ) ;