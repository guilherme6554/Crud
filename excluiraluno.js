const input = require('readline-sync').question;
const read = require('fs').readFileSync
const at = require('fs')


function excluir (){

   let controle = 1

  let q =  at.readFileSync("bancodedados.csv", {encoding: "utf-8"})

    let v = read("bancodedados.csv", {encoding: "utf-8"})

    let p = input("digite o id do aluno : ")
    
    let x = v.split("\n")

    var i = 1 

         while(i<x.length-1){
        
        i++;
       let  z = x[i]

      let b = z.split(";")
   
      if(p==b[0]){

        
    b= b.join()
     
    x.splice(i,1)
    
    x = x.join('\n')
    
      at.writeFileSync("bancodedados.csv", x,{flag:"w"})
break
      }

        }
        if(controle==0){
          console.log("aluno não encontrado")
        }
         }

         excluir()