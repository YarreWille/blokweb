// JavaScript Document

//hamburger menu//
var hamburger 
hamburger = document.querySelector("header nav button");

hamburger.addEventListener("click", navOpen);

function navOpen(){
  let uitvoeren = document.querySelector("header ul");
  uitvoeren.classList.toggle("open");
}

//Pagina2 kleine animatie main section1 h1//

const texts = ['MIJNTELE2', 'MOBIEL ABONNEMENT', 'INTERNET, BELLEN & TV']
let tellen = 0;
let index = 0;
let currentText = " ";
let letter = " ";

(function schrijven(){

	if  (tellen === texts.length){
		tellen = 0;
	}
	currentText = texts[tellen];
	letter = currentText.slice(0, ++index);

	document.querySelector(".typing").textContent = letter;
	if (letter.length === currentText.length){
		tellen++;
		index = 0;
	}
	setTimeout(schrijven, 400);
})();


//Footer Button1//
var button1 
button1 = document.querySelector("footer section:first-of-type ul li:first-of-type button");

button1.addEventListener("click", verander);

function verander(){
  let open = document.querySelector("footer section:first-of-type ul li:first-of-type ul");
  open.classList.toggle("anders");
}


//Footer Button2//
var button2 
button2 = document.querySelector("footer section:first-of-type ul li:nth-of-type(2n) button");

button2.addEventListener("click", verander2);

function verander2(){
  let open2 = document.querySelector("footer section:first-of-type ul li:nth-of-type(2n) ul");
  open2.classList.toggle("anders");
}


//Footer Button3//
var button3 
button3 = document.querySelector("footer section:first-of-type ul li:nth-of-type(3n) button");

button3.addEventListener("click", verander3);

function verander3(){
  let open3 = document.querySelector("footer section:first-of-type ul li:nth-of-type(3n) ul");
  open3.classList.toggle("anders");
}


//Footer Button4//
var button4 
button4 = document.querySelector("footer section:first-of-type ul li:nth-of-type(4n) button");

button4.addEventListener("click", verander4);

function verander4(){
  let open4 = document.querySelector("footer section:first-of-type ul li:nth-of-type(4n) ul");
  open4.classList.toggle("anders");
}