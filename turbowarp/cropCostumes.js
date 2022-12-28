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
							type: Scratch.ArgumentType.NUMBER
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
		return args.COSTUME;
	}
}

Scratch.extensions.register(new CropCostumes);
