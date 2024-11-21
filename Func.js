function saluer() {
    console.log("Bonjour tout le monde");
    
}
saluer()
// exercice 2
function saluerNom(nom) {
    console.log("Bonjour " + nom);
    return nom
    
}
saluerNom("nouha")
// exercice 3
function addition(a,b) {
    console.log(a+b)
    return a + b

    
}
addition(12,18)
// exercice4
function afficherMessage(message) {
    console.log(message);
    // return message
    
}
afficherMessage("Heeeey ladies")
// exercice 5 
function saluer(nom="invite ") {
    console.log("Bonjour " + nom);
    return nom
    
    
}
saluer()
// serie 2
// exercice 6
function mulitplication(a,b) {
    console.log(a*b)
    return a * b

    
}
mulitplication(5,2)
// exercice 7
let soust=function (a,b) {
    
    return a-b;

}
let resultat=soust(18,2)
console.log(resultat)
// EXERCICE 8
let soustraction=(x,y)=>(x-y);
let resultats=soustraction(18,9)
console.log(resultats)
// exercice 9
const estPair=n=>n % 2 === 0;
console.log(estPair(1));
// exercice 10
(
    function() {
        let message="from zero to hero"
        console.log(message)

            }
            )();
            

// fun 
console.log("fac**********____________________________________")

function factorielle(n){
    var res=1
   for (let i = 1; i <=n; i++) {
    res*=i
   
    
   }
return res
}
console.log(factorielle(5))
const priceBook= [120,30,40,100,126]
priceBook.push(150)
console.log(priceBook)
const car={
    mark:"toyota",
    model:"corolla",
    year:2010,
}
console.log(typeof(car.model))


    
 