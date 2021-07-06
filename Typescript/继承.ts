(function(){

    class Dog{
        name:string;
        age:number;
        constructor(name:string,age:number){
            this.name = name;
            this.age = age;    
 
        } 
        sayHello(){
            console.log("汪汪汪");
            
        }  
     }

     const dog = new Dog('小黄',5);
     console.log(dog);
     dog.sayHello()

    //  定义猫类
     class Cat{
        name:string;
        age:number;
        constructor(name:string,age:number){
            this.name = name;
            this.age = age;    
 
        } 
        sayHello(){
            console.log("喵喵喵");
            
        }  
     }
})()


