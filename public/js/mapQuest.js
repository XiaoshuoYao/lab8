function initMap() {
	// add your code here
    L.mapquest.key = "WPijul9WmoiDQehoEfhAZFmEw2upkGDG";

    //'map' refers to a <div> element witht he ID map
    var map = L.mapquest.map('map', {
        center: [32.8811705, -117.2375803],
        layers: L.mapquest.tileLayer('map'),
        zoom: 12,
        zoomControl: false
    });

    //add a marker to the map
    L.marker([32.8811705, -117.2375803]).addTo(map);

}
