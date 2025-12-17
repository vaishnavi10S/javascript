var num=[];
var count=1;
function fizzBuzz() {

 if(count%3===0 && count%5===0){
        num.push("fizzBuzz"); 
    }
    else if (count%3===0){
        num.push("fizz");
    } else if (count%5===0){
        num.push("buzz"); 
    
    } else{
        num.push(count);
        }
         count++;
     console.log(num);
    }
