class CropCostumes {
	getInfo() {
		return {
			id: "cropCostumes",
			name: "Crop Costumes",
			
			blocks: [
				{
					opcode: "cropCostume",
					blockType: Scratch.BlockType.COMMAND,
					
					text: "crop [COSTUME] at x: [X], y: [Y] with width: [WIDTH], height: [HEIGHT]",
					
					arguments: {
						COSTUME: {
							type: Scratch.ArgumentType.COSTUME
						},
						
						X: {
							type: Scratch.ArgumentType.NUMBER,
							default: 0
						},
						Y: {
							type: Scratch.ArgumentType.NUMBER,
							default: 0
						},
						
						WIDTH: {
							type: Scratch.ArgumentType.NUMBER,
							default: 50
						},
						HEIGHT: {
							type: Scratch.ArgumentType.NUMBER,
							default: 50
						}
					}
				}
			]
		};
	}

	cropCostume(args) {
		var tempCanvas = document.createElement("canvas");
		tempCanvas.width = args.WIDTH;
		tempCanvas.height = args.HEIGHT;
		
		var tempCtx = tempCanvas.getContext("2d");
		
		tempCtx.drawImage(args.COSTUME, 0, 0, args.WIDTH, args.HEIGHT);
		
		var output = tempCanvas.toDataURL();
		return output;
	}
}

Scratch.extensions.register(new CropCostumes);
