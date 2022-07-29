// A função recebe um inteiro entre 1 e 12 e retorna o mês correspondente por extenso
const date = new Date("2");
const mes = date.toLocaleString("pt-BR",{month:"long"});
console.log(mes);

// A função recebe um array com 3 itens e retorna a média aritmética de todos os iténs
function media(numeros) {
    const total = numeros.reduce((total, atual) => {
      return total + atual;
    });
    
    return total / numeros.length;
  }
  
  console.log(media([4, 6, 8]));

// A função recebe um array de inteiros maiores que zero e retorna a quantidade de números pares existentes no array
  function retornaNumerosPares(n) {
    let numerosPares = [];
    for (let i = 1; numerosPares.length < n; i++) {
        if (i % 2 == 0) {
            numerosPares.push(i);
        }
    }
    return numerosPares;
}

console.log(retornaNumerosPares(1));

// A função recebe uma string e retorna a mesma invertida
function reverse(s){
    return s.split("").reverse().join("");
}

var sss = reverse("foo")
console.log(sss)

// A função substitui todas as vogais por '?'
let expression = "foo";
const expressoes = { 'a': '?', 'e': '?', 'i': '?', 'o': '?', 'u': '?' };

for (const [exp, value] of Object.entries(expressoes)) {
  expression = expression.replaceAll(exp, value);
}

console.log(expression);

// A função recebe um array de inteiros como parametro e retorna o mesmo array ordenado em ordem crescente
var scores = [5, 1, 0, 7, 3, 3];
scores.sort(); // [1, 10, 2, 21]
console.log(scores)

// A função recebe um array de inteiros e retorna o primeiro elemento não repetido
