const input = require('readline-sync').question;

function menu (){
    
    let o = -1  




   while(o>7 || o<0 ){

    
    console.log('1-Cadastro de aluno')
    console.log('2-listar todos alunos')
    console.log('3-listar aluno específico')
    console.log('4-Atualizar aluno')
    console.log('5-excluir aluno')
    console.log('6-média ')
    console.log('7- main')
    console.log('0-sair')
    
    
    o = input('opcao:')
}

        
        }
    


        
    





exports.menu = menu