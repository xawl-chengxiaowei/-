class Dog{
     name :string;
     age :number;//属性直接在类中去定义
    //构造函数在对象创建的时候自动调用，调用new Dog(),自动调用construction
    //可以在构造函数中直接通过this 直接向新建的对象中添加属性
   constructor(name:string,age:number){
       this.name = name;
       this.age = age;

   }
    bark(){
         alert('汪汪汪')
        //  在方法中可以通过this来表示当前调用方法的对象！
        console.log(this.name);
    }
}

const dog = new Dog('小黄',4);
console.log(dog);
dog.bark()
