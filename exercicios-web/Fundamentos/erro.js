function tratarErroELancar(erro){
    //throw new Error('....')
    //throw 10
    //throw true
    //throw 'mensagem'
    throw {
        nome: erro.name,
        msg: erro.message,
        data: new Date
    }
}

function imprimirNomeGritado(obj){
    try {
        console.log(obj.name.toUpperCase() + '!!!')
    } catch (error) {
        tratarErroELancar(error)
    }finally{
        console.log('final')
    }
   
}

const obj ={nome :'Roberto'}
imprimirNomeGritado(obj)