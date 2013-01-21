// Tyrone Ruffin
// Project 3
// SDI 1301

// Global Variables
say = function(message){
    console.log(message);
};

// object
var project3 = {
    name: "Tyrone Ruffin",
    material: "JSON",
    lessons: [
        "Objects",
        "FlowCharts",
        "GoogleDocs"
    ],
     //method function
    week3: function() {
            say("This week we are learning a few new things.")         
    },    
};
// string argument
var hardLesson = function(objects, methods) {
   var outcome = "objects " +  "and " + " methods"
   say("This weeks project covers " + outcome)
   var string = "This weeks assignment is very challenging but I think I got the hang of it."
   return string
};

 
// main code
project3["week3"]();        //method accessor
project3.week3 = function() {       // method mutator
    say("One of the new things I've learned is called method mutator");
};                  
project3.week3();                                              
var assignment3 = hardLesson(1,2);
say(assignment3);       // string return






