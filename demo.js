

/**
 * Adds markers to the map highlighting the locations of 
 * Mumbai, Bangalore, Delhi, Hyderabad and Chennai 
 *
 * @param  {H.Map} map      A HERE Map instance within the application
 */
function addMarkersToMap(map) {
    var mumbaiMarker = new H.map.Marker({lat:19.0760, lng:72.8777});
    map.addObject(mumbaiMarker);

    var BangaloreMarker = new H.map.Marker({lat:12.9716, lng: 77.5946});
    map.addObject(BangaloreMarker);

    var DelhiMarker = new H.map.Marker({lat:28.7041, lng:77.1025});
    map.addObject(DelhiMarker);

    var HyderabadMarker = new H.map.Marker({lat:17.3850, lng: 78.4867});
    map.addObject(HyderabadMarker);

    var ChennaiMarker = new H.map.Marker({lat:13.0827, lng:80.2707});
    map.addObject(ChennaiMarker);

    var PuneMarker = new H.map.Marker({lat:18.5204, lng:73.8567});
    map.addObject(PuneMarker);
}

/**
 * Boilerplate map initialization code starts below:
 */

//Step 1: initialize communication with the platform
// In your own code, replace variable window.apikey with your own apikey
var platform = new H.service.Platform({
  apikey: 'FlUcqJTVvJvYPgdElFxRnkbgxc2Zeu0zD8UEi5CrOP0'
});
var defaultLayers = platform.createDefaultLayers();

//Step 2: initialize a map - this map is centered over Europe
var map = new H.Map(document.getElementById('map'),
  defaultLayers.vector.normal.map,{
  center: {lat:21.7679, lng:78.8718},
  zoom: 4,
  pixelRatio: window.devicePixelRatio || 1
});
// add a resize listener to make sure that the map occupies the whole container
window.addEventListener('resize', () => map.getViewPort().resize());

//Step 3: make the map interactive
// MapEvents enables the event system
// Behavior implements default interactions for pan/zoom (also on mobile touch environments)
var behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(map));

// Create the default UI components
var ui = H.ui.UI.createDefault(map, defaultLayers);

// Now use the map as required...
window.onload = function () {
  addMarkersToMap(map);
}