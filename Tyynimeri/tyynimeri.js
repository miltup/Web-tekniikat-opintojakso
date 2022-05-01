//Milla Tuppurainen

//Changing heading colors
let h3 = document.querySelectorAll("h3");

function changeStyle() {
    for (i = 0; i < h3.length; i++) {
        h3[i].style.color = "#09BC8A";
        h3[i].style.fontWeight = "bold";
    }
}

let pTyynimeri = document.getElementsByClassName("tyynimeri");

for (i = 0 ; i < pTyynimeri.length; i++) {
    pTyynimeri[i].addEventListener('mouseover', changeStyle); 
 }
