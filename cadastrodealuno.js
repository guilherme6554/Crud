const input = require('readline-sync').question;

const gg = require('fs')

function Cadastro(){

    let id = 1 

    let x =  gg.readFileSync("bancodedados.csv", {encoding: "utf-8"})

    if(x == 'sep=;\nid;nome;matricula;idade;nota'){
        let id = 1
    }
    else{
        let h = x.split("\n")
       

        let z = h[h.length-1]

        let y = z.split(';')
        id= parseInt(y[0])+1
        
        
    }

    
    let a = input('nome:')
    let b = input('matricula:')
    let c = input('idade:')
    let d = input('nota:')
    
    var t ="\n"+id+";"+a+";"+b+';'+c+';'+d
    
    gg.writeFileSync("bancodedados.csv", t,{flag:"a"})
//     gg.writeFileSync("bancodedados.csv", b, {flag:"a"})
//     gg.writeFileSync("bancodedados.csv", c, {flag:"a"})
//     gg.writeFileSync("bancodedados.csv", d, {flag:"a"})
}

exports.Cadastro=Cadastro













