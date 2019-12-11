import * as Elements from './elements.js';
import Http from './http.js';

const search_weather = () => {
  let city = Elements.searched_city.value.trim();
  if (city) {
    Elements.loading_text.classList.add('show');
    Elements.weather_box.classList.remove('show');
    Http
      .fetch_data(city)
      .then(response => {
        if (response.cod === 200) {
          update_weather(response);
        } else {
          console.log(`Status:${response.cod} Msg:${response.message}`);
        }
      })
      .catch(e => console.log(e));
  } else {
    alert('Enter a city name');
  }
}

const update_weather = weather_data => {
  console.log(weather_data);
  Elements.fahrenheit.classList.add('on');
  Elements.celsius.classList.remove('on');
  Elements.weather_city.textContent = weather_data.name;
  Elements.weather_description.textContent = weather_data.weather[0].description;
  Elements.weather_temperature.textContent = Math.round(weather_data.main.temp) + ' ºF';
  Elements.loading_text.classList.remove('show');
  Elements.weather_box.classList.add('show');
}

Elements.search_button.onclick = () => search_weather();

Elements.fahrenheit.onclick = () => {
  if (!Elements.fahrenheit.classList.contains('on')) {
    Elements.fahrenheit.classList.add('on');
    Elements.celsius.classList.remove('on');
    Elements.weather_temperature.textContent = Math.round((parseInt(Elements.weather_temperature.textContent) * 1.8 + 32)) + ' ºF';
  }
}

Elements.celsius.onclick = () => {
  if (!Elements.celsius.classList.contains('on')) {
    Elements.celsius.classList.add('on');
    Elements.fahrenheit.classList.remove('on');
    Elements.weather_temperature.textContent = Math.round((parseInt(Elements.weather_temperature.textContent) - 32) / 1.8) + ' ºC';
  }
}
