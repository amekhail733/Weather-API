async function returnWeather(event){
    const city = document.getElementById("city");
    const temp = document.getElementById("temp");
    event.preventDefault();
    await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city.value}&APPID=22ce88fcc8649289471945705f8220ec&units=imperial`)
    .then(Response => Response.json())
    .then(data=>{
        var temp = data.main.temp;
        document.getElementById('temp').innerHTML = 'The temprature of is: '  + temp;
    })
}