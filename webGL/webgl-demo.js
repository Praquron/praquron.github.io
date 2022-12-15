import { initBuffers } from "./init-buffers.js";
import { drawScene } from "./draw-scene.js";

let cubeRotation = 0.0;
let deltaTime = 0;

main();

//
// start here
//
function main() {
  	const canvas = document.querySelector("#glcanvas");
  	// Initialize the GL context
  	const gl = canvas.getContext("webgl");

  	// Only continue if WebGL is available and working
  	if (gl === null) {
    	alert(
      		"Unable to initialize WebGL. Your browser or machine may not support it."
    	);
    	return;
  	}

  	// Set clear color to black, fully opaque
  	gl.clearColor(0.0, 0.0, 0.0, 1.0);
  	// Clear the color buffer with specified clear color
  	gl.clear(gl.COLOR_BUFFER_BIT);

  	// Vertex shader program
  	const vsSource = `
    	attribute vec4 aVertexPosition;
      	attribute vec4 aVertexColor;
      
    	uniform mat4 uModelViewMatrix;
    	uniform mat4 uProjectionMatrix;
      
      	varying lowp vec4 vColor;
      
    	void main(void) {
      	gl_Position = uProjectionMatrix * uModelViewMatrix * aVertexPosition;
        vColor = aVertexColor;
    }
`;

  	const fsSource = `
    	varying lowp vec4 vColor;
		
		void main(void) {
      		gl_FragColor = vColor;
    	}
  	`;

  	// Initialize a shader program; this is where all the lighting
  	// for the vertices and so forth is established.
  	const shaderProgram = initShaderProgram(gl, vsSource, fsSource);

  	// Collect all the info needed to use the shader program.
  	// Look up which attribute our shader program is using
  	// for aVertexPosition and look up uniform locations.
  	const programInfo = {
    	program: shaderProgram,
    	attribLocations: {
      		vertexPosition: gl.getAttribLocation(shaderProgram, "aVertexPosition"),
			vertexColor: gl.getAttribLocation(shaderProgram, "aVertexColor"),
    	},
    	uniformLocations: {
      		projectionMatrix: gl.getUniformLocation(
        	shaderProgram,
        	"uProjectionMatrix"
      		),
      		modelViewMatrix: gl.getUniformLocation(shaderProgram, "uModelViewMatrix"),
    	},
  	};

  	// Here's where we call the routine that builds all the
  	// objects we'll be drawing.
  	const buffers = initBuffers(gl);

  	// Draw the scene
  	let then = 0;
	
	function render(now) {
		now *= 0.001;
		deltaTime = now - then;
		then = now;
		
		drawScene(gl, programInfo, buffers, cubeRotation);
			cubeRotation += deltaTime;
		
			requestAnimationFrame(render);
	}
	
	requestAnimationFrame(render);
}


//
// Initialize a shader program, so WebGL knows how to draw our data
//
function initShaderProgram(gl, vsSource, fsSource) {
  	const vertexShader = loadShader(gl, gl.VERTEX_SHADER, vsSource);
  	const fragmentShader = loadShader(gl, gl.FRAGMENT_SHADER, fsSource);

  	// Create the shader program

  	const shaderProgram = gl.createProgram();
  	gl.attachShader(shaderProgram, vertexShader);
  	gl.attachShader(shaderProgram, fragmentShader);
  	gl.linkProgram(shaderProgram);

  	// If creating the shader program failed, alert

  	if (!gl.getProgramParameter(shaderProgram, gl.LINK_STATUS)) {
    	alert(
      		`Unable to initialize the shader program: ${gl.getProgramInfoLog(
        		shaderProgram
      		)}`
    	);
    	return null;
  	}

  	return shaderProgram;
}

//
// creates a shader of the given type, uploads the source and
// compiles it.
//
function loadShader(gl, type, source) {
  	const shader = gl.createShader(type);

  	// Send the source to the shader object

  	gl.shaderSource(shader, source);

  	// Compile the shader program

  	gl.compileShader(shader);

  	// See if it compiled successfully

  	if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    	alert(
      		`An error occurred compiling the shaders: ${gl.getShaderInfoLog(shader)}`
    	);
    	gl.deleteShader(shader);
    	return null;
  	}

  	return shader;
}

function loadTexture(gl, url) {
	const texture = gl.createTexture();
	gl.bindTexture(gl.TEXTURE_2D, texture);
	
	const level = 0;
	const internalFormat = gl.RGBA;
	const width = 1;
	const height = 1;
	const border = 0;
	const srcFormat = gl.RGBA;
	const srcType = gl.UNSIGNED_BYTE;
	const pixel = new Uint8Array([0, 0, 255, 255]);
	
	gl.texImage2D(
		gl.TEXTURE_2D,
		level,
		internalFormat,
		width,
		height,
		border,
		srcFormat,
		srcType,
		pixel
	);
	
	const image = new Image();
