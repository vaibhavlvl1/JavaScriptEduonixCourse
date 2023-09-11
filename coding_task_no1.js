var john = "john",
    nick = "nick",
    johnScore = 80,
    nickScore = 45,
    passMark = 51;

if (johnScore>=passMark && nickScore>=passMark){
    console.log("Both hav passed");
}
else if(johnScore>=passMark || nickScore>=passMark){
    console.log("one of the students passed");
    if (johnScore>=passMark){
        console.log("John: "+johnScore);
    }
    else{
        console.log("Nick: "+nickScore+" john failed");
    }  
}
else{
    console.log("both failed");
}
