const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const arr = [1,3,4,5,6,7,8];
rl.question("Escolha um número do array: " + arr, function (answer) {
    const numero = parseInt(answer);
    if(arr.includes(numero)){
        const position = arr.indexOf(numero);
        console.log(arr[position]+ ' localizado no índice: ' + position)
    }
    rl.close();
  });