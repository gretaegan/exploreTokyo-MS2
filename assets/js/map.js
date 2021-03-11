//Initiate the Map// 
let map;
let service;
let markers = [];
let infowindow;

function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
        center: new google.maps.LatLng(35.67876072537644, 139.76763965965216),
        zoom: 10
    });


}


//Code to change the center of the map (found at https://stackoverflow.com/questions/28499141/how-to-change-google-map-center-by-clicking-a-button)//

function newLocation(newLat, newLng) {
    map.setCenter({
        lat: newLat,
        lng: newLng,
    });
    map.setZoom(13);
}



$(document).ready(function()
{
    $("#area-btn-1").on('click', function ()
    {
	  newLocation(35.70160153265351, 139.70945772909516);
	});
  
	$("#area-btn-2").on('click', function ()
    {
	  newLocation(35.66798901518934, 139.69586220310404);
	});
  
    $("#area-btn-3").on('click', function ()
    {
	  newLocation(35.71857984352346, 139.7960891415878);
	});
});


// google Places library- (code help found at https://developers.google.com/maps/documentation/javascript/places#place_search_requests)//

function typesOfPlaces(placeTypes) {
    var request = {
        location: map.getCenter(),
        radius: 900,
        types: placeTypes,
        zoom: map.setZoom(15),
    };
    var service = new google.maps.places.PlacesService(map);
    service.nearbySearch(request, callback);
}

function callback(results, status) {
  if (status == google.maps.places.PlacesServiceStatus.OK) {
      console.log(results.length);
    for (var i = 0; i < results.length; i++) {
      createMarker(results[i]);
    }
  }
}


//Create and Clear markers for the map - code help from Google Maps API Javascript documentation //

function createMarker(place){
    let marker = new google.maps.Marker ({
        map: map,
        position: place.geometry.location,
        title: place.name
    });
}

function clearMarkers(){
    for (let i = 0; i < markers.length; i++) {
        if (markers[i]) {
            markers[i].setMap(null);
        }
    }
}





//Show markers on map with click function//


$(document).ready(function(){

    $('.bars').on('click' , function(){
        typesOfPlaces('bar');
        clearMarkers();
    })

    $('.restaurants').on('click', function(){
        typesOfPlaces('restaurant');
        clearMarkers();
    })

    $('.hotels').on('click', function(){
        typesOfPlaces('hotel');
        clearMarkers();
    });
});


//Code to make infowindow//




