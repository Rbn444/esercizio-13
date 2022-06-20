const d = new Date();
document.getElementById("demo").innerHTML = d;


const y = new Date();
document.getElementById("year").innerHTML = y.getFullYear();

const mes = new Date();
document.getElementById("mese").innerHTML = mes.getMonth();

const g = new Date();
document.getElementById("giorno").innerHTML = g.getDate();

const h = new Date();
document.getElementById("ora").innerHTML = h.getHours();

const min = new Date();
document.getElementById("minuti").innerHTML = min.getMinutes();

const s = new Date();
document.getElementById("sec").innerHTML = s.getSeconds();




const k = new Date();
let text = k.toUTCString();
document.getElementById("eu").innerHTML = text;



var dataall = new Date();

const mesi = ["Gennaio", "Febbraio", "Marzo", "Aprile", "Maggio", "Giugno","Luglio", "Agosto", "Settembre", "Ottobre", "Novembre", "Dicembre"];
const giorni = ["Domenica","Lunedì","Martedì", "Mercoledì", "Giovedì", "Sabato"];

document.write(`${dataall.getDate()} / ${mesi[dataall.getMonth()]} / ${dataall.getFullYear()}`);




       