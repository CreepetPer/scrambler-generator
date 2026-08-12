let scrambleBtn = document.getElementById('generate-scramble-btn');
let scrambleDisplay = document.getElementById('scramble-display');

const faces = ["U", "D", "R", "L", "B", "F", "U2", "D2", "R2", "L2", "B2", "F2", "U'", "D'", "R'", "L'", "B'", "F'"];
let scramble = '';

function generateScramble() {
    scramble = '';

    for (let i = 0; i < 20; i++) {
        let currentFace = faces[Math.floor(Math.random() * faces.length)];
        if (scramble === '') {
            scramble += currentFace;
        } else {
            scramble += ` ${currentFace}`;
        }
    }

    scrambleDisplay.textContent = scramble;
    return scramble;
}

scrambleBtn.addEventListener('click', () => {
    generateScramble();
});