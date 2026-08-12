const faces = ['U', 'D', 'R', 'L', 'B', 'F'];
let scramble = '';

function generateScramble() {
    scramble = faces[Math.floor(Math.random() * faces.length)];
    return scramble;
}