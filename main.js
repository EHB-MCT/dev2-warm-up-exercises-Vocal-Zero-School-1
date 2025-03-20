import { getRandomScores, getStudentJSON, runTitle } from "./lib.js";

runTitle();
warmup1();
warmup2();
warmup3();
warmup4();
warmup5();

//1A - Wanneer je op de eerste knop klikt, vervang je de inhoud van de div met id "content-1” door een nieuw p-element met daarin de tekst:“Hallo, dit is de oefening van je naam”.
//1B - Wanneer je op de tweede knop klikt, verandert de achtergrondkleur van de sectie met id "section-1”.
//1C - Wanneer je op de derde knop klikt, voegt een h1-element toe met de inhoud: "Ik ben er klaar voor.".
// current error: None
function warmup1() {
	console.log("Exercise week 1");
	document.getElementById("button-1a").addEventListener("click", function () {
		const content1 = document.getElementById("content-1");
		content1.textContent = "Hallo, dit is de oefening van jens";
	});
	document.getElementById("button-1b").addEventListener("click", function () {
		const section1 = document.getElementById("section-1");
		section1.style.backgroundColor = "lightblue";
	});
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
	// current error: None
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
// current error: None
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
//4A - wanneer je op de knop ‘button-4a’ klikt, haal je de weergegevens op van Brussel en log je deze in de console.
//4B - wanneer je op de knop ‘button-4b’ klikt, toon je de temperatuur, minimum temperatuur en maximum temperatuur in de div ‘content-4’.
// current error: None
function warmup4() {
	const content4 = document.getElementById("content-4");
	const button4a = document.getElementById("button-4a");
	const button4b = document.getElementById("button-4b");
	let weatherData;

	// 4A
	button4a.addEventListener("click", function () {
		fetch("http://api.openweathermap.org/data/2.5/weather?q=Brussels&APPID=d7b955c4c268fe54649d6f0d702b39d1&units=metric")
			.then((response) => response.json())
			.then((data) => {
				weatherData = data;
				console.log(weatherData);
			})
			.catch((error) => console.error("Error fetching weather data:", error));
	});

	// 4B
	button4b.addEventListener("click", function () {
		if (weatherData) {
			content4.innerHTML = ""; // Clear previous content
			const h2Main = document.createElement("h2");
			h2Main.textContent = "Main temperature: " + weatherData.main.temp + "°C";
			const h2Min = document.createElement("h2");
			h2Min.textContent = "Min temperature: " + weatherData.main.temp_min + "°C";
			const h2Max = document.createElement("h2");
			h2Max.textContent = "Max temperature: " + weatherData.main.temp_max + "°C";
			content4.appendChild(h2Main);
			content4.appendChild(h2Min);
			content4.appendChild(h2Max);
		} else {
			console.error("Weather data is not available. Please fetch the data first.");
		}
	});
}
//5A - Wanneer je op knop ‘button-5a’ klikt, maak je een instantie aan van je klasse.

// 5B - Wanneer je op knop ‘button-5b’ klikt, haal je de naam en score op en toon je deze in de html.
// current error: None
// Define the Student class
class Student {
	constructor(name, score) {
		this.name = name;
		this.score = score;
	}
}

function warmup5() {
	const content5 = document.getElementById("content-5");
	const button5a = document.getElementById("button-5a");
	const button5b = document.getElementById("button-5b");
	let student;

	// 5A
	button5a.addEventListener("click", function () {
		student = new Student("Jens", 21);
		console.log(student);
	});

	// 5B
	button5b.addEventListener("click", function () {
		if (student) {
			content5.innerHTML = ""; // Clear previous content
			const h2Name = document.createElement("h2");
			h2Name.textContent = "Naam: " + student.name;
			const h2Score = document.createElement("h2");
			h2Score.textContent = "Score: " + student.score;
			content5.appendChild(h2Name);
			content5.appendChild(h2Score);
		} else {
			console.error("Student object is not available. Please create the object first.");
		}
	});
}
