//Initiate the Map// 
let map;
let service;
let mapMarkers = [];
const EXPLORE_DATA = {
   shinjuku: {
        title: "Shinjuku",
        location: [35.70160153265351, 139.70945772909516],
        description: "Shinjuku is one of the most vibrant and exciting areas in all of Japan. One side is populated by ultra-high rise skyscrapers, housing hotels offices and government buildings. The other is where you'll find the neon signs, massive crowds and unique entertainment that people associate with Tokyo. Considered the nightlife capital of Tokyo, Shinjuku has it all. From the most sophisticated cocktail bars on the high floors of skyscrapers, to traditional Izakayas so small that they only fit a handful of patrons, there is something for everyone in this exciting area."
    },
    shibuya: {
        title: "Shibuya",
        location: [35.66798901518934, 139.69586220310404],
        description: "Shibuya is the the popular shopping and entertainment area of Tokyo, found around Shibuya Station. It is home to the magnificent Meiji-Jingu, a Shinto shrine where tourists and Japanese alike flock for serenity in the midst of the busy city atmosphere. Only a few meters from Meiji Jingu is the vibrant and busy Takeshita street in Harajuku, where you can see the unique street fashion of young Japanese fashionistas. But what Shibuya is most known for is the world famous Shibuya Crossing, a busy yet orderly crossroads known as the busiest crosswalk in the whole world. Grab a coffee at the Starbucks beside the station and watch as masses of pedestrians scramble across."
    },
    asakusa: {
        title: "Asakusa",
        location: [35.71857984352346, 139.7960891415878],
        description: "Asakusa is an area in the Taito prefecture where an atmosphere of the Tokyo of past decades survives. Asakusa's main attraction is Sensoji, a very popular Buddhist temple, built in the 7th century. The temple is approached via Nakamise, a shopping street that has been providing temple visitors with a variety of traditional, local snacks and tourist souvenirs for centuries. If you are coming to Tokyo in search of a traditional experience, Asakusa is where you will find it."
    }
}
function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
        center: new google.maps.LatLng(35.67876072537644, 139.76763965965216),
        zoom: 10
    });

}

    function newLocation(newLat, newLng) {
    map.setCenter({
        lat: newLat,
        lng: newLng,
    });
    map.setZoom(13);
}

function showMap(place){
    const data = EXPLORE_DATA[place]
    let [lat, long] = data.location
    console.log(data.location);
    newLocation(lat, long);
    $('#info-header').text(data.title);
    $('#info-description').text(data.description);

}


//Code to change the center of the map (found at https://stackoverflow.com/questions/28499141/how-to-change-google-map-center-by-clicking-a-button)//






// google Places library- (code help found at https://developers.google.com/maps/documentation/javascript/places#place_search_requests)//

function typesOfPlaces(placeTypes) {
    var request = {
        location: map.getCenter(),
        radius: 900,
        types: placeTypes,
        zoom: map.setZoom(15),
    };

    service = new google.maps.places.PlacesService(map);
    service.nearbySearch(request, callback);

    function callback(results, status) {
        if (status == google.maps.places.PlacesServiceStatus.OK) {
            clearMarkers();
            for (var i = 0; i < results.length; i++) {
                createMarker(results[i]);
            }
        }
    }

}
 


//Create and Clear markers for the map - code help from Google Maps API Javascript documentation //

//Code to make infowindow (found at https://developers.google.com/maps/documentation/javascript/examples/infowindow-simple)/

function createMarker(place){
   let marker = new google.maps.Marker ({ 
        map: map,
        position: place.geometry.location,
        title: place.name
    });

    mapMarkers.push(marker);

    const infowindow = new google.maps.InfoWindow({
    content: place.name,
  });

  marker.addListener("click", () => {
    infowindow.open(map, marker);
  });
}

function clearMarkers(){
    for (let i = 0; i < mapMarkers.length; i++) {
        if (mapMarkers[i]) {
        mapMarkers[i].setMap(null);
        }
    }
    mapMarkers = [];
}





//Show markers on map with click function//


$(document).ready(function(){

    $('.bars').on('click' , function(){
        typesOfPlaces(['bar']);
        clearMarkers();
    })

    $('.restaurants').on('click', function(){
        typesOfPlaces(['restaurant']);
        clearMarkers();
    })

    $('.hotels').on('click', function(){
        typesOfPlaces(['hotel']);
        clearMarkers();
    });
});






