
function randomNumber() {
	return (Math.floor(Math.random()*10));
}

function soggettoCasuale() {
	const soggettiVerbi = ["Io sarò", "Tu sarai", "Lui sarà",
	 "lei sarà","Noi saremo", "Voi sarete", "Loro saranno"];
	 let index = randomNumber();
	 while (index >= soggettiVerbi.length){
		index = randomNumber();
	 }
	 return soggettiVerbi[index];
}

function destinazioneCasuale() {
	const destinazione= ["a Roma", "a Firenze", "in Francia", "negli Stati Uniti",
"in Messico", "nella mia macchina", "in chiesa", "a casa della sua ragazza"];
let index = randomNumber();
while(index>=destinazione.length){
	index = randomNumber();
}
return destinazione[index];

}

function momento() {
	const quando = ["stasera", "domani", "fra un mese", "entro una settimana",
"l'anno prossimo", "presto", "fra 3 giorni", "fra 2 ore"];
let index= randomNumber();
while(index>=quando.length){
	index = randomNumber();
}
return quando[index];
}




console.log(soggettoCasuale());
console.log(destinazioneCasuale());
console.log(momento());


