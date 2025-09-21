console.log("inheritance");

class Parent{

 setname(name){
    return this.name=name;
 }

 setid(id){
   return this.id=id;
 }
}
 class child extends Parent{

    setage(age){
       return this.age=age;
    }

}

let emp1 = new child();
console.log(emp1.setname("darshan"));
console.log(emp1.setid(101));
//console.log(emp1.setage(24));



