// Define canvas properties
var targetCanvas = "canvas";
var canvas = document.getElementById(targetCanvas);
var ctx = canvas.getContext("2d");

// Define canvas characteristics
var ctxMainColour = "#000000";
var ctxOutlineColour = "#000000";

function setCanvasProperties() {
	canvas = document.getElementById(targetCanvas);
	ctx = canvas.getContext("2d");
}
function setCanvasCharacteristics(targetCanvasId, mainColour, outlineColour) {
	if(targetCanvasId) {
		targetCanvas = targetCanvasId;
	}
	if(mainColour) {
		ctxMainColour = mainColour;
	}
	if(outlineColour) {
		ctxOutlineColour = outlineColour;
	}
}
function beginDraw(path) {
	setCanvasCharacteristics(0, 0, 0);
	setCanvasProperties();

	if(path) {
		// Begin path
		ctx.beginPath();
	}
}
function closeDraw(path) {
	if(path) {
		// Close path
		ctx.closePath();
	}
}
function drawShape() {
	// Draw drawing
	ctx.stroke();
}
function drawFill() {
	// Fill drawing
	ctx.fillStyle = ctxMainColour;
	ctx.fill();
}
function drawCustomPath(path, length, startIndex, newShape, draw, fill) {
	if(newShape) {
		beginDraw(true);
	}
	
	if(length) {
		// Draw path with specified start index and path length
		for(let i = startIndex; i < length; i++) {
			drawLine(path[i][0], path[i][1], path[i][2], path[i][3], false, false);
		}
	} else {
		// Draw entire path from start to finish
		for(let i = 0; i < path.length; i++) {
			drawLine(path[i][0], path[i][1], path[i][2], path[i][3], false, false);
		}
	}
	
	if(newShape) {
		closeDraw(true);
	}
	
	if(fill) {
		drawFill();
	}
	if (draw) {
		drawShape();
	}
}

function drawLine(startX, startY, endX, endY, newShape, draw) {
	if(newShape) {
		beginDraw(true);
		ctx.moveTo(startX, startY);
	}
	
	ctx.lineTo(endX, endY);
	
	if(newShape) {
		closeDraw(true);
	}
	
	if (draw) {
		drawShape();
	}
}
function drawArc(x, y, width, startAngle, endAngle, newShape, draw, fill) {
	if(newShape) {
		beginDraw(true);
	}
	
	const startRadians = startAngle * (Math.PI / 180);
	const endRadians = endAngle * (Math.PI / 180);
	
	ctx.arc(x, y, width, startRadians, endRadians, ((startAngle - endAngle) > (endAngle - startAngle)));
	
	if(newShape) {
		closeDraw(true);
	}
	
	if(fill) {
		drawFill();
	}
	if (draw) {
		drawShape();
	}
}
function drawCustomArc(x, y, width, height, startAngle, endAngle, newShape, draw, fill) {
	if(newShape) {
		beginDraw(true);
	}
	
	const startRadians = startAngle * (Math.PI / 180);
	const endRadians = endAngle * (Math.PI / 180);
	
	ctx.ellipse(x, y, width, height, Math.PI, startRadians, endRadians, ((startAngle - endAngle) > (endAngle - startAngle)));
	
	if(newShape) {
		closeDraw(true);
	}
	
	if(fill) {
		drawFill();
	}
	if (draw) {
		drawShape();
	}
}
function drawRectangle(x, y, width, height, newShape, draw, fill) {
	if(newShape) {
		beginDraw(true);
	}
	
	ctx.rect(x, y, width, height);
	
	if(newShape) {
		closeDraw(true);
	}
	
	if(fill) {
		drawFill();
	}
	if (draw) {
		drawShape();
	}
}
function drawTriangle(x, y, width, height, newShape, draw, type, fill) {
	if(newShape) {
		beginDraw(true);
	}
	
	const halfWidth = width / 2;
	const halfHeight = height / 2;
	
	switch(type) {
		case "right":
			drawCustomPath([[x - halfWidth, y - halfHeight, x + halfWidth, y + halfHeight], [x + halfWidth, y + halfHeight, x - halfWidth, y + halfHeight], [x - halfWidth, y + halfHeight, x - halfWidth, y - halfHeight]], false, 0, false, false, false);
			
			break;
		
		case "isoceles":
			drawCustomPath([[x, y - halfHeight, x + halfWidth, y + halfHeight], [x + halfWidth, y + halfHeight, x - halfWidth, y + halfHeight], [x - halfWidth, y + halfHeight, x, y - halfHeight]], false, 0, false, false, false);
			
			break;
			
		case "equilateral":
			drawCustomPath([[x, y - halfWidth, x + halfWidth, y + halfWidth], [x + halfWidth, y + halfWidth, x - halfWidth, y + halfWidth], [x - halfWidth, y + halfWidth, x, y - halfWidth]], false, 0, false, false, false);
			
			break;
	}
	
	if(newShape) {
		closeDraw(true);	
	}
	
	if(fill) {
		drawFill();
	}
	if (draw) {
		drawShape();
	}
}
function drawCircle(x, y, width, newShape, draw, fill) {
	if(newShape) {
		beginDraw(true);
	}
	
	drawArc(x, y, width, -180, 180, newShape, draw, fill);
	
	if(newShape) {
		closeDraw(true);	
	}
	
	if(fill) {
		drawFill();
	}
	if (draw) {
		drawShape();
	}
}
function drawEllipse(x, y, width, height, newShape, draw, fill) {
	if(newShape) {
		beginDraw(true);
	}
	
	drawCustomArc(x, y, width, height, -180, 180, false, false, false);
	
	if(newShape) {
		closeDraw(true);	
	}
	
	if(fill) {
		drawFill();
	}
	if (draw) {
		drawShape();
	}
}
function drawText(x, y, text, font, size, weight, newShape, draw, fill) {
	if(newShape) {
		beginDraw(true);	
	}
	
	let fontText = "";
	
	if(weight) {
		fontText += `${weight} `;
	} else {
		fontText += "normal ";
	}
	if(size) {
		fontText += `${size}px `;
	} else {
		fontText += "16px ";
	}
	if(font) {
		fontText += `${font}`;
	} else {
		fontText += "Times New Roman";
	}
	ctx.font = fontText;
	
	if(newShape) {
		closeDraw(true);	
	}
	if(fill) {
		ctx.fillStyle = ctxMainColour;
		ctx.fillText(text, x, y);
	}
	if (draw) {
		ctx.strokeStyle = ctxOutlineColour;
		ctx.strokeText(text, x, y);
	}
}
function drawMedia(x, y, src, startPixelX, startPixelY, endPixelX, endPixelY, newShape, draw) {
	if(newShape) {
		beginDraw(false);	
	}
	
	if(newShape) {
		closeDraw(false);	
	}
	if (draw) {
		let media = new Image();
		media.src = src;
		const imgWidth = endPixelX - startPixelX;
		const imgHeight = endPixelY - startPixelY;
		ctx.drawImage(media, startPixelX, startPixelY, imgWidth, imgHeight, x, y, imgWidth, imgHeight);
	}
}
