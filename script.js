
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

    //stop the game is pressed 'Esc'

    if (PlayerPressed === 'Escape'){
        gameOver();
    }
    // get the expected to press
    const currentAlphabetGenerate = document.getElementById('current-alphabet')
    const targetAlphabet = currentAlphabetGenerate.innerText;
    const expected = targetAlphabet.toLowerCase()
    console.log(PlayerPressed, expected);

    if(PlayerPressed === expected){
        console.log('You Got A Point')

        const currentScore = getTextElementById('current-score')
        const updatedScore = currentScore +1 ;
        setTextElementById('current-score',updatedScore)
        // update score
        //1 . get the current score
        // const currentScoreElement = document.getElementById('current-score');
        // const currentScoreValueText = currentScoreElement.innerText;
        // const currentScore =parseInt(currentScoreValueText)
        // console.log(currentScore)
        // // 2 . increase the score by 1
        // const newScore = currentScore + 1;
        // // 3. show the update score 
        // currentScoreElement.innerText = newScore ;



        // start a new round 
        removeBackgroundColorById(expected);
        continueGame();
    }else{
        console.log('Your Lost Point , and Lost life')
        const currentLife =getTextElementById('current-life');
        const updatedLife = currentLife - 1 ;
        setTextElementById('current-life',updatedLife)

        if(updatedLife === 0){
            gameOver();
        }



    //     // 1. get the current life number 
    //     const currentLifeElement = document.getElementById('current-life');
    //     const currentLifeText = currentLifeElement.innerText;
    //     const currentLife =parseInt(currentLifeText);
    //     console.log(currentLife);
    //     // 2 . reduce the life count 
        // const newLife = currentLife -1;
    //     // 3 . display the updated life count 
    //    currentLifeElement.innerText = newLife;
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
    // hide everything show only the playground
    hideElementById('home-screen')
    hideElementById('final-score')
    showElementById('play-ground')
    // reset score and life

    setTextElementById('current-life',5)
    setTextElementById('current-score',0)
    continueGame()
}

function gameOver(){

    hideElementById('play-ground');
    showElementById('final-score');
    // update final score
    // get the final score
    const lastScore = getTextElementById('current-score')
    console.log(lastScore)
    setTextElementById('last-score',lastScore)

    // clear the last alphabet highlight
    const currentAlphabet = getElementTextById('current-alphabet')
    // console.log(currentAlphabet);
    removeBackgroundColorById(currentAlphabet);
}