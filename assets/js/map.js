//Initiate the Map// 
let map;

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
    map.setZoom(12);
}



$(document).ready(function ()
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



