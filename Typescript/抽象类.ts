(function(){

    // abstract开头的类是抽象类，抽象类和其他类的差别不大，只是不能用来创建对象！即不能new实例。
    // 就是用来专门用来继承的类。
    abstract class Animal{
        name:string
        constructor(name:string){
            this.name=name;
        }
        // 抽象方法使用abstract开头，没有方法体
        // 抽象方法只能定义在抽象类中，子类必须对抽象方法进行重写！
    abstract  sayHello():void
            
    }
    class Dog extends Animal{
        constructor(name:string){
            //如果在子类中写了构造函数，在子类构造函数中必须要对父类进行调用。
            super(name)//调用父类的构造函数！
    }
        // 对父类进行重写！
     sayHello(){
        //  super.sayHello();//super  调用父类的方法！
        console.log("haha");
        
    }

 }

 const dog = new Dog("旺财");
 dog.sayHello()
                                                                                                 
})()