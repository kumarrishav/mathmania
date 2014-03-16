var a,b,c,op1,op2,op3,op,oper,clr,op4,point=0;
function add()
{

a=Math.floor((Math.random()*10)+1);
b=Math.floor((Math.random()*10)+1);
var array=['+','-','*','/'];
oper=array[Math.floor((Math.random()*4))];
c=eval(a+oper+b);
if(String(c).indexOf(".")==-1)
c=c;
else
c=c.toFixed(2);
document.getElementById('kid1').innerHTML=a+"[?]"+b+"="+c;
document.getElementById('point').innerHTML="POINTS : "+point;
}
function ans(z)
{
if(z=="b1")
operator="+";
else if(z=="b2")
operator="-";
else if(z=="b3")
operator="*";
else if(z=="b4")
operator="/";
if(operator==oper)
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
if(10<=qu<=80 && flag==0)
{
qu+=.5;
op=.8;
clr="blue";
}
if(qu>80 || flag==1)
{
qu-=.5;
op=1;
clr="red";
flag=1;
if(qu<10)
{flag=0;
qu=10;
}
}
var ques = document.getElementById('kid1');
ques.style.position = "absolute";
ques.style.left=qu+'px';
ques.style.opacity=op;
ques.style.color=clr;
}
function gameLoop()
   {
    window.setTimeout(gameLoop,40);
    draw()
   }
   gameLoop();
}