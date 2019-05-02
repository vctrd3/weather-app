let city = document.querySelector('#city');

let get = document.querySelector('#button');

get.addEventListener('click', displayWeather);

document.addEventListener('keyup', e => {
  
  
  if (e.keyCode === 13) {
    displayWeather();
    
  }
});

function displayWeather() {
  const weather = new XMLHttpRequest();
  const url = 'http://api.openweathermap.org/data/2.5/weather?q=' + city.value + '&APPID=0e25ca7b600cae8be4d83fffd5f5cef3'
  weather.open('GET', url, true);
  weather.onload = function() {
    if (this.status === 200 && this.readyState === 4) {

      const grabWeather = JSON.parse(this.responseText);

      let icon = grabWeather.weather[0].icon;
      let desc = grabWeather.weather[0].description;
      const temp = grabWeather.main.temp;
      let tempToFarenheit = ((temp - 273.15) * 1.8) + 32;
      weatherCity = document.querySelector('#weatherCity');
      weatherPic = document.querySelector('#weatherPic');
      weatherPic.innerHTML = '<img src="http://openweathermap.org/img/w/' + icon + '.png">'
      weatherCity.textContent = grabWeather.name + ", " + grabWeather.sys.country;
      weatherDescription.textContent = desc.replace(/\b\w/g, function(first) {
        return first.toUpperCase()
      });
      weatherTemperature.textContent = tempToFarenheit.toFixed(2) + ' °F';
    }
  }
  weather.send();
  
  city.value='';
}

