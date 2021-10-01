document.addEventListener('DOMContentLoaded', () => {
    const grid = document.querySelector('.grid');
    let width = 10;
    let bombAmount = 20;
    let squares = [];
    


    // Create Board
    function createBoard() {
        // get shuffled game array with random bombs
        const bombsArray = Array(bombAmount).fill('bomb');
        const emptyArray = Array(width * width - bombAmount).fill('valid');
        const gamesArray = emptyArray.concat(bombsArray);
        const shuffledArray = gamesArray.sort( () => Math.random() - 0.5);

        // Create 100 squares and insert into the grid
        for(let i = 0; i < width*width; i++ ) {
            const square = document.createElement('div');
            square.setAttribute('id', i)
            square.classList.add(shuffledArray[i])
            grid.appendChild(square);
            squares.push(square)
        }
        // add numbers 
        for(let i = 0; i < squares.length; i++) {
            let total = 0
            const isLeftEdge = (i % width === 0);
            const isRightEdge = (i % width === width -1);

            if(squares[i].classList.contains('valid')){
                if(i > 0 && !isLeftEdge && squares[i -1].classList.contains('bomb')) total++
               


            } else {

            }
        }
    }
    createBoard()

})