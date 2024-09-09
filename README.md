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