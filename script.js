const startSize = 16;

squareGrid = document.querySelector("#square-grid");

function drawGrid(sideLength) {

    squareDimensions = `${100/sideLength}%`

    for (let i = 0; i < sideLength * sideLength; i++) {
        square = document.createElement("div");
        square.classList.add("square");
        
        square.style.width = squareDimensions;
        square.style.height = squareDimensions;

        squareGrid.appendChild(square);
    }
}

drawGrid(startSize);