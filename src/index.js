// Nome do personagem e XP.

let id = "Claitin gameplays";
let xp = 3200

// XP e Elo personagem 

  if(xp <= 1000){
    console.log(" O Herói de nome " + id + " Está no Nível de Ferro. ")
}else if(xp > 1001 && xp <= 2000){
    console.log(" O Herói de nome " + id + " Está no Nível de Bronze. ")
}else if(xp > 2001 && xp <= 5000){
    console.log(" O Herói de nome " + id + " Está no Nível de Prata. ")
}else if(xp > 5001 && xp <= 7000){
    console.log(" O Herói de nome " + id + " Está no Nível de Ouro. ")
}else if(xp  > 7001 && xp <= 8000){
    console.log(" O Herói de nome " + id + " Está no Nível de Platina. ")
}else if(xp > 8001 && xp <= 9000){
    console.log(" O Herói de nome " + id + " Está no Nível de Ascendente. ")
}else if(xp > 9001 && xp <= 10000){
    console.log(" O Herói de nome " + id + " Está no Nível de Imortal. ")
}else if(xp >= 10000){
    console.log(" O Herói de nome " + id + " Está no Nível de Radiante. ")
}