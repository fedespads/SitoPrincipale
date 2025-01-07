let arr = [
  [null, null, null, null],
  [null, null, null, null],
  [null, null, null, null],
  [null, null, null, null],
];

let score = 0;
let highestValue = 32;

function updateScore(points) {
  score += points;
  document.querySelector('.score-value').textContent = score;
}

function nuovo() {
  const tile = {
    value: Math.random() < 0.9 ? 2 : 4,
    id: Math.random().toString(36).substr(2, 9),
  };

  const emptyPositions = [];
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      if (arr[i][j] === null) {
        emptyPositions.push([i, j]);
      }
    }
  }
  
  if (emptyPositions.length === 0) return false;
  
  const randomPosition =
    emptyPositions[Math.floor(Math.random() * emptyPositions.length)];

  arr[randomPosition[0]][randomPosition[1]] = tile;
  return true;
}
nuovo();
nuovo();

function aggiungi() {
  // Remove tiles that no longer exist
  const existingTiles = document.querySelectorAll('.square');
  existingTiles.forEach(tile => {
    let found = false;
    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 4; j++) {
        if (arr[i][j] && arr[i][j].id === tile.id) {
          found = true;
          // Update position and value
          tile.style.transform = `translate(${j * 100}%, ${i * 100}%)`;
          tile.querySelector('.number').innerHTML = arr[i][j].value;
          tile.setAttribute('data-value', arr[i][j].value);
          break;
        }
      }
    }
    if (!found) {
      tile.remove();
    }
  });

  // Add new tiles
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      if (arr[i][j] !== null && !document.getElementById(arr[i][j].id)) {
        const square = document.createElement("div");
        square.className = "square";
        square.style.transform = `translate(${j * 100}%, ${i * 100}%)`;
        square.id = arr[i][j].id;
        square.setAttribute('data-value', arr[i][j].value);

        const cell = document.createElement("div");
        cell.className = "cell";

        const number = document.createElement("div");
        number.className = "number";
        number.innerHTML = arr[i][j].value;

        cell.appendChild(number);
        square.appendChild(cell);
        document.querySelector(".grid").appendChild(square);
      }
    }
  }
}
aggiungi();

(function swipe() {
  let touchStartX = 0;
  let touchStartY = 0;
  let touchEndX = 0;
  let touchEndY = 0;

  document.addEventListener("touchstart", function (event) {
    touchStartX = event.touches[0].clientX;
    touchStartY = event.touches[0].clientY;
  });

  document.addEventListener("touchend", function (event) {
    touchEndX = event.changedTouches[0].clientX;
    touchEndY = event.changedTouches[0].clientY;

    const deltaX = touchEndX - touchStartX;
    const deltaY = touchEndY - touchStartY;

    const minSwipeDistance = 50;

    if (Math.abs(deltaX) > Math.abs(deltaY)) {
      if (Math.abs(deltaX) > minSwipeDistance) {
        if (deltaX > 0) {
          handleSwipe("right");
        } else {
          handleSwipe("left");
        }
      }
    } else {
      if (Math.abs(deltaY) > minSwipeDistance) {
        if (deltaY > 0) {
          handleSwipe("down");
        } else {
          handleSwipe("up");
        }
      }
    }
  });

  // Add keyboard controls
  document.addEventListener("keydown", function(event) {
    switch(event.key) {
      case "ArrowLeft":
        handleSwipe("left");
        break;
      case "ArrowRight":
        handleSwipe("right");
        break;
      case "ArrowUp":
        handleSwipe("up");
        break;
      case "ArrowDown":
        handleSwipe("down");
        break;
    }
  });
})();

