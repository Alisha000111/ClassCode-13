//console.log("first");
//for(let i = 1 ; i <= 100000; i++){
    //console.log("third")
//}
//console.log("second")
//function myName(firstName: string, lastName: string){
    //return firstName + lastName
//}
//myName("Alisha,Tania")
//let add = (add1: string, add2: string) => add1 + add2
//console.log(add("Alisha", "Tania"));
//function greeting(askName:()=>void){
    //console.log("Hello, greet!");
    //askName()
//}
 //function askName(){
    //console.log("Enter your name");
 //}
//greeting(askName)
//console.log(askName)
console.log("First");
setTimeout(()=>{
    console.log("second");
}, 1000)
setTimeout(()=>{
    console.log("fourth");
}, 0)
console.log("Third");
function myName(callback: (result: string) => void) {
    setTimeout(() => {
        callback('Alisha');
    }, 2000);
}
