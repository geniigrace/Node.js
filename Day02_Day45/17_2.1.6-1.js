// class 만들기, 구버전

var Human=function(type){ //생성자 
    this.type=type || 'human'; //type에 type이 들어오면 type을 넣고, type이 아닌게 들어오면 'human'을 넣음
};

Human.isHuman=function(human){
    return human instanceof Human;
}

Human.prototype.breathe=function(){
    alert('h-a-a-a-m');
};

var Zero = function(type, firstName, lastName){
    Human.apply(this, arguments); //상속
    this.firstName=firstName;
    this.lastName=lastName;
};

Zero.prototype=Object.create(Human.prototype);
Zero.prototype=constructor=Zero;
Zero.prototype.sayName=function(){
    alert(this.firstName+' '+this.lastName);
};

var oldZero=new Zero('human','Zero','Cho');
Human.isHuman(oldZero);