function beer(){
    
    var count=99;
   
    while (count>=0){
        var word="bottles";
        if(count===1){
         word= "bottle";
        }
        console.log( count+" "+ word + " of beer on the wall, ");
        console.log(count +" "+ word+ "of beer.");
        console.log("Take one down and pass it around, " );
         count--;
        console.log( count+" "+ word+ "of beer on the wall, ");
    }
}
