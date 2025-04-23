let obj ={name: "Alice", hobbies: ["reading", "traveling"] };

let cloneObj = JSON.parse(JSON.stringify(obj))

cloneObj.hobbies.push("coding")

console.log(cloneObj)