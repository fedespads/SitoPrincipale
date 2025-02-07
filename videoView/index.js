// Otteniamo i riferimenti ai due elementi video
const videoMain = document.querySelector('#video');
const videoAudio = document.querySelector('#audio');

let rafId;
let isSeeking = false;

// Funzione per monitorare la sincronizzazione
function checkSync() {
    // Controlla se la differenza è maggiore di 0.5 secondi
    if (Math.abs(videoAudio.currentTime - videoMain.currentTime) > 0.5) {
        videoAudio.currentTime = videoMain.currentTime;
    }

    // Continua il monitoraggio solo se il video principale è in riproduzione
    if (!videoMain.paused) {
        rafId = requestAnimationFrame(checkSync);
    }
}

// Aggiungiamo gli event listener per mantenere la sincronizzazione
videoMain.addEventListener('play', () => {
    videoAudio.play();
    rafId = requestAnimationFrame(checkSync);
});

videoMain.addEventListener('pause', () => {
    videoAudio.pause();
    cancelAnimationFrame(rafId);
});

// Gestione della sincronizzazione con muting temporaneo
videoMain.addEventListener('seeking', () => {
    isSeeking = true;
    videoAudio.muted = true;
});

videoMain.addEventListener('seeked', () => {
    videoAudio.currentTime = videoMain.currentTime;
    
    // Aspetta un breve momento per assicurarsi che la sincronizzazione sia completa
    setTimeout(() => {
        videoAudio.muted = false;
        isSeeking = false;
    }, 50);
});

// Sincronizza il volume (solo se non stiamo cercando)
videoMain.addEventListener('volumechange', () => {
    if (!isSeeking) {
        videoAudio.volume = videoMain.volume;
    }
});

// Gestione quando il video termina
videoMain.addEventListener('ended', () => {
    cancelAnimationFrame(rafId);
});

// Sincronizzazione iniziale
videoAudio.currentTime = videoMain.currentTime;
rafId = requestAnimationFrame(checkSync);
