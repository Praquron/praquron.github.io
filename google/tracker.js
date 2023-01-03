const unde;

let search = document.getElementById("search");
let doodles = document.getElementById("doodles");

setupDoodles();

function setupDoodles() {
	let row;
	let cell;
	for (let i = 0; i < doodleName.length; i++) {
		row = doodles.insertRow();
		cell = doodles.insertCell();
		let name = document.createTextNode(doodleName[i]);
		let date;
}
