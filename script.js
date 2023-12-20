const CONTAINER_PIXEL_SIZE = 500;
const container = document.querySelector(".container");
const newGridBtn = document.querySelector(".newGridBtn");

createGrid();

container.addEventListener("mouseover", e => {
    if (e.target !== e.currentTarget) {
        e.target.style.backgroundColor = createRGBColor();
    }
});

newGridBtn.addEventListener("click", createNewGrid);

function createGrid(size = 16) {
    const GRID_SIZE = size**2;
    const divSize = CONTAINER_PIXEL_SIZE / size;
    for (let i=0; i < GRID_SIZE; i++) {
        let div = document.createElement("div");
        div.style.width = divSize + "px";
        div.style.height = divSize + "px";
        container.append(div);
    }
}

function clearGrid() {
    container.innerHTML = "";
}

function createNewGrid() {
    let size = prompt("Enter a new grid width size (5-100)");
    size = Number.parseInt(size);
    if (size >= 5 && size <= 100) {
        clearGrid();
        createGrid(size);
    } else {
        alert("Error: Size must be between 5 and 100!");
    }
}

function createRGBColor() {
    const red = Math.floor(Math.random()*256);
    const blue = Math.floor(Math.random()*256);
    const green = Math.floor(Math.random()*256);
    return `rgb(${red}, ${blue}, ${green})`;
}