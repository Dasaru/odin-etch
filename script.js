const CONTAINER_PIXEL_SIZE = 500;
const container = document.querySelector(".container");

createGrid();

container.addEventListener("mouseover", e => {
    if (e.target !== e.currentTarget) {
        e.target.style.backgroundColor = "#777";
    }
});

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