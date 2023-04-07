navigator.geolocation.getCurrentPosition(
    function(position){
        var latitude = position.coords.latitude;
        var longitude = position.coords.longitude;
        console.log(position);

        var map = L.map('map-template').setView([latitude,longitude],16);
        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png ').addTo(map);
        var marker = L.marker([latitude, longitude]);
        marker.bindPopup('Hola');
        marker.addTo(map);

    },
    function(e){
        //El usuario niega el acceso a su ubucacion
        console.log(e)
    }
    );

