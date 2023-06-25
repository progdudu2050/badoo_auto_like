// Versão 2.0
// auto like badoo
// usar no console do chrome

function Curtir(){
	var element = document.querySelector('[aria-label="Curti"]');
element.click();

var time = Math.floor((Math.random() * 2000) + 500);
setTimeout(Curtir, time);
console.log('curti');

}
Curtir();



//coloque para simular descurtidas também e assim simular um usuario comum.
 function Descurti(){
	var element = document.querySelector('[aria-label="Não"]');
element.click();
var time = Math.floor((Math.random() * 2000) + 500);
setTimeout(Descurti, time);
console.log('descurti');

}
Descurti();
