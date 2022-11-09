const classificacao = {
    verificacao: (calc) =>{
        if(calc <=18.4){
            return calc + ' ' + 'Abaixo do peso';
        }
        if(calc >=18.5 && calc <=24.9){
            return calc + ' ' + 'Normal';
        }
        if(calc >=25.1 && calc <=29.9){
            return calc + ' ' + 'Acima do peso';
        }
        if(calc >=30){
            return calc + ' ' + 'Obeso';
        }
    }  
}
const calc = (peso, altura) =>{
    return classificacao.verificacao(((peso)/(altura*altura)).toFixed(2)) ;
}
console.log(calc(90.55, 1.7))
