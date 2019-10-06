function startTime()
 {
    var today = new Date();
    var hr = today.getHours();
    var min = today.getMinutes();
    var sec = today.getSeconds();
    var months = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
    var days = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
    var curDay = today.getDate();
    var curMonth = months[today.getMonth()];
    var curYear = today.getFullYear();
    var date = curDay + "-" + curMonth + "-" + curYear;
    var curWeekDay = days[today.getDay()];
    var act = 0;
    var day = "";
    ap = (hr < 12) ? "<span>AM</span>":"<span>PM</span>";
    aq = (hr > 12) ? "<span style='color:white'>AM</span>" : "<span style='color:white'>PM</span>";
    hr = (hr == 0) ? 12 : hr;
    hr = (hr > 12) ? hr - 12 : hr;
    hr = checkTime(hr);
    min = checkTime(min);
    sec = checkTime(sec);
    for (var i = 0; i < days.length; i++) {
        if (days[i] == curWeekDay && curWeekDay == days[today.getDay()] && act != 1) {
            day = day + "<font color='black'>" + curWeekDay + "&nbsp;&nbsp;</font>&nbsp;&nbsp;";
            act = 1;

        }
        else
        {
        day = day + "<font id='fn' color='white'>" + days[i] + "&nbsp;&nbsp;</font>&nbsp;&nbsp;";
        }
    }
    document.getElementById("day").innerHTML = day;
    document.getElementById("date").innerHTML = date;
    document.getElementById("clock").innerHTML = "<font id='clock1'>" + hr + "</font> : <font id='clock1'>" + min + "</font> : <font id='clock1'>" + sec + " </font> " + ap+"&nbsp" + aq;
    var time = setTimeout(function() { startTime(); }, 500);
}

function checkTime(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}


