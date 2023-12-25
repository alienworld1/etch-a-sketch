const startSize = 16;
const minSize = 1;
const maxSize = 100;

squareGrid = document.querySelector("#square-grid");
newGridButton = document.querySelector("#create-button");

function paintSquare(event) {
    event.currentTarget.style.backgroundColor = getRandomColor();
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

function getRandomColor() {
    red = Math.floor(Math.random() * 255);
    green = Math.floor(Math.random() * 255);
    blue = Math.floor(Math.random() * 255);

    return `rgb(${red}, ${green}, ${blue})`;
}

function createNewGrid() {
    gridSize = +prompt("Enter the grid size:");

    if (isNaN(gridSize)) {
        alert("Please enter a valid number.");
        return;
    }

    if (gridSize < minSize || gridSize > maxSize) {
        alert("The number must be within 1 to 100");
        return;
    }

    clearGrid();
    drawGrid(gridSize);
} 

drawGrid(startSize);
newGridButton.addEventListener("click", createNewGrid);