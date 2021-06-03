/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

      function initMap() {
        var directionsService = new google.maps.DirectionsService;
        var directionsDisplay = new google.maps.DirectionsRenderer;
        var service = new google.maps.DistanceMatrixService();
        
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 15,
          center: {lat: 35.1158, lng:33.9454}
        });
        directionsDisplay.setMap(map);

      

        var onClickHandler = function() {
          getLocations();
        };
        
        document.getElementById('culture').addEventListener('click', onClickHandler);

      
        
        
      }

      
function getLocations(){

      var locations = [
        ['Martinengo Bastion',35.128496122255115, 33.935386714038046,5 ],
        ['Carmelite Church', 35.127281978140395, 33.936579898075124,4],
        ['Saint Nicholas Cathedral', 35.124914794879594, 33.94249503122275,3],
        ['Othello Pub',35.12508649280381, 33.94372090363047, 2],
        ['Canbulat Cinema',35.12453735489655, 33.94413815741979, 1]
      ];

      var infowindow = new google.maps.InfoWindow();

      var marker, i;
      var iconBase = 'https://maps.google.com/mapfiles/kml/shapes/';
  
      for (i = 0; i < locations.length; i++) {  
        marker = new google.maps.Marker({
          position: new google.maps.LatLng(locations[i][1], locations[i][2]),
          map: map,
          icon: iconBase + 'parking_lot_maps.png'
        });
  
        google.maps.event.addListener(marker, 'click', (function(marker, i) {
          return function() {
            infowindow.setContent(locations[i][0]);
            infowindow.open(map, marker);
          }
        })(marker, i));
      }
    };
     /* function geocodeAddress(address) {
        var geocoder = new google.maps.Geocoder();
        geocoder.geocode({address: address}, function(results, status) {
          if (status == "OK") {
             if (results[0].geometry.viewport) map.fitBounds(results[0].geometry.viewport);
             else if (results[0].geometry.bounds) map.fitBounds(results[0].geometry.bounds);
             else map.setCenter(results[0].geometry.location);
          } else alert("geocoder failed, status: "+status);
        })
      }*/
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
        /* var onChangeHandler = function() {
          calculateAndDisplayRoute(directionsService, directionsDisplay);
        };
        document.getElementById('start').addEventListener('change', onChangeHandler);
        document.getElementById('end').addEventListener('change', onChangeHandler);
        document.getElementById("mode").addEventListener("change",onChangeHandler);
      
      }

      function calculateAndDisplayRoute(directionsService, directionsDisplay,service) {
          const selectedMode = document.getElementById("mode").value;
        directionsService.route({
          origin: document.getElementById('start').value,
          destination: document.getElementById('end').value,
          travelMode: google.maps.TravelMode[selectedMode]
        }, 
        
          function(response, status) {
          if (status === 'OK') {
            directionsDisplay.setDirections(response);
            
            var ids= response.routes[0].legs[0].distance.value ;
            document.getElementById("distance").value = ids/1000 + " KMs";
            
            var duration = response.routes[0].legs[0].duration.value;
            
            document.getElementById("time").value = Math.round(duration/60)+ " Minutes";
            
           
        } else {
            exit;
          }
        });
        
       service.getDistanceMatrix(
                {
                    origins: document.getElementById('start').value,
                    destinations:  document.getElementById('end').value,
                    travelMode: document.getElementById('trans').value,
                    //unitSystem: google.maps.UnitSystem.IMPERIAL, // miles and feet.
                     unitSystem: google.maps.UnitSystem.metric, // kilometers and meters.
                    avoidHighways: false,
                    avoidTolls: false
                }, callback);
        
          
      };
      
      
      
    
 $(function() {
        // add input listeners
        google.maps.event.addDomListener(window, 'load', function () {
            var from_places = new google.maps.places.Autocomplete(document.getElementById('from_places'));
            var to_places = new google.maps.places.Autocomplete(document.getElementById('to_places'));

            google.maps.event.addListener(from_places, 'place_changed', function () {
                var from_place = from_places.getPlace();
                var from_address = from_place.formatted_address;
                $('#origin').val(from_address);
            });

            google.maps.event.addListener(to_places, 'place_changed', function () {
                var to_place = to_places.getPlace();
                var to_address = to_place.formatted_address;
                $('#destination').val(to_address);
            });

        });
        // calculate distance
        function calculateDistance() {
            var origin = $('#origin').val();
            var destination = $('#destination').val();
            var service = new google.maps.DistanceMatrixService();
            service.getDistanceMatrix(
                {
                    origins: [origin],
                    destinations: [destination],
                    travelMode: google.maps.TravelMode.DRIVING,
                    unitSystem: google.maps.UnitSystem.IMPERIAL, // miles and feet.
                    // unitSystem: google.maps.UnitSystem.metric, // kilometers and meters.
                    avoidHighways: false,
                    avoidTolls: false
                }, callback);
        }
        
        
        // get distance results
        function callback(response, status) {
            if (status != google.maps.DistanceMatrixStatus.OK) {
                $('#result').html(err);
            } else {
                var origin = response.originAddresses[0];
                var destination = response.destinationAddresses[0];
                if (response.rows[0].elements[0].status === "ZERO_RESULTS") {
                    $('#result').html("Better get on a plane. There are no roads between "  + origin + " and " + destination);
                } else {
                    var distance = response.rows[0].elements[0].distance;
                    var duration = response.rows[0].elements[0].duration;
                    console.log(response.rows[0].elements[0].distance);
                    var distance_in_kilo = distance.value / 1000; // the kilom
                    var distance_in_mile = distance.value / 1609.34; // the mile
                    var duration_text = duration.text;
                    var duration_value = duration.value;
                    var mode=document.getElementById('trans').value;
                    $('#in_mile').text(mode);
                    $('#in_kilo').text(distance_in_kilo.toFixed(2));
                    $('#duration_text').text(duration_text);
                    
                }
            }
        }
        // print results on submit the form
        $('#distance_form').submit(function(e){
            e.preventDefault();
            calculateDistance();
        });

    });

















/*function initMap() {
  // The location of walled city
  
  const wc = { lat: 35.1251, lng: 33.9432 };
   const armenianChurch= {lat: 35.127426 , lng: 33.936546 };
   const stAnne={lat: 35.12590 , lng: 33.93747 };
  // The map, centered at Uluru
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 16,
    center: wc
  });
  // The marker, positioned at Uluru
  const marker = new google.maps.Marker({
    position: wc,
    map: map
  });
  
   const marker1 = new google.maps.Marker({
    position: armenianChurch,
    map: map
  });
  
  const marker3 = new google.maps.Marker({
    position: stAnne,
    map: map
  });
  
  
 var info=new google.maps.InfoWindow({
    
       content:"<h1>Armenian Church</h1><h2>Adjacent to the Carmelite Church is the smaller but better \n\
    preserved Armenian Church. If we look at the style, it is observed that it \n\
    belongs to the years 1360. Armenian inscriptions are still visible on the \n\
    outer walls and wall paintings from the Middle Ages on the inner parts.</h2>"
      
     });
  
  marker1.addListener('click',function(){
      
     info.open(map,marker1); 
  });


//directions service

var directionsDisplay=new google.maps.DirectionsRenderer();

var directionsService=new google.maps.DirectionsService();

directionsDisplay.setMap(map);

function calculateRoute(){
    var request={
        
        origin:wc,
        destination:stAnne,
        travelMode:'DRIVING'
            
    };
    
    directionsService.route(request,function(result,status){
        if(status==="OK"){
            directionsDisplay.setDirections(result);
        }else{
            window.alert("Directions Request failed due to" + status);
        }
    });
}

document.getElementById('route1').onclick=function(){
    calculateRoute();
};

   
  }
   
  */ 
   
   
   
   
   
   
   
   
    
   /* addMarker=( { lat: 35.1251, lng: 33.9432 });
     addMarker=( { lat: 35.1251, lng: 33.9432 });
     
  
 /* function addMarker(cordin){
      
     const marker=new google.maps.Marker({
          position:cordin,
          map:map
    
      });
              
          
          
  }
  
     addMarker=( { lat: 35.1251, lng: 33.9432 });
   addMarker=( { lat: 33.93635651923936 , lng: 35.127502927454934 });  
   
   */
   