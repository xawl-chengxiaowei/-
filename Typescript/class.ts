class Person{

    //这是实例属性!
  readonly  name:string = 'cxw';//默认是拥有全部的权利
//   readonly 开头的属性，是只读属性！不能改

    // 在属性前面使用static关键字可以定义类属性
    // 即为类属性（静态属性）
      static  readonly age:number = 19 //这里也可以直接添加


    //   定义方法---不加static为实例方法，添加了static为类方法
   static sayHello()
{
    console.log('hello 大家好');
    
}
}
// 直接定义的属性是实例属性，需要通过实例去调用
// 使用static 开头的属性是静态属性（类属性,
// 可以直接通过类去调佣
const per = new Person();
console.log(per);
console.log(per.name);
console.log(Person.age);

// per.sayHello(); 实例方法时调用
Person.sayHello()//类方法调用！




