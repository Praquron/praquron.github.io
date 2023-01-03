const decompileDates = ['20 December 2022', '23 December 2022', '1 January 2023', '21 December 2022', '1 January 2023', '19 December 2022', '1 November 2022', '1 December 2022'];

let search = document.getElementById("searchInput");
let doodles = document.getElementById("doodles");

filter();

search.addEventListener("keyup", function() {
	console.log(search.value);
	filter(search.value);
});

function filter(input = "") {
	let filter = input.toUpperCase();
	let filteredDoodles = [];
	for (let i = 0; i < doodleName.length; i++) {
		if (doodleName[i].toUpperCase().indexOf(filter) > -1) {
			filteredDoodles.push(i);
		}
	}

	for (let i = 0; i < decompileDates.length; i++) {
		doodles.deleteRow(-1);
	}
	
	let row;
	let cell;
	let value;
	for (let i = 0; i < filteredDoodles.length; i++) {
		row = doodles.insertRow();
		
		cell = row.insertCell();
		value = document.createElement("a");
		value.text = doodleName[filteredDoodles[i]];
		value.href = 'https://praquron.github.io/google?doodleI=' + i;
		cell.appendChild(value);
		
		cell = row.insertCell();
		value = document.createTextNode(doodleDate[filteredDoodles[i]]);
		cell.appendChild(value);
		
		cell = row.insertCell();
		value = document.createTextNode(decompileDates[filteredDoodles[i]]);
		cell.appendChild(value);
	}
}
