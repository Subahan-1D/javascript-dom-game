
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
        console.log('Your Win Point')
        console.log('You have press correctly ',expected)
        removeBackgroundColorById(expected);
        continueGame();
    }else{
        console.log('Your Lost Point , and Lost life')
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