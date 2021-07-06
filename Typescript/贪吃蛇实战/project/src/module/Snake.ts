class Snake{
    // 表示蛇头的部分;
    head:HTMLElement;
    // 蛇的身体（包括蛇头）
    bodies:HTMLCollection;
    // 获取蛇的容器
    element:HTMLElement;
    constructor(){
        this.element = document.getElementById('snake')!;
        this.head = this.element.querySelector('div')!;
        this.bodies  = this.element.getElementsByTagName('div'); 
    }
    get X(){
        return this.head.offsetLeft;//获取的是number类型，需要转换。
    }
    get Y(){
        return this.head.offsetTop;
    }
    set X(value:number){
        // 如果在移动的的过程中，新的值在没有赋值前与旧值相同,
        // 那么就不需要赋值,修改，直接返回！
        if(this.X === value){
            return;
        }
        // X的合法的范围是在0-290之间。
        if(value < 0  || value > 290){
            //进入判断说明蛇撞墙了！抛出异常
            throw new Error("蛇撞墙了");   
        }
        // 修改X值得时候，就是修改水平坐标，只有一个蛇头一个节点的时候
        // 蛇能够左右的移动，当蛇有多个节点的时候，向左移动，不能向右掉头，反之亦然！
        if(this.bodies[1] && (this.bodies[1] as HTMLElement).offsetLeft === value){
            //如果发落了掉头，让蛇向反方向继续移动
            if(value > this.X){
                value = this.X - 10;
            }else{
                // 向左走
                value = this.X + 10;
            }
        }

        // 移动身体
        this.moveBody();

        this.head.style.left = value + "px";

        // 检查有没有撞到自己
        this.checkHeadBody()
    }
    set Y(value:number){
        if(this.Y === value){
            return;
        }

        if(value < 0  || value > 290){
            //进入判断说明蛇撞墙了！
            throw new Error("蛇撞墙了");   
        }
        // 同理，蛇掉头的解决方案！
        if(this.bodies[1] && (this.bodies[1] as HTMLElement).offsetTop === value){
            //如果发落了掉头，让蛇向反方向继续移动
            if(value > this.Y){
                value = this.Y - 10;
            }else{
                // 向左走
                value = this.Y + 10;
            }
        }
        // 移动身体
        this.moveBody();
        this.head.style.top = value + "px";

        // 检查有没有撞到自己
        this.checkHeadBody()


    }
    // 蛇增加身体的方法
    addBody(){
        // 想element中添加一个div
        this.element.insertAdjacentHTML('beforeend',"<div></div>")
    } 
    // 添加一个蛇移动的方法
    moveBody(){
        // 蛇移动的规律是蛇从后面往前面移动格数,依次移动到前一个位置！
        for(let i = this.bodies.length-1;i>0;i--){
            // 获取后一个身体的位置
            let X = (this.bodies[i-1] as HTMLElement).offsetLeft;
            let Y = (this.bodies[i-1] as HTMLElement).offsetTop;
            // 将后一个身体的位置赋值给前一个位置！
            (this.bodies[i] as HTMLElement).style.left = X +'px';
            (this.bodies[i] as HTMLElement).style.top = Y +'px';
        }
    }
    // 检查蛇头是否和蛇的身体相撞！
    checkHeadBody(){
        // 获取所有的身体，检查其是否和蛇头的坐标发生重叠
        for(let i=1; i<this.bodies.length; i++){

            let bd = this.bodies[i] as HTMLElement;
            if(this.X === bd.offsetLeft && this.Y === bd.offsetTop){
                // 当判断蛇头的部分与身体重合(坐标一致),则游戏结束！
                throw new Error('撞到自己了')
            }

        }
    }
    
}

export default Snake;