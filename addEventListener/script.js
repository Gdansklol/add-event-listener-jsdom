// Get button elements
const btn1 = document.getElementById("one");
const btn2 = document.getElementById("two");
const btn3 = document.getElementById("three");

// Ensure buttons are correctly selected
console.log(btn1, btn2, btn3);

const handleClick = function() {
    console.log("Did you click me?");
}

// Using handleClick as a callback function
btn2.addEventListener('click', handleClick);

// Registering multiple handlers
btn2.addEventListener('click', function() {
    console.log("Added another handler");
});

// Remove a specific event listener
btn2.removeEventListener('click', handleClick);

const handleClick_3 = function(event) {
    console.log(event);
}

btn3.addEventListener('click', handleClick_3);

const handleAllClick = function(event) {
    console.log(event.target);
}

btn1.addEventListener('click', handleAllClick);
btn2.addEventListener('click', handleAllClick);
btn3.addEventListener('click', handleAllClick);
