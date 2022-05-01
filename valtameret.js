//Milla Tuppurainen

function gettingName(event) {
    event.preventDefault();
    let userName = document.querySelector("#input").value;
    document.querySelector("#name").innerHTML = "Hei " + userName + "!" + "<br>" + "Tervetuloa tutustumaan maailman valtameriin.";
}

let button = document.querySelector("#inputbutton");
button.addEventListener("click", gettingName);


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

// REST, OPENWEATHERMAP API
fetch('https://api.openweathermap.org/data/2.5/weather?q=Mal%C3%A9&units=metric&mode=json&APPID=8f06499030ce8fdd31339a96eca2e104')
.then(response => response.json())
.then(data => {
    let temperature = data.main.temp;
    let feelsLike = data.main.feels_like;
    document.getElementById('temperature').innerHTML = temperature + "°C"; 
    document.getElementById('feelslike').innerHTML = feelsLike + "°C";
});

