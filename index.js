let vitorias = 150;
let derrotas = 70;

function determinarVitorias(qtdVitorias, qtdDerrotas) {
  let resultado = qtdVitorias - qtdDerrotas;
  if (resultado >= 101) return "Imortal";
  if (resultado >= 91) return "Lendário";
  if (resultado >= 81) return "Diamante";
  if (resultado >= 51) return "Ouro";
  if (resultado >= 21) return "Prata";
  if (resultado >= 11) return "Bronze";
  if (resultado < 11) return "Ferro";

  return resultado;
}

let saldoVitorias = determinarVitorias(vitorias, derrotas);

switch (saldoVitorias) {
  case "Imortal":
    console.log(
      `O Herói tem de saldo ${
        vitorias - derrotas
      } vitórias e está no nível Imortal`
    );
    break;
  case "Lendário":
    console.log(
      `O Herói tem de saldo ${
        vitorias - derrotas
      } vitórias e está no nível Lendário`
    );
    break;
  case "Diamante":
    console.log(
      `O Herói tem de saldo ${
        vitorias - derrotas
      } vitórias e está no nível Diamante`
    );
    break;
  case "Ouro":
    console.log(
      `O Herói tem de saldo ${
        vitorias - derrotas
      } vitórias e está no nível Ouro`
    );
    break;
  case "Prata":
    console.log(
      `O Herói tem de saldo ${
        vitorias - derrotas
      } vitórias e está no nível Prata`
    );
    break;
  case "Bronze":
    console.log(
      `O Herói tem de saldo ${
        vitorias - derrotas
      } vitórias e está no nível Bronze`
    );
    break;
  default:
    console.log(
      `O Herói tem de saldo ${
        vitorias - derrotas
      } vitórias e está no nível Ferro`
    );
}
