// JavaScript 示例代码
// 声明变量
const firstName = 'John'
const lastName = 'Doe'

// 函数定义
function greet (name) {
  return `Hello, ${name}!`
}

const demo = 'ddd'
// 条件语句
if (age >= 18) {
  console.log('You are an adult.')
} else {
  console.log('You are a minor.')
}

// 循环
for (let i = 0; i < 5; i++) {
  console.log('Iteration:', i)
}

// 数组
const numbers = [1, 2, 3, 4, 5]

// 对象
const person = {
  gender: 'male',
  age: 30,
  name: 'John',
}

// 类
class Rectangle {
  constructor (width, height) {
    this.width = width
    this.height = height
  }

  getArea () {
    return this.width * this.height
  }
}

// Promise
const promiseExample = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Promise resolved!')
  }, 1000)
})

promiseExample.then((result) => {
  console.log(result)
})

// 异步函数
async function fetchData () {
  const response = await fetch('https://api.example.com/data')
  const data = await response.json()
  console.log(data)
}

