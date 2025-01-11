function insertAfter(newElement, referenceElement) {
  referenceElement.parentNode.insertBefore(
    newElement,
    referenceElement.nextSibling
  );
}

function randint(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function y3(x1, y1, x2, y2, x3) {
  return ((y2 - y1) / (x2 - x1)) * x3 + (y1 - ((y2 - y1) / (x2 - x1)) * x1);
}
function rootVal(a,b){
  document.documentElement.style.setProperty(a,b);

}

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
  return { player: 0, positions: [] };
}

function showWinMessage(player, positions) {
  positions.forEach((e) => {
    let cell = document.querySelector(`.elemento[p="${e[0]}-${e[1]}"]`);
    let cerchio = cell.querySelector('.cerchio');
    $(cerchio).addClass("w");
    
    let b = $("<div></div>");
    b.addClass("outline");
    cell.appendChild(b[0]);
  });

  const messageContainer = $("<div></div>").addClass("win-message");
  const playerColor = player === 1 ? 'red' : 'yellow';
  const emoji = player === 1 ? '🔴' : '🟡';
  
  messageContainer.html(`
    <div class="win-content">
      <div class="win-emoji">${emoji}</div>
      <h2>VITTORIA!</h2>
      <p>Il giocatore <span class="player-${playerColor}">${playerColor}</span> ha vinto!</p>
      <button class="play-again">Nuova Partita</button>
    </div>
  `);

  $('body').append(messageContainer);
  
  setTimeout(() => {
    messageContainer.addClass('show');
  }, 100);

  messageContainer.find('.play-again').click(() => location.reload());
}
