let urlBase = 'https://api.openweathermap.org/data/2.5/weather';
let api_key = '9bb29f0f8285eb692e9c4e2be83d8640';
let difKelvin = 273.15;

 document.getElementById('botonBusqueda').addEventListener('click',() => {
    const ciudad = document.getElementById('ciudadEntrada').value
    if(ciudad){
        fetchDatosClima(ciudad)
    }
 })

 function fetchDatosClima(ciudad){
    fetch(`${urlBase}?q=${ciudad}&appid=${api_key}`)
    .then(data => data.json())
    .then(data => mostrarDatosClima(data))
   
 }

 function mostrarDatosClima(data){
    console.log(data)
    const divDatosClima = document.getElementById('datosClima')
    divDatosClima.innerHTML=''

    const ciudadNombre = data.name
    const temperatura = data.main.temp
    const descripcion = data.weather[0].description
    const paisNombre = data.sys.country
    const humedad = data.main.humidity
    const icono = data.weather[0].icon
    const sensaciontermica = data.main.feels_like 

    const ciudadTitulo = document.createElement('h2')
    ciudadTitulo.textContent = `${ciudadNombre}, ${paisNombre}`

    const temperaturaInfo = document.createElement('p')
    temperaturaInfo.textContent = `La temperatura es de ${Math.floor(temperatura-difKelvin)}°C`
    
    const sensacionInfo = document.createElement('p')
    sensacionInfo.textContent = `La sensación térmica es de ${Math.floor(sensaciontermica-difKelvin)}°C`

    const humedadInfo = document.createElement('p')
    humedadInfo.textContent = `La humedad es del ${humedad}%`

    const iconoInfo = document.createElement('img')
    iconoInfo.src = `https://openweathermap.org/img/wn/${icono}@2x.png`

    const descripcionInfo = document.createElement('p')
    descripcionInfo.textContent = `La Descripción Metereológica es: ${descripcion}`

    divDatosClima.appendChild(ciudadTitulo)
    divDatosClima.appendChild(temperaturaInfo)
    divDatosClima.appendChild(sensacionInfo)
    divDatosClima.appendChild(humedadInfo)
    divDatosClima.appendChild(iconoInfo)
    divDatosClima.appendChild(descripcionInfo)
 }