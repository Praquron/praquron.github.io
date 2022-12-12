function initBuffers(gl) {
	const positionBuffer = initPositionBuffer(gl);
	
	return {
		position: positionBuffer,
	};
}

function initPositionBuffer(gl) {
	const positionBuffer = gl.createBuffer();
	gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
	
	const positions = [1.0, 1.0, -1.0, 1.0, 1.0, -1.0, -1.0, -1.0];
	gl.bufferData(gl.ARRAY_BUFFER, newFloat32Array(positions), gl.STATIC_DRAW);
	
	return positionBuffer;
}

export { initBuffers };
