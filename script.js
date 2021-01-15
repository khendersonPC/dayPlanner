
var schedule = [
	{ hour: "6 AM", activity: "" },
	{ hour: "7 AM", activity: "" },
	{ hour: "8 AM", activity: "" },
	{ hour: "9 AM", activity: "" },
	{ hour: "10 AM", activity: "" },
	{ hour: "11 AM", activity: "" },
	{ hour: "12 PM", activity: "" },
	{ hour: "1 PM", activity: "" },
	{ hour: "2 PM", activity: "" }
];

//make blanks rows
$("table").append("<tbody>");

for(var i =0; i<9;i++){
    var newRow = $("<tr></tr>");
    var c1 =$("<td></td>").text(schedule[i].hour).addClass("time-block");
    var c2 =$("<td><input></type></td>").addClass("description");
   
    var c3 =$("<td></td>").addClass("saveBtn");
    $("tbody").append(newRow,c1,c2,c3);
   
};


setColor();

//var numbersinRow

//setInterval function- run it based on the time left in the day
//onClick svae button
//save to local storage 
//getItem for each of the sep time blocks- each has a sep ID

//function- what color should the box be?

//

/*
var timeEl = document.querySelector(".time");
var mainEl = document.getElementById("main");

var secondsLeft = 10;

function setTime() {
  var timerInterval = setInterval(function() {
    secondsLeft--;
    var currentTime= moment().format();
    timeEl.textContent = secondsLeft + " seconds left till colorsplosion.";

    if(currentTime === "11:59:59 pm") {
      clearInterval(timerInterval);
      
    }

  }, 1000);
}


setTime();
*/
// function for past, present, next color
function checkColor(hour) {
    let now = moment().format('h A');
    let momentTime = moment(now, 'h A');
    let laterMomentTime = moment(hour, 'h A');
	
	
	if(momentTime.isBefore(laterMomentTime) ){
		return "future";
	} else if (momentTime.isAfter(laterMomentTime) ){
		return "past";
	} else {
		return "present";
	}
}



function setColor(){
    var times = $(".time-block").toArray();
    console.log(times);
    console.log("set color times[0].text" + times[0].textContent);
    console.log("check color: " +checkColor(times[0].textContent));
    console.log("check color: " +checkColor(times[1].textContent));
    console.log("check color: " +checkColor(times[2].textContent));
    console.log("check color: " +checkColor(times[3].textContent));
    console.log("check color: " +checkColor(times[4].textContent));
    console.log("check color: " +checkColor(times[5].textContent));
    console.log("check color: " +checkColor(times[6].textContent));
    console.log("check color: " +checkColor(times[7].textContent));
    console.log("check color: " +checkColor(times[8].textContent));
    for(var i =0; i<times.length;i++){
        if(checkColor(times[i].textContent)==="past"){
            $(times[i]).addClass("past");
        }
        else if (checkColor(times[i].textContent)==="future"){
            $(times[i]).addClass("future");
        }
        else{
            $(times[i]).addClass("present");
        }
    }
}
