const messageComponents = {
	subjects: ["Io sarò", "Tu sarai", "Lui sarà",
	"Lei sarà","Noi saremo", "Voi sarete", "Loro saranno"],
	destinations: ["a Roma", "a Firenze", "in Francia", "negli Stati Uniti",
	"in Messico", "nella mia macchina", "in chiesa", "a casa della sua ragazza"],
	timeSpans: ["stasera", "domani", "fra un mese", "entro una settimana",
	"l'anno prossimo", "presto", "fra 3 giorni", "fra 2 ore"]
}

function randomNumber() {
	return (Math.floor(Math.random()*10));
}

function soggettoCasuale(soggettiVerbi) {
	 let index = randomNumber();
	 while (index >= soggettiVerbi.length){
		index = randomNumber();
	 }
	 return soggettiVerbi[index];
}

function destinazioneCasuale(destinazione) {
	let index = randomNumber();
	while(index>=destinazione.length){
		index = randomNumber();
	}
	return destinazione[index];

}

function momento(quando) {
	let index= randomNumber();
	while(index>=quando.length){
		index = randomNumber();
	}
	return quando[index];
}

function stampareMessaggio(firstPart, secondPart, thirdPart) {
	let messagio = `Il messaggio è: ${soggettoCasuale(firstPart)} ${destinazioneCasuale(secondPart)} ${momento(thirdPart)}. \
Se non ti piace, non c'è niente da fare, è cosi. Quindi vattene.`;
	console.log(messagio);
}

stampareMessaggio(messageComponents.subjects, messageComponents.destinations, messageComponents.timeSpans);




//console.log(soggettoCasuale(messageComponents.subjects));
//console.log(destinazioneCasuale(messageComponents.destinations));
//console.log(momento(messageComponents.timeSpans));


