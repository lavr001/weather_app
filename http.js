export default class Http {
  static fetch_data(city) {
    return new Promise((resolve, reject) => {
      let url = 'https://api.openweathermap.org/data/2.5/weather?q=' + city + '&units=imperial&APPID=1d7a4573ea20cc82c9a6032a04f52598';
      fetch(url)
        .then(response => response.json())
        .then(response => resolve(response))
        .catch(e => reject(e));
    });
  }
}
