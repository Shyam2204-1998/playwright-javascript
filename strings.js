var day="tuesday "
console.log(day.length)//8
var sub=day.slice(0,4)
var sub1=day.split("s")
console.log(sub)//tues
console.log(sub1[1])//day
console.log(sub1[1].trim())//day -space removed at end
let first='27'
let second='23'
let diff=parseInt(first)-parseInt(second)
console.log(diff)//4
let d=diff.toString()
console.log(d)//4
let str="sunday is funday and a good day"
let count=0
let str1=str.indexOf("day")
while(str1!==-1)
{
    count++
    str1=str.indexOf("day",str1+1)
}
console.log(count)//3


