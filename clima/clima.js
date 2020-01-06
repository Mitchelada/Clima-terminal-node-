const axios = require('axios')


const getClima = async(lat, lng) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=22b0b527c71213a3742f5f25fb15c49e`)

    return resp.data.main.temp


}

module.exports = {
    getClima
}