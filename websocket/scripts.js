let wss = new WebSocket("wss://praquron.github.io");

wss.onopen = function(event) {
	console.log("Connected!");
	wss.send("Hello World!");
};

wss.onmessage = function(event) {
	document.getElementById('console').innerHTML = event.data;	
};
