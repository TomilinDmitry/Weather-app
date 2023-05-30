const city = document.querySelector('.city')
const temp = document.querySelector('.temp')
const humidity = document.querySelector('.humidity')
const wind = document.querySelector('.wind')
const searchBox = document.querySelector('.search input')
const searchBtn = document.querySelector('.search button')
const weatherIcon = document.querySelector('.weather-icon')
const weather = document.querySelector('.weather')
const error = document.querySelector('.error')

async function checkWeather(cityName) {
    try {
        const response = await fetch('https://api.openweathermap.org/data/2.5/weather?lang=ru&appid=bf52705ee23b3e9267ae7f8faa135180&units=metric&q=' + cityName)
        if (!response.ok) {
            error.style.display = 'block'
            weather.style.display = 'none'
        } else {
            const data = await response.json()
            console.log(data)
            city.innerHTML = data.name
            temp.innerHTML = `${Math.round(data.main.temp)}°C`
            humidity.innerHTML = `${data.main.humidity}%`
            wind.innerHTML = `${data.wind.speed} м/с`

            if (data.weather[0].main === 'Clouds') {
                weatherIcon.src = 'clouds.png'
            } else if (data.weather[0].main === 'Clear') {
                weatherIcon.src = 'clear.png'
            } else if (data.weather[0].main === 'Drizzle') {
                weatherIcon.src = 'drizzle.png'
            } else if (data.weather[0].main === 'Mist') {
                weatherIcon.src = 'mist.png'
            } else if (data.weather[0].main === 'Snow') {
                weatherIcon.src = 'snow.png'
            } else if (data.weather[0].main === 'Rain') {
                weatherIcon.src = 'rain.png'
            }
            weather.style.display = 'block'
            error.style.display = 'none'
        }
    } catch (e) {
        console.error(e)
    }
}
searchBtn.addEventListener('click', () => {
    checkWeather(searchBox.value)
    weather.style.display = 'block'
})
