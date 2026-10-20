let name="shyam"//global scope
var name1="sundar"//global scope
if(1==1)
{
    var name1="bruno"//block scope
    let name="qatest"//block scope
    //let error=123
    console.log(name)//qatest
    console.log(name1)//bruno

    
}
function add(a,b)
{
    var name1="test"//functional scope
    let name="functionlet"//functional scope
    //let errorf=112
    //var race=99
    console.log(name1)//test
    console.log(name)//functionlet
    return a+b
}

console.log(add(2,3))//5

var sum=function(c,d)
{
    return c+d
}
console.log(sum(2,3))//5

var sum1=(g,f)=>g+f

console.log(sum1(4,5))//9
console.log(name)//shyam
console.log(name1)//bruno-why because the value in if-block will be replace 
//console.log(error)-error is thrown
//console.log(errorf)-error is thrown
//console.log(race)-error is thrown

/* note: var - scope is in functional level/global level based on where variable is declared and if there is a block which modifies the value of var variable then it will be modified when the bllock is outside function */
/* note : let - scope is in functional/block/global level where the variable is declared and if block/functional let variables when tried to access globally it will throw an error*/