/**
 * 字符串和字符串方法
 */
var str1 = "hello world!";

// 字符串方法
console.log(str1.length);
console.log(str1.blink());<!-- blink标签 -->
console.log(str1.bold());

// 转义字符
var home = "中国是瓷器故乡，china 和\"China\"同名";
console.log(home);

// 长字符串,安全的就是使用+
var longStr = "hello\
world!\
sunny\
day!";
var longStr2 = "hello" +
    "world" +
    "sunny" +
    "day!";
console.log(longStr);
console.log(longStr2);
/*
 * String定义字符串
 */
var str1 = new String("hello world!"); //这样创建字符串复杂，拖慢了速度
var str2 = "hello world!"
console.log(str1.valueOf());
console.log(typeof (str1)); // object
console.log(typeof (str2)); //string

/*
 * == 和 ===
 */
console.log("str1 == str2: " + (str1 == str2)); //比较的是值 ，true
console.log("str1 === str2: " + (str1 === str2)); //比较的是值和类型 ，需要值和类型同时相等，false

/*
 * 搜索
 */
console.log(str1.lastIndexOf('l')); // 查找最后一次出现的位置
console.log(str2.search("l"));      // 查找第一次出现的位置

/*
 * string内部的操作
 */
var strinner = "hello world! the whole world have 7 state, 4 ocean!"
console.log(strinner.slice(0, 10)) //[0,10)的字符切片
console.log(strinner.substr(2, 10));// 从2开始，长度为10
console.log(strinner.substring(2, 10)); //start, end [2,10)
console.log(strinner.toLocaleUpperCase()); // 大小写
console.log(strinner.toLocaleLowerCase());
console.log(strinner.indexOf("world!")); // 定位
console.log(strinner.charAt(1)); // 1的位置的字符
console.log(strinner.concat(strinner, "你好中国!", "日本海！")); // contact,字符串的连接合并
console.log("你好啊   ， iiii      ".trim().concat("hello js!")); // trim去掉空格，拼接字符串
console.log(strinner.split('o')); // 使用split来分割，此处用'o'分割，然后得到一个数组


/**
 * 数字，主要关注的是数字的精度，数字和字符串的连接的问题，运算的问题，其他的问题不太大
 */
var num1 = 123
var num2 = 123e10;  // 科学计数法
//JavaScript 数值始终以双精度浮点数来存储，根据国际 IEEE 754 标准。
// 此格式用 64 位存储数值，其中 0 到 51 存储数字（片段），52 到 62 存储指数，63 位存储符号
var num3 = 99999999999999
var num4 = 999999999999999
console.log(num1)
console.log(num2)
console.log(num3)
console.log(num4)
// 数字字符串
var n1 = 100;
var n2 = '10'
var n3 = '222'
console.log(n1 / n2)  // 运算会自动转换类型
console.log(n2 / n1)
var res = n2 * n3
var s1 = n1 - n2
var s2 = n1 - n2
var s3 = n2 + n1
var s4 = n2 + n3
console.log(res + ", res type: " + typeof (res))
console.log(s1 + ", s1 type: " + typeof (s1)) // - * / %，如果能运算，得到的就是number类型
console.log(s2 + ", s2 type: " + typeof (s2)) // 字符串和数字用+运算，都是字符串 ，和相加的顺序无关，因为+有连接的含义
console.log(s3 + ", s3 type: " + typeof (s3))
console.log(s4 + ", s4 type: " + typeof (s4))
var iphone = 'iphone8'
const sm = NaN; // sm = 22, error, const相当于java的final, 只能一次性赋值
console.log(iphone / n1);
console.log(typeof (n1 / iphone) + "====>" + typeof sm)
// 16进制
let no1 = 0x123
console.log(no1) //自动转换成了10进制
no1 = 222
console.log(no1);
// 使用Number定义数字
let number1 = new Number(123)
console.log(number1);
console.log(number1.valueOf()); // 获取值

/**
 * 数组
 */
var carGood = new Array("Saab", "Volvo", "BMW");
let carRubbish = ['五菱宏光', '长安奔奔', '吉利自由舰', '北汽金杯']

console.log(carRubbish)
console.log(carRubbish.values())
console.log(carRubbish[1])
console.log(carGood.lastIndexOf('BMW').valueOf());
console.log(carRubbish.length);
console.log(carRubbish.sort())  // 排序
// 打印
fLen = carRubbish.length;
let text = "<ul>";
for (let i = 0; i < fLen; i++) {
    text += "<li>" + carRubbish[i] + "</li>";
}
console.log(text);

// 循环打印
let carText = "<ul>";
carGood.forEach(eachMethod)
carText += "</ul>";

function eachMethod(car) {
    carText += "<li>" + car + "</li>"
}

console.log(carText);
carRubbish[4] = '小鹏电动' // 添加新的元素到数组
console.log(Array.isArray(carRubbish)); // 是否为数组

console.log(carRubbish);
console.log(carRubbish.shift());    // 第一个移除
console.log(carRubbish.unshift("张三概念车"));  //从第一个添加
console.log(carRubbish);

console.log(carGood);
console.log(carGood.pop());    // 从最后一个移除
console.log(carGood.push("tesla"));  //从最后一个添加
console.log(carGood);

console.log(carGood.toString()); // toString
console.log(carGood.toLocaleString()); // toLocaleString

var allCar = carGood.concat(carRubbish); // 数组的拼接
console.log(allCar)
delete (allCar[2]) //使用 delete 会在数组留下未定义的空洞。
console.log(allCar)


/**
 * 时间日期
 */
var date = new Date();
var date2 = new Date(2002, 2, 2, 13, 22, 9);
var date3 = new Date("2002-2-2 13:22:9");
console.log(date);
console.log(date2)
console.log(date3)

// 上个世纪，一位数两位数， 19xx
var date3 = new Date(93, 2);
console.log(date3);
let nowDate = new Date()
console.log(nowDate.toDateString() + "====>")
console.log(nowDate.getDate()); // 日期之中的详细信息获取
console.log(nowDate.getSeconds());
console.log(nowDate.getUTCFullYear());
nowDate.setHours(22) // 设置日期
nowDate.setMonth(12)
console.log(nowDate);