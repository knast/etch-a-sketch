const gridContainer = document.querySelector('.container');
const divInContainer = document.createElement('div');
divInContainer.style.display = 'inline';

for(let i = 0; i < 256; i++) {
    const divInContainer = document.createElement('div');
    gridContainer.appendChild(divInContainer);
    divInContainer.addEventListener('mousedown', () => {
        divInContainer.style.backgroundColor = '#24C8FA';
    })
   
    
}



