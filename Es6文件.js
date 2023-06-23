// let
let  a ;
let b,c;
let  d=100;
let  f=300,g='cc';
// 1. 变量不能重复声明
// 2. 块级作用域 全局 函数，eval；  if else while for
// 3. 不存在变量提升
//  console.log(song);
//  let song = 1;
// 4. 不影响作用域链
{
    let school = 'aaa'
   const  fn = function (){
        console.log(school)
    }
    fn();
}

const aa = new Promise((res,rej)=>{rej('111')});
    aa
        .then((value)=>{console.log('成功',value)},(value)=>{console.log('失败',value)})
        .catch((err)=>{console.log('err',err)})



// const
/** 1. 一定要赋初始值
*   2. 一般敞亮使用大写(潜规则)
*   3. 常量的值不能修改
 *  4. 块级作用域
 *  5. 对于数组和对象的元素修改，不算做对常量的修改，不会报错
 *  （由于数组和对象指向的地址并没有发生变化，只是地址里面的数据的内容或长度发生了变化而已）
 *  const TEAM = ['UZI','MLXG','Ming','Letme'];
 *  TEAM.push('Meiko')
*
*
*  */


// 解构赋值 ：允许按照一定的模式从数组和对象提取值 ，对变量进行赋值
/**
 * const F4 = ['xiao','shen', 'yang'];  数组
 * let [xiao ,liu , yang] = F4
 * const zhao ={
 *     age:19,
 *     name:'zhaobenshan',
 *     sex:'nan',
 *     obj:{
 *         aa:1,
 *     }
 * }
 * const {age,name,sex} = zhao
 * */


// 模板字符串
/***
 *
 * 1。声明
 * 2。内容中可以只可出现换行符
 * 3。变量拼接
 * let love = 'wei'
 * let out = `${love}shiwo`
 */

// 箭头函数
// 声明函数
let fn = function (){

}
let  fn1 = (a,b) => {
    return a+b;
}


/**
 * 1.this 是静态的。this 始终 指向函数声明是所在作用域的 this 的值
 * function getName(){
 *     console.log(this.name);
 * }
 * let getName2 = () =>{
 *     console.log(this.name);
 * }
 * window.name = '尚硅谷';
 * const school = {
 *     name:'anguigu',
 * }
 *直接调用
 * getName();
 * getName2();
 *
 * call 方法调用
 * getName。call(school);
 * getName2.call(school);
 *
 *
 * 不能做为构造实例化对象
 * let Person = (name,age) =>{
 *     this,name = name;
 *     this.age = age;
 *     let me = new Person('xiao',20);
 *
 *     3.不能使用arguments 变量
 *     let fn =()=>{
 *     console.log(arguments);
 *     }
 *     fn(1,2,3)
 *     4.箭头函数的简写
 *     1） 省略小括号，当形参有且只有一个的时候
 *
 *     let add = n =>{
 *         return n+n;
 *     }
 *
 *     2) 省略花括号 当代码体只有一句语句的时候， 此时return必须省略
 *     而且语句的执行结果就是函数的返回值
 *     箭头函数 适合与this无关的回调  定时器 数组方法的回调
 *     箭头函数不适合与this有关的回调 时间回调，对象的方法
 *
 * }
 * */


// 形参初始值
// 1.形参初始值，具有默认值的参数，一般只为要靠后

 function aa(aa,bb,cc=100){
     return aa+bb+cc
}
// 2.与解构赋值结合
function cinnect({host,username}){
     console.log(host,username)
}
cinnect({
    host:'111',
    username:'aa'
})


// rest 参数

// Es5 获取实参的方式
function date(){
    console.log(arguments)
}
date('11','222')


function date1(...args){
     console.log(args); // 可以使用数组的一些方法  map filter some every
}
date1('aa','bb','ccc')
// rest 参数必须要放到参数最后
function fn11(a,b,...args){
     console.log(a,b,args)
}
fn11(0,1,34,56)


// 扩展运算符
// [...] 扩展运算符 能将[数组]转换成逗号分割的 [参数序列]
const  tf = ['111','22','33'];
 // 声明一个函数
function  chuanwan(){
    console.log(arguments);
}
chuanwan(tf)
chuanwan(...tf)

// 扩展运算符的运用
// 1.数组的合并
const kuaizi = ['wan','xiao']
const  fenghuang = ['zeng','ling']
const  arr1 = kuaizi.concat(fenghuang);
const arr = [...kuaizi,...fenghuang]
// 2.数组的克隆
const kuaiziNew = [...kuaizi]
// 3.将伪数组转为真正的数组
const divs = document.querySelectorAll('div');
const  divArr = [...divs];


//    js中的第七种数组类型，是一种类似字符串的数据类型
/**
 * symbol 的特点
 * symbol 的值是唯一的，用来解决命名冲突的问题
 * symbol 值不能与其他数据类型进行运算
 * symbol 定义的对象 属性不能使用 for...in 循环遍历，但是可以使用 reFlect.ownKeys来获取对象的所有键名
 *
 *
 * 创建 symbol
 * let s1 = Symbol()
 * let s1 = Symbol('111')
 *
 * */

