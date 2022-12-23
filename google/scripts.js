let doodleI = 0;
let imageI = 0;
let audioI = 0;

let lastImageI = [];
let lastAudioI = [];
for (let i = 0; i < imageSource.length; i++) {
	lastImageI.push("Not Avaliable");
	lastAudioI.push("Not Avaliable");
}

load(0, true);

const previousDoodleButton = document.querySelector("button.previousDoodle");
previousDoodleButton.addEventListener("click", function () {
	load(-1);
});
const nextDoodleButton = document.querySelector("button.nextDoodle");
nextDoodleButton.addEventListener("click", function () {
	load(1);
});
const loadDoodleButton = document.querySelector("button.loadDoodle");
loadDoodleButton.addEventListener("click", function () {
	load(0, true);
});

const previousImageButton = document.querySelector("button.previousImage");
previousImageButton.addEventListener("click", function () {
	crop(-1);
});
const nextImageButton = document.querySelector("button.nextImage");
nextImageButton.addEventListener("click", function () {
	crop(1);
});
const loadImageButton = document.querySelector("button.loadImage");
loadImageButton.addEventListener("click", function () {
	crop(0, true);
});
const downloadImageButton = document.querySelector("button.downloadImage");
downloadImageButton.addEventListener("click", function () {
	downloadImage();
});

const previousAudioButton = document.querySelector("button.previousAudio");
previousAudioButton.addEventListener("click", function () {
	trim(-1);
});
const nextAudioButton = document.querySelector("button.nextAudio");
nextAudioButton.addEventListener("click", function () {
	trim(1);
});
const loadAudioButton = document.querySelector("button.loadAudio");
loadAudioButton.addEventListener("click", function () {
	trim(0, true);
});
const downloadAudioButton = document.querySelector("button.downloadAudio");
downloadAudioButton.addEventListener("click", function () {
	downloadAudio();
});

function checkDoodleI(change) {
	if (typeof doodleI !== "number") {
		doodleI = 0;
	}
	
	doodleI += change;

	if (doodleI < 0) {
		doodleI = 0;
	} else if (doodleI > imageSource.length - 1) {
		doodleI = imageSource.length - 1;
	}
}
function checkImageI(change) {
	if (typeof imageI !== "number") {
		imageI = 0;
	}

	imageI += change;

	if (imageI < 0) {
		imageI = 0;
	} else if (imageI > imageProperties[doodleI].length - 1) {
		imageI = imageProperties[doodleI].length - 1;
	}
}
function checkAudioI(change) {
	if (typeof audioI !== "number") {
		audioI = 0;
	}

	audioI += change;

	if (audioI < 0) {
		audioI = 0;
	} else if (audioI > audioProperties[doodleI].length - 1) {
		audioI = audioProperties[doodleI].length - 1;
	}
}

function load(change, load) {
	if (document.getElementById("doodleIndex").value > 0) {
		doodleI = Math.floor(document.getElementById("doodleIndex").value) - 1;
	} else {
		doodleI = 0;
	}
	lastI = doodleI;
	checkDoodleI(change);
	
	document.getElementById("doodleIndex").value = doodleI + 1;

	if ((doodleI !== lastI) || load) {
		crop(0, true);
		trim(0, true);
	}

	document.getElementById("doodleSourceAnchor").href = doodleSource[doodleI];
	document.getElementById("doodleSource").innerHTML = doodleName[doodleI];
	document.getElementById("doodleDate").innerHTML = doodleDate[doodleI];
	document.getElementById("doodleFullScreen").href = doodleFullScreen[doodleI];
}
function crop(change, load) {
	if (imageProperties[doodleI].length > 0) {
		if (load) {
			imageI = Math.floor(document.getElementById("imageIndex").value - 1);
		} else {
			imageI = lastImageI[doodleI];
		}
		lastI = imageI;
		checkImageI(change);

		if ((imageI !== lastI) || load) {
			cropImage(imageSource[doodleI][imageProperties[doodleI][imageI][0]], imageProperties[doodleI][imageI][1], imageProperties[doodleI][imageI][2], imageProperties[doodleI][imageI][3], imageProperties[doodleI][imageI][4], imageOriginalSource[doodleI][imageProperties[doodleI][imageI][0]]);

			lastImageI[doodleI] = imageI;
			document.getElementById("imageIndex").value = imageI + 1;
		}
	} else {
		cropImage("./assets/main/empty.png", 0, 0, 0, 0, "Not Avaliable");

		lastImageI[doodleI] = "Not Avaliable";
		document.getElementById("imageIndex").value = 0;
	}
}
function trim(change, load) {
	if (audioProperties[doodleI].length > 0) {
		if (load) {
			audioI = Math.floor(document.getElementById("audioIndex").value - 1);
		} else {
			audioI = lastAudioI[doodleI];
		}
		lastI = audioI;
		checkAudioI(change);

		if ((audioI !== lastI) || load) {
			trimAudio(audioSource[doodleI][audioProperties[doodleI][audioI][0]], audioProperties[doodleI][audioI][1], audioProperties[doodleI][audioI][2], audioOriginalSource[doodleI][audioProperties[doodleI][audioI][0]]);
			
			lastAudioI[doodleI] = audioI;
			document.getElementById("audioIndex").value = audioI + 1;
		}
	} else {
		trimAudio("./assets/main/empty.mp3", 0, 0, "Not Avaliable");

		lastAudioI[doodleI] = "Not Avaliable";
		document.getElementById("audioIndex").value = 0;
	}
}

function cropImage(imagePath, newX, newY, newWidth, newHeight, originalImagePath) {
	const canvas = document.getElementById("image");
	let ctx = canvas.getContext("2d");

	ctx.clearRect(0, 0, canvas.width, canvas.height);
	let originalImage = new Image();
	originalImage.src = imagePath;
	ctx = canvas.getContext("2d");

	originalImage.addEventListener("load", function () {
		canvas.width = newWidth;
		canvas.height = newHeight;
		ctx.drawImage(originalImage, newX, newY, newWidth, newHeight, 0, 0, newWidth, newHeight);
	
		document.getElementById("imageWidth").innerHTML = newWidth;
		document.getElementById("imageHeight").innerHTML = newHeight;
		document.getElementById("imageX").innerHTML = newX;
		document.getElementById("imageY").innerHTML = newY;
		document.getElementById("imageSourceAnchor").href = originalImagePath;
		document.getElementById("imageSource").innerHTML = originalImagePath;
	});
}
function trimAudio(audioPath, audioStart, audioEnd, originalAudioPath) {
	document.getElementById("audio").src = audioPath + "#t=" + audioStart + "," + audioEnd;

	document.getElementById("audioStart").innerHTML = audioStart;
	document.getElementById("audioEnd").innerHTML = audioEnd;
	document.getElementById("audioDuration").innerHTML = audioEnd - audioStart;
	document.getElementById("audioSourceAnchor").href = originalAudioPath;
	document.getElementById("audioSource").innerHTML = originalAudioPath;
}

function downloadImage() {
	var element = document.getElementById("image");
	var elementDownload = element.toDataURL("image/png").replace("image/png", "image/octet-stream");

	var download = document.createElement("a");
	download.download = "imageIndex(" + imageI + ").png";
	download.href = elementDownload;
	download.click();
}
function downloadAudio() {
	var element = document.getElementById("audio");

	var download = document.createElement("a");
	download.download = "audioIndex(" + audioI + ").mp3";
	download.href = element.src + "#t=" + audioProperties[doodleI][audioI][1] + "," + audioProperties[doodleI][audioI][2];
	download.click();
}
