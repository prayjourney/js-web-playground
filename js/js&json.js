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