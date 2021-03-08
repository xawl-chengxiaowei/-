const process = require('process')
const fs = require('fs')
const path = require('path')

// 这是线程中向node传递参数 使用node  index   参数一  参数二
// 在process中argv[2],argv[3]中便能取到参数。
const  srcDir  =  process.argv[2]
const  destDir =  process.argv[3]
const  count   =  process.argv[4]//这是传递的文件夹数。

let i = 0;

while(i < count){
    i++;
    const num = 'day' + (i +'').padStart(2,0);
    const srcPath = path.resolve(srcDir,num)
    const destPath = path.resolve(destDir,num)
    if(fs.existsSync(destPath)) continue;//文件存在，则跳过！
    fs.mkdir(destPath,(err)=>{
        if(!err){
            console.log("文件创建成功",num);
        }
    // 遍历目录下所有的文件
    const srcFiles = fs.readdirSync(srcPath);
    for(const file of srcFiles ){
        if(file.endsWith('.mp4')){
            const srcFile  = path.resolve(srcPath,file);
            const destFile = path.resolve(destPath,file);
            fs.copyFileSync(srcFile,destFile);//sync是同步的
            console.log(file,'拷贝成功');
          }
        }
    })

}
