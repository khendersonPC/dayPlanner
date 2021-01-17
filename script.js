
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




var myAct = "";



var savedSch = JSON.parse(localStorage.getItem("refreshedSch"));
if (savedSch !== null) {
    schedule = savedSch;
}
    //make blanks rows
    $("table").append("<tbody>");

    for (var i = 0; i < 9; i++) {
        var newRow = $("<tr></tr>");
        var c1 = $("<td></td>").text(schedule[i].hour).addClass("time-block");
        if (schedule[i].activity != "") {
            var c2 = $("<td></td>").text(schedule[i].activity).addClass("description").attr("id", i);
        }
        //template literal with ticks?//.attr("id", i)
        else {
            var c2 = $(`<td><input id= ${i} class = 'form-control'></input></td>`).addClass("description");
        }
        var c3 = $("<td></td>").text("SAVE").addClass("saveBtn").attr("id", i);
        var c4 = $("<td></td>").text("ERASE").addClass("eraseBtn").attr("id", i);;
        $("tbody").append(newRow, c1, c2, c3, c4);
    };

//get input from the activity section
$("input")
    .keyup(function () {
        myAct = $(this).val();
    })
    .keyup();
//adds the activity to the array
$(".saveBtn").on("click", function (event) {
    schedule[this.id].activity = myAct;
    console.log(myAct);
    console.log(schedule);

    localStorage.setItem("refreshedSch", JSON.stringify(schedule));
    
});

$(".eraseBtn").on("click", function (event) {
    schedule[this.id].activity = "";
    $("#" + this.id).val("");
    console.log("hit");

    localStorage.setItem("refreshedSch", JSON.stringify(schedule));

});


setColor();


//setInterval function- run it based on the time left in the day
//onClick svae button
//save to local storage 
//getItem for each of the sep time blocks- each has a sep ID


function setTime() {
  var timerInterval = setInterval(function() {
    var currentTime= moment().format();
    setColor();

    if(currentTime === "11:59:59 pm") {
      clearInterval(timerInterval);
      localStorage.clear();
      location.reload();
      
    }

  }, 1800000);
}


setTime();

// function for past, present, next color
function checkColor(hour) {
    let now = moment().format('h A');
    let momentTime = moment(now, 'h A');
    let laterMomentTime = moment(hour, 'h A');


    if (momentTime.isBefore(laterMomentTime)) {
        return "future";
    } else if (momentTime.isAfter(laterMomentTime)) {
        return "past";
    } else {
        return "present";
    }
}


function setColor() {
    var times = $(".time-block").toArray();

    for (var i = 0; i < times.length; i++) {
        if (checkColor(times[i].textContent) === "past") {
            $(times[i]).addClass("past");
        }
        else if (checkColor(times[i].textContent) === "future") {
            $(times[i]).addClass("future");
        }
        else {
            $(times[i]).addClass("present");
        }
    }
}
