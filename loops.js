
var arr = ["john","nick","bob","Michael","Mary"];

for (var i=0;i<arr.length;i++){
    console.log(arr[i]);
}

console.log("-------------------------------------------------------")



//  continue and break

var arr = ["john","nick","bob","Michael","Mary"];
 for (var i=0;i<arr.length;i++){
    if (arr[i]==="bob"){
        console.log(arr[i]+ " is my Bro")
    }

    console.log(arr[i])
 }

 console.log("-----------------------using continue after condition--------------------------------")

 for (var i=0;i<arr.length;i++){
    if (arr[i]==="bob"){
        console.log(arr[i]+ " is my Bro")
        continue;
    }

    console.log(arr[i])
 }

 console.log("------------------------using break after conditions----------------------")

 for (var i=0;i<arr.length;i++){
    if (arr[i]==="bob"){
        console.log(arr[i]+ " is my Bro")
        break;
    }

    console.log(arr[i])
 }

 console.log("--------------------------------------------------------")

 for (var i=0;i<arr.length;i++){
    console.log(arr[i]);
    if (arr[i]==="bob"){
        console.log(arr[i]+ " is my Bro")
        continue;
    }

    
 }

 console.log("--------------------------------------------------------")

 for (var i=0;i<arr.length;i++){
    console.log(arr[i]);
    if (arr[i]==="bob"){
        console.log(arr[i]+ " is my Bro")
        break;
    }

    
 }

 console.log("---------------------------------------------------------")





//  other loops while 

var colors=['white','red','green','blue'];

var i = 0;

while (i<colors.length){
    console.log(colors[i]);
    i++;
}


console.log("-----------------------------------")
// do while
var j = 0;
do{
    console.log(colors[j]);
    j++;
}
while (j<colors.length);