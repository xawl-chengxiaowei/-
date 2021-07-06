import Food from "./Food";
import scorePanl from "./scorePanl";
import Snake from "./Snake";

class GameControl{
    // 定义三个属性
    snake:Snake;
    Food:Food;
    scorePanl:scorePanl;
    // 用来存储键盘按下的键（上下左右）
    direction:String = 'ArrowRight';

    // 创建一个属性用来记录游戏是否结束！
    isLive = true;

    constructor(){
        this.snake = new Snake();
        this.Food = new Food();
        this.scorePanl = new scorePanl();
    
        this.init();
        
    }
    // 游戏的初始化方法，调用后游戏即开始
    init(){
    // 绑定键盘按键按下的事件
    document.addEventListener('keydown',this.keydownHandler.bind(this))//使绑定的this由原来的document 指向为 gameControl!。
    }
    // 创建一个键盘按下的响应函数
    keydownHandler(event:KeyboardEvent){
        // 需要检查event.key的值是否合法(用户点击的时候判断时候是上下左右键，而不是其他的键盘按键！)

        this.direction = event.key;
        this.run()
      
    }

    // 创建一个控制蛇移动的方法
    run(){
        // 根据存储的direction 来使蛇的位置改变
        let X = this.snake.X;
        let Y = this.snake.Y;

        // 这是根据按键的方向去修改值X值和Y值！这是计算X值和Y值,
        // 下面是复制设置X值和Y值。 
        switch(this.direction){       
            case "ArrowUp":
                // 向上移动
                Y -= 10;
            break;
            case "ArrowDown":
                // 像下移动
                Y += 10;
            break;
            case "ArrowLeft":
                // 向左移动
                X -= 10;
            break;
            case "ArrowRight":
                // 向右移动
                X += 10;
            break;
        }
        this.cheakEat(X,Y);
        // 修改蛇的X值和Y值！
        try{
            this.snake.X = X;
            this.snake.Y = Y;
        }catch(e){
            // 游戏结束，弹出异常！
            alert(e.message+"GAME OVER!");
            // 将islive 设置false
            this.isLive = false;
        }
       

        // 当this.isLive是true 表示的是可以进行游戏！蛇动起来了！
        // 开始一个定时调用！刷新频率，时间越短，贪吃蛇跑的越快！
       this.isLive && setTimeout(this.run.bind(this),300 - (this.scorePanl.level -1) * 30)
      
       }

       
    // 定义一个方法，用来检查蛇是吃到食物
    cheakEat(X:number,Y:number){
        if(X === this.Food.X && Y ===this.Food.Y){
     //    食物的位置要进行重置！
         this.Food.change();
         this.scorePanl.addScore();
         this.snake.addBody();

        }
     }
        
}


export default GameControl; 