var NumeroA;
var NumeroB;
var operacion;

function Calculadora (){

  let sumar = () =>{
    NumeroA = resultado.textContent;
    operacion = "+";
  }

  let restar  = () =>{
    NumeroA = resultado.textContent;
    operacion = "-";
  }
  

  let multiplicar  = () =>{
    NumeroA = resultado.textContent;
    operacion = "*";
  }
  
  

  let dividir = () =>{
    NumeroA = resultado.textContent;
    operacion = "/";
  }
  
  
  return {sumar,restar,multiplicar,dividir}

  
}
let CalBasica = new Calculadora();

function init(){
    var resultado = document.getElementById('resultado');
    var reset = document.getElementById('reset');
    var suma = document.getElementById('suma');
    var resta = document.getElementById('resta');
    var multiplicacion = document.getElementById('multiplicacion');
    var division = document.getElementById('division');
    var igual = document.getElementById('igual');
    var uno = document.getElementById('uno');
    var dos = document.getElementById('dos');
    var tres = document.getElementById('tres');
    var cuatro = document.getElementById('cuatro');
    var cinco = document.getElementById('cinco');
    var seis = document.getElementById('seis');
    var siete = document.getElementById('siete');
    var ocho = document.getElementById('ocho');
    var nueve = document.getElementById('nueve');
    var cero = document.getElementById('cero');
    var punto = document.getElementById('punto');
  }


punto.onclick = function(e){
    resultado.textContent = resultado.textContent  + ".";
}
suma.onclick = function(e){
    resultado.textContent = resultado.textContent  + "+";
}
resta.onclick = function(e){
  resultado.textContent = resultado.textContent  + "-";
}
multiplicacion.onclick = function(e){
  resultado.textContent = resultado.textContent  + "*";
}
division.onclick = function(e){
  resultado.textContent = resultado.textContent  + "/";
}
uno.onclick = function(e){
    resultado.textContent = resultado.textContent  + "1";
}
dos.onclick = function(e){
    resultado.textContent = resultado.textContent  + "2";
}
tres.onclick = function(e){
    resultado.textContent = resultado.textContent  + "3";
}
cuatro.onclick = function(e){
    resultado.textContent = resultado.textContent  + "4";
}
cinco.onclick = function(e){
    resultado.textContent = resultado.textContent  + "5";
}
seis.onclick = function(e){
    resultado.textContent = resultado.textContent  + "6";
}
siete.onclick = function(e){
    resultado.textContent = resultado.textContent  + "7";
}
ocho.onclick = function(e){
    resultado.textContent = resultado.textContent  + "8";
}
nueve.onclick = function(e){
    resultado.textContent = resultado.textContent  + "9";
}
cero.onclick = function(e){
    resultado.textContent = resultado.textContent  + "0";
}
reset.onclick = function(e){
    resetear();
}
suma.onclick = function(e){
  CalBasica.sumar();
  limpiar();
}
resta.onclick = function(e){
   CalBasica.restar();
    limpiar();
}
multiplicacion.onclick = function(e){
   CalBasica.multiplicar();
    limpiar();
}
division.onclick = function(e){
    CalBasica.dividir();
    limpiar();
}
igual.onclick = function(e){
    NumeroB = resultado.textContent;
    resolver();
}

function limpiar(){
    resultado.textContent = "";
}
function resetear(){
  resultado.textContent = "";
  NumeroA = 0;
  NumeroB = 0;
  operacion = "";
}


function resolver(){
  var res = 0;
  switch(operacion){
    case "+":
      res = parseFloat(NumeroA) + parseFloat(NumeroB);
      break;
    case "-":
        res = parseFloat(NumeroA) - parseFloat(NumeroB);
        break;
    case "*":
      res = parseFloat(NumeroA) * parseFloat(NumeroB);
      break;
    case "/":
      res = parseFloat(NumeroA) / parseFloat(NumeroB);
      break;
  }
  resetear();
  resultado.textContent = res;
}
  

  
  