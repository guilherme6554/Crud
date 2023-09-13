const Cadastro = require("./cadastrodealuno.js").Cadastro
const media = require("./mediaalunos.js").media
const excluir = require("./excluiraluno.js").excluir
const atualizar = require("./atualizaraluno.js").atualizar
const especifico = require("./alunoespecifico2.js").especifico
const menu = require("./menu.js").menu
const Listar = require("./listaralunos.js").Listar

function main (){
let x = -1
    while(x<0||x>6){
    
  x =menu()

    if(x==0){
        return
    }
    
    if(x==1){
        Cadastro()
    }
    
    if(x==2)
    {
        Listar()
    }
    
    if(x==3){
        especifico()
    }
    
    if(x==4){
        atualizar()
    }
    
    if(x==5){
        excluir()
    }
    
    if(x==6){
        media()
    }
}

}

main()