// exo1
let prenom = ["ayahn","philippe","jonathan","heredia"];
console.log(prenom);
console.log(prenom.indexOf("heredia"));
console.log(prenom[3]);
console.log(prenom.length);

// exo2

let prenom = ["philippe"];
console.log(prenom);
prenom.push("ballon");
prenom.push("jonathan");
console.log(prenom);

// exo3

let classCoding = [];
classCoding.push("ayahn");
console.log(' ayhan est arrivé à 8h43');
classCoding.push("benedicte");
console.log('bene est arrivé à 8h44 et mes ses notes à jours');
classCoding.push("louise","jamila");
console.log('louise et jamila sont arrivés à 8h45');
classCoding.push("sebastien", "adame");
console.log('seb et adame sont rentrés mais ils voient nicolas et decide de sortir');
console.log(classCoding);
classCoding.splice(classCoding.indexOf('sebastien'),2);
console.log(classCoding);
classCoding.push("dawid", "malo");
classCoding.push("alex");
console.log(classCoding.indexOf('alex'),1);
console.log(classCoding);
classCoding.push("maxence", "mohammed");
console.log(classCoding);
classCoding.push("saliou");
console.log(classCoding);
classCoding.push("zulma","maximilien");
console.log(classCoding);
classCoding.push("natchez");
console.log(classCoding);
classCoding.push("zakaria","ayoub");
console.log(classCoding);
classCoding.splice(13,2);
console.log(classCoding);
classCoding.push("achraf");
console.log(classCoding);
classCoding.push("abdellah");
console.log(classCoding);

// Bonus

let myTab =['test1','test2', "abcde"];
console.log(myTab);
const result = myTab.filter(myTab =>myTab.length>5)
console.log(result);


