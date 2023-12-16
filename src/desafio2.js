// Rank do personagem


function calcNivel(vitorias, derrotas) {
    let totalVitorias = vitorias - derrotas;
    let level;
  
    if (totalVitorias < 10) {
      level = "Ferro";
    } else if (totalVitorias <= 20) {
      level = "Bronze";
    } else if (totalVitorias <= 30) {
      level = "Prata";
    } else if (totalVitorias <= 40) {
      level = "Ouro";
    } else if (totalVitorias <= 50) {
      level = "Diamante";
    } else if (totalVitorias <= 70) {
      level = "Lendário";
    } else if (totalVitorias <= 100) {
      level = "Imortal";
    }
    return { totalVitorias, level };
  }
  
  const resultado = calcNivel(66, 34);
  
  console.log(`O Herói tem um saldo total de ${resultado.totalVitorias} vitórias e está no nível ${resultado.level}.`);
  