function Pessoa(nome){
    // atributo privado
    this.nome =nome

    
    //metodo publico
    this.falar=function(){
        console.log(`Meu nome é ${this.nome}`)
    }
    }

    
const p1 =new Pessoa('João')
p1.falar()