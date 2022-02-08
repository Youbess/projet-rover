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
	switch (roverForward.direction) {
		case 'N':
			roverForward.y--
			break
		case 'W':
			roverForward.x--
			break
		case 'S':
			roverForward.y++
			break
		case 'E':
			roverForward.x++
			break
	} 
}
