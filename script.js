squareGrid = document.querySelector("#square-grid");

function drawGrid(sideLength) {

    squareDimensions = `${100/sideLength}%`

    for (let i = 0; i < sideLength * sideLength; i++) {
        square = document.createElement("div");
        square.classList.add("square");

        squareGrid.appendChild(square);
    }
}

drawGrid(16);