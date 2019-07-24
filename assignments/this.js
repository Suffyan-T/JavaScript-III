/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Global Object Binding:
        When the .this is not inside an object it is in the global object.
* 2.  Implicit Binding:
        when you call a function/method inside an object whatever comes before the dot is the this object.
* 3. New binding:
        when using a Constructor the object that is created by the constructor is the this.
* 4. Explicit binding:
        You can use .call or .apply to bind this to an object of your choosing
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
function principal1() {
    // The this below is refering to global object
    console.log(this);
  }
// Principle 2

// code example for Implicit Binding


// Principle 3

// code example for New Binding

// Principle 4

// code example for Explicit Binding