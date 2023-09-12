const input = require('readline-sync').question;
const read = require('fs').readFileSync


function media(){

   let controle = 1

    let v = read("bancodedados.csv", {encoding: "utf-8"})

    let x = v.split("\n")

    var i = 1 
     
    let w = 0
    
    while(i<x.length-1){
        
      i++;
      let  z = x[i]
      
      
      let b = z.split(";")
      
       w += parseFloat(b[4])
      console.log(w)
      
    }
 let  t = w /parseFloat(x.length-2)
 console.log (t)
        }
       
         

         exports.media = media 