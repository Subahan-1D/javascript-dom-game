
// function play(){
//   const homeSection = document.getElementById('home-screen')
//   homeSection.classList.add('hidden')
// //   console.log(homeSection.classList.add('hidden'))

// const playGroundSection= document.getElementById('play-ground')
// playGroundSection.classList.remove('hidden')
// // console.log(playGroundSection.classList)
// }

function continueGame(){

    const alphabet = getARandomAlphabets();
    console.log('Your Random Alphabet : ',alphabet)

    // Alphabet generate randomly show it

    const currentAlphabetGenerate = document.getElementById('current-alphabet')
    currentAlphabetGenerate.innerText = alphabet ;

    // set background color 

    setBackgroundColorById(alphabet);

}

function play(){
    hideElementById('home-screen')
    showElementById('play-ground')
    continueGame()
}