let valuationPrice = 0;

let isAddedNewBusiness = false;
let isAddedeHrServices = false;
let isAddedAnnualSettelment = false;
let isAddedBookkeeping = false;
let isAddedRevenueBook = false;
let isAddedFinacialReport = false;
let isAddedCompanySuccess = false;

let valuationText;
let pickedOffers;
let hiddenInputInsert;

function AddValueNewBusiness() {
	valuationText = document.getElementById("valuation-cost");
	hiddenInputInsert = document.getElementById("hidden-input-valuation");

	if (isAddedNewBusiness == false) {
		isAddedNewBusiness = true;
		valuationPrice += 0;

		valuationText.textContent = "od " + valuationPrice + "zł";
		document.getElementById("valuation-new-business").style.display = "flex";
		hiddenInputInsert.value += " |Zakładanie firmy ";

		document.getElementById("sticky-cart").style.border = "6px solid #ffe07a";
		setTimeout(() => {
			document.getElementById("sticky-cart").style.border = "2px solid var(--nike-golden)";
		}, 200);
		//console.log(hiddenInputInsert.value);
	} else if (isAddedNewBusiness == true) {
		isAddedNewBusiness = false;
		valuationPrice -= 0;
		valuationText.textContent = "od " + valuationPrice + "zł";
		document.getElementById("valuation-new-business").style.display = "none";
		hiddenInputInsert.value += " Bez zakładania firmy| ";

		document.getElementById("sticky-cart").style.border = "6px solid #ffe07a";
		setTimeout(() => {
			document.getElementById("sticky-cart").style.border = "2px solid var(--nike-golden)";
		}, 200);
		//console.log(hiddenInputInsert.value);
	}
}

function AddValueBookkeeping() {
	valuationText = document.getElementById("valuation-cost");
	hiddenInputInsert = document.getElementById("hidden-input-valuation");

	if (isAddedBookkeeping == false) {
		isAddedBookkeeping = true;
		valuationPrice += 400;

		valuationText.textContent = "od " + valuationPrice + "zł";
		document.getElementById("valuation-bookkeeping").style.display = "flex";
		hiddenInputInsert.value += " |Prowadzenie ksiąg handlowych ";

		document.getElementById("sticky-cart").style.border = "6px solid #ffe07a";
		setTimeout(() => {
			document.getElementById("sticky-cart").style.border = "2px solid var(--nike-golden)";
		}, 200);
		//console.log(hiddenInputInsert.value);
	} else if (isAddedBookkeeping == true) {
		isAddedBookkeeping = false;
		valuationPrice -= 400;

		valuationText.textContent = "od " + valuationPrice + "zł";
		document.getElementById("valuation-bookkeeping").style.display = "none";
		hiddenInputInsert.value += " Bez prowadzenia ksiąg handlowych| ";

		document.getElementById("sticky-cart").style.border = "6px solid #ffe07a";
		setTimeout(() => {
			document.getElementById("sticky-cart").style.border = "2px solid var(--nike-golden)";
		}, 200);
		//console.log(hiddenInputInsert.value);
	}
}

function AddValueRevenueBook() {
	valuationText = document.getElementById("valuation-cost");
	hiddenInputInsert = document.getElementById("hidden-input-valuation");

	if (isAddedRevenueBook == false) {
		isAddedRevenueBook = true;
		valuationPrice += 250;

		valuationText.textContent = "od " + valuationPrice + "zł";
		document.getElementById("valuation-revenue-book").style.display = "flex";
		hiddenInputInsert.value += " |Księgi przychodów i rozchodów ";

		document.getElementById("sticky-cart").style.border = "6px solid #ffe07a";
		setTimeout(() => {
			document.getElementById("sticky-cart").style.border = "2px solid var(--nike-golden)";
		}, 200);

		//console.log(hiddenInputInsert.value);
	} else if (isAddedRevenueBook == true) {
		isAddedRevenueBook = false;
		valuationPrice -= 250;

		valuationText.textContent = "od " + valuationPrice + "zł";
		document.getElementById("valuation-revenue-book").style.display = "none";
		hiddenInputInsert.value += " Bez ksiąg przychodów i rozchodów| ";

		document.getElementById("sticky-cart").style.border = "6px solid #ffe07a";
		setTimeout(() => {
			document.getElementById("sticky-cart").style.border = "2px solid var(--nike-golden)";
		}, 200);
		//console.log(hiddenInputInsert.value);
	}
}

