

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

// Code to initialize the mao //


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





// Change center of map - https://stackoverflow.com/questions/28499141/how-to-change-google-map-center-by-clicking-a-button// 
function newLocation(newLat, newLng) {
    map.setCenter({
        lat: newLat,
        lng: newLng,
    });
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

