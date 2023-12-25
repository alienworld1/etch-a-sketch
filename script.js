const startSize = 16;

squareGrid = document.querySelector("#square-grid");

function paintSquare(event) {
    event.currentTarget.classList.toggle("black-background");
}

function drawGrid(sideLength) {

    squareDimensions = `${100/sideLength}%`

    for (let i = 0; i < sideLength * sideLength; i++) {
        square = document.createElement("div");
        square.classList.add("square");
        
        square.style.width = squareDimensions;
        square.style.height = squareDimensions;

        square.addEventListener("mouseover", paintSquare);

        squareGrid.appendChild(square);
    }
}

drawGrid(startSize);