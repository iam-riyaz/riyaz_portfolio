function initMap() {
    // Latitude and Longitude
    var myLatLng = {lat: 24.910031, lng: 79.580853};

    var map = new google.maps.Map(document.getElementById('google-maps'), {
        zoom: 17,
        center: myLatLng
    });

    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: 'Chhatarpur, madhya pradesh, india' // Title Location
    });
}



// Hanuman Toria
// Chhatarpur, Madhya Pradesh 471001
// 24.910031, 79.580853