//JavaScript Document

$(document).ready(function(e){
	document.addEventListener("deviceready", onDeviceReady, false);
	
});

function onDeviceReady(){
	
	$('#pocision').on('click',function(){
		getPosition ();
	});
}

function getPosition(){
	var options={
		enableHighAccuracy : true,
		maximunAge: 3600000
	}
	
	var watchID = navigator.geolocation.getCurrentPosition(onSuccess, onError, options);
	
	function onSuccess(position){
		
		alert('Latitude:'   +postion.coords.latitude  +'\n'+
		'Longitude: '  +position.coords.longitude  +'\n');
	};
	
	function onError(error){
		alert('code:'  +error.code  +'\n' + 'message:' + error.message + '\n');
	}
}