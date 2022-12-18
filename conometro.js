//Um simples conometro 
let tempo = 0
let textonumeros = 'Minuto'
//Valor recebido no conometro,usuario.
let minutos = 3
let segundos = 60
let numero = 0
setInterval(() => {
    if(numero==segundos){
       console.log(tempo++,textonumeros)
       if(tempo >=2){
        textonumeros = 'Minutos'
        numero = 0
       }
    } 
   else{ 
    console.log(numero++)
    }
},1000);
