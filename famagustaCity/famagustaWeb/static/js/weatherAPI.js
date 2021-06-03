
function weatherBalloon() {
fetch('https://api.openweathermap.org/data/2.5/weather?lat=35.125&lon=33.95&appid=3ce88419aba95992826a479bf05ee00a')
.then(function(resp) { return resp.json() }) // Convert data to json
.then(function(data) {
    drawWeather(data);;
})
.catch(function() {
  // catch any errors
});
}

window.onload = function() {
weatherBalloon();
}

function drawWeather( d ) {
	var celcius = Math.ceil(parseFloat(d.main.temp)-273.15);
	var celNight = Math.floor(parseFloat(d.main.temp_min)-273.15);
	
	document.getElementById('desc').innerHTML = d.weather[0].description;
	document.getElementById('temp').innerHTML = celcius + '&deg;';
	document.getElementById('tempNight').innerHTML = celNight + '&deg;';
}

var current = new Date();
var readba=current.toLocaleString(); 
document.getElementById('date').innerHTML =readba