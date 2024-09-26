/* The four principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Global/Window Object Binding:
        When the this is called without anything left of the dot it is in the global object.
* 2.  Implicit Binding:
        when you call a function/method inside an object whatever comes before the dot is the this object.
* 3. New binding:
        when using a Constructor the object that is created by the constructor is the this object
* 4. Explicit binding:
        You can use .call, .apply or .bind to tell this what object it is applied to.
*
* write out a code example of each explanation above
*/

// Principle 1
// code example for Window Binding
    function principal1() {
        // The this below is refering to global object becasue it was not called with anyting to the left of the dot.
        console.log(this);
    }
// Principle 2
// code example for Implicit Binding
    let principle2 ={
        name : "john",
        age: 25,
        call: function(){
            console.log(`Hi! my name is ${this.name} and my age is ${this.age}`);
            console.log(this);
        }
    }
    principle2.call();

    //Hi! my name is john and my age is 25
    //[object Object]: {age: 25, call: function(){ console.log(`Hi! my name is ${this.name} and my age is ${this.age}`), console.log(this); }, name: "john"}
    // Here we can see this refers to principle2 which is on the left side of the .

// Principle 3
// code example for New Binding
    let Car= function(make,model,year){
        return{
            make: make,
            model: model,
            year: year,
            message: function(){
                console.log(`Hi, I am a ${this.year} ${this.make} ${this.model}`);
                console.log(`In cases of constructor functions this refers to the newly formed object.`);
                console.log(`In this case this refers to ${this.model}`);
                console.log(`once again it refers to the object listed left of the dot.`);
            }
        }
    }
    let camry = Car('Toyota','Camry',1996);
    camry.message();

    // Hi, I am a 1996 Toyota Camry
    // In cases of constructor functions this refers to the newly formed object.
    // In this case this refers to Camry
    // once again it refers to the object listed left of the dot.

// Principle 4
// code example for Explicit Binding

    // Create Camry object
    let camry ={
        make: "Toyota",
        model: "Camry",
        year: 1996
    }

    // Create message prototype
    let message = function(){
        console.log(`Hi, I am a ${this.year} ${this.make} ${this.model}`);
        console.log(`In cases of Explicit Binding you define what this refers to`);
        console.log(`In this case this refers to ${this.model}`);
        console.log(`Even though that is not the object to the left of the dot`);
    }

    message.call(camry);

    // Hi, I am a 1996 Toyota Camry
    // In cases of Explicit Binding you define what this refers to
    // In this case this refers to Camry
    // Even though that is not the object to the left of the dot