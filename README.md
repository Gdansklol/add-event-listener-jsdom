# JS -  addEventListener 

- Instead of registering event handlers through attributes like onclick or onkeydown, a more modern approach is to use the addEventListener method.

- For example, registering a click event handler:

1.  Using the onclick property:
```js
target.onclick = function() {}

```

2. 
```js
Using <pre><code>
addEventListener
</code></pre>
```

```js
target.addEventListener('click', function() {})
```

### Using the addEventListener function offers several advantages over using event handler properties:

1. It provides a method to remove previously added event handlers. Example:     removeEventListener.
 2. Multiple handlers can be registered for the same listener (target).
 3. It offers additional options for handling events.

 ## Event Object

 -  The event object is `data` automatically passed to the handler to provide additional functionality and information. To use it, you need to add a `parameter` to the handler function so that it can receive the event object whenever the event occurs.



 ```js
// This will call the function when a click event occurs!
// + The automatically passed event object will be assigned to the parameter 'event'!
target.addEventListener('click', function(event) {})

 ```
 <br>

 ```js
// This will call the function when a click event occurs!
// + The automatically passed event object will be assigned to the parameter 'event'!
target.addEventListener('click', function(event) {})

 ```

 > 
```js
const btn1 = document.getElementById("one");
const btn2 = document.getElementById("two");
const btn3 = document.getElementById("three");


const handleClick = function(){
    console.log("Did you clicked me? ")
}

// Using handleClick as a callback function
btn2.addEventListener('click', handleClick);

// Advantage of addEventListener:
// When passing an anonymous function directly as an argument, you can register multiple handlers

btn2.addEventListener('click', function() {
    console.log("Added another handler");
});

// Using removeEventListener to remove a specific event listener
btn2.removeEventListener('click', handleClick);

/* Checking the event object:
The parameter passed to an event handler is conventionally named (event) or (e).
It's common to use one of these names.

When the handleClick handler is triggered, it logs the event object to the console.

If you check the developer tools, you'll see a large amount of data being logged.
This is the event object, which contains a wealth of information and functionality.
It allows us to interact with and access event-specific details provided by the system.
*/
const handleClick_3 = function(event) {
    console.log(event);
}

btn3.addEventListener('click', handleClick_3);

/* Understanding the "target" property:
The event object is an object, so we can access its properties by using dot notation.
The target property refers to the element that triggered the event.
For example, when a button is clicked, accessing the event target will reveal the button with the id "one."

Let's apply this to buttons two and three as well.

Difference:
The event.target allows us to determine which element triggered the event.
Even though we are using the same handler for different buttons, 
the result will be different based on which button was clicked.
*/

const handleAllClick = function(event) {
    console.log(event.target);
}

btn1.addEventListener('click', handleAllClick);
btn2.addEventListener('click', handleAllClick);
btn3.addEventListener('click', handleAllClick);
```

# createElemnet & appendChild
> exemple
```js
const p = document.createElement("p");
document.body.appendChild(p);
```

# value and preventDefault