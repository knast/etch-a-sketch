const gridContainer = document.querySelector('.container');
const divInContainer = document.createElement('div');
divInContainer.style.display = 'inline';

const newGridBtn = document.querySelector('.new-grid');
const restartBtn = document.querySelector('.restart');



newGridBtn.addEventListener('click', () => {
    let userInputWidth = Number(prompt('How many blocks in width?'));
    let userInputHeight = Number(prompt('How many blocks in height?'));
    let gridColor = ((prompt('What color of the grid do you want?')).toString()).toLowerCase();
    gridContainer.style.gridTemplateColumns = `repeat(${userInputHeight}, 1fr)`;
    gridContainer.style.gridTemplateRows = `repeat(${userInputWidth}, 1fr)`;
    for(let i = 0; i < userInputWidth*userInputHeight; i++) {
        const divInContainer = document.createElement('div');
        divInContainer.style.borderRadius = '8px';
        divInContainer.classList.add('in-container');
        gridContainer.appendChild(divInContainer);
        divInContainer.addEventListener('mouseover', () => {
            divInContainer.style.backgroundColor = gridColor;
        })
    }
    restartBtn.addEventListener('click', () => {
        for(let j = 0; j < userInputWidth*userInputHeight; j++) {
            const partOfGrid = document.querySelector('.in-container');
            gridContainer.removeChild(partOfGrid);
        }
    })
})




