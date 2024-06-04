function receivesAFunction(callback) {
    console.log("About to call the callback function...");
    callback(); // Call the callback function
    console.log("Callback function has been called.");
  }
  
  // Function that returns a named function
  function returnsANamedFunction() {
    function innerFunction() {
      console.log("I'm a named function!");
    }
    return innerFunction; // Return the inner function
  }
  
  // Function that returns an anonymous function
  function returnsAnAnonymousFunction() {
    return function() { // No name given to the inner function
      console.log("I'm an anonymous function!");
    }; 
  }