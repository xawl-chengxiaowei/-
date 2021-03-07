class Tab{
    constructor(id){
        // 获取元素  this指向的是实例对象
        this.main = document.querySelector(id);
        this.ul = this.main.querySelector('.fisrstnav ul:first-child')//获取到ul第一个子元素。
        this.fsections = this.main.querySelector('.tabscon')
        this.add = this.main.querySelector('.tabadd')
        this.init();
    }
    //获取所有的小li和sections,便于添加后节点解决未更新的bug，刷新！
    init(){
        this.updateNode()
        // init 初始化操作让相关的元素绑定事件
        this.add.onclick = this.addTab.bind(this.add,this);
        for (var i = 0; i< this.lis.length; i++) {
            this.lis[i].index = i;
            this.lis[i].onclick = this.toggleTab.bind(this.lis[i],this);//不加()，点击后才加载该切换函数    
            this.remove[i].onclick = this.removeTab.bind(this.remove[i],this);         
            this.spans[i].ondblclick = this.editTab;
            this.sections[i].ondblclick =this.editTab;
        }   
    }
    updateNode(){
        //这两个数量添加后要不断的更新
        this.lis = this.main.querySelectorAll('li');
        this.sections = this.main.querySelectorAll('section');
        this.remove = this.main.querySelectorAll('.icon-guanbi')
        this.spans = this.main.querySelectorAll('.fisrstnav li span:first-child')
    }      
    // 1.切换功能
    toggleTab(that){
        that.clearClass();//切换的时候直接调用。这里的that，是作为构造函数作为参数传过来的
        this.className = 'liactive';//这里的this是按钮本身
        that.sections[this.index].className = 'conactive'//
    }
    // 清除函数
     clearClass(){
         for(var i=0;i<this.lis.length;i++){//这里面的this指向的是that,that调用的（看toggleTab里面的第一行）
             this.lis[i].className = '';
             this.sections[i].className = '';
         }
     }
    // 2.添加功能
    addTab(that){
        that.clearClass();//切换的时候直接调用
        var canshu = Math.random()
        // 创建li元素和section
        const li = '<li class="liactive"><span>新选项</span><span class="iconfont icon-guanbi"></span></li>'
        const section = '<section class="conactive">测试4'+canshu+'</section>'
        // 追加
        that.ul.insertAdjacentHTML('beforeend',li)//直接调用insertAdjacentHTML详见MDN,最佳在ul父元素内部后面
        that.fsections.insertAdjacentHTML('beforeend',section)
        that.init();
1    } 
    // 3.删除功能
    removeTab(that,e){
        e.stopPropagation()//阻止冒泡
        let index = this.parentNode.index;//this指向的是this.remove[i]。
        console.log(index);
        that.lis[index].remove()//remove可以直接删除指定的对象
        that.sections[index].remove()
        that.init()
        if(document.querySelector('.liactive')) return ;//当有选中状态的时候,就不需要前面一个处于选中的状态啦！
        index--//当我们删除了选中状态的li时,让前一个位选中状态。
        // 手动调用我们的点击事件，click() 不需要手动触发！
        that.lis[index] && that.lis[index].click()//that.lis[index]当没有删除按键时，条件为假，不执行。
    }

    // 4.修改功能
    editTab(){//指向span
        let Str = this.innerHTML;//先将文本框的内容保存起来！
        // 双击禁止选中文字
        window.getSelection ? window.getSelection().removeAllRanges() : document.selection.empty();
        this.innerHTML = '<input type="text"/>'//设置文本框的内容为input输入框！
        let input = this.children[0];
        input.value = Str;
        input.select();//默认文本框的内容处于选中状态！即Str。之前保存的状态，万一用户不选，返回了呢
        // 当我们离开文本框的时候，就将文本框的内容给span。
        input.onblur = function(){
            this.parentNode.innerHTML = this.value;
        }
        // 按下回车也可以将文本框的值给span
        input.onkeyup = function(e){
            if(e.keyCode === 13){
                  // 手动调用表单失去焦点事件  不需要鼠标离开操作
                  this.blur();
            }
        }
    }
}
    new Tab('#tab')