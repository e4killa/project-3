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
            say("One new thing we learned about this week is " + project3.lessons[0] );
            say("Also we learned about " + project3.lessons[1] + " and " + project3.lessons[2]);
    },
};
project3["week3"]();        //method accessor

project3.week3 = function() {       // method mutator
    say("Also we learned about method mutators");
};               

project3.week3();                                              





// string argument
var hardLesson = function(objects, methods) {
   var outcome = "objects " +  "and " + " methods"
   say("This weeks project covers " + outcome)
   var string = "This weeks assignment is very challenging but I think I got the hang of it."
   return string
};



var projectTime = function(firstnumber,secondnumber) {
    var totalTime = firstnumber + secondnumber;
    return totalTime  
};

var activities = 5
    while (activities > 4) {
    activities--;
};

var assignment3 = hardLesson(1,2);

say(assignment3);       // string return
var week3Time = projectTime(4,8)

var week3 = {
    activity3: "Objects",
    activity4: "data structure",
    activity5: "flowcharts",
    activity6: "public and private"

};

say(week3.activity3 + " Are a cool new data type that i think comes in handy" + ".");
say("Also the " + week3.activity4 + " activity teaches us how to use data from a stored location" + ".")
say("One of the harder lessons this week is making our own " + week3.activity5 + ".")
say("The " + week3.activity6 + " video was very informative" +".")








// output
say("The activities will take me " + activities + " hours to complete.");

say("The aproximate total time for this project is " + week3Time + " hours" +".");








