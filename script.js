let scrambleBtn = document.getElementById('generate-scramble-btn');
let scrambleDisplay = document.getElementById('scramble-display');

const faces = ["U", "D", "R", "L", "B", "F", "U2", "D2", "R2", "L2", "B2", "F2", "U'", "D'", "R'", "L'", "B'", "F'"];
let scramble = '';

function generateScramble() {
    scramble = '';
    let currentFace = '';
    let currentFaceFiltered = '';
    let scrambleFiltered = '';
    let lastFace = '';

    for (let i = 0; i < 20; i++) {
        currentFace = faces[Math.floor(Math.random() * faces.length)];
        currentFaceFiltered = currentFace.replace(/[2']/g, "");
        scrambleFiltered = scramble.replace(/[2'\s]/g, "");
        lastFace = scrambleFiltered.slice(-1);

        while (currentFaceFiltered === lastFace && lastFace != '') {
            currentFace = faces[Math.floor(Math.random() * faces.length)];
            currentFaceFiltered = currentFace.replace(/[2']/g, "");
        }

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