class Student {
    #name;
    #score;
    #lastLetter;

    constructor(name) {
        this.#name = name;
        this.#score = 0;
        this.#lastLetter = 'A'; // Initialize with a default value, adjust as necessary
    }

    // Transformers
    addScore() {
        this.#score += 1;
    }

    setName(name) {
        this.#name = name;
    }

    setLastLetter(letter) {
        this.#lastLetter = letter;
    }

    // Accessors
    getScore() {
        return this.#score;
    }

    getName() {
        return this.#name;
    }

    getLastLetter() {
        return this.#lastLetter;
    }
}

export default Student;
