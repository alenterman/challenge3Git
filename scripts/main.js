
mapboxgl.accessToken = 'pk.eyJ1IjoiYWxlbnRlcm1hbiIsImEiOiJja241cDV6bWEwNmVmMnBzNGMzM2NuMnp2In0.u5JJTj6LUjAYtEw3EX7bjg';


var map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/dark-v10',
  center: [-80.5768650, 28.5617248],
  zoom: 10,
  pitch: 45
});

map.addControl(new mapboxgl.NavigationControl());

var popup = new mapboxgl.Popup().setHTML('<h3>Space Launch Complex 40</h3>');

var marker = new mapboxgl.Marker()
	.setLngLat([-80.5768650, 28.5617248])
	.setPopup(popup)
	.addTo(map);
//console.log(map);
//map.addControl(new mapboxgl.NavigationControl());




function getAPIdata() {
	var city = 'Amsterdam'
	
	var request = 'https://api.openweathermap.org/data/2.5/weather?appid=ce5f3f3bf3eb0841e330f03191c3feb2&q=' + city;

	
	fetch(request)	
	
	
	.then(function(response) {
		return response.json();
	})
	

	.then(function(response) {
		
		console.log(response);
		var weatherBox = document.getElementById('weather');
		
		document.getElementById("icoon").src = "http://openweathermap.org/img/wn/" + response.weather[0].icon + "@2x.png";



		var degC = Math.floor(response.main.temp - 273.15);
		
		weatherBox.innerHTML = degC + '&#176;C <br>' + response.weather[0].description;

		var windBox = document.getElementById('wind');

		
		windBox.innerHTML = '<b>Speed: </b>' + '<br>' + response.wind.speed + ' meters/second' + '<br>' + '<br>' + '<b>Degrees: </b>' + '<br>' + response.wind.deg + '&#176;';


	});
}

getAPIdata();























