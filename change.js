var top_container = document.getElementById("top_container");
var middle_container = document.getElementById("middle_container");
var toggle_checkbox = document.getElementById('id_checkbox') ;
var doc_body = document.body ;
var sun = document.getElementById('sun');
var moon = document.getElementById('moon');
var hrow = document.getElementsByTagName('hr');



function func(){
    if(toggle_checkbox.checked === true){
        top_container.style.backgroundColor = "#1E314F" ;
        top_container.style.transition = "0.9s" ;
        doc_body.style.backgroundColor = "#E4F9F5" ;
        middle_container.style.color = 'black';
        doc_body.style.transition = "0.9s" ;
        sun.style.transition = "1s";
        moon.style.transition = "1s";
        sun.style.display = 'none';
        moon.style.display = 'block';
        hrow.style.border = 'black';

    }
    else{
        top_container.style.backgroundColor = "#E4F9F5" ;
        top_container.style.transition = "0.9s" ;
        doc_body.style.backgroundColor = "#1E314F" ;
        middle_container.style.color = 'white';
        doc_body.style.transition = "0.9s" ;
        sun.style.transition = "1s";
        moon.style.transition = "1s";
        moon.style.display = 'none';
        sun.style.display = 'block';
    }
}