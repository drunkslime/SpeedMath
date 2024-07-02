let expression = document.getElementById('expression');
let answer = document.getElementById('answer');
let result = document.getElementById('result');
let expressionCounter = document.getElementById('counter');
let checkButton = document.getElementById('check');

let currentCounter = 0;
let correctCounter = 0;
let maxCounter = 10;
expressionCounter.innerHTML = `${currentCounter}/${maxCounter}`;

generateNewExpression();

checkButton.addEventListener('click', () => {
    result.hidden = false;
    if (Number( answer.value ) === eval( (expression.innerHTML).slice(0, -1) ) ) {
        result.textContent = 'Correct!';
        document.documentElement.style.setProperty('--answer-color', 'green');
        correctCounter++;
    } else {
        result.textContent = 'Wrong!'
        document.documentElement.style.setProperty('--answer-color', 'red');
        answer.value = eval( (expression.innerHTML).slice(0, -1) );
        answer.disabled = true;
        expression.textContent = 'Right answer is:';
    }
    setTimeout(() => {
        currentCounter++;
        expressionCounter.innerHTML = `${currentCounter}/${maxCounter}`;
        if (currentCounter === maxCounter) {
            if ( confirm('You did it! Your score is: ' +
                 `${correctCounter}/${maxCounter} : ${correctCounter / maxCounter * 100}%`) ){
                location.reload();
            } else location.reload();
        }
        generateNewExpression();
        answer.value = '';
        answer.disabled = false;
        result.hidden = true;
    }, 1000)
})
function generateNewExpression() {
    expression.innerHTML = `${getRandInt(1, 999)} + ${getRandInt(1, 999)} =`;
}
function getRandInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}