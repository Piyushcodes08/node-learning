const fs = require("fs");
// writeFile

// fs.writeFileSync("server.js", "this is node js");

// const student = {
//     name: "piyush",
//     agr:25,
//     village:"odisha"
// }



// fs.writeFileSync("student.text" , JSON.stringify(student))
// fs.writeFileSync("note.txt" , JSON.stringify(student, null , 2))


// appendFile 

// fs.appendFileSync("note.txt", "\nnumber: 6371149273")

// readFile

// const data = fs.readFileSync("student.text" , "utf8");

// console.log(data)


// task

const student = {
  name: "Piyush",
  age: 26,
  course: "Node.js"
}

fs.writeFileSync("student.json", JSON.stringify(student , null , 2));

fs.appendFileSync("student.json", "\nLearning :Node.js Day 3");

const data = fs.readFileSync("student.json", "utf8");

console.log(data)




// challange q 

const employee ={
  id: 101,
  name: "Rahul",
  department: "IT",
  salary: 50000
}

fs.writeFileSync("employee.json" , JSON.stringify(employee , null ,2 ));

const edata = fs.readFileSync("employee.json", "utf8");
console.log(edata)
