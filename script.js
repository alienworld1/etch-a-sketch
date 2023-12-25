const startSize = 16;
const minSize = 1;
const maxSize = 100;

squareGrid = document.querySelector("#square-grid");
newGridButton = document.querySelector("#create-button");

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

function clearGrid() {
    squareGrid.innerHTML = "";
}

function createNewGrid() {
    gridSize = +prompt("Enter the grid size:");

    clearGrid();
    drawGrid(gridSize);
} 

drawGrid(startSize);
newGridButton.addEventListener("click", createNewGrid);