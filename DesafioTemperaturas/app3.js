let temperatura ;
let somaTemperatura = 0 ;
let numTemperaturas = 0;

while(true){
    temperatura = Number(prompt("Digite a temperatura:")) 
if(temperatura === 0){
    break;
}
somaTemperatura += temperatura;
 numTemperaturas++;
}
console.log(somaTemperatura / numTemperaturas)
