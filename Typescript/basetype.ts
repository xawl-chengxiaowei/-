// // 声明一个变量a，它的值只能是一个数字，因为是number类型，只能是数字！


// let a: number;//这是数字类型
// let b: string;//这是字符串类型！注意，这类型是小写的！

// // 声明完变量后直接赋值！
// let c:boolean=true;

// //js中的函数是不考虑参数的额类型和个数的！

// function sum (a:number,b:number):number{//后面那个是返回指定的类型！这个语言真棒啊！
//     return a+b;
// }

// sum(123,123);//参数有类型限制！

// //可以直接使用字面量来进行类型声明

// // 对象字面量就是引号引起来的部分并且是等号右边的部分！
// // 字面量是指由字母，数字等构成的字符串或者数值，它只能在等号的右边出现的值。

// let d :10;
// let e:"male"|"female"//可以使用|（或）来连接多个类型！即是联合类型
// let f:any//any表示的是任意类型！使用ts,不建议使用这个类型！

// // 声明变量  如果不指定类型，ts解释器会自动判断为any 

// let g:unknown//表示的是未知的类型！是一个类型安全的的any,unknown类型不能赋值给其他变量，能用unknown尽量就不用any!
// // 

// let e:unknown
// e='hello'; 
// let s:string
 
// //类型断言--可以告诉解释器变量的实际类型！告诉变量e是一个字符串
// s = e as string;
// s = <string>e;//这两个的效果是一样的！
// // void 是空值  表示没有返回值的一个函数，或是undefined
// // never人表示的是没有值！表示永远不会有返回值！ 这是连空都没有！
// function fn():void{

//     // 这里没有返回值,值为null！
// }
// // 下面这些就有些重要了。
// // object 是表示的一个对象
// let a :object;//表示的是一个js对象
// let b :{name:string,age?:number}//用来指定对象中包含那些属性！
// // 在属性名后面加上一个？表示的是属性是可选的.
// //不加？默认的就是必写的

// // [propName:string]:any 表示任意类型的属性[],表示的是可选！
// let c: {name:string,[propName:string]:any}


// // 设置函数结构的类型声明：
// // 语法：（形参：类型，形参：类型...=>返回值


// let d :(a:number,b:number)=>number;//形参的类型是number，返回值的类型也是number。

// // string[]表示的是字符串数组！
// let f:string[];
// e = ['a','b','c'];


// // 数组的类型说明：
// // 类型[]
// // Array<类型>

// let g:number[];
// let q:Array<number>//这两个都表示的是数值（number）类型的数组
// q:[1,3,6]

// // 这里还有元组，元组就是固定长度的数组。

// let h:[string,string];
// h = ['hello','hello2']//这是固定长度哦！

// // 枚举类型！就是把所有的类型枚举出来！
// enum  Gender {//gender 性，性别
//     Male = 0,//Male 男，男性
//     female = 1//female 女，女性
// }

// let i : {name:string,gender: Gender }

// i = {
//     name:'孙悟空',
//     gender:Gender.Male//gender 表示的是性别，1是male 男
// }

// // 判断的时候
// console.log(i.gender === Gender.Male);

// // &表示的是且
// // let j :{name：string} & {AbstractRange}

// // 类型的别名
// type  myType = String;
// let k :1|2|3|4|5;
// let l :myType;
// let m :myType;








