console.log("polymorphism");

class Animal{
    constructor(name){
        this.name=name;
    }
    eats(){
        console.log(this.name + " eats food");
        
    }
}

class Dog extends Animal{
    
    
    eats(){
        super.eats();
        console.log(this.name + " eats meat");
    }
}

let a1 = new Dog("tommy");
a1.eats();