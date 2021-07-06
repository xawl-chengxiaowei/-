/**
 * 在定义函数或者类时，如果遇到类型不明确的时候就可以使用泛型
 * 
 * 
 * 
 */

function fn<K>(a:K): K{
  return a;
}

//可以直接调用具有泛型的函数
fn(10);//不指定泛型，TS可以自动对泛型进行判断
fn<string>('hello')//指定泛型

// 可以指定多个！
function fn2<T, K>(a:T,b:K):T{ 
    console.log(a);
    return a;
}

fn2<number,string>(123,'hello');

// 缩小范围
interface Inter{
    length:number;
}

// 泛型T必须是Inter的实现类
function fn3<T extends Inter>(a:T):number{
    return a .length;

}
fn3('123')//不能123  数字因为数字没有length;没有属性


// 在类中使用泛型！
class MyClass<T>{
    name: T;
    constructor(name:T){
    this.name = name
}

}

const mc = new MyClass<string>('cxw');