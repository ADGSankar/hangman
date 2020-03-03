class Hungman {
    constructor(word, remainingGuesses) {
        this.word = word.toLowerCase().split('');
        this.remainingGuesses = remainingGuesses;
        this.guessedLetters = [];
        this.status = 'Playing';
    }
    get puzzle() {
        let word = '';
        this.word.forEach(letter => {
            word += this.guessedLetters.includes(letter) || letter === ' ' ? letter : '*';
        });

        return word;
    }
    makeGuess(g) {
        let guess = g.toLowerCase()
        let isUnique = !this.guessedLetters.includes(guess)
        let isBadGuess = !this.word.includes(guess)
        if (isUnique) {
            this.guessedLetters.push(guess)
        }
        if (isUnique && isBadGuess) {
            this.remainingGuesses--;
        }
        this.calculateStatus()
    }
    calculateStatus() {
        let isCompleted = this.word.every(letter => this.guessedLetters.includes(letter) || letter === ' ')
        // let playedData = this.word.filter((letter) => {
        //     return !this.guessedLetters.includes(letter)
        // })

        // isCompleted = playedData.length === 0

        // this.word.forEach(letter => {
        //     if (this.guessedLetters.includes(letter)) {

        //     } else {
        //         isCompleted = false
        //     }
        // })

        if (isCompleted) {
            this.status = 'Finished';
        } else if (this.remainingGuesses <= 0) {
            this.status = 'Failed';
        } else {
            this.status = 'Playing'
        }
    }
    get statusMessage() {

        let message = '';
        if (this.status === 'Playing') {
            message = `Guesses left : ${this.remainingGuesses}`;
        } else if (this.status === 'Failed') {
            message = `Nice try! the word was "${this.word.join('')}"`;
        } else if (this.status === 'Finished') {
            message = "Great work! you gussed the word.";
        }
        return message;
    }
}








// console.log(puzzle)