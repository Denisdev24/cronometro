                        //Um simples conômetro 
 //valor recebido, usuario
let valorrecebiddo = 1

//segundos
let segundos = 0


let verificador = 0

 let con = setInterval(() => {

    if(segundos===60){
        verificador++
        if(verificador == valorrecebiddo){
            console.log('Fim do tempo')
            clearInterval(con)
            
        }
    }
    console.log(segundos++)
}, 1000);




