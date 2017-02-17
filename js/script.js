var villes = [
	['Assistante du maire', 'Bellewether', 48.439147, 1.467630, 'img/1.jpg',"1"],
	['Parrain de la Mafia', 'Mister Big', 48.441992, 1.477224, 'img/2.jpg',"2"],
	['Escroc', 'Duke Weaselton', 48.433905, 1.457613, 'img/3.jpg',"3"],
	['Chimiste', 'Doug Ramses', 48.436847, 1.477130, 'img/4.jpg',"4"],
	['Police', 'Judy Hopps', 48.442340, 1.459862, 'img/5.jpg',"5"],
];

function initialize(){
	var mapOptions={
		zoom: 14, // 0 à 21
		center: new google.maps.LatLng(48.439008, 1.467789),
		mapTypeId: google.maps.MapTypeId.ROADMAP,
	}
	var map = new google.maps.Map(document.getElementById("map_canvas"), mapOptions);
	setMarkers(map,villes);
}

function setMarkers(map,locations){
	for(var i=0; i<locations.length; i++){
		var villes = locations[i];
		var myLatLng = new google.maps.LatLng(villes[2],villes[3]);
		var infoWindow = new google.maps.InfoWindow();
		var marker = new google.maps.Marker ({
			position: myLatLng,
			map: map,
			icon: villes[4],
			animation: google.maps.Animation.DROP
		});
		(function(i){
			google.maps.event.addListener(marker, "click", function(){
				var villes = locations[i];
				infoWindow.close();
				infoWindow.setContent("<div>"+villes[0]+"<br />"+villes[1]+"<br /> <input type='button' value='Capturer' onclick='menotte("+i+")'></div>");
				infoWindow.open(map, this);
			});
		})(i);
	}
}

function menotte(i){
	var images=villes[i];
	$("#"+images[5]).attr("src",images[4]);
}