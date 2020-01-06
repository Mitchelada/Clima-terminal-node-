const lugar = require('./lugar/lugar')
const clima = require('./clima/clima')
const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Direccion de la ciudad para obtener el clima'
    }
}).argv;

// argv.direccion
// lugar.getLugarLatLng(argv.direccion)
//     .then(res => console.log(res))

// clima.getClima(40.750000, -74.000000)
//     .then(resp => console.log(resp))
//     .catch(err => console.log(err))

const getInfo = async(direccion) => {

    let place = await lugar.getLugarLatLng(direccion)
    let wheather = await clima.getClima(place.lat, place.lng)

    if ((!place) || (!wheather)) {
        throw new Error(`No se pudo determinar el clima de ${place.direccion}`)
    }

    return `El clima de ${place.direccion} es de ${wheather-273.15} C°`



    //salida
    //El clima de XXXXXXX es de XXX F°
    //No se pudo determinar el clima de XXXXXXX
}


getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log)