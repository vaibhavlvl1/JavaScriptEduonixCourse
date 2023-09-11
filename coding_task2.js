console.log("hello");

var students=[
    {
     name:"John",
     score1:47,
     score2:46
    },
    {
        name:"Bob",
        score1:23,
        score2:24,
    }
    ,{
        name:"Nick",
        score1:40,
        score2:35,
    },
    {
        name:"Alex",
        score1:44,
        score2:45,
    }
];


var passing_limits = [91,81,71,61,51];
var degrees = ["A","B","C","D","E"];



function results(obj){
    var total_score = obj.score1+obj.score2;
    var grade = calcDegree(total_score);

    if (grade == "Failed"){
        console.log(obj.name +"got "+total_score+" points"+" has failed and he has to try next year");
        console.log("----------------------------------")
    }
    else{
        console.log(obj.name +" has passed final exam successfully ")
        console.log("He has "+total_score+" points and he got fiploma with degree "+grade)
        console.log("----------------------------------------------------------------")
    }
}

function calcDegree(score){
    var degree;
    for(i=0;i<5;i++){
        if (score >= passing_limits[i]){
            degree = i;
            return degrees[degree];
        }
    };
    degree = "Failed";
    return degree;
}


students.forEach(element => {
    results(element);
});
