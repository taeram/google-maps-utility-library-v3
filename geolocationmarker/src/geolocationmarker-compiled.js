(function() {var c=null,e;
function f(b,a,d){var i={clickable:!1,cursor:"pointer",draggable:!1,flat:!0,icon:new google.maps.MarkerImage("https://google-maps-utility-library-v3.googlecode.com/svn/trunk/GeolocationMarker/images/gpsloc.png",new google.maps.Size(15,15),new google.maps.Point(0,0),new google.maps.Point(7,7)),optimized:!1,position:new google.maps.LatLng(0,0),title:"Current location",zIndex:2};a&&(i=g(i,a));a={clickable:!1,radius:0,strokeColor:"1bb6ff",strokeOpacity:0.4,fillColor:"61a0bf",fillOpacity:0.4,strokeWeight:1,
zIndex:1};d&&(a=g(a,d));this.a=new google.maps.Marker(i);this.b=new google.maps.Circle(a);this.b.bindTo("center",this.a,"position");this.b.bindTo("map",this.a);b&&this.e(b)}e=f.prototype;e.c=c;e.a=c;e.b=c;e.g=function(){return this.c};e.h=function(){return this.c?this.a.getPosition():c};e.f=function(){return this.c?this.b.getBounds():c};e.i=function(){return this.c?this.b.getRadius():c};e.d=-1;
e.e=function(b){if(this.c=b){var a=this,b={enableHighAccuracy:!0,maximumAge:1E3};navigator.geolocation&&(this.d=navigator.geolocation.watchPosition(function(d){var b=new google.maps.LatLng(d.coords.latitude,d.coords.longitude);a.b.setRadius(d.coords.accuracy);if(!a.a.getMap()||!b.equals(a.a.getPosition()))a.a.setPosition(new google.maps.LatLng(d.coords.latitude,d.coords.longitude)),a.a.setPosition(b),a.a.getMap()||a.a.setMap(a.c),google.maps.event.trigger(a,"position_changed",new h(b,a.b.getBounds(),
d.coords.accuracy))},function(b){google.maps.event.trigger(a,"geolocation_error",b)},b))}else navigator.geolocation.clearWatch(this.d),this.d=-1,this.a.setMap(b)};e.k=function(b){this.a.setOptions(g({},b))};e.j=function(b){this.b.setOptions(g({},b))};function g(b,a){for(var d in a)j[d]||(b[d]=a[d]);return b}var j={map:!0,position:!0,radius:!0};function h(b,a,d){b&&(this.position=b);a&&(this.bounds=a);d&&(this.accuracy=d)}h.prototype.position=c;h.prototype.bounds=c;h.prototype.accuracy=c;f.prototype.getAccuracy=f.prototype.i;f.prototype.getBounds=f.prototype.f;f.prototype.getMap=f.prototype.g;f.prototype.getPosition=f.prototype.h;f.prototype.setCircleOptions=f.prototype.j;f.prototype.setMap=f.prototype.e;f.prototype.setMarkerOptions=f.prototype.k;window.GeolocationMarker=f;})()
