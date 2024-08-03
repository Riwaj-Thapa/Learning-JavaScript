class ToyotaCar{

    constructor(brand,mileage){
        console.log("creating new object");
        this.brand=brand;
        this.mileage=mileage;
    }

    start(){
        console.log("start");
    }

    stop(){
        console.log("stop")
    }

   
}


let fortuner = new ToyotaCar("This is fortuner",10);
console.log(fortuner);
let lexus = new ToyotaCar("This is lexus",13);
console.log(lexus);



class Parent{
    hello(){
        console.log("hello");
    }
}

class Child extends Parent{
    

}

let obj1 = new Child();

class Person{

    constructor(name){
        this.species="homo sapiens";
        this.name=name;

    }
    eats(){
        console.log("eat");
    }
    
}


class Engineer extends Person{
    constructor(branch,name){
        
        super(name);
        this.branch=branch;
        
    }

    work(){
        console.log("Riwaj","solve problems, build something");
    }

}


let eObj1 = new Engineer("chemical enggineer","Riwaj");




//Error handling 


let a = 10;
let b = 20;


try{
    console.log(a+c);

}catch(err){
    console.log(err);
}
console.log(a+b);