function AddValueFinacialReport() {
	valuationText = document.getElementById("valuation-cost");
	hiddenInputInsert = document.getElementById("hidden-input-valuation");

	if (isAddedFinacialReport == false) {
		isAddedFinacialReport = true;
		valuationPrice += 400;

		valuationText.textContent = "od " + valuationPrice + "zł";
		document.getElementById("valuation-finacial-report").style.display = "flex";
		hiddenInputInsert.value += " |Sprawozdanie finansowe ";

		document.getElementById("sticky-cart").style.border = "6px solid #ffe07a";
		setTimeout(() => {
			document.getElementById("sticky-cart").style.border = "2px solid var(--nike-golden)";
		}, 200);
		//console.log(hiddenInputInsert.value);
	} else if (isAddedFinacialReport == true) {
		isAddedFinacialReport = false;
		valuationPrice -= 400;

		valuationText.textContent = "od " + valuationPrice + "zł";
		document.getElementById("valuation-finacial-report").style.display = "none";
		hiddenInputInsert.value += " Bez sprawozdania finansowego| ";

		document.getElementById("sticky-cart").style.border = "6px solid #ffe07a";
		setTimeout(() => {
			document.getElementById("sticky-cart").style.border = "2px solid var(--nike-golden)";
		}, 200);
		//console.log(hiddenInputInsert.value);
	}
}

function AddValueAnnualSettelment() {
	valuationText = document.getElementById("valuation-cost");
	hiddenInputInsert = document.getElementById("hidden-input-valuation");

	if (isAddedAnnualSettelment == false) {
		isAddedAnnualSettelment = true;
		valuationPrice += 40;

		valuationText.textContent = "od " + valuationPrice + "zł";
		document.getElementById("valuation-annual-settelment").style.display = "flex";
		hiddenInputInsert.value += " |Rozliczenie roczne ";

		document.getElementById("sticky-cart").style.border = "6px solid #ffe07a";
		setTimeout(() => {
			document.getElementById("sticky-cart").style.border = "2px solid var(--nike-golden)";
		}, 200);

		//console.log(hiddenInputInsert.value);
	} else if (isAddedAnnualSettelment == true) {
		isAddedAnnualSettelment = false;
		valuationPrice -= 40;

		valuationText.textContent = "od " + valuationPrice + "zł";
		document.getElementById("valuation-annual-settelment").style.display = "none";
		hiddenInputInsert.value += " Bez rozliczenia rocznego| ";

		document.getElementById("sticky-cart").style.border = "6px solid #ffe07a";
		setTimeout(() => {
			document.getElementById("sticky-cart").style.border = "2px solid var(--nike-golden)";
		}, 200);

		//console.log(hiddenInputInsert.value);
	}
}

function AddValueHrServices() {
	valuationText = document.getElementById("valuation-cost");
	hiddenInputInsert = document.getElementById("hidden-input-valuation");

	if (isAddedeHrServices == false) {
		isAddedeHrServices = true;
		valuationPrice += 40;

		valuationText.textContent = "od " + valuationPrice + "zł";
		document.getElementById("valuation-hr-services").style.display = "flex";
		hiddenInputInsert.value += " |Obsługa kadrowo-płacowa ";

		document.getElementById("sticky-cart").style.border = "6px solid #ffe07a";
		setTimeout(() => {
			document.getElementById("sticky-cart").style.border = "2px solid var(--nike-golden)";
		}, 200);

		//console.log(hiddenInputInsert.value);
	} else if (isAddedeHrServices == true) {
		isAddedeHrServices = false;
		valuationPrice -= 40;

		valuationText.textContent = "od " + valuationPrice + "zł";
		document.getElementById("valuation-hr-services").style.display = "none";
		hiddenInputInsert.value += " Bez obsługi kadrowo-płacowej| ";

		document.getElementById("sticky-cart").style.border = "6px solid #ffe07a";
		setTimeout(() => {
			document.getElementById("sticky-cart").style.border = "2px solid var(--nike-golden)";
		}, 200);

		//console.log(hiddenInputInsert.value);
	}
}

function AddValueCompanySuccess() {
	valuationText = document.getElementById("valuation-cost");
	hiddenInputInsert = document.getElementById("hidden-input-valuation");

	if (isAddedCompanySuccess == false) {
		isAddedCompanySuccess = true;
		valuationPrice += 0;

		valuationText.textContent = "od " + valuationPrice + "zł";
		document.getElementById("valuation-company-success").style.display = "flex";
		hiddenInputInsert.value += " |Sukces firmy ";

		document.getElementById("sticky-cart").style.border = "6px solid #ffe07a";
		setTimeout(() => {
			document.getElementById("sticky-cart").style.border = "2px solid var(--nike-golden)";
		}, 200);
		//console.log(hiddenInputInsert.value);
	} else if (isAddedCompanySuccess == true) {
		isAddedCompanySuccess = false;
		valuationPrice -= 0;

		valuationText.textContent = "od " + valuationPrice + "zł";
		document.getElementById("valuation-company-success").style.display = "none";
		hiddenInputInsert.value += " Bez sukcesu firmy| ";

		document.getElementById("sticky-cart").style.border = "6px solid #ffe07a";
		setTimeout(() => {
			document.getElementById("sticky-cart").style.border = "2px solid var(--nike-golden)";
		}, 200);
		//console.log(hiddenInputInsert.value);
	}
}
