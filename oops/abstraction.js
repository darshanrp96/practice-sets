console.log("abstraction");

function Employee(name, basesalary, age){

    this.name=name;
    this.basesalary=basesalary;
    this.age=age;
    let bonus=1000; // private variable

    let calculateSalary = function(){ // private method   
        let finalsalary=  basesalary+ bonus
    }

    this.getEmpDetails = function(){
        calculateSalary();
       }
}

let emp1 = new Employee("darshan",101,24);
emp1.getEmpDetails();