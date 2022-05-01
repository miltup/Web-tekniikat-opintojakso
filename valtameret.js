//Milla Tuppurainen

function gettingName(event) {
    event.preventDefault();
    let userName = document.querySelector("#input").value;
    document.querySelector("#name").innerHTML = "Hei " + userName + "!" + "<br>" + "Tervetuloa tutustumaan maailman valtameriin.";
}

let button = document.querySelector("#inputbutton");
button.addEventListener("click", gettingName);