let doodleI = 0;
let imageI = 0;
let audioI = 0;
load(0);

const previousDoodleButton = document.querySelector("button.previousDoodle");
previousDoodleButton.addEventListener('click', function() {
	load(-1);
});
const nextDoodleButton = document.querySelector("button.nextDoodle");
nextDoodleButton.addEventListener('click', function() {
	load(1);
});
const loadDoodleButton = document.querySelector("button.loadDoodle");
loadDoodleButton.addEventListener('click', function() {
	load(0);
});

const previousImageButton = document.querySelector("button.previousImage");
previousImageButton.addEventListener('click', function() {
	crop(-1);
});
const nextImageButton = document.querySelector("button.nextImage");
nextImageButton.addEventListener('click', function() {
	crop(1);
});
const loadImageButton = document.querySelector("button.loadImage");
loadImageButton.addEventListener('click', function() {
	crop(0);
});
const downloadImageButton = document.querySelector("button.downloadImage");
downloadImageButton.addEventListener('click', function() {
	downloadImage();
});

const previousAudioButton = document.querySelector("button.previousAudio");
previousAudioButton.addEventListener('click', function() {
    trim(-1);
});
const nextAudioButton = document.querySelector("button.nextAudio");
nextAudioButton.addEventListener('click', function() {
	trim(1);
});
const loadAudioButton = document.querySelector("button.loadAudio");
loadAudioButton.addEventListener('click', function() {
	trim(0);
});
const downloadAudioButton = document.querySelector("button.downloadAudio");
downloadAudioButton.addEventListener('click', function() {
	downloadAudio();
});

function checkDoodleI(change) {
	doodleI += change;
    if (doodleI < 0) {
		doodleI = 0;
	} else if (doodleI > (imageSource.length - 1)) {
		doodleI = imageSource.length - 1;
	}
}
function checkImageI(change) {
	imageI += change;
    if (imageI < 0) {
		imageI = 0;
	} else if (imageI > (imageProperties[doodleI].length - 1)) {
		imageI = imageProperties[doodleI].length - 1;
	}
}
function checkAudioI(change) {
	audioI += change;
    if (audioI < 0) {
		audioI = 0;
	} else if (audioI > (audioProperties[doodleI].length - 1)) {
		audioI = audioProperties[doodleI].length - 1;
	}
}

function load(change) {
    doodleI = (Math.floor(document.getElementById("doodleIndex").value)) - 1;
    checkDoodleI(change);
    document.getElementById("doodleIndex").value = doodleI + 1;
    
    crop(0);
    trim(0);

    document.getElementById("doodleSourceAnchor").href = doodleSource[doodleI];
    document.getElementById("doodleSource").innerHTML = doodleName[doodleI];
    document.getElementById("doodleDate").innerHTML = doodleDate[doodleI];
	document.getElementById("doodleFullScreen").href = doodleFullScreen[doodleI];
}
function crop(change) {
	if imageProperties[doodleI].length > 0 {
		if Math.floor(document.getElementById("imageIndex").value === "Not Avaliable" {
			imageI = 0;
		} else {
			imageI = (Math.floor(document.getElementById("imageIndex").value)) - 1;
		}
	    checkImageI(change);
	    document.getElementById("imageIndex").value = imageI + 1;
	    cropImage(imageSource[doodleI][imageProperties[doodleI][imageI][0]], imageProperties[doodleI][imageI][1], imageProperties[doodleI][imageI][2], imageProperties[doodleI][imageI][3], imageProperties[doodleI][imageI][4], imageOriginalSource[doodleI][imageProperties[doodleI][imageI][0]]);
	} else {
		document.getElementById("imageIndex").value = "Not Avaliable";
		cropImage("./assets/main/empty.png", 0, 0, 0, 0, "Not Avaliable");
	}
}
function trim(change) {
	if audioProperties[doodleI].length > 0 {
		if Math.floor(document.getElementById("audioIndex").value === "Not Avaliable" {
			audioI = 0;
		} else {
			audioI = (Math.floor(document.getElementById("audioIndex").value)) - 1;
		}
		checkAudioI(change);
		document.getElementById("audioIndex").value = audioI + 1;
		trimAudio(audioSource[doodleI][audioProperties[doodleI][audioI][0]], audioProperties[doodleI][audioI][1], audioProperties[doodleI][audioI][2], audioOriginalSource[doodleI][audioProperties[doodleI][audioI][0]]);
	} else {
		document.getElementById("audioIndex").value = "Not Avaliable";
		trimAudio("./assets/main/empty.mp3", 0, 0, "Not Avaliable");
	}
}

function cropImage(imagePath, newX, newY, newWidth, newHeight, originalImagePath) {
  	const canvas = document.getElementById('image');
  	let ctx = canvas.getContext('2d');
			
  	ctx.clearRect(0, 0, canvas.width, canvas.height);
  	let originalImage = new Image();
	originalImage.src = imagePath;
	ctx = canvas.getContext('2d');
			
  	originalImage.addEventListener('load', function() {
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
	
  	var download = document.createElement('a');
  	download.download = "imageIndex(" + imageI + ").png";
  	download.href = elementDownload;
  	download.click();
}
function downloadAudio() {
	var element = document.getElementById("audio");

        var download = document.createElement('a');
        download.download = "audioIndex(" + audioI + ").mp3";
        download.href = element.src + "#t=" + audioProperties[doodleI][audioI][1] + "," + audioProperties[doodleI][audioI][2];
        download.click();
}
