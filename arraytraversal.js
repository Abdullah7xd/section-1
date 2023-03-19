let num=[11,33,64,31,88,52];
for(let i=0;i<num.length;i++){
    if(num[i]%2==0){
        console.log(num[i]);
    }
}

let newarr=[];
//for each loop-for of loop
for(let n of num){
    if(n%2==0){
        console.log(n);
        newarr.push(n)
    }
}
console.log(newarr);
//filtering in array
let nums =num.filter((n)=>{return n%2==0});
console.log(nums);
res=num.map((a)=>{return a*2});
console.log(res);

const prices=[1200,350,3250,5890,3990];
let a= prices.map((a)=>{return a-a/10});
console.log(a);
//given array['₹3400','₹845','₹20','₹940','₹3700']
let array=['₹3400','₹845','₹20','₹940','₹3700'];
let newarray=array.map((p)=>{return parseInt(p.slice(1))})
console.log(newarray);
//remove perfect squares
let arr=[4,6,9,15,16,20,25,36,40,64,65]
let app=arr.filter((n)=>{return n!=(n**0.5*n**0.5)});
console.log(app);
//func
let arr1=[1,2,3,4,5]
const element=(arr1,i)=>{
    arr1.splice(i,1);
    return arr;
}
letres=element(arr1,3);
console.log(res);