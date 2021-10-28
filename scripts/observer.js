window.addEventListener("load", (event) => {
	createObserver();
});

function createObserver() {
	let options = {
		root: document.querySelector("#header"),
		rootMargin: "0px",
		threshold: 1.0,
	};

	let observerClients = new IntersectionObserver(callbackClients, options);
	let observerYears = new IntersectionObserver(callbackYears, options);
	let observerOptimisation = new IntersectionObserver(callbackOptimisation, options);

	let targetClients = document.querySelector(".number-clients");
	observerClients.observe(targetClients);

	let targetYears = document.querySelector(".number-years");
	observerYears.observe(targetYears);

	let targetOptimisation = document.querySelector(".number-optimisation");
	observerOptimisation.observe(targetOptimisation);
}

let startCounterClients = 0;

let callbackClients = (entries, observerClients) => {
	entries.forEach((entry) => {
		console.log(entry.isIntersecting);
		if (entry.isIntersecting == true) {
			startCounterClients += 1;
			const numberClients = document.querySelector(".number-clients");
			let counterClients = 0;

			if (startCounterClients == 1) {
				setInterval(() => {
					if (counterClients == 100) {
						clearInterval();
					} else {
						counterClients += 2;
						numberClients.textContent = counterClients + "%";
					}
				}, 15);
			}

			document.getElementById("progress-left-clients").style.animation = "left 0.5s ease-in both";
			document.getElementById("progress-right-clients").style.animation = "right 0.4s ease-in-out both 0.48s";
		}
	});
};

let startCounterYears = 0;

let callbackYears = (entries, observerYears) => {
	entries.forEach((entry) => {
		if (entry.isIntersecting == true) {
			const numberYears = document.querySelector(".number-years");
			let counterYears = 0;

			startCounterYears += 1;

			if (startCounterYears == 1) {
				setInterval(() => {
					if (counterYears == 10) {
						clearInterval();
					} else {
						counterYears += 1;
						numberYears.textContent = counterYears;
					}
				}, 120);
			}

			document.getElementById("progress-left-years").style.animation = "left .7s ease-in both";
			document.getElementById("progress-right-years").style.animation = "right 0.4s ease-in-out both 0.68s";
		}
	});
};

let startCounterOptimisation = 0;

let callbackOptimisation = (entries, observerOptimisation) => {
	entries.forEach((entry) => {
		if (entry.isIntersecting == true) {
			console.log(entry.isIntersecting);

			const numberOptimisation = document.querySelector(".number-optimisation");
			let counterOptimisation = 0;
			startCounterOptimisation += 1;

			if (startCounterOptimisation == 1) {
				setInterval(() => {
					if (counterOptimisation == 5000) {
						clearInterval();
					} else {
						counterOptimisation += 20;
						numberOptimisation.textContent = counterOptimisation + "zł";
					}
				}, 7);

				document.getElementById("progress-left-optimisation").style.animation = "left 1.1s ease-in both";
				document.getElementById("progress-right-optimisation").style.animation = "left .8s ease-in-out both 1.02s";
			}
		}
	});
};
