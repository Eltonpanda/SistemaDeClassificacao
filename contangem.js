let numeroAlunos = 10

for(let contador =  0; contador < numeroAlunos; contador++) {
   
   if(contador == 0){
       console.log("O número é ZERO")
   } else if(contador % 2 == 0){
        console.log(`O número ${contador} é PAR`)
    }
    else if(contador % 2 == 1){
        console.log(`O número ${contador} é IMPAR`)
    }
}
