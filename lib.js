export const runTitle = () => {
	let i = 0;
	const titleHtml = document.querySelector("#title");
	const msg = "...Warming up ☕       ";
	const msgArr = msg.split("");

	setInterval(function () {
		if (i == msgArr.length - 1) {
			//reset
			titleHtml.innerHTML = "";
			i = 0;
		}
		titleHtml.innerHTML += msgArr[i];
		i++;
	}, 200);
};

export const getRandomScores = (amount) => {
	const scores = [];
	for (let i = 0; i < amount; i++) {
		scores.push(Math.round(Math.random() * 20));
	}
	return scores;
};

export const getStudentJSON = () => {
	const firstnames = ["Daan", "Aghlaan", "Zwaan", "Sjaan", "Maan", "Jens", "Vocal"];
	const lastnames = ["Banaan", "Khan", "Graan", "Traan", "Kraan", "Sterckx", "Zero"];
	const f = Math.random() < 0.5 ? "Jens" : "Vocal";
	const l = Math.random() < 0.5 ? "Sterckx" : "Zero";
	const a = Math.floor(Math.random() * 5) + 18;
	const g = Math.round(Math.random()) ? true : false;
	return `{"firstname":"${f}", "name":"${l}", "age":${a}, "isGraduated": ${g}}`;
};
