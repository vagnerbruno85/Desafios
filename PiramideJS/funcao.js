function piramide(n_linhas){

  if (n_linhas <= 0) {
    console.log("Por favor, insira um número positivo maior que zero.");
    return;
  }

  for (let i = 1; i <= n_linhas; i++) {
    let espacos = "_".repeat(n_linhas - i);
    let asteriscos = "*".repeat(2 * i - 1);
    console.log(espacos + asteriscos + espacos);
    document.write(espacos + asteriscos + espacos + "</br>")
  }

//   let space = 0
//   matriz=""

//   //i define o looping até o valor total de linhas
//   for(var i=0; i< n_linhas; i++)
//   {   
//       space = n_linhas - 1 - i
      
//       for(let j=0; j < space; j++){ // lado esquerdo
//           matriz+=("_")
//       }

//       for(let k=0; k <= 2*i; k++){ // centro com *
//          matriz+=("*")
//       }

//       for(let j=0; j < space; j++){ // lado direito
//           matriz+=("_")
//       }
//       matriz+=('<br>')
//   } 

  // document.write((espacos + asteriscos + espacos))
}
var n_linhas = Number.parseInt(prompt('linhas '))
piramide(n_linhas)