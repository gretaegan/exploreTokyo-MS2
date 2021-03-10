//Initiate the Map// 

let map;

function initMap() {
    map = new.google.maps.Map(document.getElementById("map"), {
        center: {
            lat: 35.67876072537644,
            lng: 139.76763965965216
        },
        zoom: 10
    });
}

const locations = {
    shinjuku: {
        lat: 35.70160153265351,
        lng:  139.70791277672734
    },

    shibuya: {
        lat: 35.667221985258365,
        lng: 139.69491806554595
    },

    asakusa: {
        lat: 35.718318522689614,
        lng: 139.79606768391602
    }
}

