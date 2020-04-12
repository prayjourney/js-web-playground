// javascript对象
var user = {
    name: "zgy",
    age: 23,
    gender: "male",
    location: "成都"
}
console.log(user)
// 转换成字符串, 使用JSON.stringify
var  str = JSON.stringify(user)
console.log(str)

// JSON字符串转换成对象
var user02 = JSON.parse(str)

console.log(user02)

// note:
// json有对象和数组两种形式，对象是{ name: 'zgy', age: 23, gender: 'male', location: '成都' }
// json数组的话是[{name: 'hello', age: 22},{name: 'zgy1', age: 23},{name: '王麻子', age: 19}]
// json和javascript转换基本使用JSON.stringify和JSON.parse即可，这是在前端，
// 在后端的话，主流使用jackson和fastjson即可。