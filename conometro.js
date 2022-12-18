//Um simples conometro 

let tempo = 0
let textonumeros = 'Minuto'
let minutos = 3
let valorrecebido = 60
let numero = 0
setInterval(() => {
    if(numero==valorrecebido){
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
