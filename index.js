// api key for weather app 

const apiKey = "3d748b3f92a37ae8901bdedd15a157bd";


async function getweather_info(city) {

    // fetching the weather info from the site
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url);
        if (!response) {
            throw new Error("the weather details of the city was not found")
        }
        // console.log(response);

        const data = await response.json();

        // console.log(data);

        display_weather_data(data); //it is a function to display the weather data
    }
    catch (error) {
        console.error("An Error occured while fetching weather data:", error);
        alert("Could not fetch weather data. Please check the city name.");
    }


}

// function to display the weather info in html
function display_weather_data(data) {
    const weather_container = document.querySelector(".weather_info")

    const { name, main, weather } = data;
    weather_container.classList.add('show')
    weather_container.innerHTML = `
    <h2>Weather in : ${name}</h2>
     <div class="info-grid">
      <p>Temperature: ${main.temp}°C</p>
      <p>Condition: ${weather[0].description}</p>
      <p>Humidity: ${main.humidity}%</p>
      <p>Wind Speed: ${data.wind.speed} m/s</p>
      </div>
    `;



}


// adding event listener to the search button 
document.querySelector(".search-btn").addEventListener("click", () => {
    const city = document.getElementById("cityname").value;
    getweather_info(city)
})

document.getElementById("cityname").addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
    const city = document.getElementById("cityname").value;
    getweather_info(city)}

})




