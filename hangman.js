function pickWord () {
  const words = ['javascript', 'monkey', 'amazing', 'pancake'];

  return words[(Math.floor(Math.random() * words.length))]
} 

function setupAnswerArray(word) {
  let answerArray = []
  for(let i = 0; i < word.length; i++) {
    answerArray[i] = "_"
  }
  return answerArray
}

function showPlayerProgress(answerArray) {
  alert(answerArray.join(" "))
}

function getGuess() {
  return prompt('Guess a letter, or click cancel to stop playing')
}

function updateGameState(guess, word, answerArray){
  let appearance = 0

    for (let j = 0; j < word.length; j++) {
      if (word[j] === guess) {
        answerArray[j] = guess
        appearance++
      }
    }

  return appearance
}

function showAnswerAndCongratulatePlayer(answerArray){
  showPlayerProgress(answerArray)
  alert('yay! The anwer was ' + answerArray.join(""))
}

let word = pickWord()
let answerArray = setupAnswerArray(word)
let remainingLetters = word.length

while(remainingLetters > 0) {
  showPlayerProgress(answerArray)
  let guess = getGuess()
  if(guess === null){
    break;
  } else if(guess.length !== 1) {
    alert('Please enter a single letter')
  } else {
    let correctGuesses = updateGameState(guess, word, answerArray)
    remainingLetters -= correctGuesses
  }
}

showAnswerAndCongratulatePlayer(answerArray)
