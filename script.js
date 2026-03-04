function makeGrid(length, width) {

    const loopGuard = 0;
    const grid = document.querySelector('#grid');

    for (let i = 0; i < length; i++) {

        const columnDiv = document.createElement('div');
        columnDiv.classList.add('column');

        for (let j = 0; j < width; j++) {

            const rowDiv = document.createElement('div');
            rowDiv.classList.add('row');
            rowDiv.addEventListener('mouseenter', 
                (event) => event.target.classList.add('filled'))
            columnDiv.appendChild(rowDiv);

        }

        grid.appendChild(columnDiv);

    }
}

makeGrid(50, 50);