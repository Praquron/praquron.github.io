function initBuffers(gl) {
  	const positionBuffer = initPositionBuffer(gl);
	const textureCoordBuffer = initTextureBuffer(gl);
	const indexBuffer = initIndexBuffer(gl);
	
	
  	return {
    	position: positionBuffer,
		textureCoord: textureCoordBuffer,
		indices: indexBuffer,
  	};
}

function initPositionBuffer(gl) {
  	// Create a buffer for the square's positions.
  	const positionBuffer = gl.createBuffer();

  	// Select the positionBuffer as the one to apply buffer
  	// operations to from here out.
  	gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);

  	// Now create an array of positions for the square.
  	const positions = [
		-1.0, -1.0, 1.0, 1.0, -1.0, 1.0, 1.0, 1.0, 1.0, -1.0, 1.0, 1.0,
		-1.0, -1.0, -1.0, -1.0, 1.0, -1.0, 1.0, 1.0, -1.0, 1.0, -1.0, -1.0,
		-1.0, 1.0, -1.0, -1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, -1.0,
		-1.0, -1.0, -1.0, 1.0, -1.0, -1.0, 1.0, -1.0, 1.0, -1.0, -1.0, 1.0,
		1.0, -1.0, -1.0, 1.0, 1.0, -1.0, 1.0, 1.0, 1.0, 1.0, -1.0, 1.0,
		-1.0, -1.0, -1.0, -1.0, -1.0, 1.0, -1.0, 1.0, 1.0, -1.0, 1.0, -1.0,
	];

  	// Now pass the list of positions into WebGL to build the
  	// shape. We do this by creating a Float32Array from the
  	// JavaScript array, then use it to fill the current buffer.
  	gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(positions), gl.STATIC_DRAW);

  	return positionBuffer;
}

function initColorBuffer(gl) {
  	const faceColors = [
		[1.0, 1.0, 1.0, 1.0], 
		[1.0, 0.0, 0.0, 1.0],
		[0.0, 1.0, 0.0, 1.0],
		[0.0, 0.0, 1.0, 1.0],
		[1.0, 1.0, 0.0, 1.0],
		[1.0, 0.0, 1.0, 1.0],
	];
	
	var colors = [];
	
	for (var j = 0; j < faceColors.length; ++j) {
		const c = faceColors[j];
		colors = colors.concat(c, c, c, c);
	}
	
  	const colorBuffer = gl.createBuffer();
  	gl.bindBuffer(gl.ARRAY_BUFFER, colorBuffer);
  	gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(colors), gl.STATIC_DRAW);
  
  	return colorBuffer;
}

function initIndexBuffer(gl) {
	const indexBuffer = gl.createBuffer();
	gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indexBuffer);
	
	const indices = [
		0, 
		1, 
		2, 
		0, 
		2, 
		3, 
		4, 
		5, 
		6, 
		4, 
		6, 
		7, 
		8, 
		9, 
		10, 
		8, 
		10, 
		11, 
		12, 
		13, 
		14, 
		12, 
		14, 
		15, 
		16, 
		17, 
		18, 
		16, 
		18, 
		19, 
		20, 
		21, 
		22, 
		20, 
		22, 
		23, 
	];
	
	gl.bufferData(
		gl.ELEMENT_ARRAY_BUFFER,
		new Uint16Array(indices),
		gl.STATIC_DRAW
	);
	
	return indexBuffer;
}

function initTextureBuffer(gl) {
	const textureCoordBuffer = gl.createBuffer();
	gl.bindBuffer(gl.ARRAY_BUFFER, textureCoordBuffer);
	
	const textureCoordinates = [
		0.0, 0.0, 1.0, 0.0, 1.0, 1.0, 0.0, 1.0,
		0.0, 0.0, 1.0, 0.0, 1.0, 1.0, 0.0, 1.0,
		0.0, 0.0, 1.0, 0.0, 1.0, 1.0, 0.0, 1.0,
		0.0, 0.0, 1.0, 0.0, 1.0, 1.0, 0.0, 1.0,
		0.0, 0.0, 1.0, 0.0, 1.0, 1.0, 0.0, 1.0,
		0.0, 0.0, 1.0, 0.0, 1.0, 1.0, 0.0, 1.0,
	];
	
	gl.bufferData(
		gl.ARRAY_BUFFER,
		new Float32Array(textureCoordinates),
		gl.STATIC_DRAW
	);
	
	return textureCoordBuffer
}

export { initBuffers };
