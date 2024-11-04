class Student{
    #name;
    #score;

    constructor(name){
        this.#name = name;
        this.#score = 0;
    }

    // Transformers
    addScore(){
        this.#score += 1;
    }

    setName(name){
        this.#name = name;
    }

    // Accessors
    getScore(){
        return this.#score;
    }

    getName(){
        return this.#name;
    }
}

export default Student;