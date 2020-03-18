//usando a notação literal
const obj1 = {}
console.log(obj1)

//Object em JS
console.log(typeof Object, typeof new Object)
const obj2 = new Object
console.log(obj2)

//Funções construtoras
function Produto(nome, preco, desc){
    this.nome =nome
    this.getPrecoComDesconto  = () =>{
        return preco * (1 - desc)
    }
}

const p1 = new Produto('Caneta',7.99, 0.15)
const p2 = new Produto('Notebook',2998.99,0.25)
console.log(p1.getPrecoComDesconto(),p2.getPrecoComDesconto())

// Função Factory

function criarFuncionario(nome, salariBase, faltas){
    return {
        nome,
        salariBase,
        faltas,
        getSalario(){
            return (salariBase/30) * (30 - faltas)
        }
    }
}

const f1 = new criarFuncionario ('João',7980 , 4)
const f2 = new criarFuncionario ('Maria',11400, 1)
console.log(f1.getSalario(),f2.getSalario()) 

//Object.create
const filha = Object.create(null)
filha.nome = 'Ana'
console.log(filha)

// Uma função famosaque retorna Objeto
const fromJson =JSON.parse('{"info" : "Eu sou um JSON"}')
console.log(fromJson.info)