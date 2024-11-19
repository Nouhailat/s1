// exercice 1
for (let i = 1; i <=10;i++ ) {
    console.log(i);
}
// EXERCICE2
for (let i =1;i<=20 ; ++i) {
    if(i%2==0){
        console.log(i);
    }

}
// exercice 3
for(i=1;i<=5;++i){
    console.log( "le carre de "+i+ "est=" +i*i);
}
// exercice 4
for(let j=10;j>=1;j--){
    console.log(j);
}
// exercice 5
// for (let index = 0; index <=5; index++) {
//     console.log(i*2)
    
// 
// }
 let cont=0
for (let index = 1; cont<5; index+=2) {
    console.log(index)
    cont++
    
    
}
// exercice 6
let conuter=0
for (let index = 0; conuter <5; index+=2){
    console.log(index)
    conuter++

}
// EXERCICE 7
for (let k = 1; k <=5; k++) {
console.log("la mulitpe de " +k+ "avec 3 EST ="+ k*3)
    
}
// exercice 8
let salutation="hello wold" 
let voyelles="oueayiOUIYAE"
let counteur=0 
for (let index = 0; index < salutation.length; index++) {
    if(voyelles.includes(salutation[index])){
        counteur++
        }
        }
    console.log("les voyelles= "+counteur)

// Exercice Intermediaires
// exercice 1
let chain="N o u h a i l a"
let delet=suprimerEspaces(chain)
function suprimerEspaces (chaine) {
    return chaine.replace(/ /g, "");

 
}
console.log(delet);
console.log(chain)
// exercice 2
let text ="nouhaila"
let operation = inverserChaine(text);
console.log(operation)








