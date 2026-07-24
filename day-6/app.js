// Ek file banao:
// profile.txt
// Usme likho:
// Name: Piyush
// Phir niche add karo:
// Age: 25
// Aur phir:
// City: Ahmedabad
// Sirf appendFile() ka use karke.
const { error } = require("console");
const fs = require("fs");

const name ={
    name :"piyush"
};

const details ={
    age:25,
    City: "Ahmedabad"
}

fs.writeFile("profile.txt" , JSON.stringify(name) , (err)=>{
    if (err) {
        console.log(err)
        return;
    }
    console.log("file created succesfully");

    fs.appendFile("profile.txt" ,JSON.stringify(details) ,(err)=>{
if (err) {
    console.log(err)
    return;
}
console.log("deatils add succesfully");
    } )
})



// Ek file banao:
// notes.txt
// Usme kuch bhi likho.
// Phir unlink() use karke us file ko delete karo.

fs.writeFile("notes.txt", "hello my name is piyush" , (err)=>{
    if (err) {
        console.log(err);
    }else{
        console.log("file created succesfully");
    }
    console.log("file created");

fs.unlink("notes.txt",(err)=>{
    if (err) {
        console.log(err)
    }else{
        console.log("file deleted succesfully");
    }
})

})