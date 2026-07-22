 const fs = require("fs");

//  Ek app.js file me ye program likho:
// student.txt create karo.
// Usme "Hello Node" likho.
// Rename karke profile.txt banao.
// Check karo file exist karti hai ya nahi.
// Agar karti hai to delete kar do.
// Console me print karo:


// fs.writeFileSync("student.txt","hello node")

// fs.renameSync("student.txt" , "profile.txt");





// if (fs.existsSync("profile.txt")) {
//    const data = fs.unlinkSync("profile.txt")
//    console.log("file deleted")
// }


// final task

// movie.txt create kare.
// Usme "Avengers" likhe.
// Rename karke marvel.txt kare.
// Check kare ki file exist karti hai.
// Agar karti hai to delete kare.
// Last me print kare:
// Task Finished Successfully

fs.writeFileSync("movie.txt", "Avengers")
fs.renameSync("movie.txt" , "marvel.txt")


if (fs.existsSync("marvel.txt")) {
    fs.unlinkSync("marvel.txt")
    console.log("Task Finished Successfully")

}else{
    console.log("file not found")
}

// fs.mkdirSync("Learning_Node");
const file =fs.readdirSync("./");
console.log(file);
 file.forEach(files => {

    console.log(files)
});

fs.mkdirSync("test");
if(fs.existsSync("test")){
    fs.rmdirSync("test")
    console.log("file deleted")
}else{
    console.log("file not found")
}