const nome = "Robson Carlos";
const dataNascimento = "1995-01-25";
const anoAtual = new Date().getFullYear();
const dataNascimentoTipoDate = new Date(dataNascimento);
const momentoAtual = new Date();
let proximoAniversario = 
    momentoAtual.getMonth() > dataNascimentoTipoDate.getMonth() ||
    (momentoAtual.getMonth() === dataNascimentoTipoDate.getMonth() &&
      momentoAtual.getDay() >= dataNascimentoTipoDate.getDay())
      ? new Date(`${anoAtual + 1}-01-25`)
      : new Date(`${anoAtual}-01-25`);

const diaAteProximoAniversario = Math.floor(
    (proximoAniversario.getTime() - momentoAtual.getTime()) /
      (1000 * 60 * 60 * 24) 
);
console.log(`${nome}, seu próximo aniversário é em ${diaAteProximoAniversario} dias`);
