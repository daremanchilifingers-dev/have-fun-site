// Get references to the links and game container
const robotLink = document.getElementById('robot-game-link');
const gameContainer = document.getElementById('game-container');

// When the "I'm not a robot" link is clicked
robotLink.addEventListener('click', function(e) {
    e.preventDefault(); // Prevent page reload

    // Clear previous game
    gameContainer.innerHTML = '';

    // Create game title
    const title = document.createElement('h2');
    title.textContent = "I'm not a robot";
    gameContainer.appendChild(title);

    // Instructions
    const instructions = document.createElement('p');
    instructions.textContent = "Click the correct buttons in order to prove you're human!";
    gameContainer.appendChild(instructions);

    // Create buttons
    const buttons = [];
    const correctOrder = [1, 3, 2]; // the order of correct buttons
    const clickedOrder = [];

    for (let i = 1; i <= 3; i++) {
        const btn = document.createElement('button');
        btn.textContent = `Button ${i}`;
        btn.style.margin = '10px';
        btn.style.padding = '15px 25px';
        btn.style.fontSize = '1em';

        btn.addEventListener('click', function() {
            clickedOrder.push(i);

            // Check if order is correct so far
            for (let j = 0; j < clickedOrder.length; j++) {
                if (clickedOrder[j] !== correctOrder[j]) {
                    alert("Oops! Wrong button. Try again.");
                    clickedOrder.length = 0; // reset
                    return;
                }
            }

            // If all correct buttons clicked
            if (clickedOrder.length === correctOrder.length) {
                alert("Success! You're not a robot 😎");
                clickedOrder.length = 0; // reset for replay
            }
        });

        gameContainer.appendChild(btn);
        buttons.push(btn);
    }
});