let  game= {
    aa:11,
}
// 向对象添加方法

let methods = {
    up:Symbol(),
    down:Symbol(),
}

game[methods.up] = function (){
    console.log('我可以改变形状')
}


let youxi ={
    name:'langrensha',
    [Symbol('say')](){
        console.log('wokeyifayan')
    }
}

//迭代器
// 迭代器是一种接口 为各种不同的数据结构提供统一的访问机制
// 任何数据结构只要部署iterator 接口，就可以完成遍历操作
// for 。。。 in 是主要是下标数
// for 。。。 of 是主要是子元素为主的

/**
 * 工作原理
 * 1）创建一个指针对象，指向当前数据结构的起始位置
 * 2）第一次调用对象的next方法，指针自动指向数据结构的第一个成员
 * 3）接下来不断调用next方法 指针一直往后移动，知道指向最后一个成员
 * 4） 每当用next方法返回一个包含value和done属性的对象
 * 当value为undefined，done为true的时候，意味这遍历结束
 * 需要自定义遍历数据，就要想到iterator（迭代器）
 *
 * */


// 自定义遍历数据（迭代器）

const banji ={
    name: 'zhongjiyiban',
    stus:[
        'xiaoming',
        'xiaoning',
        'xiaotian',
        'knight'
    ],
    [Symbol.iterator](){
        let  index = 0;
        let  _this = this;
        return {
            next(){
                if(index < _this.stus.length){
                    index++;
                    return {
                        value:_this.stus[index],
                        done:false,
                    }

                }else{
                    return {
                        value:undefined,
                        done:true,
                    }
                }

            }
        }
}
}

for(let i in banji){
    console.log(banji[i]);
}

// 生成器 其实是一个特殊的函数
// 异步编程  纯回调函数 node fs ajax mongogb
// yield  函数代码的分隔符
// 分割符 start
function * gen(args){ // * 的位置没有要求
    console.log(111);
  let one =  yield  '一直没有耳朵';
  console.log(one)
   // 分割符 end / 分割符 start
    console.log(222);
   let two = yield  '一直没有尾巴';
    console.log(333);
   // 分割符 end / 分割符 start
   let three = yield  '真奇怪';
    // 分割符 end / 分割符 start
}
// 分割符 end
//
// let  iterator = gen();
// iterator.next() // 只有调next才能执行

// 遍历
for(let i of gen()){
    console.log(i)
}


// 生成器函数参数

// 执行获取迭代器对象
 let it = gen('AAA');
cosnoel.log(it.next());
// next 方法可以传实参
cosnoel.log(it.next('BBB'));
cosnoel.log(it.next("CCC"));
cosnoel.log(it.next());




for(let v of banji){
    console.log(v)
}

// 异步编程 文件操作 网络操作 （ajax request） 数据库操作
// 1s 后控制台输出  111 2s后 输出222 3s后输出 333
// 回调地狱
 setTimeout(()=>{
    cosnoel.log(111);
     setTimeout(()=>{
         cosnoel.log(222);
         setTimeout(()=>{
             cosnoel.log(333);
         },3000)
     },2000)
 },1000)

 function * xuqiu(){
    yield qq(1);
    yield qq(2);
    yield qq(3);
 }

const  qq = function (delay){
    setTimeout(()=>{
        console.log(111*delay );
    },delay * 1000)
}
const  getData = function (delay){
    setTimeout(()=>{
        let  data = delay;
        // console.log(delay );
        getDetaiIterator.next(data);
    }, 1000)
}

function * getDetail(){
    let user = yield getData('用户数据');
    console.log(user);
    let order = yield getData('订单数据');
    console.log(order);
    let goods = yield getData('商品数据');
    console.log(goods)
}

let getDetaiIterator = getDetail();
getDetaiIterator.next()


let  aa1 = xuqiu()
aa1.next();
aa1.next();
aa1.next();



/**
 *  promise   是es6 引入的异步编程的新解决方案 语法上promise 是一个构造函数
 * 用来封装 异步操作并可以获取其成功或失败的结果
 * promise 构造函数：Promise(excutor){}
 * Promise.prototype.then 方法
 * Promise.prototype.catch 方法
 *
 * */

// promise 有三个状态 成功 失败 初始化
 const P = new  Promise(resolve,reject ){
     setTimeout(function (){
        let data = '数据库中的用户数据';
        // 调用 resolve 状态就会变成成功
         resolve(data);

         let  err = '调用失败'
         reject(err)
     },1000)
}
// diayong promise对象的 then 方法
 P.then((value)=>{
     console.log(value)
 },function (reason){
     console.error(reason);
 })

// buffer 就调 tostring

const xhr = new  XMLHttpRequest();
 xhr.open("GET","https://api.apiopen.top/getJoke");
 xhr.send();
 xhr.onreadystatechange = function (){
     if(xhr.readyState == 4){
         if(xhr.status >= 200 && xhr.status <300){
             console.log(xhr.response)
         }else{
             console.log(xhr.status)
         }
     }
 }