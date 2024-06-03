function refreshWeather (response) {
    let temperatureElement = document.querySelector ("#temperature");
    let temperature = document.querySelector("#city");

    cityElement.innerHTML = response.data.city;
    temperatureElement.innerHTML = Math.round(temperature);
}

function searchCity (city) {
    let apiKey = "39aba29446903cbedo2db0ftec583c0e";
    let apiUrl = 'https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}';
    axios.get(apiUrl).then(refreshWeather);

    function handleSearchSubmit (event) {
        event.preverntDefault ();
        let searchInput = document.querySelector("#search-form-input");

        searchCity(searchInput.value);
    }
}
  
  let searchFormElement = document.querySelector("#search-form");
  searchFormElement.addEventListener("submit", handleSearchSubmit);

  searchCity ("Paris");