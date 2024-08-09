const sum=(s,v) =>{
    let sum= s+v
    console.log("the sum is "+sum)
}

const  area_of_rectangle= (l,w)=> {
    let a=l*w
    console.log("The area of rectangle is " +a)
};
const  area_of_triangle= (b,h)=> {
    let a2=(1/2)*b*h
    console.log("The area of triangle is " +a2)
};
const  area_of_circle= (r)=> {
 const pie = 3.14
    let a3=pie*r**2
    console.log("The area of circle is " +a3)
};
const  enter_temp_IN_C= (F)=> {
    let  A
A = (F - 32) * 5/9
    console.log("THE TEMERATURE IN CELSIUS " +A)
};
const  enter_temp_IN_F= (C)=> {
    let  B
B = (C* 5/9)+32
    console.log("THE TEMERATURE IN FARENHIT " +B)
};
area_of_circle(19);
area_of_rectangle(10,60);
area_of_triangle(50,67)
enter_temp_IN_F(37.8);
enter_temp_IN_C(100)
sum(6,7);