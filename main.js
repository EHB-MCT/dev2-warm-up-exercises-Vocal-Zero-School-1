import { getRandomScores, getStudentJSON, runTitle } from "./lib.js";

runTitle();
warmup1();
warmup2();
warmup3();
warmup4();
warmup5();

function warmup1() {
	console.log("Exercise week 1");
	//1A - Wanneer je op de eerste knop klikt, vervang je de inhoud van de div met id "content-1” door een nieuw p-element met daarin de tekst:“Hallo, dit is de oefening van je naam”.
	document.getElementById("button-1a").addEventListener("click", function () {
		const content1 = document.getElementById("content-1");
		content1.textContent = "Hallo, dit is de oefening van jens";
	});
	//1B - Wanneer je op de tweede knop klikt, verandert de achtergrondkleur van de sectie met id "section-1”.
	document.getElementById("button-1b").addEventListener("click", function () {
		const section1 = document.getElementById("section-1");
		section1.style.backgroundColor = "lightblue";
	});
	//1C - Wanneer je op de derde knop klikt, voegt een h1-element toe met de inhoud: "Ik ben er klaar voor.".
	document.getElementById("button-1c").addEventListener("click", function () {
		const content1 = document.getElementById("content-1");
		const h1 = document.createElement("h1");
		h1.textContent = "Ik ben er klaar voor.";
		content1.appendChild(h1);
	});
}

function warmup2() {
	// 2A-wanneer je op de knop button-2a klikt, moeten alle scores getoond worden in het html element content-2., voeg hiervoor een lijst (<ul>) met verschillende lijst-elementen (<li>) toe. gebruik strings literals om in deze elementen telkens de juiste score te tonen.
	// 2B- wanneer je op de knop button-2b klikt, sorteer je de array 'scores' je vervangt de huidige lijst in content-2 door een nieuwe gesorteerde lijst.
	// 2C- wanneer je op de knop button-2c klikt, maak je de som van alle scores, bewaar deze in een variabele score, voeg deze score toe aan je pagina door een h,-element toe te voegen na de lijst met daarin: "Som scores:SOM"
	console.log("Exercise week 2");
	const content2 = document.getElementById("content-2");
	const button2a = document.getElementById("button-2a");
	const button2b = document.getElementById("button-2b");
	const button2c = document.getElementById("button-2c");
	const scores = getRandomScores(10);
	let scoreList = document.createElement("ul");
	let scoreSum = 0;
	let h2 = document.createElement("h2");
	h2.textContent = "Som scores: " + scoreSum;
	// 2A
	button2a.addEventListener("click", function () {
		scoreList = document.createElement("ul");
		scores.forEach(function (score) {
			let li = document.createElement("li");
			li.textContent = score;
			scoreList.appendChild(li);
		});
		content2.appendChild(scoreList);
		content2.appendChild(h2);
	});
	// 2B
	button2b.addEventListener("click", function () {
		scores.sort(function (a, b) {
			return a - b;
		});
		scoreList.innerHTML = "";
		scores.forEach(function (score) {
			let li = document.createElement("li");
			li.textContent = score;
			scoreList.appendChild(li);
		});
	});
	// 2C
	button2c.addEventListener("click", function () {
		scoreSum = scores.reduce(function (a, b) {
			return a + b;
		}, 0);
		h2.textContent = "Som scores: " + scoreSum;
	});
}

//3A - wanneer je op de knop ‘button-3a’ klikt zet je de JSON string ‘student’ om naar een JavaScript object en log je dit in de console.
//3B - wanneer je op de knop ‘button-3b’ klikt, voeg je de naam en leeftijd van de student toe als h2-element aan de div ‘content-3’. Op basis van de boolean ‘isGraduated’ voeg je aan ‘content-3’ ofwel de css-klasse ‘graduated’ ofwel de css-klasse ‘not-graduated’ toe.
function warmup3() {
	let student = JSON.parse(getStudentJSON());
	const content3 = document.getElementById("content-3");
	const button3a = document.getElementById("button-3a");
	const button3b = document.getElementById("button-3b");

	// 3A
	button3a.addEventListener("click", function () {
		console.log(student);
	});

	// 3B
	button3b.addEventListener("click", function () {
		content3.innerHTML = ""; // Clear previous content
		const h2Name = document.createElement("h2");
		h2Name.textContent = "Naam: " + student.firstname + " " + student.name;
		const h2Age = document.createElement("h2");
		h2Age.textContent = "Leeftijd: " + student.age;
		content3.appendChild(h2Name);
		content3.appendChild(h2Age);
		if (student.isGraduated) {
			content3.classList.add("graduated");
		} else {
			content3.classList.add("not-graduated");
		}
	});
}

function warmup4() {
	let main, min, max;
}

function warmup5() {}
