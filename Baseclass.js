module.exports=class Parent
{
    age=25
    get location()
    {
        return "Cbe"
    }

    constructor(first,last)
    {
        this.first=first
        this.last=last
    }
    fullName()
    {
        console.log(this.first+this.last)
    }
}  
//let base= new Parent("shyam","sundar")
//console.log(base.age)
//console.log(base.location)
//console.log(base.fullName())


