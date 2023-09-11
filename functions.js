// function syntax

function funName(){
    console.log("Hello World")
}

funName()


function passExam(name,score){
    var passUni = 71;
    var passColl = 51;

    if (score>=passUni){
        console.log(name + " has enrolled in University with " +score+" points")
    }
    else if(score>=passColl){
        console.log(name +" has enrolled in college with "+score+" points")
    }
    else{
        console.log(name+" has failed with "+score+" points")
    }
}



function calcScore(quizScore,essayScore){
    return quizScore+essayScore;
}

passExam("Vaibhav",calcScore(30,44))
passExam("Vimal",53)
passExam("Vikram",10)






/* statements vs expressions . 
statement is an instruction to the browser which doesnt always produce value.
ex if statement. 
expression produces a value ex. mathematical exp; */

// console.log(passUni);