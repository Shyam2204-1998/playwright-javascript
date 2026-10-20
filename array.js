//ways of declaring array
var num=Array(6)//value in bracket indicate size of array
new Array(1,2,3,4,5,6)

var num1= new Array(1,2,3,4,5,6)

var num2=[1,2,3,4,5,6]

var finalarray=[1,2,3,4,5,6]

//operations on array
console.log(num2.length)//6
console.log(num2[2])//3
num2.push(7)
console.log(num2)//[1,2,3,4,5,6,7]
num2.unshift(0)
console.log(num2)//[0,1,2,3,4,5,6,7]
num2.pop()
console.log(num2)//[0,1,2,3,4,5,6]
var s= num1.slice(2,4)
console.log(s)//[3,4]
console.log(num2.indexOf(4))//4
console.log(num2.includes(2))//true
console.log(num2.includes(9))//false
num2.forEach(f=>console.log(f));//Prints from 0 to 6 in new line

//map,reduce,filter

var sum=0
var sum2=0
var sum1=num1.reduce((sum,num1)=>sum+num1,0);
console.log(sum1)//21

var even=num1.filter(f=>f%2==0)
console.log(even)//[ 2, 4, 6 ]

var map=num1.map(f=>f*2)
console.log(map)//[ 2, 4, 6, 8, 10, 12 ]

//all in one together

var final1= finalarray.filter(f=> f%2==0).map(f=>f*3).reduce((sum2,f)=>sum2+f,0)
console.log(final1)//36

//sort

var fruits=["apple","banana","mango"]
console.log(fruits.sort())//[ 'apple', 'banana', 'mango' ]
console.log(fruits.reverse())//[ 'mango', 'banana', 'apple' ]
console.log(finalarray.sort((a,b)=>a-b))//[ 1, 2, 3, 4, 5, 6 ]
console.log(finalarray.sort((a,b)=>b-a))//[ 6, 5, 4, 3, 2, 1 ]
