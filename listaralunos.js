const input = require('readline-sync').question;
const read = require('fs').readFileSync





function Listar (){
    let v = read("bancodedados.csv", {encoding: "utf-8"})
    
    let x = v.split("\n") 
    
    var i = 1 

         while(i<x.length-1){
        
        i++;
       let  z = x[i]

      let b = z.split(";")
     
          //   console.log(b)
          
          console.log("\n","id:",b[0], "\n", "nome:",b[1], '\n','matricula:',b[2],"\n",'idade:',b[3], "\n", 'nota:',b[4]
          )
        }

         }

         Listar()