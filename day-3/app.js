const fs = require("fs")


fs.writeFileSync("note.txt", "hey i m piyush");
fs.writeFileSync("server.js", "");
fs.readFileSync("note.txt", "utf8");
fs.unlinkSync("server.js");
const x = fs.existsSync("server.js");
const y = fs.existsSync("note.txt");

console.log(x)
console.log(y)

// student.txt create karo.
// Usme likho:
// Name : Piyush
// Course : Node.js
// Phir append karo:
// Age : 26
// File ko read karke console mein print karo.
// Check karo file exist karti hai ya nahi.
// Comment mein unlinkSync() likhkar ready rakho (abhi run mat karna).

fs.writeFileSync("student" , {
    name: "piyush",
    course: "node js"
});

fs.appendFileSync("student", {
    age: 25
})

const result = fs.readFileSync("student" , "utf8");

console.log(result);