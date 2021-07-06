(function(){
    // 描述一个对象的类型
    type myType = {
        name : string;
         age :  number;
    };
    /***
     * 接口是用来定义一个类的结构
     * 
     *接口用来定义一个类的结构，用来定义一个类中有哪些的属性和方法
    //  同时接口也可以当成类型声明去使用！
     * 
     */
    interface myinterface {
        name: string;
        age : number;
    }
    interface myinterface{
        gender:string;
    }

    const obj:myinterface = {
        name:'sss',
        age:111,
        gender:'男'

    }

    // 接口可以在定义类的时候去限制类的结构
    // 接口中所有的属性都不能有实际中的值
    // 接口中定义的对象的结构，而不考虑实际值
    // 在接口中所有的方法都是抽象方法！

    interface myInter{
        name:string;
        sayhello():void
    }
// 定义类时，可以使用类去实现接口，
// 实现类就是使类实现接口的要求!
    class myclass implements myInter{
        name:string;
        constructor(name:string){
            this.name = name
        }
    // 要重写接口的方法和属性！
    sayhello(){
        console.log("hahaha");       
    }
}



})()