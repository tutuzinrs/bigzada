// Altera a declaração exibida
document.getElementById('declarationText').textContent = "Sua declaração incrível aqui!"; // Substitua pelo texto que deseja

document.getElementById('showHeartsButton').addEventListener('click', function() {
    // Gera corações e estrelas na tela
    for (let i = 0; i < 20; i++) {
        generateHearts();
    }
    for (let i = 0; i < 10; i++) {
        generateStars();
    }
});

// Função para gerar símbolos fixos
function generateSymbols() {
    for (let i = 0; i < 20; i++) {
        createHeart();
    }
    for (let i = 0; i < 10; i++) {
        createStar();
    }
}

// Função para criar estrelas
function createStar() {
    const star = document.createElement('span');
    star.textContent = '⭐';
    star.classList.add('star');
    star.style.left = Math.random() * 100 + 'vw'; 
    star.style.bottom = Math.random() * 100 + 'vh'; 
    star.style.fontSize = Math.random() * 20 + 15 + 'px'; 
    document.body.appendChild(star);
}

// Executa a função ao carregar a página
window.onload = generateSymbols;


// Função para gerar corações
function generateHearts() {
    const heart = document.createElement('span');
    heart.textContent = '❤️';
    heart.classList.add('heart');

    // Posição aleatória na parte inferior da tela
    heart.style.left = Math.random() * 100 + 'vw'; 
    heart.style.bottom = '0'; 

    // Tamanho aleatório
    heart.style.fontSize = Math.random() * 24 + 16 + 'px'; 

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.style.animation = 'heartAnimation 2s forwards';
    }, 10);

    heart.addEventListener('animationend', function() {
        heart.remove();
    });
}

// Função para gerar estrelas
function generateStars() {
    const star = document.createElement('span');
    star.textContent = '⭐';
    star.classList.add('star');

    // Posição aleatória na parte inferior da tela
    star.style.left = Math.random() * 100 + 'vw'; 
    star.style.bottom = '0'; 

    // Tamanho aleatório
    star.style.fontSize = Math.random() * 20 + 15 + 'px'; 

    document.body.appendChild(star);

    setTimeout(() => {
        star.style.animation = 'starAnimation 2s forwards';
    }, 10);

    star.addEventListener('animationend', function() {
        star.remove();
    });
}
