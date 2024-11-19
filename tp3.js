// ex 1
let x=8;
if (x%2==0) {
    console.log("Le nombrer est pair");
    
}else{
    console.log("Le nombrer est impair");
}
// ex 2
let age
if (age>=18) {
    console.log("vous etes majour");
} else {
    console.log("vous etes mineur");
    
}
// ex 3
let numJour=3;
const jours=["lundi","mardi","mercredi","jeudi","vendredi","samedi","dimanche"]
if (numJour>=0 && numJour<=7) {
    console.log(jours[numJour-1])


    
} else {
    console.log("entre un nombre dans les jours de semaine")

    
}
// ex 4
let nombre=0
if (nombre>0){
    console.log("le nombre est positif")

}else if (nombre<0) {
    console.log("le nombre est negatif")
    
}else{
    console.log("le nombre null") 
}
// ex 5
let prix =120
if (prix>100 ) {
    console.log(prix*0.9);
    } 
// ex6
let note=75
let remarque
if (note<=100 && note>=90 ){
    remarque=("excellent")
}
else if (note<=89 && note>=70) {
    remarque=("Bien")
}
else if (note<=69 && note>=50) {
    remarque=(" Moyen")
    }
else{
    remarque=("insuffisant")
}
console.log(remarque)
// EX7
let Age=28
let revenu=2200
let ligibilite
if (Age>25 && revenu>2000) {
    ligibilite=("ligible")
    
}else{
    ligibilite=("non ligible")
}
console.log(ligibilite)
// ex8
let heure=15
if (heure<12 && heure>23) {
    console.log("le matin")
} else if(heure>14 && heure<23 ){
    console.log("le soir")
}
else{
    console.log("l apres midi")
}
// EX9
let a=12 , b=4
let oper="-"
switch (oper) {
    case "+":
        console.log(a+b)
        break;
    case"-":
    console.log(a-b)
    case"/":
    console.log(a/b)
    if (b===!0) {
        console.log(a/b)
        
    }else{
        console.log("erreur ")
    }
    case"*":
    console.log(a*b)

    default:
        break;
}
// ex 10
let Agee=17;
let carte=true;
if (Agee===17 && carte===true) {
    console.log("tu peux acceder aux service ")
    
} else {
    console.log("tu peux pas ");
}

// Exercice Intermediares
let s=5, u=7, o=10;
if (s+u>o) {
    console.log("la somme de s et u est supérieur a o alors que on peux faire regtangle")
    
} else {
    console.log("la somme de s et u est inférieur a o alors que on peux");
    
}
// EXERCICE INTERMEDIAIRE 2
// Calcul de l'IMC




