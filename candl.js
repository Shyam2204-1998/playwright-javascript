//if and else
const flag=true
if(!flag)//const will not throw error because only expression value willl modify and not the variable value
{
    console.log("condition satisfy")
}
else
{ 
    console.log(flag)
    console.log("condition not satisfy")
}

//while
let req=true
while(req)
{
    console.log(req)
    req=false
}


//do-while
let i=0
do{
    i++
}while(i>10);
console.log(i)

//for-loop
let n=0
for(let k=1;k<=100;k++)
{
    if(k%2==0 && k%5==0)
    {
        n++;
        console.log(k)
            if(n==3)
            break

    }
}