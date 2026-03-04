function makeGrid(length, width) {

    removeOldGrid();    
    const grid = document.querySelector('#grid');


    for (let i = 0; i < length; i++) {

        const columnDiv = document.createElement('div');
        columnDiv.classList.add('column');

        for (let j = 0; j < width; j++) {

            const rowDiv = document.createElement('div');
            rowDiv.classList.add('row');
            rowDiv.addEventListener('mouseenter', modifyDiv);
            columnDiv.appendChild(rowDiv);

        }

        grid.appendChild(columnDiv);

    }
}

function modifyDiv(event) {
    event.target.classList.add('filled');
    event.target.style.backgroundColor = randomRGB();
    const currentOpacity = event.target.style.opacity;
    event.target.style.opacity = opacityDecrement(currentOpacity);
   
}

function opacityDecrement(currentOpacity) {
    if (+currentOpacity > 0) {
        return "" + (currentOpacity - 0.1);
    } else if (currentOpacity === "") {
        return "0.9";
    } else {
        return "0.0";
    }
}

function randomRGB() {
    let r = Math.floor((Math.random() * 255)) + 1;
    let g = Math.floor((Math.random() * 255)) + 1;
    let b = Math.floor((Math.random() * 255)) + 1;
    return `rgb( ${r}, ${g}, ${b})`;
}

function removeOldGrid() {

    document.querySelector('#grid').remove()
    const newGridDiv = document.createElement('div');
    newGridDiv.id = 'grid';

    const body = document.querySelector('body');
    body.appendChild(newGridDiv)
}

function promptGridSize() {

    let gridSize = +prompt(
        'Enter a grid size (ex. 16 makes 16*16 grid. MAX 100)', 16
    )

    if (gridSize 
        && Math.floor(gridSize) === gridSize 
        && gridSize <= 100
        && gridSize > 0) {

        makeGrid(gridSize, gridSize)

    } else {
        alert('Invalid entry. Grid size must be a whole number between 1 and 100.')
    }
}

const newGridButton = document.querySelector('button');
newGridButton.addEventListener('click', promptGridSize);
makeGrid(16, 16);