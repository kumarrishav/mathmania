var a,b,c,op1,op2,op3,op4,point=0;
function add()
{

a=Math.floor((Math.random()*10)+1);
b=Math.floor((Math.random()*15)+1);
var array=['+','-','*','/'];
var oper=array[Math.floor((Math.random()*4))];
c=eval(a+oper+b);
if(String(c).indexOf(".")==-1)
c=c;
else
c=c.toFixed(2);
document.getElementById('kid1').innerHTML=a+oper+b+"=?";
op1=String(Number(c)+Math.floor((Math.random()*5)+7)).substring(0,4);
op2=String(Number(c)+Math.floor((Math.random()*5)+1)).substring(0,4);
op3=String(Number(c)+Math.floor((Math.random()*5)+13)).substring(0,4);
op4=c;
button=[op1,op2,op3,op4];
random=Math.floor((Math.random()*4));
if(random==0) button=[op4,op2,op3,op1]; else if(random==1) button=[op3,op4,op1,op2]; else if (random==2) button=[op2,op1,op4,op3];

document.getElementById('b1').innerHTML=button[2];
document.getElementById('b2').innerHTML=button[0];
document.getElementById('b3').innerHTML=button[3];
document.getElementById('b4').innerHTML=button[1];
document.getElementById('point').innerHTML="POINTS : "+point;
}
function ans(z)
{
if(document.getElementById(z).innerHTML==c)
{
alert("Correct [+10 Points]");
point=point+10;
window.add();
}
else
{
alert("Wrong [-5 Points]");
point=point-5;
window.add();
}
}
function display()
{
add();
var flag=0,qu=33;
function draw()
{
if(10<=qu<=100 && flag==0)
{
qu+=.5;
}
if(qu>100 || flag==1)
{
qu-=.5;
flag=1;
if(qu<10)
{flag=0;
qu=10;
}
}
var ques = document.getElementById('kid1');
ques.style.position = "absolute";
ques.style.left=qu+'px';

}
function gameLoop()
   {
    window.setTimeout(gameLoop,40);
    draw()
   }
   gameLoop();
}