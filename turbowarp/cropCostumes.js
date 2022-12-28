class CropCostumes {
	constructor(runtime) {
		this.runtime = runtime;
	}

	getInfo() {
		return {
			id: "cropCostumes",
			name: "Crop Costumes",
			
			blocks: [
				{
					opcode: "cropCostume",
					blockType: Scratch.BlockType.COMMAND,
					
					text: formatMessage({
						id: "cropCostume",
						defaultMessage: "crop [COSTUME] at x: [X], y: [Y] with width: [WIDTH], height: [HEIGHT]",
						description: "Crop costume by origin x and y, and crop width and height."
					}),
					
					arguments: {
						COSTUME: {
							type: Scratch.ArgumentType.NUMBER
						},
						
						X: {
							type: Scratch.ArgumentType.NUMBER,
							defaultValue: 0
						},
						Y: {
							type: Scratch.ArgumentType.NUMBER,
							defaultValue: 0
						},
						
						WIDTH: {
							type: Scratch.ArgumentType.NUMBER,
							defaultValue: 50
						},
						HEIGHT: {
							type: Scratch.ArgumentType.NUMBER,
							defaultValue: 50
						}
					},

					filter: [Scratch.TargetType.SPRITE]
				}
			],
		};
	};

	cropCostume(args) {
		return args.COSTUME + 1;
	};
}

Scratch.extensions.register(new CropCostumes());
