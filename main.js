// Storage
let score = 0; //current Score
let highestScore = localStorage.getItem(`HS`);
// Print Scores
displayContainer.innerHTML = `<h2>Current Score : ${score}  ||  Highest  Score : ${highestScore}</h2>`;
// Snake Head
let snakePointer = document.getElementById("snakeHead");

// counter
let l = 0; //left
let t = 0; //top
let x, y; // coin x & y
let step = 10; // Step

// Generate Coins
function generateCoinsBoms() {
    // generate Rundom Num between 0 to  100 and are divided by 5
    x = Math.floor(Math.random() * 11) * 10;
    y = Math.floor(Math.random() * 11) * 10;
    // coin cordanates
    coin.style.left = `${x}%`;
    coin.style.top = `${y}%`;
    coin.style.transform = `translate(-${x}%,-${y}%)`;
    // generateCoinsBomsBoms
    boms.style.left = `${100 - x}%`;
    boms.style.top = `${100 - y}%`;
    boms.style.transform = `translate(-${100 - x}%,-${100 - y}%)`;
}
generateCoinsBoms();

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
            snakePointer.style.left = `${l}%`;
            snakePointer.style.transform = `translate(-${l}%,-${t}%)`;
            console.log(l);
        }
    }
    // Up
    else if (i.keyCode === 38) {
        if (t == 0) {
            return;
        } else {
            t -= step;
            snakePointer.style.top = `${t}%`;
            snakePointer.style.transform = `translate(-${l}%,-${t}%)`;
            console.log(t);
        }
    }
    // Right
    else if (i.keyCode === 39) {
        if (l == 100) {
            return;
        } else {
            l += step;
            snakePointer.style.left = `${l}%`;
            snakePointer.style.transform = `translate(-${l}%,-${t}%)`;
            console.log(l);
        }
    }
    // Down
    else if (i.keyCode === 40) {
        if (t == 100) {
            return;
        } else {
            t += step;
            snakePointer.style.top = `${t}%`;
            snakePointer.style.transform = `translate(-${l}%,-${t}%)`;
            console.log(t);
        }
    }
    if (t == y && l == x) {
        generateCoinsBoms();
        updateScore();
    }
    if (t == 100 - y && l == 100 - x) {
        l = t = 0;
        snakePointer.style.top = `0%`;
        snakePointer.style.left = `0%`;
        snakePointer.style.transform = `translate(0%,0%)`;
        generateCoinsBoms();
        score = 0;
        displayContainer.innerHTML = `<h2>Current Score : ${score}  ||  Highest  Score : ${highestScore}</h2>`;
    }
});
