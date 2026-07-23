// Task 1
// Create a file using writeFile().
// File name:
// student.txt
// Content:
// Hello Node.js
// Success message:
// File Created Successfully

const fs = require("fs");


fs.writeFile("student.txt", "hello node.js i m piyush", (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("file created succesfully");
    }
})



// employee.txt create karo.
// Usme likho:
// Name: Rahul
// Department: IT
// Salary: 50000
// Agar file create ho jaye to print karo:
// Employee File Created
// Agar error aaye to print karo:
// Something Went Wrong


const employee = {
    Name: "Rahul",
    Department: "IT",
    Salary: 50000,
}

fs.writeFile("employee.txt", JSON.stringify(employee), (err) => {
    if (!err) {
        console.log("Employee File Created")
    } else {
        console.log("Something Went Wrong")
    }
})


// Console me print karo:
// Employee Data:
// <Name, Department, Salary ka content>




fs.readFile("employee.txt" , "utf8" ,(err , employee )=>{
console.log(employee)
})


fs.appendFile("employee.txt" , "\nage:25" , (err)=>{
    if (err) {
        console.log("something went wrong")
    }else{
        console.log("data add succesfully")
    } 
})



// student.txt me writeFile() se data likhe.
// Usi file me appendFile() se:
// Age: 26
// add kare.
// Fir readFile() se poori file read kare.
// Console me print kare:

const studentData = {
    name: "piyush gond",
    designation:"developer",
    city:"thaltej"
}

fs.writeFile("studentdata.txt", JSON.stringify(studentData), (err)=>{
    if (err) {
        console.log("wrong data")
    }else{
        console.log(studentData)
    }
});



