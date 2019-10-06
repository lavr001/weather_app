import * as Elements from './elements.js';
import Http from './http.js';

const search_weather = () => {
  let city = Elements.searched_city.value.trim();
  if (city) {
    Http
      .fetchData(city)
      .then(response => {
        if (response.cod === 200) {
          console.log(response);
        } else {
          console.log(`Status:${response.cod} Msg:${response.message}`);
        }
      })
      .catch(e => console.log(e));
  }
};

Elements.search_button.addEventListener('click', search_weather);
