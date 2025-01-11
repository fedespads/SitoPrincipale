if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/connect4/sw.js')
      .then(registration => {
        console.log('ServiceWorker registration successful');
      })
      .catch(err => {
        console.log('ServiceWorker registration failed: ', err);
      });
  });
}

function rootVal(property, value) {
  document.documentElement.style.setProperty(property, value);
}

const CONFIG = {
  rows: 6,
  columns: 7,
  board: [],
  currentTurn: 0,
  gameOver: false
};

function initializeGame() {
  rootVal("--ncolonne", CONFIG.columns);
  rootVal("--nrighe", CONFIG.rows);
  
  const grid = createGameGrid();
  document.body.appendChild(grid);
  setupClickHandlers();
}

function createGameGrid() {
  const grid = $("<div></div>").attr("id", "grid");
  
  for (let row = 0; row < CONFIG.rows; row++) {
    CONFIG.board.push([]);
    for (let col = 0; col < CONFIG.columns; col++) {
      CONFIG.board[row].push(0);
      
      const cell = $("<div></div>")
        .attr("p", `${row}-${col}`)
        .addClass("elemento");
      
      grid.append(cell);
    }
  }
  
  return grid[0];
}

function setupClickHandlers() {
  document.addEventListener("click", handleCellClick);
}

function handleCellClick(e) {
  if (e.target.classList[0] == "elemento" && !CONFIG.gameOver) {
    let x = +e.target.getAttribute("p").split("-")[1];
    let y = -1;
    for (let i = CONFIG.rows - 1; i >= 0; i--) {
      if (CONFIG.board[i][x] == 0) {
        CONFIG.board[i][x] = (CONFIG.currentTurn % 2) + 1;
        CONFIG.currentTurn++;
        y = i;
        i = -1;
      }
    }

    if (y >= 0) {
      const targetCell = document.querySelector(`.elemento[p="${y}-${x}"]`);
      
      let cerchio = $("<div></div>");
      cerchio.addClass("cerchio");
      cerchio.attr("p", x + "-" + y);
      cerchio.addClass(CONFIG.currentTurn % 2 ? "r" : "y");
      
      $(targetCell).append(cerchio);
      
      let c = checkWinner(CONFIG.board);
      if (c.player > 0) {
        CONFIG.gameOver = true;
        showWinMessage(c.player, c.positions);
      }
    }
  }
}

document.addEventListener('DOMContentLoaded', initializeGame);

function checkWinner(board) {
  const rows = board.length;
  const cols = board[0].length;

  function checkDirection(row, col, rowDir, colDir) {
    const player = board[row][col];
    if (player === 0) return null;

    const positions = [[row, col]];

    for (let i = 1; i < 4; i++) {
      const newRow = row + i * rowDir;
      const newCol = col + i * colDir;
      if (
        newRow < 0 ||
        newRow >= rows ||
        newCol < 0 ||
        newCol >= cols ||
        board[newRow][newCol] !== player
      ) {
        return null;
      }
      positions.push([newRow, newCol]);
    }
    return { player, positions };
  }

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      const result =
        checkDirection(row, col, 0, 1) || // Orizzontale
        checkDirection(row, col, 1, 0) || // Verticale
        checkDirection(row, col, 1, 1) || // Diagonale \
        checkDirection(row, col, 1, -1); // Diagonale /

      if (result) return result;
    }
  }
  return { player: 0, positions: [] }; // Nessun vincitore
}
