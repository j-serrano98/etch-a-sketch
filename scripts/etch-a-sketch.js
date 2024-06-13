document.addEventListener('DOMContentLoaded', () => {
    const body = document.querySelector('body');
    const wraper = document.querySelector('.wraper');
    const btn = document.querySelector('#btn');


    btn.addEventListener("click", () => {
        const gridsNumber = prompt('Enter number of grids...');
        parseInt(gridsNumber);

        if (gridsNumber > 100) {
            gridsNumber = alert('Numbers bigger than 100 are not allowed. Enter number of grids...');
        } else if (gridsNumber < 1) {
            gridsNumber = alert('Numbers smaller than 1 are not allowed. Enter number of grids...');
        } else {
            const gridList = document.querySelectorAll('.grid');
            gridList.forEach(grid => grid.remove());    
            createNewSketch(gridsNumber);
        }
        
    });


    const container = document.createElement('div');
    container.className = 'container';

    wraper.appendChild(container);

    function createNewSketch(grids=16) {
        for (let i = 0; i < grids; i++) {
            for (let j = 0; j < grids; j++) {
                const grid = document.createElement('div');
                grid.classList = 'grid'
                grid.style.width = `calc(100% / ${grids})`
                grid.style.height = `calc(100% / ${grids})`
                container.appendChild(grid)
                
            }
        
            const br =document.createElement('br');
            wraper.appendChild(br);
        }
    }

    function randomColor() {
        let color = [];
        for (let i = 0; i < 3; i++) {
            color.push(Math.floor(Math.random()*256));
        }
        return 'rgb(' + color.join(', ') + ')';
    }


    container.addEventListener('mouseover', (e) => {
        let target = e.target;

        target.style.backgroundColor = randomColor();
    })

    createNewSketch();

})