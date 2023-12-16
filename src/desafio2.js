// Rank do personagem


function CalcNivel(vitorias, derrotas){
    let totalVitorias = vitorias - derrotas
    let level

    if (totalVitorias < 10){
        level = "Ferro" 
    } else if (totalVitorias >= 11 && totalVitorias <= 20){
        level = "Bronze"
    } else if (totalVitorias >= 21 && totalVitorias <=30){
        level = "Prata"
    } else if (totalVitorias >= 31 && totalVitorias <=40){
        level = "Ouro"
    } else if (totalVitorias >= 41 && totalVitorias <=50){
        level = "Diamante"
    } else if (totalVitorias >= 51 && totalVitorias <=70){
        level = "lendario"
    } else if (totalVitorias >= 71 && totalVitorias <= 100){
        level = "Imortallll"
    }
    
        
    
    return {totalVitorias, level}
    let (totalVitorias , level) = CalcNivel (66)

    console.log("O Herói tem de saldo de **{totalVitorias}** está no nível de **{level}")
}

