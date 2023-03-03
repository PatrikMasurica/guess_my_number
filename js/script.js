// Generating a random number from 1 to 20
let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highScore = 0;
const message = document.querySelector(".message");
const number = document.querySelector('.number');
const again = document.querySelector('.again');
const wrapper = document.querySelector('wrapper');
const check = document.querySelector('.check');
const guess = document.querySelector('.guess');



// Making score and highscore dynamic
document.querySelector('.score').textContent = score;
document.querySelector('.h-score').textContent = highScore;

check.addEventListener('click', function () {
    // Taking the number from the input and converting it to number se we can compare it with the secretNumber
    const guess = Number(document.querySelector('.guess').value);

    /* function changeMessage() {
         return  message.textContent;
         
     }*/

    // When user clicks on check button without giving an input
    if (!guess) {
        changeMessage('🚫 No number!');

        // When user guesses the right number    
    } else if (guess === secretNumber) {
        //Changing the html content
        message.textContent = '🙌 Correct!';
        number.textContent = secretNumber;

        //Changing the css styling
        wrapper.style.backgroundColor = 'green';
        number.style.width = "25rem";
        check.style.display = "none";
        again.style.display = "block";

        if (score > highScore) {
            document.querySelector('.h-score').textContent = score;
        }
        // When user tries a higher number
    } else if (guess > secretNumber) {
        message.textContent = '👆 Too high!';
        score--;
        document.querySelector('.score').textContent = score;

        // When user tries a lower number    
    } else if (guess < secretNumber) {
        message.textContent = '👇 Too low';
        score--;
        document.querySelector('.score').textContent = score;
    }
    //Pjesa e detyres se shtepise
    if (score === 0 || score < 0) {
        message.textContent = '💥 Game over';
        check.style.display = "none";
        again.style.display = "block";
        again.style.backgroundColor = "red";
    }

})


// Restarting the game after clicking again button
again.addEventListener('click', function () {
    // Restarting score and the random number
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;

    // Changing the html content
    message.textContent = 'Guess here ↙';
    document.querySelector('.score').textContent = score;
    number.textContent = '?';
    guess.value = '';

    //Changing the css styling
    wrapper.style.backgroundColor = 'rgba(85, 85, 85, 0.5)';
    number.style.width = '15rem';
    again.style.display = 'none';
    check.style.display = 'block';
});

