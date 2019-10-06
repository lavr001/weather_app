export default class Http {
  static fetchData(city) {
    return new Promise((resolve, reject) => {
      let url = 'http://api.openweathermap.org/data/2.5/weather?q=' + city + '&APPID=1d7a4573ea20cc82c9a6032a04f52598';
      fetch(url)
        .then(response => response.json())
        .then(response => resolve(response))
        .catch(e => reject(e));
    });
  }
}
