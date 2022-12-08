//class 만들기, 신버전

class Human{
    constructor(type='human'){ //생성자
        this.type=type;
    }


static isHuman(human){
    return human instanceof Human;
}

breasthe(){
    alert('h-a-a-a-m');
}
}

class Zero extends Human{
    constructor(type, firstName, lastName){
        super(type);
        this.firstName=firstName;
        this.lastName=lastName;
    }

    sayName(){
        super.breasthe();
        alert(`${thils.firstName} ${this.lastName}`);
    }
}

const newZero = new Zero('human', 'Zero', 'Cho');
Human.isHuman(newZero);