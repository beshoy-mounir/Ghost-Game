// Snake Head
let snakePointer = document.getElementById("snakeHead");
// counter
let l = 0;
let t = 0;
// Step
let step = 10;
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
});
