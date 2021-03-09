
var labels = [];

const locations = {
    shinjuku: {
        lat: 35.70724705599633,
        lng: 139.7120326497082
    },
    shibuya: {
        lat: 35.6693138677115,
        lng: 139.69646301791374
    },
    asakusa: {
        lat: 35.71537424874052,
        lng: 139.79714056750478
    }
}

// Change center of map - https://stackoverflow.com/questions/28499141/how-to-change-google-map-center-by-clicking-a-button// 


function newLocation(newLat, newLng) {
    map.setCenter({
        lat: newLat,
        lng: newLng,
    });
}

$(document).ready(function(){

    $('#shinjuku-info').on('click' , function(){
        newLocation(35.70724705599633, 139.7120326497082);
    });

    $('#shibuya-info').on('click' , function(){
        newLocation(35.6693138677115, 139.69646301791374);
    });

    $('#asakusa-info').on('click' , function(){
        newLocations(35.71537424874052, 139.79714056750478);
    });
})