function handleSwipe(direction) {
  let moved = false;
  let newArr = JSON.parse(JSON.stringify(arr));

  function rotate() {
    const rotated = Array(4).fill().map(() => Array(4).fill(null));
    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 4; j++) {
        rotated[i][j] = newArr[3-j][i];
      }
    }
    newArr = rotated;
  }

  // Normalize direction to left
  if (direction === "up") {
    rotate();
    rotate();
    rotate();
  } else if (direction === "right") {
    rotate();
    rotate();
  } else if (direction === "down") {
    rotate();
  }

  // Move and merge
  for (let i = 0; i < 4; i++) {
    let row = newArr[i].filter(cell => cell !== null);
    
    // Merge
    for (let j = 0; j < row.length - 1; j++) {
      if (row[j].value === row[j+1].value) {
        row[j].value *= 2;
        updateScore(row[j].value);
        
        if (row[j].value > highestValue) {
          highestValue = row[j].value;
          showMilestoneCelebration(row[j].value);
        }
        
        row.splice(j + 1, 1);
        moved = true;
      }
    }
    
    // Fill with nulls
    while (row.length < 4) {
      row.push(null);
    }
    
    // Check if moved
    if (JSON.stringify(newArr[i]) !== JSON.stringify(row)) {
      moved = true;
    }
    
    newArr[i] = row;
  }

  // Rotate back
  if (direction === "up") {
    rotate();
  } else if (direction === "right") {
    rotate();
    rotate();
  } else if (direction === "down") {
    rotate();
    rotate();
    rotate();
  }

  if (moved) {
    arr = newArr;
    nuovo();
    aggiungi();
  }

  // Check for game over
  let gameOver = true;
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      if (arr[i][j] === null) {
        gameOver = false;
        break;
      }
      // Check adjacent cells for possible merges
      if (i < 3 && arr[i+1][j] !== null && arr[i][j].value === arr[i+1][j].value) {
        gameOver = false;
        break;
      }
      if (j < 3 && arr[i][j+1] !== null && arr[i][j].value === arr[i][j+1].value) {
        gameOver = false;
        break;
      }
    }
    if (!gameOver) break;
  }
  
  if (gameOver) {
    // Controlla se esiste già una schermata di game over
    if (!document.querySelector('.game-over')) {
      const gameOverScreen = document.createElement('div');
      gameOverScreen.className = 'game-over';
      
      const title = document.createElement('div');
      title.className = 'game-over-title';
      title.textContent = 'Game Over';
      
      const finalScore = document.createElement('div');
      finalScore.className = 'final-score';
      finalScore.textContent = `Final Score: ${score}`;
      
      const tryAgainBtn = document.createElement('button');
      tryAgainBtn.className = 'try-again-btn';
      tryAgainBtn.textContent = 'Try Again';
      
      tryAgainBtn.onclick = () => {
        arr = [
          [null, null, null, null],
          [null, null, null, null],
          [null, null, null, null],
          [null, null, null, null],
        ];
        score = 0;
        highestValue = 32;
        updateScore(0);
        nuovo();
        nuovo();
        aggiungi();
        document.body.removeChild(gameOverScreen);
      };
      
      gameOverScreen.appendChild(title);
      gameOverScreen.appendChild(finalScore);
      gameOverScreen.appendChild(tryAgainBtn);
      document.body.appendChild(gameOverScreen);
      
      // Attiva l'animazione
      requestAnimationFrame(() => {
        gameOverScreen.classList.add('visible');
      });
    }
  }
}

function showMilestoneCelebration(value) {
  const celebration = document.createElement('div');
  celebration.className = 'milestone-celebration';
  
  const content = document.createElement('div');
  content.className = 'milestone-content';
  
  const valueText = document.createElement('div');
  valueText.className = 'milestone-value';
  valueText.textContent = value;
  
  const message = document.createElement('div');
  message.className = 'milestone-text';
  message.textContent = 'New Record!';
  
  content.appendChild(valueText);
  content.appendChild(message);
  celebration.appendChild(content);
  document.body.appendChild(celebration);
  
  // Attiva l'animazione
  requestAnimationFrame(() => {
    celebration.classList.add('visible');
  });
  
  // Rimuovi dopo l'animazione
  setTimeout(() => {
    celebration.classList.remove('visible');
    setTimeout(() => celebration.remove(), 300);
  }, 1500);
}

const scoreContainer = document.createElement('div');
scoreContainer.className = 'score-container';

const scoreLabel = document.createElement('div');
scoreLabel.className = 'score-label';
scoreLabel.textContent = 'Score';

const scoreValue = document.createElement('div');
scoreValue.className = 'score-value';
scoreValue.textContent = '0';

scoreContainer.appendChild(scoreLabel);
scoreContainer.appendChild(scoreValue);
document.body.appendChild(scoreContainer);

