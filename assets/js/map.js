
// Code to initialize the map //

function initMap() {
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 10,
        center: {
            lat: 35.69883763050049,
            lng: 139.76283314117453
        }
    });
}

// Code to display map and show area sections //
$(document).ready(function(){
    $('#shinjukupic').on('click', function(){
        $('#shinjuku-info').show();
    })

    $('#shibuyapic').on('click', function(){
        $('#shibuya-info').show();
    })

    $('#asakusapic').on('click', function(){
        $('#asakusa-info').show();
    })
});




// Change center of map (found at https://stackoverflow.com/questions/28499141/how-to-change-google-map-center-by-clicking-a-button) and
// code to clear markers// 

function newLocation(newLat, newLng) {
    map.setCenter({
        lat: newLat,
        lng: newLng,
    });
}

function clearMarkers() {
    for (let i = 0; i < markers.length; i++) {
        if (markers[i]) {
            markers[i].setMap(null);
        }
    }
    markers = [];
}



$(document).ready(function(){

    $('#shinjukupic').on('click' , function(){
        newLocation(35.70724705599633, 139.7120326497082);
    });

    $('#shibuyapic').on('click' , function(){
        newLocation(35.6693138677115, 139.69646301791374);
    });

    $('#asakusapic').on('click' , function(){
        newLocations(35.71537424874052, 139.79714056750478);
    });
})


// Add markers to the map // 

var markers = [];


const locations = {

    shinjuku : {
        latitude : "35.701392431518805",
        longitude: "139.70842776085"
    },

    shibuya : {
        latitude: "35.66805874481764",
        longitude: "139.69569054172985"
    },

    asakusa : {
        latitude: "35.718370786924936",
        longitude: "139.79589602254183"
    }
}


