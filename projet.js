const prompt = require('prompt');
prompt.start();

let grid = [
	[" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
	[" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
	[" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
	[" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
	[" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
	[" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
	[" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
	[" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
	[" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
	[" ", " ", " ", " ", " ", " ", " ", " ", " ", " "]
];

let rover = {
    direction: 'N',
	x: 0,
	y: 0,
	travelLog: [],
};

const drawGrid = (roverGrid) => {
	for (let y = 0; y < 10; y++) {
		for (let x = 0; x < 10; x++) {
			grid[y][x] = ' '
		}
	}
	
	grid[roverGrid.y][roverGrid.x] = roverGrid.direction
	console.table(grid)
}

const turnLeft = (roverLeft) => {

    switch (roverLeft.direction) {
		case 'N':
			roverLeft.direction = 'W';
			break
		case 'W':
			roverLeft.direction = 'S';
			break
		case 'S':
			roverLeft.direction = 'E';
			break
		case 'E':
			roverLeft.direction = 'N';
			break
		default:
			roverLeft.direction = 'N';
			break
	}
};

const turnRight = (roverRight) => {

    switch (roverRight.direction) {
		case 'N':
			roverRight.direction = 'E';
			break
		case 'W':
			roverRight.direction = 'N';
			break
		case 'S':
			roverRight.direction = 'W';
			break
		case 'E':
			roverRight.direction = 'S';
			break
		default:
			roverRight.direction = 'N';
			break	
	}
};

const moveForward = (roverForward) => {

	roverForward.travelLog.push({
		x: roverForward.x,
		y: roverForward.y,
	})

	switch (roverForward.direction) {
		case 'N':
			if (roverForward.y <= 0) {
				console.log('you cannot move in this direction');
				break
			}
		
			roverForward.y--
			break
		case 'W':
			if (roverForward.x <= 0) {
				console.log('you cannot move in this direction');
				break
			}

			roverForward.x--
			break
		case 'S':
			if (roverForward.y >= 9) {
				console.log('you cannot move in this direction')
				break
			}
			
			roverForward.y++
			break
		case 'E':
			if (roverForward.x >= 9) {
				console.log('you cannot move in this direction')
				break
			}

			roverForward.x++
			break
	} 
}

const moveBackward = (roverBackward) => {

	roverBackward.travelLog.push({
		x: roverBackward.x,
		y: roverBackward.y,
	})

	switch (roverBackward.direction) {
		case 'N':
			if (roverBackward.y >= 9) {
				console.log('you cannot move in this direction');
				break
			}
		
			roverBackward.y++
			break
		case 'W':
			if (roverBackward.x >= 9) {
				console.log('you cannot move in this direction');
				break
			}

			roverBackward.x++
			break
		case 'S':
			if (roverBackward.y <= 0) {
				console.log('you cannot move in this direction')
				break
			}
			
			roverBackward.y--
			break
		case 'E':
			if (roverBackward.x <= 0) {
				console.log('you cannot move in this direction')
				break
			}

			roverBackward.x--
			break
	} 
}

const pilotRover = (commands) => {
	commands = commands.split('') 
	for (let i = 0; i < commands.length; i++) {
		if (commands[i] === 'l') {
			turnLeft(rover)
		} else if (commands[i] === 'r') {
			turnRight(rover)
		} else if (commands[i] === 'f') {
			moveForward(rover)
		} else if (commands[i] === 'b') {
			moveBackward(rover)
		} else {
			console.error(commands[i], 'is not a valid command')
			break
		}
	}
}

const promptCommands = () => {
	prompt.get('commands', (err, res) => {
		if (err) {
			console.log(err)
			return
		}

		pilotRover(res.commands)
		drawGrid(rover)
		console.log(rover)
		promptCommands()
	}) 
}

drawGrid(rover)
promptCommands()
