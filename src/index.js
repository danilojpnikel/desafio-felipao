// Nome do personagem e XP.

let id = "Claitin gameplays";
let xp = 3200

// XP e Elo personagem 

  if(xp <= 1000){
    console.log(" O Herói de nome " + id + " Está no Nível de Ferro. Parabéns! ")
}else if(xp > 1001 && xp <= 2000){
    console.log(" O Herói de nome " + id + " Está no Nível de Bronze. Parabéns!  ")
}else if(xp > 2001 && xp <= 5000){
    console.log(" O Herói de nome " + id + " Está no Nível de Prata. Parabéns! ")
}else if(xp > 5001 && xp <= 7000){
    console.log(" O Herói de nome " + id + " Está no Nível de Ouro. Parabéns! ")
}else if(xp  > 7001 && xp <= 8000){
    console.log(" O Herói de nome " + id + " Está no Nível de Platina. Parabéns! ")
}else if(xp > 8001 && xp <= 9000){
    console.log(" O Herói de nome " + id + " Está no Nível de Ascendente. Parabéns! ")
}else if(xp > 9001 && xp <= 10000){
    console.log(" O Herói de nome " + id + " Está no Nível de Imortal. Parabéns! ")
}else if(xp >= 10000){
    console.log(" O Herói de nome " + id + " Está no Nível de Radiante. Parabéns! ")
}