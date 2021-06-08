import React, { Component } from 'react'
import TextForm from './TextForm'

const MAX_ATTEMPS = 10

class Game extends Component {
    constructor() {
        super()

        this.state = {
            correctAttemps: 0,
            attemps: 0,
            word: null,
            guessed: [],
            won: false,
            lose: false,
            reload: false
        }
    }

    handleSubmitWord(word) {
        const guessed = new Array(word.length)
        guessed.fill('-')

        this.setState({ word, guessed })
    }

    handleSubmitGuess(charOrWord) {

        if (charOrWord.length === 1) {
            this.handleGuessedCharacter(charOrWord)
        } else {
            this.handleGuessedWord(charOrWord)
        }

    }


    handleGuessedCharacter(charOrWord) { // use from state
        let { state: { word, guessed, attemps, correctAttemps, won, lose } } = this

        guessed = [...guessed]

        for (var i = 0; i <= word.length; i++) {
            if (charOrWord === word[i]) {

                guessed[i] = charOrWord

                correctAttemps++

            }
        }

        attemps++

        if (attemps < MAX_ATTEMPS && correctAttemps === word.length) {

            won = true

            lose = false
        }

        if (attemps === MAX_ATTEMPS) {
            lose = true
        }

        this.setState({ guessed, attemps, correctAttemps, won, lose })
    }


    handleGuessedWord(charOrWord) {
        let { state: { word, attemps, correctAttemps, guessed, won, lose } } = this

        if (charOrWord !== word) {

            attemps++

            if (attemps === MAX_ATTEMPS) {

                lose = true

                won = false

            }

            this.setState({ attemps, lose, won })
        }
        if (charOrWord === word) {

            won = true

            lose = false

            correctAttemps = word.length

            attemps++

            guessed = charOrWord

            this.setState({ attemps, correctAttemps, guessed, won, lose })

        }
    }

    handleSubmitRefresh() {

        this.setState({ word: null })
    }


    render() {
        const { state: { word, guessed, won, lose, attemps, correctAttemps }, handleSubmitWord, handleSubmitGuess } = this

        return <div>
            {!word && <TextForm title="Enter a word" onSubmit={handleSubmitWord.bind(this)} />}
            {word && <div>
                {guessed}
                <TextForm title="Guess a character or the word" onSubmit={handleSubmitGuess.bind(this)} />
                <p>You have {MAX_ATTEMPS - attemps} tries.</p>
                <p>You guessed {correctAttemps} Letters from {word.length}.</p>
            </div>}
            {won && <div><p>you win!</p><form onSubmit={this.handleSubmitRefresh}><button>Restart the Game</button></form></div>}
            {lose && <div><p>you lose!</p><form onSubmit={this.handleSubmitRefresh}><button>Restart the Game</button></form></div>}
        </div>
    }
}

export default Game