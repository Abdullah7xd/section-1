for(let i=1;i<=100;i++){
    if(i%7==0 || i%13==0)
    console.log(i);
}
let [a,b]=[0,1];
for( let i=0;i<10;i++){
    let c = a+b;
    console.log(c);
    [a,b] = [b,c];
}
//wap to find factorial
let k=5;
let f=1;
if(k>0){
    for(let i=1;i<=k;i++)
    f=f*i;
}
console.log(f);
console.log('----prime number---')
let mynum=7;
let prime=true;
for(let i=2;i<mynum/2;i++){
    if(mynum%i==0){
        prime=false;
        console.log('not prime');
    }
}
if(prime) console.log('prime');
//WAP to reverse a number
console.log('--------reverse number')

let n1=37654;
let reverse=0;

while(n1>0){
    
    let r=n1%10;
    reverse= reverse*10+r;
    n1=parseInt(n1/10)
}
console.log(reverse);
//WAP to print prime number from 1to 100
console.log('----prime numbers----')
for(let i=1; i<=100;i++)
{
    count=0;
    for(let j=1;j<=i;j++)
    {
        if(i%j==0)
        count=count+1;
    }
    if(count==2)
    console.log(i);
}
//WAP to check palindrome number
let pal=525;
let rev=0;
while(pal>0){
     let r=pal%10;
     rev=parseInt(rev*10)+r;
    pal=parseInt(pal/10);
}
console.log(rev);
{
    if(rev==pal);
    console.log('number is palindrome')
}
//WAP to check Armstrong number
let an =153;
let rv1=0;
while(an>0){
    let r1=an%10;
    rv1=rv1*10+r1*r1*r1;
    an=an/10;
}
console.log(rv1);
{
    if(rv1==an);
    console.log('Armstrong number');
}
//WAP to print Perfect square

let temp=0;
for(let i=200;i<=400;i++){
    for(let j=1;j<=i;j++){
        if(i%j==0)
        temp=i*i;
    }
    if(temp==i){
        console.log(temp);
    }
}




