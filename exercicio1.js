const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const numeros = { 
                unidades:{
                    '1':'um', '2':'dois', '3':'três', '4':'quatro', '5':'cinco', '6':'seis', '7':'sete', '8':'oito', '9':'nove'
                },
                dezenas:{
                    '10':'dez', '11':'onze','12':'doze', '13':'treze', '14':'quatorze', '15':'quinze', '16':'dezesseis', '17':'dezessete', '18':'dezoito', '19':'dezenove',
                    '20':'vinte', '30':'trinta', '40':'quarenta', '50':'cinquenta','60':'sessenta', '70':'setenta', '80':'oitenta', '90':'noventa'
                },
                centenas:{
                    '100':'cento(s)', '200':'duzentos', '300':'trezentos', '400':'quatrocentos', '500':'quinhentos', 
                    '600':'seiscentos', '700':'setecentos', '800':'oitocentos', '900':'novecentos'
                },
                milhares:{
                    '1000':'mil', '2000':'dois mil', '3000':'três mil', '4000':'quatro mil', '5000':'cinco mil', '6000':'seis mil', '7000':'sete mil','8000':'oito mil', '9000': 'nove mil'
                }
}
const razo = (numero, tamanho)=>{
    if(numero[tamanho-1]=='0') return true
    else return false 
}
const unidades = (numero) =>{
    return numeros.unidades[numero]
}
const dezenas = (numero, tamanho) =>{
    if(numero[0]==1){
        return numeros.dezenas[numero]
    }
    else{
        if(razo(numero, tamanho)) return numeros.dezenas[numero];
        return numeros.dezenas[numero[0]+'0'] + ' e '.concat(numeros.unidades[numero[1]]);
    }
}
const centenas = (numero, tamanho)=>{
    if(numero[tamanho-1]=='0' && numero[tamanho-2]=='0'){
        if(numero[0]=='1') return 'cem'
        return numeros.centenas[numero]
    }
    else if(numero[tamanho-2]=='0'){
        console.log(numero)
        return numeros.centenas[numero[0]+'00'] + ' e '.concat(unidades(numero[tamanho-1], tamanho))
    }
    console.log(numero.substring(1))
    return numeros.centenas[numero[0]+'00'] + ' e '.concat(dezenas(numero.substring(1), tamanho-1))
}
const milhar = (numero, tamanho)=>{
    if(numeros.milhares.hasOwnProperty(numero)){
        return numeros.milhares[numero]
    }
    else{
        if(numero[1]=='0' && numero[2]!='0'){
            return numeros.milhares[numero[0]+'000'] +' e '+ dezenas(numero.substring(2), tamanho-2) 
        }
        else if(numero[1]=='0' && numero[2]=='0'){
            console.log(numero[tamanho-1])
            return numeros.milhares[numero[0]+'000'] +' e '+ unidades(numero[tamanho-1], 1) 
        }
        return numeros.milhares[numero[0]+'000'] +' e '+ centenas(numero.substring(1), tamanho-1)
    }
}

const numeroExtenso = (numero) =>{
    const tamanho = numero.length;
    if(tamanho ===1){
        return unidades(numero)
    }
    else if(tamanho===2){
        return dezenas(numero, tamanho)
    }
    else if(tamanho===3){
        return centenas(numero, tamanho)
    }
    else if(tamanho === 4){
        return milhar(numero, tamanho)
    }
}
rl.question("Escolha um número entre 0 à 9999", function (answer) {
    console.log(numeroExtenso(answer));
    rl.close();
  });

