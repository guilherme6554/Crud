const read = require('fs').readFileSync

function Listar (){
    let v = read("bancodedados.csv", {encoding: "utf-8"})
    
    let x = v.split("\n") 
    
    var i = 2 

         while(i<x.length){
        console.log(x[i])
        i++;
        var z = x[i]
        
         }

    
}

Listar()