const Parent = require("./Baseclass")



class Childclass extends Parent
{
 get location(){
    return "Chennai"
 }
 constructor(first,last)
 {
    super(first,last)
 }
}
let childobj=new Childclass("Bruno","dog")
console.log(childobj.location)//Chennai-because firs preference to 
childobj.fullName()