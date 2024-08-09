function result (roll_num){
 let   r1 = 143;
 let    r2 = 2354;
 let    r3 = 345;

 let array =[
    {
       name:"ali",
       age:20,
       gender:"male",
       registration_num:6568,
       programming_lang:["html","css","java","python"],
       marks:{
           english:658,
           math:70,
           science:766
       }
   }
   ,
   {
       name:"anika",
       age:20,
       gender:"female",
       registration_num:6567,
       programming_lang:["html","css","java","python"],
       marks:{
           english:58,
           math:90,
           science:66
       }
   },
   {
       name:"ani",
       age:90,
       gender:"female",
       registration_num:6767,
       programming_lang:["html","css","java","python"],
       marks:{
           english:58,
           math:90,
           science:66
       }
   }
   ]

if(roll_num == r1){
    console.log(array[1].name)




console.log( array[1].name+" number is ",array[1].marks.english," and ",array[1].marks.math)
console.log(
    array[1].name+" is "+array[1].age+" years old and he's reg num is "+array[1].registration_num+" he's gender is "+array[1].gender
)
console.log(" favourite programming lang is "+array[1].programming_lang[0],array[1].programming_lang[3])

}
else if(roll_num == r2){
    
       console.log( array[0].name+" number is ",array[0].marks.english," and ",array[0].marks.math)
       console.log(
           array[0].name+" is "+array[0].age+" years old and he's reg num is "+array[0].registration_num+" he's gender is "+array[0].gender
       )
       console.log(" favourite programming lang is "+array[0].programming_lang[0],array[0].programming_lang[3])

}
else if(roll_num==r3){
   
       console.log( array[2].name+" number is ",array[2].marks.english," and ",array[2].marks.math)
       console.log(
           array[2].name+" is "+array[2].age+" years old and he's reg num is "+array[2].registration_num+" he's gender is "+array[2].gender
       )
       console.log(" favourite programming lang is "+ array[2].programming_lang[0],array[2].programming_lang[3])       
}
else {
    console.log("there is no student of this roll num")
}
}






result(143)