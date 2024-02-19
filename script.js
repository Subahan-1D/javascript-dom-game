
// function play(){
//   const homeSection = document.getElementById('home-screen')
//   homeSection.classList.add('hidden')
// //   console.log(homeSection.classList.add('hidden'))

// const playGroundSection= document.getElementById('play-ground')
// playGroundSection.classList.remove('hidden')
// // console.log(playGroundSection.classList)
// }


// keyboard chapa chapi

function keyBoardEnterButtonPress(event) {
    const PlayerPressed = event.key;
    console.log('Player Pressed',PlayerPressed);
    // get the expected to press
    const currentAlphabetGenerate = document.getElementById('current-alphabet')
    const targetAlphabet = currentAlphabetGenerate.innerText;
    const expected = targetAlphabet.toLowerCase()
    console.log(PlayerPressed, expected);

    if(PlayerPressed === expected){
        console.log('You Got A Point')
        // update score
        //1 . get the current score
        const currentScoreElement = document.getElementById('current-score');
        const currentScoreValueText = currentScoreElement.innerText;
        const currentScore =parseInt(currentScoreValueText)
        console.log(currentScore)
        // 2 . increase the score by 1
        const newScore = currentScore + 1;
        // 3. show the update score 
        currentScoreElement.innerText = newScore ;
        // start a new round 
        removeBackgroundColorById(expected);
        continueGame();
    }else{
        console.log('Your Lost Point , and Lost life')

        // 1. get the current life number 
        const currentLifeElement = document.getElementById('current-life');
        const currentLifeText = currentLifeElement.innerText;
        const currentLife =parseInt(currentLifeText);
        console.log(currentLife);
        // 2 . reduce the life count 
        const newLife = currentLife -1;
        // 3 . display the updated life count 
       currentLifeElement.innerText = newLife;
    }
}
// Capture keyboard key press
document.addEventListener('keyup', keyBoardEnterButtonPress);
// keyboard chapa chapi
function continueGame() {

    const alphabet = getARandomAlphabets();
    // console.log('Your Random Alphabet : ', alphabet)
    // Alphabet generate randomly show it
    const currentAlphabetGenerate = document.getElementById('current-alphabet')
    currentAlphabetGenerate.innerText = alphabet;
    // set background color 
    setBackgroundColorById(alphabet);

}

function play() {
    hideElementById('home-screen')
    showElementById('play-ground')
    continueGame()
}