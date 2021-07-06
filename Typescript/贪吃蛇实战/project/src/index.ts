// 引入样式

import * as HtmlWebpackPlugin from '../node_modules/html-webpack-plugin/typings';
import './style/index.less';

// import GameControl from './module/GameControl';
import GameControl from './module/GameControl';

// import Food from './module/Food';
// import scorePanl from './module/scorePanl';

// // 定义食物类 food
// // 计分牌类
// const food = new Food();
// //  console.log(food.X,food.Y);
// food.change();
// //  console.log(food.X,food.Y);
// const score = new scorePanl(20,2);
// score.addScore();
// // 测试。
// for(let i = 0; i<200 ;i++){
//     score.addScore();
// }
// console.log('hahaha');

const gameControl = new GameControl();

setInterval(()=>{
    console.log(gameControl.direction);
    
},1000)
