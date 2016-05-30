var makeMap = function() {
googleMap = new google.maps.Map( $('#google-map')[0], {
    mapTypeId: google.maps.mapTypeId.HYBRID //added "HYBRID" based off of solutions code
  });
};

var locations = [{name: "St. Mark's Square", lat: 45.4342, lng: 12.3385, zoom: 16}, 
                 {name: 'Leaning Tower of Pisa', lat: 43.7230, lng: 10.3966, zoom: 16}, 
                 {name: "St. Peter's Basilica", lat: 41.9022, lng: 12.4539, zoom: 16},
                ];

$('#location-dropdown').on('change', selectLocation);

var initLocation = function() {
   var loc = locations[0];
   setLocation( loc.lat, loc.lng, loc.zoom );
};

var setLocation = function(latitude, longitude, zoom) {
   var staticGoogleUrl = 'https://maps.googleapis.com/maps/api/staticmap' +
        '?size=600x400' +
        '&center=' + latitude + ',' + longitude +
        '&zoom=' + zoom;
  
    $('#google-map').attr('src', staticGoogleUrl);
  
    googleMap.setCenter({lat: latitude, lng: longitude});
    googleMap.setZoom(zoom);
};

var createMenu = function() {
    var select = $('#location-dropdown');
    var i, len;
    var opt;

    for (i = 0, len = locations.length; i < len; ++i) { //borrowed from solutions code
        opt = $('<option>');
        opt.attr('value', i);
        opt.text(locations[i].name);
        select.append(opt);
    };
};

var selectLocation = function() {
    var i = $('#location-dropdown').val();
    var loc = locations[i];
    setLocation(loc.lat, loc.lng, loc.zoom);
};