// console.log("this is my first node js program")


// const data=require("fs")
// data.writeFileSync("abc.txt","hello how are you")

// const readData=data.readFileSync("abc.txt","utf-8")
// console.log(readData)


function sum(a, b) {
    return a + b;
}

function sub(a, b) {
    return a - b;
}

module.exports = {
    sum,sub
}

const data=require("chalk")
console.log(data.green("hello how are you"))
console.log(data.bgBlue("hello how are you"))


