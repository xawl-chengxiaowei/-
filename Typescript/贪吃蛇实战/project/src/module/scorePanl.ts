class scorePanl{
    score = 0;
    level = 1;
    scoreEle : HTMLElement;//后面是类型;
    levelEle : HTMLElement;

    // 设置一个变量用来限制等级的太高。
    maxLevel:number;
    // 设置一个变量用来表示多少分才升等级。
    upScore:number;

    // scoreEle和levelEle 表示的是分数和元素所在的元素
    constructor(maxLevel:number = 10,upScore:number = 10){
        this.scoreEle = document.getElementById('score')!;
        this.levelEle = document.getElementById('level')!;
        this.maxLevel = maxLevel;
        this.upScore = upScore;
    }

    //定义一个加分的方法
    addScore(){
        this.score ++;
        this.scoreEle.innerHTML = this.score +'';
        // 判断分数  用来升级

        if(this.score % this.upScore === 0){
            this.levelUp();
        }
    }
    // 定义等级加分的方法
    levelUp(){
        // this.level++;
        if(this.level < this.maxLevel){
            this.levelEle.innerHTML = ++ this.level+''//将int 转为字符串
        } 
    }

}
export default scorePanl;