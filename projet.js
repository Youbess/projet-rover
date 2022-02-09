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

const pilotRover = (commands) => {
	commands = commands.split('') 
	for (let i = 0; i < commands.length; i++) {
		if (commands[i] === 'l') {
			turnLeft(rover)
		} else if (commands[i] === 'r') {
			turnRight(rover)
		} else if (commands[i] === 'f') {
			moveForward(rover)
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
		console.log(rover)
		promptCommands()
	}) 
}

promptCommands()
