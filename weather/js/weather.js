window.addEventListener('load', ()=> {
    let long;
    let lat;
    let temperatureDesc = document.querySelector('.weather__mainblockDesc');
    let temperatureDegree = document.querySelector('.weather__mainblockDegree');
    let Timezone = document.querySelector('.weather__mainblockLocation .title');

    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position => {
            long = position.coords.longitude;
            lat = position.coords.latitude;

            const api = `https://api.darksky.net/forecast/fd9d9c6418c23d94745b836767721ad1/${lat}, ${long}`;
            
            fetch(api)
            .then(response =>{
                return response.json();
            })
            .then(data => {
                console.log(data);
                const {temperature, icon} = data.currently;
                let {summary} = data.currently;
                //Set DOM Elements from API
                let fToCel = (temperature - 32) * 5 / 9;
                temperatureDegree.textContent = Math.floor(fToCel) + "°C";
                Timezone.textContent = data.timezone;
                if(summary == "Clear")
                    summary = "Słonecznie";

                else if(summary == "Mostly Cloudy")
                    summary = "Przeważnie pochmurno";

                else if(summary == "Overcast")
                    summary = "Pochmurno";

                else if(summary == "Light Rain")
                    summary = "Lekki deszcz";

                else if(summary == "Partly Cloudy")
                    summary = "Częściowe zachmurzenia";

                else if(summary == "Rainy")
                    summary = "Deszczowo";
                    
                temperatureDesc.textContent = summary;
                //Set Icon
                setIcon(icon, document.querySelector('.icon'));
            });
        });
    }
    else{
        h1.textContent = "Hey, it won't work if you don't let the browser see your location!";
    }

    function setIcon(icon, iconID){
        const skycons = new Skycons({color: "black"});
        const currentIcon = icon.replace(/-/g, "_").toUpperCase();
        skycons.play();
        return skycons.set(iconID, Skycons[currentIcon]);
    }
});