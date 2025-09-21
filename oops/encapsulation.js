console.log("encapsulation");

class Epp{

    sendetails(name,id){
        this.name=name;
        this.id=id;  
    }

    getname(){
      return this.name;
    }

    getid(){
        return this.id;
    }
    
}

let emp1 = new Epp();
emp1.sendetails("darshan", 101);
console.log(emp1.getname());
console.log(emp1.getid());