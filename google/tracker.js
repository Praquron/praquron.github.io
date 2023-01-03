const decompileDates = ['1 November 2022', '1 December 2022', 'Unknown'];

let search = document.getElementById("input");
let doodles = document.getElementById("doodles");

setupDoodles();

function setupDoodles() {
	let row;
	let cell;
	let value;
	for (let i = 0; i < decompileDates.length; i++) {
		row = doodles.insertRow();
		
		cell = doodles.insertCell();
		value = document.createTextNode(doodleName[i]);
		cell.appendChild(value);
		
		cell = doodles.insertCell();
		value = document.createTextNode(doodleDate[i]);
		cell.appendChild(value);
		
		cell = doodles.insertCell();
		value = document.createTextNode(decompileDates[i]);
		cell.appendChild(value);
	}
}
