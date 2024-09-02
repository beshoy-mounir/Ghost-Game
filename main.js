// Storage
let score = 0; //current Score
let highestScore = localStorage.getItem(`HS`);
// Print Scores
displayContainer.innerHTML = `<h2>Current Score : 0  ||  Highest  Score : 0</h2>`;
// ghost Head
let ghostPointer = document.getElementById("ghostHead");

// counter
let l = 0; //left
let t = 0; //top
let x, y; // coin x & y
let step = 10; // Step

// Generate Coins
function generateCoinsBoms() {
    // generate Rundom Num between 0 to  100 and are divided by 5
    // Coins
    x = Math.floor(Math.random() * 11) * 10;
    y = Math.floor(Math.random() * 11) * 10;
    // bombs
    z = Math.floor(Math.random() * 11) * 10;
    w = Math.floor(Math.random() * 11) * 10;
    // coin coordinates
    coin.style.left = `${x}%`;
    coin.style.top = `${y}%`;
    coin.style.transform = `translate(-${x}%,-${y}%)`;
    // Boms coordinates
    boms.style.left = `${z}%`;
    boms.style.top = `${w}%`;
    boms.style.transform = `translate(-${z}%,-${w}%)`;
}
// To make sure bombs and coins can not be at the same coordinates
generateCoinsBoms();
if (x == z || y == w) {
    generateCoinsBoms();
}

// update Score
function updateScore() {
    score++;
    if (score > highestScore) {
        highestScore = score;
        localStorage.setItem(`HS`, `${highestScore}`);
    }
    displayContainer.innerHTML = `<h2>Current Score : ${score}  ||  Highest  Score : ${highestScore}</h2>`;
}

addEventListener("keyup", (i) => {
    // left
    if (i.keyCode === 37) {
        if (l == 0) {
            return;
        } else {
            l -= step;
            ghostPointer.style.left = `${l}%`;
            ghostPointer.style.transform = `translate(-${l}%,-${t}%)`;
            console.log(l);
        }
    }
    // Up
    else if (i.keyCode === 38) {
        if (t == 0) {
            return;
        } else {
            t -= step;
            ghostPointer.style.top = `${t}%`;
            ghostPointer.style.transform = `translate(-${l}%,-${t}%)`;
            console.log(t);
        }
    }
    // Right
    else if (i.keyCode === 39) {
        if (l == 100) {
            return;
        } else {
            l += step;
            ghostPointer.style.left = `${l}%`;
            ghostPointer.style.transform = `translate(-${l}%,-${t}%)`;
            console.log(l);
        }
    }
    // Down
    else if (i.keyCode === 40) {
        if (t == 100) {
            return;
        } else {
            t += step;
            ghostPointer.style.top = `${t}%`;
            ghostPointer.style.transform = `translate(-${l}%,-${t}%)`;
            console.log(t);
        }
    }
    if (t == y && l == x) {
        generateCoinsBoms();
        updateScore();
    }
    if (t == w && l == z) {
        l = t = 0;
        ghostPointer.style.top = `0%`;
        ghostPointer.style.left = `0%`;
        ghostPointer.style.transform = `translate(0%,0%)`;
        generateCoinsBoms();
        score = 0;
        displayContainer.innerHTML = `<h2>Current Score : ${score}  ||  Highest  Score : ${highestScore}</h2>`;
    }
});
