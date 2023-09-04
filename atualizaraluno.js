const input = require('readline-sync').question;
const read = require('fs').readFileSync



function Listar (){
    let v = read("bancodedados.csv", {encoding: "utf-8"})

    let p = input("digite o id do aluno : ")
    
    let x = v.split("\n")

    var i = 1 

         while(i<x.length-1){
        
        i++;
       let  z = x[i]

      let b = z.split(";")
   
      if(p==b[0]){
    console.log('digite novos valores')
     
     b[1]=   input("novo nome :")
     b[2] =   input("nova matricula :")
     b[3] =    input("nova idade : ")
     b[4] =    input("nova nota :")
      }
    

      

        }

         }

         Listar()