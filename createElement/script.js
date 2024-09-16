// Select elements
const button = document.getElementById("push")
const div = document.getElementById("area")

// Generate click event with button 
// then calling a callback function
// createElement div
// naming newDiv to created div

button.addEventListener('click',function(){
    console.log("creating div!")
    const newDiv = document.createElement("div")

    /*Manipulating the representative 
    properties of DOM elements, 
    the div style properties*/ 

    newDiv.style.backgroundColor = "brown"
    newDiv.style.width = "100px"
    newDiv.style.height = "100px"

    // DOM elements or objects are added and returned for output.
    console.log(div.appendChild(newDiv));
    
    div.append("Swedish?")
    // div.appendChild("An error occurs in console")
})