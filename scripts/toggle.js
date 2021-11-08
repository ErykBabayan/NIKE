// I am aware that this solution is terrible, but at the moment with
//current deadline i can't spend more time on a proper solution
// Gonna fix it later

//possible solution
// https://stackoverflow.com/questions/33444446/get-index-of-class-clicked-in-javascript-no-jquery

let isOpenedNewBusiness = true;
let isOpenedeHrServices = true;
let isOpenedAnnualSettelment = true;
let isOpenedBookkeeping = true;
let isOpenedRevenueBook = true;
let isOpenedFinacialReport = true;
let isOpenedCompanySuccess = true;
let isOpenedValuation = true;

function toggleNewBusiness() {
	if (isOpenedNewBusiness == true) {
		isOpenedNewBusiness = false;
		setTimeout(() => {
			document.getElementById("hide-new-business").style.display = "flex";
		}, 300);
		document.getElementById("wrap-new-business").style.animation = "show .3s ease-out both";
		document.getElementById("rotate-new-business").style.animation = "rotate-button-open .5s ease-in-out both";
	} else if (isOpenedNewBusiness == false) {
		isOpenedNewBusiness = true;
		setTimeout(() => {
			document.getElementById("hide-new-business").style.display = "none";
		}, 100);

		document.getElementById("wrap-new-business").style.animation = "hide .3s ease-in both";
		document.getElementById("rotate-new-business").style.animation = "rotate-button-close .5s ease-in-out both";
	}
}

function toggleHrServices() {
	if (isOpenedeHrServices == true) {
		isOpenedeHrServices = false;
		setTimeout(() => {
			document.getElementById("hide-hr-services").style.display = "flex";
		}, 300);
		document.getElementById("wrap-hr-services").style.animation = "show .3s ease-out both";
		document.getElementById("rotate-hr-services").style.animation = "rotate-button-open .5s ease-in-out both";
	} else if (isOpenedeHrServices == false) {
		isOpenedeHrServices = true;
		setTimeout(() => {
			document.getElementById("hide-hr-services").style.display = "none";
		}, 100);

		document.getElementById("wrap-hr-services").style.animation = "hide .3s ease-in both";
		document.getElementById("rotate-hr-services").style.animation = "rotate-button-close .5s ease-in-out both";
	}
}

function toggleAnnualSettelment() {
	if (isOpenedAnnualSettelment == true) {
		isOpenedAnnualSettelment = false;
		setTimeout(() => {
			document.getElementById("hide-annual-settelment").style.display = "flex";
		}, 300);
		document.getElementById("wrap-annual-settelment").style.animation = "show .3s ease-out both";
		document.getElementById("rotate-annual-settelment").style.animation = "rotate-button-open .5s ease-in-out both";
	} else if (isOpenedAnnualSettelment == false) {
		isOpenedAnnualSettelment = true;
		setTimeout(() => {
			document.getElementById("hide-annual-settelment").style.display = "none";
		}, 100);

		document.getElementById("wrap-annual-settelment").style.animation = "hide .3s ease-in both";
		document.getElementById("rotate-annual-settelment").style.animation = "rotate-button-close .5s ease-in-out both";
	}
}

function toggleBookkeeping() {
	if (isOpenedBookkeeping == true) {
		isOpenedBookkeeping = false;
		setTimeout(() => {
			document.getElementById("hide-bookkeeping").style.display = "flex";
		}, 300);
		document.getElementById("wrap-bookkeeping").style.animation = "show .3s ease-out both";
		document.getElementById("rotate-bookkeeping").style.animation = "rotate-button-open .5s ease-in-out both";
	} else if (isOpenedBookkeeping == false) {
		isOpenedBookkeeping = true;
		setTimeout(() => {
			document.getElementById("hide-bookkeeping").style.display = "none";
		}, 100);

		document.getElementById("wrap-bookkeeping").style.animation = "hide .3s ease-in both";
		document.getElementById("rotate-bookkeeping").style.animation = "rotate-button-close .5s ease-in-out both";
	}
}

function toggleRevenueBook() {
	if (isOpenedRevenueBook == true) {
		isOpenedRevenueBook = false;
		setTimeout(() => {
			document.getElementById("hide-revenue-book").style.display = "flex";
		}, 300);
		document.getElementById("wrap-revenue-book").style.animation = "show .3s ease-out both";
		document.getElementById("rotate-revenue-book").style.animation = "rotate-button-open .5s ease-in-out both";
	} else if (isOpenedRevenueBook == false) {
		isOpenedRevenueBook = true;
		setTimeout(() => {
			document.getElementById("hide-revenue-book").style.display = "none";
		}, 100);

		document.getElementById("wrap-revenue-book").style.animation = "hide .3s ease-in both";
		document.getElementById("rotate-revenue-book").style.animation = "rotate-button-close .5s ease-in-out both";
	}
}

function toggleFinacialReport() {
	if (isOpenedFinacialReport == true) {
		isOpenedFinacialReport = false;
		setTimeout(() => {
			document.getElementById("hide-finacial-report").style.display = "flex";
		}, 300);
		document.getElementById("wrap-finacial-report").style.animation = "show .3s ease-out both";
		document.getElementById("rotate-finacial-report").style.animation = "rotate-button-open .5s ease-in-out both";
	} else if (isOpenedFinacialReport == false) {
		isOpenedFinacialReport = true;
		setTimeout(() => {
			document.getElementById("hide-finacial-report").style.display = "none";
		}, 100);

		document.getElementById("wrap-finacial-report").style.animation = "hide .3s ease-in both";
		document.getElementById("rotate-finacial-report").style.animation = "rotate-button-close .5s ease-in-out both";
	}
}
function toggleCompanySuccess() {
	if (isOpenedCompanySuccess == true) {
		isOpenedCompanySuccess = false;
		setTimeout(() => {
			document.getElementById("hide-company-success").style.display = "flex";
		}, 300);
		document.getElementById("wrap-company-success").style.animation = "show .3s ease-out both";
		document.getElementById("rotate-company-success").style.animation = "rotate-button-open .5s ease-in-out both";
	} else if (isOpenedCompanySuccess == false) {
		isOpenedCompanySuccess = true;
		setTimeout(() => {
			document.getElementById("hide-company-success").style.display = "none";
		}, 100);

		document.getElementById("wrap-company-success").style.animation = "hide .3s ease-in both";
		document.getElementById("rotate-company-success").style.animation = "rotate-button-close .5s ease-in-out both";
	}
}

function toggleValuation() {
	if (isOpenedValuation == true) {
		isOpenedValuation = false;
		document.getElementById("valuation-list").style.display = "flex";
	} else if (isOpenedValuation == false) {
		isOpenedValuation = true;
		document.getElementById("valuation-list").style.display = "none";
	}
}
