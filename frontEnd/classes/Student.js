class Student {
    #name;
    #score;
    #lastLetter;

    constructor(name) {
        this.#name = name;
        this.#score = 0;
        this.#lastLetter = 'A'; 
    }

    // Transformers
    setScore(score){
        this.#score = score;
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
