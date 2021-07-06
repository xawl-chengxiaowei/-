(function(){
    // 属性的封装

    class Person{
        // TS可以在属性的前面添加属性的修饰符
        /***
         * public 修饰的属性可以在任意的位置访问（修改） 默认值！
         * private 私有属性，私有属性只能在类内部进行访问(修改)，使用。
         *   -可以通过类中添加方法使得私有属性可以被外部访问！
         * protected 受包含的属性，只能在当前类和当前类的子类中使用！
         */
       private _name:string;
       private _age:number;
       constructor(name:string,age:number){
          this._name = name;
          this._age = age;
                     }
            //要获取属性和修改属性,只能通过自己的方法来实现!--主动权在于自己
            /***
             * get方法用来读取属性  set方法用来设置属性
             * 它们被称为属性的存取器 
             */
            // 定义方法，用来获取name属性！
            // getName(){
            //     return this._name

            // }
            // // 定义方法，用来设置name属性！
            // setName(value:string){
            //     this._name = value;
            // }
            // getAge(){
            //     return this._age
            // }
            // setAge(value:number){
            //     // 判断年龄是否合法
            //     if(value >=0 ){
            //         this._age = value
            //     }              
            // }


            // 这是使用TS中设置getter方法的方式
            get name(){
                console.log('getname 执行了！');  
                return this._name;
            }
            set name(value:string){
                this._name = value
            }
            get age(){           
                return this._age;
            }
            set age(value:number){
                if( value >=0){
                    this._age = value;
                }
            }
    }

    const per = new Person('cxw',23);

    /***
     * 不加public和private的属性是在对象中设置的，属性可以在类的外部被任意的修改。
     * 属性可以被任意的修改将会导致对象中的数据变得非常的不安全！
     * 
     * 
     */
    // per._name = '刘鹏涛'
    // per._age = -38
    
    // -- 通过方法修改属性值
    // per.setName('刘鹏涛')

    // console.log(per);
    // console.log();
    console.log(per.name);//这是使用TS ，调用方法！
    per.name = '猪八戒'
    console.log(per.name);
    
    class A{
        protected num:number;
        constructor(num:number){
            this.num = num;
        }
    }
    class B extends A{
        test(){
            console.log("");
            
        }
    }
    // const b = new B(123);
    // B.num  不能使用
     
     class C{
        //  可以直接将属性定义在构造函数中！语法糖
         constructor(public name:string,public age:number){
             
         }
    
        }
        const c = new C('cxw',23)
        console.log(c);
        
    
    
    
    

})()