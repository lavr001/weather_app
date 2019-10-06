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

let update_weather = weather_data => {
  console.log(weather_data);
  Elements.weather_city.textContent = weather_data.name;
  Elements.weather_description.textContent = weather_data.weather[0].description;
  Elements.weather_temperature.textContent = weather_data.main.temp + ' F';
  Elements.loading_text.classList.remove('show');
  Elements.weather_box.classList.add('show');
}

Elements.search_button.addEventListener('click', search_weather);
