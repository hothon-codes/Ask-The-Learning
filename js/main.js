function iniciarJornada() {
    const entryPage = document.getElementById('entry-page');
    const mainPage = document.getElementById('main-page');

    entryPage.style.display = 'none';
    mainPage.style.display = 'block';
}

const startButton = document.getElementById('start-journey-btn');

if (startButton) {
    startButton.addEventListener('click', iniciarJornada);
} else {
    console.error('Botão "start-journey-btn" não foi encontrado.');
}