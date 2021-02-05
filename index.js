function displayGreeting(){
    var today = new Date();
    var hour = today.getHours();
    var greeting;

    if(hour>15){
        var greeting = 'Good Evening';
    }
    else if(hour>12){
        var greeting = 'Good Afternoon';
    }
    else if(hour>0){
        var greeting = 'Good Morning';
    }
    else{
        var greeting = 'Welcome';
    }

    return greeting;
}


var i = 0;
var text = displayGreeting();
var speed = 250;

function typeWriter(){
    if(i<text.length){
        document.getElementById('greeting').innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}