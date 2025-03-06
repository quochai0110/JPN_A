/* 
GIẢI PHƯƠNG TRÌNH BẬC 2:
aX^2+ bX +c=0


*/
let a = prompt("mời ban nhập số a");
let b = prompt("mời ban nhập số b");
let c = prompt("mời ban nhập số c");
let x1 =0;
let x2 =0;
let delta = b*b -4*a*c;
let sqrtDelta = Math.sqrt(delta);
if(delta >0){
    x1 = (-b +sqrtDelta) /2*a;
    x2 = (-b -sqrtDelta) /2*a;
    console.log("x1 ="+x1);
    console.log("x2 ="+x2);
}else if(delta =0){
    x1 = -b /(2*a);
    console.log("x1 ="+x1);
}else{
    console.log("phương trình vô nghiệm");
}
