





function DayTime(){
    var date = new Date();
    var day = date.getDay()
    weekday = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"]
    var hour = date.getHours() + "";
    var min = date.getMinutes() + "";
    var sec = date.getSeconds() + "";

    if (hour.length <2){
        hour = "0"+hour; 
    }

    if (min.length <2){
        min = "0"+min; 
    }

    if (sec.length <2){
        sec = "0"+sec; 
    }

    weekday = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];

    var daytime =weekday[day]+" "+ hour+":"+min+":"+sec;

    document.querySelector("body h1").innerHTML=daytime;

}

setInterval(DayTime,1000);