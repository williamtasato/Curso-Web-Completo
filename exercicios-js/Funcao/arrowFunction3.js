let comparaComThis = function(param){
    console.log(param === this)
}

comparaComThis(global)

const obj ={ }
comparaComThis =comparaComThis.bind(obj)
comparaComThis(global)
comparaComThis(obj)

let comparaComThisArrow = param => console.log(param === this)
comparaComThisArrow(global)
comparaComThisArrow(module.exports)

comparaComThisArrow =comparaComThisArrow.bind(obj)
comparaComThisArrow(obj)
comparaComThisArrow(module.exports)