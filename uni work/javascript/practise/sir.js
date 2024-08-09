//     max b/t three values
function max(a,b,c){
if(a>b){
    console.log( a + " is greater" )
}
else if(b>c){
    console.log( b + " is greater" )
}
else if(c>a){
    console.log( c + " is greater" )
}
}



max(657,67,87)   




function val(a){
    if(a>0){
        console.log("positive")
    }
    else if(a<0){
        console.log("negative")
    }
    else if(a ==0){
        console.log("null")
    }

}




val(-657)






function divisable(a){
    if((a%11)==0&&(a%5)==0){
        console.log("divisable by both")
    }
    else if((a%11)==0){
        console.log("divisable by 11")
    }
    else if((a%5)==0){
        console.log("divisable by 5")
    }

    else{
        console.log("not divisable")
    }
}





divisable(55)

  

function anv(a){
    if(a>0||a<0||a==0){
        console.log("digit")
    }
    else if (a == 'a'|| 'b'|| 'c'|| 'd'|| 'e'|| 'f'|| 'g'|| 'h'|| 'i'|| 'j'|| 'k'|| 'l'|| 'm'||
    'n'|| 'o'|| 'p'|| 'q'|| 'r'|| 's'|| 't'|| 'u'|| 'v'|| 'w'|| 'x'|| 'y'|| 'z'){
        console.log("alphabet")
    }
    else{
        console.log("other variable")

}
}




anv('a')