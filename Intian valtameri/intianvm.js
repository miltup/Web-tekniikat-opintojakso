//Milla Tuppurainen

// REST, OPENWEATHERMAP API
fetch('https://api.openweathermap.org/data/2.5/weather?q=Mal%C3%A9&units=metric&mode=json&APPID=8f06499030ce8fdd31339a96eca2e104')
.then(response => response.json())
.then(data => {
    let temperature = data.main.temp;
    let feelsLike = data.main.feels_like;
    document.getElementById('temperature').innerHTML = temperature + "°C"; 
    document.getElementById('feelslike').innerHTML = feelsLike + "°C";
});
