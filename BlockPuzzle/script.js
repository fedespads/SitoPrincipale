if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/BlockPuzzle/sw.js')
      .then(registration => {
        console.log('ServiceWorker registration successful');
      })
      .catch(err => {
        console.log('ServiceWorker registration failed: ', err);
      });
  });
}

function script() {
  document.addEventListener("DOMContentLoaded", () => {
    const grid = document.querySelector(".grid");
    const blocksContainer = document.querySelector(".blocks-container");
    let activeBlock = null;
    let startX, startY;
    let blockOffsetX, blockOffsetY;

    const GAP_SIZE = 1;

    let gridArray = Array(8)
      .fill(null)
      .map(() => Array(8).fill(null));

    const BLOCK_TYPES = [
      {
        id: "square2",
        width: 2,
        height: 2,
        shape: [
          [1, 1],
          [1, 1],
        ],
      },
      {
        id: "square3",
        width: 3,
        height: 3,
        shape: [
          [1, 1, 1],
          [1, 1, 1],
          [1, 1, 1],
        ],
      },
      {
        id: "horizontal5",
        width: 5,
        height: 1,
        shape: [[1, 1, 1, 1, 1]],
      },
      {
        id: "vertical5",
        width: 1,
        height: 5,
        shape: [[1], [1], [1], [1], [1]],
      },
      {
        id: "horizontal4",
        width: 4,
        height: 1,
        shape: [[1, 1, 1, 1]],
      },
      {
        id: "vertical4",
        width: 1,
        height: 4,
        shape: [[1], [1], [1], [1]],
      },
      {
        id: "L_shape",
        width: 3,
        height: 2,
        shape: [
          [1, 0, 0],
          [1, 1, 1],
        ],
      },
      {
        id: "T_shape",
        width: 3,
        height: 2,
        shape: [
          [0, 1, 0],
          [1, 1, 1],
        ],
      },
      {
        id: "Z_shape",
        width: 3,
        height: 2,
        shape: [
          [1, 1, 0],
          [0, 1, 1],
        ],
      },
      {
        id: "S_shape",
        width: 3,
        height: 2,
        shape: [
          [0, 1, 1],
          [1, 1, 0],
        ],
      },
      {
        id: "T_shape_up",
        width: 3,
        height: 2,
        shape: [
          [1, 1, 1],
          [0, 1, 0],
        ],
      },
      {
        id: "L_shape_vertical",
        width: 2,
        height: 3,
        shape: [
          [1, 1],
          [0, 1],
          [0, 1],
        ],
      },
      {
        id: "L_shape_vertical_mirror",
        width: 2,
        height: 3,
        shape: [
          [1, 1],
          [1, 0],
          [1, 0],
        ],
      },
      {
        id: "L_shape_1",
        width: 3,
        height: 2,
        shape: [
          [1, 0, 0],
          [1, 1, 1],
        ],
      },
      {
        id: "L_shape_2",
        width: 2,
        height: 3,
        shape: [
          [1, 1],
          [1, 0],
          [1, 0],
        ],
      },
      {
        id: "L_shape_3",
        width: 3,
        height: 2,
        shape: [
          [1, 1, 1],
          [0, 0, 1],
        ],
      },
      {
        id: "L_shape_4",
        width: 2,
        height: 3,
        shape: [
          [0, 1],
          [0, 1],
          [1, 1],
        ],
      },
      {
        id: "L_shape_5",
        width: 3,
        height: 2,
        shape: [
          [0, 0, 1],
          [1, 1, 1],
        ],
      },
      {
        id: "L_shape_6",
        width: 2,
        height: 3,
        shape: [
          [1, 0],
          [1, 0],
          [1, 1],
        ],
      },
      {
        id: "L_shape_7",
        width: 3,
        height: 2,
        shape: [
          [1, 1, 1],
          [1, 0, 0],
        ],
      },
      {
        id: "L_shape_8",
        width: 2,
        height: 3,
        shape: [
          [1, 1],
          [0, 1],
          [0, 1],
        ],
      },
      {
        id: "S_shape_1",
        width: 3,
        height: 2,
        shape: [
          [0, 1, 1],
          [1, 1, 0],
        ],
      },
      {
        id: "S_shape_2",
        width: 2,
        height: 3,
        shape: [
          [1, 0],
          [1, 1],
          [0, 1],
        ],
      },
      {
        id: "S_shape_3",
        width: 3,
        height: 2,
        shape: [
          [1, 1, 0],
          [0, 1, 1],
        ],
      },
      {
        id: "S_shape_4",
        width: 2,
        height: 3,
        shape: [
          [0, 1],
          [1, 1],
          [1, 0],
        ],
      },
      {
        id: "horizontal2",
        width: 2,
        height: 1,
        shape: [[1, 1]],
      },
      {
        id: "vertical2",
        width: 1,
        height: 2,
        shape: [[1], [1]],
      },
      {
        id: "horizontal3",
        width: 3,
        height: 1,
        shape: [[1, 1, 1]],
      },
      {
        id: "vertical3",
        width: 1,
        height: 3,
        shape: [[1], [1], [1]],
      },
      {
        id: "special1",
        width: 3,
        height: 3,
        shape: [
          [1, 1, 1],
          [0, 0, 1],
          [0, 0, 1],
        ],
      },
      {
        id: "special2",
        width: 3,
        height: 3,
        shape: [
          [0, 0, 1],
          [0, 0, 1],
          [1, 1, 1],
        ],
      },
      {
        id: "special3",
        width: 3,
        height: 3,
        shape: [
          [1, 0, 0],
          [1, 0, 0],
          [1, 1, 1],
        ],
      },
      {
        id: "special4",
        width: 3,
        height: 3,
        shape: [
          [1, 1, 1],
          [1, 0, 0],
          [1, 0, 0],
        ],
      },
      {
        id: "L_mini_1",
        width: 2,
        height: 2,
        shape: [
          [0, 1],
          [1, 1],
        ],
      },
      {
        id: "L_mini_2",
        width: 2,
        height: 2,
        shape: [
          [1, 0],
          [1, 1],
        ],
      },
      {
        id: "L_mini_3",
        width: 2,
        height: 2,
        shape: [
          [1, 1],
          [1, 0],
        ],
      },
      {
        id: "L_mini_4",
        width: 2,
        height: 2,
        shape: [
          [1, 1],
          [0, 1],
        ],
      },
      {
        id: "rect_2x3_1",
        width: 2,
        height: 3,
        shape: [
          [1, 1],
          [1, 1],
          [1, 1],
        ],
      },
      {
        id: "rect_2x3_2",
        width: 3,
        height: 2,
        shape: [
          [1, 1, 1],
          [1, 1, 1],
        ],
      },
    ];

    let score = 0;
    const scoreElement = document.querySelector(".score");

    function updateScore(points) {
      const startScore = score;
      let currentScore = startScore;
      const targetScore = startScore + points;
      let lastTime = performance.now();
      const incrementInterval = 30; // Millisecondi tra ogni incremento

      function animate(currentTime) {
        if (currentScore < targetScore) {
          // Controlla se è passato abbastanza tempo dall'ultimo incremento
          if (currentTime - lastTime >= incrementInterval) {
            currentScore++;
            score = currentScore;
            scoreElement.textContent = score;
            lastTime = currentTime;
          }
          requestAnimationFrame(animate);
        }
      }

      requestAnimationFrame(animate);
    }

    // Calcola la dimensione corretta della cella considerando il gap
    function calculateCellSize() {
      const gridRect = grid.getBoundingClientRect();
      const availableSpace = gridRect.width - 6; // Sottrai il padding totale (3px * 2)
      const totalGapSpace = GAP_SIZE * 7; // Spazio totale occupato dai gap
      return (availableSpace - totalGapSpace) / 8; // Dividi lo spazio rimanente per 8 celle
    }

    const cellSize = calculateCellSize();

    // Crea 64 celle (8x8)
    for (let i = 0; i < 64; i++) {
      const cell = document.createElement("div");
      cell.classList.add("cell");
      grid.appendChild(cell);
    }

    generateBlocks();

    // Aggiungi questa variabile globale
    let currentDragColor = null;

    // Aggiungi eventi touch ai blocchi esistenti
    function addTouchEvents(block) {
      // Previeni lo scroll del documento durante il drag
      block.addEventListener("touchstart", handleTouchStart, {
        passive: false,
      });
      document.addEventListener("touchmove", handleTouchMove, {
        passive: false,
      });
      document.addEventListener("touchend", handleTouchEnd);

      function handleTouchStart(e) {
        e.preventDefault();
        e.stopPropagation();
        activeBlock = block;

        // Determina il colore esatto del blocco
        const blockColor = block.classList.contains("yellow")
          ? "#ffd700"
          : block.classList.contains("blue")
          ? "#4169e1"
          : block.classList.contains("green")
          ? "#32cd32"
          : "transparent";

        // Aggiorna la variabile globale e CSS
        currentDragColor = blockColor;
        document.documentElement.style.setProperty(
          "--highlight-color",
          blockColor
        );

        const touch = e.touches[0];
        const rect = block.getBoundingClientRect();

        // Salva la posizione iniziale del touch
        startX = touch.pageX;
        startY = touch.pageY;

        blockOffsetX = touch.pageX - rect.left;
        blockOffsetY = touch.pageY - rect.top;

        // Imposta le dimensioni esatte delle celle prima di spostare
        const blockCells = block.querySelectorAll(".block-cell");
        blockCells.forEach((cell) => {
          cell.style.width = `${cellSize}px`;
          cell.style.height = `${cellSize}px`;
        });
        block.style.gap = `${GAP_SIZE}px`;

        // Posiziona il blocco esattamente sotto il dito
        block.style.position = "fixed";
        block.style.left = `${touch.pageX - blockOffsetX}px`;
        block.style.top = `${touch.pageY - blockOffsetY}px`;
        block.style.zIndex = "2147483647";
      }
    }

    // Aggiungi eventi touch a tutti i blocchi esistenti
    document.querySelectorAll(".block-container").forEach(
      (blockContainer) => {
        addTouchEvents(blockContainer);
      },
      { passive: false }
    );

    // Trova la cella sotto il punto di touch
    function findCellAtPoint(x, y) {
      const gridRect = grid.getBoundingClientRect();

      // Rimuovi l'offset del padding
      const gridX = x - gridRect.left - 3;
      const gridY = y - gridRect.top - 3;

      // Calcola la posizione usando le dimensioni esatte delle celle
      const col = Math.floor(gridX / (cellSize + GAP_SIZE));
      const row = Math.floor(gridY / (cellSize + GAP_SIZE));

      if (col >= 0 && col < 8 && row >= 0 && row < 8) {
        return {
          row: row,
          col: col,
          // Non calcoliamo più il centro, ma l'angolo superiore sinistro della cella
          x: gridRect.left + 3 + col * (cellSize + GAP_SIZE),
          y: gridRect.top + 3 + row * (cellSize + GAP_SIZE),
        };
      }
      return null;
    }

    function clearPreviews() {
      const existingPreview = document.querySelector(".block-preview");
      if (existingPreview) existingPreview.remove();

      // Rimuovi la classe da tutte le celle
      grid.querySelectorAll(".placed-block").forEach((block) => {
        block.classList.remove("ineliminazione");
      });

      // Reset della variabile CSS SOLO se non c'è un blocco attivo
      if (!activeBlock) {
        document.documentElement.style.setProperty(
          "--highlight-color",
          "transparent"
        );
        currentDragColor = null;
      }
    }

    function showPreview(blockColor, gridCell, blockType) {
      let preview = document.querySelector(".block-preview");

      if (!preview) {
        preview = document.createElement("div");
        preview.className = "block-preview";

        // Crea le celle della preview basandosi sulle celle della griglia
        for (let row = 0; row < blockType.height; row++) {
          for (let col = 0; col < blockType.width; col++) {
            if (blockType.shape[row][col] === 1) {
              const previewCell = document.createElement("div");

              // Trova la cella corrispondente nella griglia
              const gridRow = gridCell.row + row;
              const gridCol = gridCell.col + col;
              const targetCell = grid.children[gridRow * 8 + gridCol];
              const cellRect = targetCell.getBoundingClientRect();
              const gridRect = grid.getBoundingClientRect();

              previewCell.style.cssText = `
                            position: absolute;
                            width: ${cellRect.width}px;
                            height: ${cellRect.height}px;
                            left: ${cellRect.left - gridRect.left}px;
                            top: ${cellRect.top - gridRect.top}px;
                            background-color: ${blockColor};
                            opacity: 0.3;
                            border-radius: 1px;
                            pointer-events: none;
                        `;

              const overlay = document.createElement("div");
              overlay.style.cssText = `
                            position: absolute;
                            top: 0;
                            left: 0;
                            width: 100%;
                            height: 100%;
                            background-image: url('./overlay.png');
                            background-size: cover;
                            background-position: center;
                            opacity: 1;
                            pointer-events: none;
                            border-radius: 1px;
                        `;
              previewCell.appendChild(overlay);
              preview.appendChild(previewCell);
            }
          }
        }

        grid.appendChild(preview);
      } else {
        // Aggiorna le posizioni delle celle esistenti
        const previewCells = preview.children;
        let cellIndex = 0;

        for (let row = 0; row < blockType.height; row++) {
          for (let col = 0; col < blockType.width; col++) {
            if (blockType.shape[row][col] === 1) {
              const gridRow = gridCell.row + row;
              const gridCol = gridCell.col + col;
              const targetCell = grid.children[gridRow * 8 + gridCol];
              const cellRect = targetCell.getBoundingClientRect();
              const gridRect = grid.getBoundingClientRect();

              previewCells[cellIndex].style.left = `${
                cellRect.left - gridRect.left
              }px`;
              previewCells[cellIndex].style.top = `${
                cellRect.top - gridRect.top
              }px`;
              previewCells[cellIndex].style.width = `${cellRect.width}px`;
              previewCells[cellIndex].style.height = `${cellRect.height}px`;

              cellIndex++;
            }
          }
        }
      }

      // Simula il piazzamento per trovare le righe/colonne da eliminare
      const tempArray = gridArray.map((row) => [...row]);

      blockType.shape.forEach((shapeRow, rowOffset) => {
        shapeRow.forEach((cell, colOffset) => {
          if (cell === 1) {
            const row = gridCell.row + rowOffset;
            const col = gridCell.col + colOffset;
            if (row >= 0 && row < 8 && col >= 0 && col < 8) {
              tempArray[row][col] = "simulated";
            }
          }
        });
      });

      // Rimuovi la classe da tutte le celle piazzate
      grid.querySelectorAll(".placed-block").forEach((block) => {
        block.classList.remove("ineliminazione");
      });

      // Controlla righe
      for (let row = 0; row < 8; row++) {
        if (tempArray[row].every((cell) => cell !== null)) {
          // Aggiungi la classe a tutti i blocchi in questa riga
          grid
            .querySelectorAll(`.placed-block[id^="placed-block-${row}-"]`)
            .forEach((block) => {
              block.classList.add("ineliminazione");
            });
        }
      }

      // Controlla colonne
      for (let col = 0; col < 8; col++) {
        if (tempArray.every((row) => row[col] !== null)) {
          // Aggiungi la classe a tutti i blocchi in questa colonna
          for (let row = 0; row < 8; row++) {
            const block = document.querySelector(`#placed-block-${row}-${col}`);
            if (block) block.classList.add("ineliminazione");
          }
        }
      }
    }

    function canPlaceBlockAtPosition(
      row,
      col,
      blockType,
      arrayToUse = gridArray
    ) {
      if (
        row >= 0 &&
        row + blockType.height <= 8 &&
        col >= 0 &&
        col + blockType.width <= 8
      ) {
        return blockType.shape.every((shapeRow, rowOffset) => {
          return shapeRow.every((cell, colOffset) => {
            if (cell === 1) {
              return arrayToUse[row + rowOffset][col + colOffset] === null;
            }
            return true;
          });
        });
      }
      return false;
    }

    // Modifica l'evento touchmove
    document.addEventListener("touchmove", handleTouchMove, { passive: false });
    document.addEventListener("touchend", handleTouchEnd);

    function handleTouchMove(e) {
      if (!activeBlock) return;
      e.preventDefault();
      e.stopPropagation();

      const touch = e.touches[0];
      updateBlockPosition(touch.pageX, touch.pageY);

      const blockRect = activeBlock.getBoundingClientRect();
      const blockType = JSON.parse(activeBlock.dataset.blockType);

      // Assicurati che la variabile CSS mantenga il colore durante il movimento
      if (currentDragColor) {
        document.documentElement.style.setProperty(
          "--highlight-color",
          currentDragColor
        );
      }

      // Trova la prima cella effettiva del blocco (prima cella con valore 1 nella shape)
      let firstCellOffset = { row: 0, col: 0 };
      outerLoop: for (let row = 0; row < blockType.height; row++) {
        for (let col = 0; col < blockType.width; col++) {
          if (blockType.shape[row][col] === 1) {
            firstCellOffset = { row, col };
            break outerLoop;
          }
        }
      }

      // Calcola il centro della prima cella effettiva
      const firstCellCenterX =
        blockRect.left +
        firstCellOffset.col * (cellSize + GAP_SIZE) +
        cellSize / 2;
      const firstCellCenterY =
        blockRect.top +
        firstCellOffset.row * (cellSize + GAP_SIZE) +
        cellSize / 2;

      const gridCell = findCellAtPoint(firstCellCenterX, firstCellCenterY);

      if (gridCell) {
        const adjustedCol = Math.max(
          0,
          Math.min(8 - blockType.width, gridCell.col - firstCellOffset.col)
        );
        const adjustedRow = Math.max(
          0,
          Math.min(8 - blockType.height, gridCell.row - firstCellOffset.row)
        );

        if (canPlaceBlockAtPosition(adjustedRow, adjustedCol, blockType)) {
          const previewX =
            gridCell.x - firstCellOffset.col * (cellSize + GAP_SIZE);
          const previewY =
            gridCell.y - firstCellOffset.row * (cellSize + GAP_SIZE);

          showPreview(
            currentDragColor,
            {
              ...gridCell,
              col: adjustedCol,
              row: adjustedRow,
              x: previewX,
              y: previewY,
            },
            blockType
          );
        } else {
          clearPreviews();
        }
      } else {
        clearPreviews();
      }
    }

    function handleTouchEnd(e) {
      if (!activeBlock) return;

      const preview = document.querySelector(".block-preview");
      if (preview) {
        const blockType = JSON.parse(activeBlock.dataset.blockType);
        const color = activeBlock.classList.contains("yellow")
          ? "yellow"
          : activeBlock.classList.contains("blue")
          ? "blue"
          : "green";

        // Trova la prima cella effettiva nel pattern del blocco
        let firstCellOffset = { row: 0, col: 0 };
        outerLoop: for (let row = 0; row < blockType.height; row++) {
          for (let col = 0; col < blockType.width; col++) {
            if (blockType.shape[row][col] === 1) {
              firstCellOffset = { row, col };
              break outerLoop;
            }
          }
        }

        // Usa la cella della preview corrispondente alla prima cella effettiva del pattern
        const previewCell = preview.children[0]; // Prima cella della preview
        const top = parseFloat(previewCell.style.top);
        const left = parseFloat(previewCell.style.left);

        // Calcola riga e colonna compensando per l'offset della prima cella
        const row =
          Math.round(top / (cellSize + GAP_SIZE)) - firstCellOffset.row;
        const col =
          Math.round(left / (cellSize + GAP_SIZE)) - firstCellOffset.col;

        if (canPlaceBlockAtPosition(row, col, blockType)) {
          // Rimuovi la preview
          preview.remove();

          // Conta il numero totale di celle nel blocco
          let cellCount = 0;
          blockType.shape.forEach((row) => {
            row.forEach((cell) => {
              if (cell === 1) cellCount++;
            });
          });

          // Aggiungi i blocchi piazzati
          blockType.shape.forEach((shapeRow, rowOffset) => {
            shapeRow.forEach((cell, colOffset) => {
              if (cell === 1) {
                const placedBlock = createPlacedBlock(
                  row + rowOffset,
                  col + colOffset,
                  color
                );
                grid.appendChild(placedBlock);

                // Aggiorna l'array
                gridArray[row + rowOffset][col + colOffset] = color;
              }
            });
          });

          // Aggiungi punti per tutte le celle piazzate in una volta sola
          updateScore(cellCount);

          // Controlla e pulisci le righe/colonne piene
          checkAndClearLines();

          activeBlock.remove();

          if (blocksContainer.children.length === 0) {
            generateBlocks();
          }

          // Aggiungi il controllo del game over dopo ogni piazzamento
          checkGameOver();

          preview.classList.remove("block-preview");
          return;
        }
      }

      clearPreviews();

      // Ripristina lo stato del blocco
      activeBlock.style.position = "";
      activeBlock.style.left = "";
      activeBlock.style.top = "";
      activeBlock.style.zIndex = "";

      const blockCells = activeBlock.querySelectorAll(".block-cell");
      blockCells.forEach((cell) => {
        cell.style.width = "";
        cell.style.height = "";
      });

      activeBlock = null;
    }

    const MOVEMENT_MULTIPLIER = 1.5; // Ridotto da 2.5 a 1.5 per un movimento più controllato

    function updateBlockPosition(x, y) {
      if (!activeBlock) return;

      // Calcola il delta dal punto di touch iniziale
      const deltaX = x - startX;
      const deltaY = y - startY;

      // Applica il moltiplicatore al delta
      const acceleratedX = deltaX * MOVEMENT_MULTIPLIER;
      const acceleratedY = deltaY * MOVEMENT_MULTIPLIER;

      // Applica il movimento accelerato partendo dalla posizione iniziale del blocco
      const newX = startX - blockOffsetX + acceleratedX;
      const newY = startY - blockOffsetY + acceleratedY;

      activeBlock.style.left = `${newX}px`;
      activeBlock.style.top = `${newY}px`;
    }

    // Funzione per trovare pattern di celle vuote nell'array
    function findEmptyPatterns() {
      const patterns = [];

      // Scansiona l'array per trovare gruppi di celle vuote
      for (let row = 0; row < 8; row++) {
        for (let col = 0; col < 8; col++) {
          if (gridArray[row][col] === null) {
            // Per ogni cella vuota, cerca pattern di celle vuote connesse
            const pattern = scanEmptyPattern(row, col);
            if (pattern && pattern.cells.length > 0) {
              patterns.push(pattern);
            }
          }
        }
      }

      return patterns;
    }

    // Scansiona un pattern di celle vuote connesse a partire da una posizione
    function scanEmptyPattern(startRow, startCol) {
      const visited = Array(8)
        .fill(null)
        .map(() => Array(8).fill(false));
      const pattern = {
        cells: [],
        minRow: 8,
        maxRow: -1,
        minCol: 8,
        maxCol: -1,
        isEnclosed: true,
      };

      function isEnclosingCell(r, c) {
        // Una cella è considerata "che chiude" se:
        // - è fuori dalla griglia
        // - o contiene un blocco colorato
        // - o è già stata visitata
        return (
          r < 0 ||
          r >= 8 ||
          c < 0 ||
          c >= 8 ||
          gridArray[r][c] !== null ||
          visited[r][c]
        );
      }

      function scan(row, col) {
        if (
          row < 0 ||
          row >= 8 ||
          col < 0 ||
          col >= 8 ||
          visited[row][col] ||
          gridArray[row][col] !== null
        ) {
          return;
        }

        visited[row][col] = true;

        if (gridArray[row][col] === null) {
          pattern.cells.push({ row, col });
          pattern.minRow = Math.min(pattern.minRow, row);
          pattern.maxRow = Math.max(pattern.maxRow, row);
          pattern.minCol = Math.min(pattern.minCol, col);
          pattern.maxCol = Math.max(pattern.maxCol, col);

          // Controlla tutte le celle adiacenti
          const adjacentCells = [
            [row - 1, col], // sopra
            [row + 1, col], // sotto
            [row, col - 1], // sinistra
            [row, col + 1], // destra
          ];

          // Un pattern è chiuso se tutte le celle adiacenti non visitate sono occupate
          adjacentCells.forEach(([r, c]) => {
            if (!isEnclosingCell(r, c)) {
              scan(r, c);
            }
          });

          // Verifica se il pattern è chiuso controllando il perimetro
          pattern.isEnclosed = adjacentCells.every(
            ([r, c]) => isEnclosingCell(r, c) || visited[r][c]
          );
        }
      }

      scan(startRow, startCol);

      // Debug del pattern trovato
      if (pattern.cells.length > 0) {
      }

      return pattern;
    }

    // Trova i blocchi che possono riempire i pattern trovati
    function findMatchingBlocks(patterns) {
      const matchingBlocks = [];

      patterns.forEach((pattern) => {
        if (pattern.isEnclosed) {
          const height = pattern.maxRow - pattern.minRow + 1;
          const width = pattern.maxCol - pattern.minCol + 1;

          // Crea una matrice del pattern
          const patternMatrix = Array(height)
            .fill(null)
            .map(() => Array(width).fill(0));

          // Riempi la matrice con il pattern effettivo
          pattern.cells.forEach(({ row, col }) => {
            const adjustedRow = row - pattern.minRow;
            const adjustedCol = col - pattern.minCol;
            if (
              adjustedRow >= 0 &&
              adjustedRow < height &&
              adjustedCol >= 0 &&
              adjustedCol < width
            ) {
              patternMatrix[adjustedRow][adjustedCol] = 1;
            }
          });

          // Cerca blocchi che corrispondono al pattern
          BLOCK_TYPES.forEach((block) => {
            // Verifica corrispondenza diretta
            if (block.width === width && block.height === height) {
              const matches = block.shape.every((row, rowIndex) => {
                return row.every((cell, colIndex) => {
                  return cell === patternMatrix[rowIndex][colIndex];
                });
              });

              if (matches && !matchingBlocks.some((b) => b.id === block.id)) {
                matchingBlocks.push(block);
              }
            }

            // Verifica corrispondenza ruotata
            if (block.width === height && block.height === width) {
              const rotatedPattern = Array(width)
                .fill(null)
                .map(() => Array(height).fill(0));

              // Ruota il pattern
              for (let row = 0; row < height; row++) {
                for (let col = 0; col < width; col++) {
                  rotatedPattern[col][height - 1 - row] =
                    patternMatrix[row][col];
                }
              }

              const matchesRotated = block.shape.every((row, rowIndex) => {
                return row.every((cell, colIndex) => {
                  return cell === rotatedPattern[rowIndex][colIndex];
                });
              });

              if (
                matchesRotated &&
                !matchingBlocks.some((b) => b.id === block.id)
              ) {
                matchingBlocks.push(block);
              }
            }
          });
        }
      });

      return matchingBlocks;
    }

    function simulateBlockPlacement(blockType, row, col, tempArray) {
      // Crea una copia dell'array per la simulazione
      const simulatedArray = tempArray.map((row) => [...row]);

      // Simula il piazzamento del blocco
      blockType.shape.forEach((shapeRow, rowOffset) => {
        shapeRow.forEach((cell, colOffset) => {
          if (cell === 1) {
            simulatedArray[row + rowOffset][col + colOffset] = "simulated";
          }
        });
      });

      let score = 0;

      // Conta righe completate
      for (let r = 0; r < 8; r++) {
        if (simulatedArray[r].every((cell) => cell !== null)) {
          score += 10; // 10 punti per ogni riga
        }
      }

      // Conta colonne completate
      for (let c = 0; c < 8; c++) {
        if (simulatedArray.every((row) => row[c] !== null)) {
          score += 10; // 10 punti per ogni colonna
        }
      }

      // Controlla se questo piazzamento porta a un full clear
      const isFullClear = simulatedArray.every((row) =>
        row.every((cell) => cell !== null)
      );

      if (isFullClear) {
        score += 1000; // Bonus molto alto per il full clear
      }

      return score;
    }

    function findBestBlock(tempArray) {
      let bestBlocks = []; // Array per salvare i blocchi migliori
      let maxScore = -1;

      BLOCK_TYPES.forEach((blockType) => {
        for (let row = 0; row <= 8 - blockType.height; row++) {
          for (let col = 0; col <= 8 - blockType.width; col++) {
            if (canPlaceBlockAtPosition(row, col, blockType, tempArray)) {
              const score = simulateBlockPlacement(
                blockType,
                row,
                col,
                tempArray
              );

              // Simula il piazzamento e conta le celle rimanenti
              const simulatedArray = tempArray.map((row) => [...row]);
              blockType.shape.forEach((shapeRow, rowOffset) => {
                shapeRow.forEach((cell, colOffset) => {
                  if (cell === 1) {
                    simulatedArray[row + rowOffset][col + colOffset] = "placed";
                  }
                });
              });

              // Pulisci le righe/colonne complete
              for (let r = 0; r < 8; r++) {
                if (simulatedArray[r].every((cell) => cell !== null)) {
                  simulatedArray[r] = Array(8).fill(null);
                }
              }
              for (let c = 0; c < 8; c++) {
                if (simulatedArray.every((row) => row[c] !== null)) {
                  for (let r = 0; r < 8; r++) {
                    simulatedArray[r][c] = null;
                  }
                }
              }

              // Conta le celle rimanenti
              const remainingCells = simulatedArray
                .flat()
                .filter((cell) => cell !== null).length;

              // Gestisci i punteggi
              if (score > 0) {
                // Ignora i blocchi con punteggio 0
                if (score > maxScore) {
                  // Nuovo massimo punteggio, svuota l'array e aggiungi questo blocco
                  maxScore = score;
                  bestBlocks = [
                    {
                      id: blockType.id,
                      score: score,
                      remainingCells: remainingCells,
                    },
                  ];
                } else if (score === maxScore) {
                  // Stesso punteggio, aggiungi all'array
                  bestBlocks.push({
                    id: blockType.id,
                    score: score,
                    remainingCells: remainingCells,
                  });
                }
              }
            }
          }
        }
      });

      // Log per debug
      console.log("Blocchi trovati:", bestBlocks);

      if (bestBlocks.length === 0) {
        console.log("Nessun blocco con punteggio > 0 trovato");
        return null;
      }

      if (bestBlocks.length === 1) {
        console.log("Trovato un solo blocco ottimale:", bestBlocks[0]);
        return BLOCK_TYPES.find((b) => b.id === bestBlocks[0].id);
      }

      // Ordina per celle rimanenti (ascending) se ci sono più blocchi
      bestBlocks.sort((a, b) => a.remainingCells - b.remainingCells);
      console.log("Blocchi ordinati per celle rimanenti:", bestBlocks);

      // Ritorna il blocco con meno celle rimanenti
      return BLOCK_TYPES.find((b) => b.id === bestBlocks[0].id);
    }

    // Modifica la funzione generateBlocks
    function generateBlocks() {
      console.log("=== INIZIO GENERAZIONE BLOCCHI ===");
      blocksContainer.innerHTML = "";
      const selectedBlocks = [];
      const selectedIds = new Set();

      // Funzione per simulare il piazzamento e ottenere il nuovo array
      function simulateAndGetNewArray(block, tempArray) {
        let bestScore = -1;
        let bestPosition = null;
        let resultArray = null;

        // Trova la migliore posizione per questo blocco
        for (let row = 0; row <= 8 - block.height; row++) {
          for (let col = 0; col <= 8 - block.width; col++) {
            const simulatedArray = tempArray.map((row) => [...row]);
            if (canPlaceBlockAtPosition(row, col, block, simulatedArray)) {
              const score = simulateBlockPlacement(
                block,
                row,
                col,
                simulatedArray
              );
              if (score > bestScore) {
                bestScore = score;
                bestPosition = { row, col };
                // Crea l'array risultante dopo il piazzamento e la pulizia delle linee
                resultArray = simulatedArray.map((row) => [...row]);
                block.shape.forEach((shapeRow, rowOffset) => {
                  shapeRow.forEach((cell, colOffset) => {
                    if (cell === 1) {
                      resultArray[row + rowOffset][col + colOffset] =
                        "simulated";
                    }
                  });
                });
                // Pulisci le linee complete
                for (let r = 0; r < 8; r++) {
                  if (resultArray[r].every((cell) => cell !== null)) {
                    resultArray[r] = Array(8).fill(null);
                  }
                }
                for (let c = 0; c < 8; c++) {
                  if (resultArray.every((row) => row[c] !== null)) {
                    for (let r = 0; r < 8; r++) {
                      resultArray[r][c] = null;
                    }
                  }
                }
              }
            }
          }
        }
        return { block, score: bestScore, array: resultArray };
      }

      // Calcola i primi tre blocchi migliori in sequenza
      let currentArray = gridArray.map((row) => [...row]);
      let sequence = [];

      // Primo blocco
      const firstBest = findBestBlock(currentArray);
      if (firstBest) {
        const result1 = simulateAndGetNewArray(firstBest, currentArray);
        console.log("1° Blocco:", firstBest.id, "- Punteggio:", result1.score);

        if (result1.score > 0) {
          sequence.push(result1.block);
          currentArray = result1.array;

          // Secondo blocco
          const secondBest = findBestBlock(currentArray);
          if (secondBest) {
            const result2 = simulateAndGetNewArray(secondBest, currentArray);
            console.log(
              "2° Blocco:",
              secondBest.id,
              "- Punteggio:",
              result2.score
            );

            if (result2.score > 0) {
              sequence.push(result2.block);
              currentArray = result2.array;

              // Terzo blocco
              const thirdBest = findBestBlock(currentArray);
              if (thirdBest) {
                const result3 = simulateAndGetNewArray(thirdBest, currentArray);
                console.log(
                  "3° Blocco:",
                  thirdBest.id,
                  "- Punteggio:",
                  result3.score
                );

                if (result3.score > 0) {
                  sequence.push(result3.block);
                }
              }
            }
          }
        }
      }

      console.log(
        "Sequenza finale:",
        sequence.map((b) => b.id)
      );

      // Aggiungi i blocchi della sequenza trovata
      sequence.forEach((block) => {
        if (!selectedIds.has(block.id)) {
          selectedBlocks.push(block);
          selectedIds.add(block.id);
        }
      });

      // Completa con pattern e blocchi casuali se necessario
      const patterns = findEmptyPatterns();
      const matchingBlocks = findMatchingBlocks(patterns);

      while (selectedBlocks.length < 3 && matchingBlocks.length > 0) {
        const randomIndex = Math.floor(Math.random() * matchingBlocks.length);
        const block = matchingBlocks[randomIndex];
        if (!selectedIds.has(block.id)) {
          selectedBlocks.push(block);
          selectedIds.add(block.id);
          matchingBlocks.splice(randomIndex, 1);
        }
      }

      while (selectedBlocks.length < 3) {
        const randomIndex = Math.floor(Math.random() * BLOCK_TYPES.length);
        const randomBlock = BLOCK_TYPES[randomIndex];
        if (!selectedIds.has(randomBlock.id)) {
          selectedBlocks.push(randomBlock);
          selectedIds.add(randomBlock.id);
        }
      }

      // Crea i blocchi nel container
      const colors = ["yellow", "blue", "green"];
      selectedBlocks.forEach((blockType, index) => {
        const block = document.createElement("div");
        block.className = `block ${colors[index]}`;
        block.style.gridTemplateColumns = `repeat(${blockType.width}, 1fr)`;
        block.style.gridTemplateRows = `repeat(${blockType.height}, 1fr)`;
        block.dataset.blockType = JSON.stringify(blockType);

        for (let row = 0; row < blockType.height; row++) {
          for (let col = 0; col < blockType.width; col++) {
            const cellElement = document.createElement("div");
            if (blockType.shape[row][col] === 1) {
              cellElement.className = "block-cell";
            } else {
              cellElement.className = "block-cell empty";
              cellElement.style.opacity = "0";
              cellElement.style.pointerEvents = "none";
            }
            block.appendChild(cellElement);
          }
        }

        blocksContainer.appendChild(block);
        addTouchEvents(block);
      });

      console.log(
        "Blocchi generati:",
        selectedBlocks.map((b, i) => `${i + 1}° ${b.id}`)
      );
      console.log("=== FINE GENERAZIONE BLOCCHI ===\n");
    }

    // Aggiungi questa funzione per controllare e pulire righe e colonne piene
    function checkAndClearLines() {
      let hasCleared = false;
      let linesCleared = 0;
      let fullClear = true; // Flag per verificare se l'array è completamente vuoto

      // Controlla le righe
      for (let row = 0; row < 8; row++) {
        if (gridArray[row].every((cell) => cell !== null)) {
          gridArray[row] = Array(8).fill(null);
          hasCleared = true;
          linesCleared++;
        }
      }

      // Controlla le colonne
      for (let col = 0; col < 8; col++) {
        if (gridArray.every((row) => row[col] !== null)) {
          for (let row = 0; row < 8; row++) {
            gridArray[row][col] = null;
          }
          hasCleared = true;
          linesCleared++;
        }
      }

      // Aggiungi 10 punti per ogni riga/colonna eliminata
      if (linesCleared > 0) {
        updateScore(10 * linesCleared);

        // Controlla se l'array è completamente vuoto dopo la pulizia
        fullClear = gridArray.every((row) =>
          row.every((cell) => cell === null)
        );
        if (fullClear) {
          console.log("FULL CLEAR! +300 punti bonus!");
          updateScore(300);
        }
      }

      if (hasCleared) {
        updateGridDisplay();
      }
    }

    // Aggiungi questa funzione per aggiornare la visualizzazione della griglia
    function updateGridDisplay() {
      const placedBlocks = grid.querySelectorAll(".placed-block");
      placedBlocks.forEach((block) => {
        block.style.opacity = "0";
      });

      setTimeout(() => {
        placedBlocks.forEach((block) => block.remove());

        gridArray.forEach((row, rowIndex) => {
          row.forEach((cell, colIndex) => {
            if (cell !== null) {
              const placedBlock = createPlacedBlock(rowIndex, colIndex, cell);
              grid.appendChild(placedBlock);
            }
          });
        });
      }, 200);
    }

    // Quando piazziamo un blocco o aggiorniamo la griglia
    function calculatePosition(row, col) {
      // Trova la cella corrispondente nella griglia
      const cellIndex = row * 8 + col;
      const targetCell = grid.children[cellIndex];
      const cellRect = targetCell.getBoundingClientRect();

      return {
        left: cellRect.left - grid.getBoundingClientRect().left,
        top: cellRect.top - grid.getBoundingClientRect().top,
        width: cellRect.width,
        height: cellRect.height,
      };
    }

    // Nella funzione che crea i blocchi piazzati (sia in updateGridDisplay che quando piazzi un nuovo blocco)
    function createPlacedBlock(row, col, color) {
      const placedCell = document.createElement("div");
      placedCell.className = `placed-block ${color}`;

      // Aggiungi un ID univoco che fa riferimento alla posizione nella griglia
      const cellIndex = row * 8 + col;
      placedCell.id = `placed-block-${row}-${col}`;
      placedCell.dataset.gridCell = cellIndex;

      const position = calculatePosition(row, col);
      placedCell.style.cssText = `
            width: ${position.width}px;
            height: ${position.height}px;
            left: ${position.left}px;
            top: ${position.top}px;
        `;

      const overlay = document.createElement("div");
      overlay.style.cssText = `
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-image: url('./overlay.png');
            background-size: cover;
            background-position: center;
            opacity: 1;
            pointer-events: none;
            border-radius: 1px;
        `;
      placedCell.appendChild(overlay);
      return placedCell;
    }

    // Funzione per aggiornare la posizione del blocco durante il trascinamento
    function updateBlockPosition(x, y) {
      if (!activeBlock) return;

      // Calcola il delta dal punto di touch iniziale
      const deltaX = x - startX;
      const deltaY = y - startY;

      // Applica il moltiplicatore al delta
      const acceleratedX = deltaX * MOVEMENT_MULTIPLIER;
      const acceleratedY = deltaY * MOVEMENT_MULTIPLIER;

      // Applica il movimento accelerato partendo dalla posizione iniziale del blocco
      const newX = startX - blockOffsetX + acceleratedX;
      const newY = startY - blockOffsetY + acceleratedY;

      activeBlock.style.left = `${newX}px`;
      activeBlock.style.top = `${newY}px`;
    }

    // Funzione per controllare il game over
    function checkGameOver() {
      const canPlaceAnyBlock =
        blocksContainer.children.length > 0 &&
        Array.from(blocksContainer.children).some((block) => {
          if (!block.dataset.blockType) return false;
          const blockType = JSON.parse(block.dataset.blockType);
          return canPlaceBlockAnywhere(blockType);
        });

      if (!canPlaceAnyBlock) {
        showGameOver();
      }
    }

    function canPlaceBlockAnywhere(blockType) {
      for (let row = 0; row <= 8 - blockType.height; row++) {
        for (let col = 0; col <= 8 - blockType.width; col++) {
          if (canPlaceBlockAtPosition(row, col, blockType)) {
            return true;
          }
        }
      }
      return false;
    }

    function showGameOver() {
      const overlay = document.createElement("div");
      overlay.className = "game-over-overlay";

      const content = document.createElement("div");
      content.className = "game-over-content";

      const title = document.createElement("div");
      title.className = "game-over-title";
      title.textContent = "Game Over";

      const button = document.createElement("button");
      button.className = "restart-button";
      button.textContent = "Rigioca";
      button.onclick = () => {
        location.reload();
      };

      content.appendChild(title);
      content.appendChild(button);
      overlay.appendChild(content);
      document.body.appendChild(overlay);

      // Aggiungi la classe visible dopo un breve delay per attivare l'animazione
      requestAnimationFrame(() => {
        overlay.classList.add("visible");
      });
    }
  }); // Chiusura del DOMContentLoaded
}


try {
  script();
} catch (error) {
  document.body.innerHTML = "<h1>error</h1>";
}
