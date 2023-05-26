const horas = document.getElementById("horas");
const minutos = document.getElementById("minutos");
const segundos = document.getElementById("segundos");


const relogio = setInterval(function time() { // função para pegar o tempo do computador e selecionar os horarios de cada div
 let dateToday = new Date();
 let hr = dateToday.getHours();
 let min = dateToday.getMinutes();
 let s = dateToday.getSeconds(); 
 
 // condição caso o tempo seje menor que 0 , adiciona um 0 antes do numero para não ficar somente o numero ex : 09 invez de somente 9 

 if (hr < 10) hr = "0" + hr;
 if (min < 10) min = "0" + min;
 if (s < 10) s = "0" + s;

 // função para trocar o conteudo no HTML e coverter para a variavel atal 
 horas.textContent = hr;
 minutos.textContent = min;
 segundos.textContent = s;
});