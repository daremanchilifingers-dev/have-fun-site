const robotLink = document.getElementById('robot-game-link');
const clickerLink = document.getElementById('clicker-game-link');
const spendLink = document.getElementById('spend-game-link');
const gameContainer = document.getElementById('game-container');

// "I'm not a robot" game
robotLink.addEventListener('click', function() {
    gameContainer.innerHTML = '<p style="color:#00c6ff;">🤖 You are not a robot! ✅</p>';
});

// Clicker Game
clickerLink.addEventListener('click', function() {
    gameContainer.innerHTML = `
        <p>Click the button as many times as you can!</p>
        <button id="clicker-button" style="padding:20px 40px;font-size:2em;">Click me!</button>
        <p>Score: <span id="clicker-score">0</span></p>
    `;
    let score = 0;
    const btn = document.getElementById('clicker-button');
    const scoreSpan = document.getElementById('clicker-score');
    btn.addEventListener('click', () => {
        score++;
        scoreSpan.textContent = score;
    });
});

// Spend $100M game
spendLink.addEventListener('click', function() {
    gameContainer.innerHTML = `
        <p>Try to spend $100,000,000!</p>
        <button id="spend-button" style="padding:20px 40px;font-size:2em;">Spend $1,000,000</button>
        <p>Money spent: $<span id="spend-total">0</span></p>
    `;
    let total = 0;
    const btn = document.getElementById('spend-button');
    const totalSpan = document.getElementById('spend-total');
    btn.addEventListener('click', () => {
        total += 1000000;
        totalSpan.textContent = total.toLocaleString();
        if(total >= 100000000) alert("💸 You spent $100 million!");
    });
});

