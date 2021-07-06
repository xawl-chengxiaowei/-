class Food{
    // 定义一个属性表示食物所对应的元素
    element:HTMLElement;
    constructor(){
        // 获取页面中的food元素并将其赋值给element
        this.element = document.getElementById('food')!;
    }

    //贪吃蛇要获取食物，其X坐标和Y坐标必须要相等！
    // 食物的位置最小是0，最大是290，每次移动的是10像素！最大移动29格！
    get X(){
        return this.element.offsetLeft;
    }
    get Y(){
        return this.element.offsetTop;
    }
    // 修改食物位置的函数
    change(){
        // 生成一个随机的位置！randow生成的是0 到 1 随机数，让其变为1-10  然后乘以格数！
        let top = Math.round( Math.random() * 29 ) * 10;
        let left = Math.round( Math.random() * 29 ) * 10;
        this.element.style.left = left + 'px';
        this.element.style.top = top +'px';
    }
}

export default Food;