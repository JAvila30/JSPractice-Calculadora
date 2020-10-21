const botonNumeros = document.getElementsByName('data-number')
const botonOpera = document.getElementsByName('data-opera')
const botonIgual = document.getElementsByName('data-igual')[0]
const botonDelete = document.getElementsByName('data-delete')[0]
//Variables
var result = document.getElementById('result')
var opeActual = '';
var opeAnterior = '';
var operacion = undefined;

//Numeros
botonNumeros.forEach(function(boton) {
    boton.addEventListener('click', function(){
        agregarNumero(boton.innerText)
    })
});
//Operadores
botonOpera.forEach(function(boton){
    boton.addEventListener('click', function(){
        selectOperacion(boton.innerText)
    })
})
//BotonIgual
botonIgual.addEventListener('click', function(){
calcular()
actualizarDisplay()
})
//BotonBorrar
botonDelete.addEventListener('click',function(){
    clearDisplay()
    actualizarDisplay()
})
//Metodo - Agregar numeros
function agregarNumero(num){
    opeActual = opeActual.toString() + num.toString()
    actualizarDisplay()
}
//Metodo actulizar display
function actualizarDisplay(){
    result.value = opeActual
}
//Seleccionar operador
function selectOperacion(op){
    if(opeActual === '') return
    if(opeAnterior !== ''){
        calcular()
    }
    operacion= op.toString()
    opeAnterior=opeActual
    opeActual=''
}
//FuncionCalcular
function calcular(){
    var calculo
    const anterior = parseFloat(opeAnterior)
    const actual = parseFloat(opeActual)
    if(isNaN(anterior) || (isNaN(actual))) return
    switch(operacion){
        case '+':
            calculo = anterior + actual
            break
        case '-':
            calculo = anterior - actual
            break
        case '*':
            calculo=anterior*actual
            break
        case '/':
            calculo=anterior/actual
            break
        default:
            return
    }
    opeActual=calculo
    operacion=undefined
    opeAnterior=''

}
//Limpiar display
function clearDisplay(){
    opeActual=''
    opeAnterior =''
    operacion = undefined
}
//LimpiarDisplay
clearDisplay();