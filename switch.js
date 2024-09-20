// /Write a program with a num prints the multiplication table for that number from 1 to 10 using a loop./
// /tables from 1 to 10/


for (var table=1; table<=10;table++){
    for (var i=1; i<=10; i++){
        console.log(table,"*",i,"=",table*i)
    }
}




/*Write a program to check whether the number is positive, negative, or zero. Additionally, if the number is positive, check if it is even or odd.*/

var num="21"
if(num>0){
        if(num%2==0){
        console.log(" Given number is positive and Even Number")
    }
        else{
            console.log("Given number is positive but Odd  ")
        }
      

    }
else if(num<0){
        console.log("Negative Number")
    }
else{
    console.log("ZERO")
}







/*write a program to add two numbers if only both are even numbers*/
// eg:n1=4 n2=6  //o/p=10
//     n1=5 n2=4 // not valid


var n1=5
var n2=6;


if(n1%2==0 &&n2%2==0){
    console.log(n1+n2)
}
else{
    console.log("Not Valid")
}