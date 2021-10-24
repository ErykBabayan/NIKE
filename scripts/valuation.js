
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


function AddValueNewBusiness(){
     valuationText = document.getElementById("valuation-cost");
     pickedOffers = document.getElementById("form-textarea");

    if(isAddedNewBusiness == false)
    {
        isAddedNewBusiness = true;
        valuationPrice+=0;
        valuationText.textContent = "od " + valuationPrice +"zł";
        document.getElementById("valuation-new-business").style.display = "flex";
        
    }
    else if (isAddedNewBusiness == true){
        isAddedNewBusiness = false;
        valuationPrice-=0;
        valuationText.textContent = "od " + valuationPrice +"zł";
        document.getElementById("valuation-new-business").style.display = "none";
    }

}

function AddValueHrServices(){
    valuationText = document.getElementById("valuation-cost");

   if(isAddedeHrServices == false)
   {
    isAddedeHrServices = true;
       valuationPrice+=200;
       valuationText.textContent = "od " + valuationPrice +"zł";
       document.getElementById("valuation-hr-services").style.display = "flex";
       
   }
   else if (isAddedeHrServices == true){
       isAddedeHrServices = false;
       valuationPrice-=200;
       valuationText.textContent = "od " + valuationPrice +"zł";
       document.getElementById("valuation-hr-services").style.display = "none";
   }

}

function AddValueAnnualSettelment(){
    valuationText = document.getElementById("valuation-cost");

   if(isAddedAnnualSettelment == false)
   {
    isAddedAnnualSettelment = true;
        valuationPrice+=500;
        valuationText.textContent = "od " + valuationPrice +"zł";
        document.getElementById("valuation-annual-settelment").style.display = "flex";
       
   }
   else if (isAddedAnnualSettelment == true){
        isAddedAnnualSettelment = false;
        valuationPrice-=500;
        valuationText.textContent = "od " + valuationPrice +"zł";
        document.getElementById("valuation-annual-settelment").style.display = "none";
   }

}

function AddValueBookkeeping(){
    valuationText = document.getElementById("valuation-cost");

   if(isAddedBookkeeping == false)
   {
    isAddedBookkeeping = true;
        valuationPrice+=1000;
        valuationText.textContent = "od " + valuationPrice +"zł";
        document.getElementById("valuation-bookkeeping").style.display = "flex";
       
   }
   else if (isAddedBookkeeping == true){
    isAddedBookkeeping = false;
        valuationPrice-=1000;
        valuationText.textContent = "od " + valuationPrice +"zł";
        document.getElementById("valuation-bookkeeping").style.display = "none";
   }

}

function AddValueRevenueBook(){
    valuationText = document.getElementById("valuation-cost");

   if(isAddedRevenueBook == false)
   {
    isAddedRevenueBook = true;
        valuationPrice+=800;
        valuationText.textContent = "od " + valuationPrice +"zł";
        document.getElementById("valuation-revenue-book").style.display = "flex";
       
   }
   else if (isAddedRevenueBook == true){
    isAddedRevenueBook = false;
        valuationPrice-=800;
        valuationText.textContent = "od " + valuationPrice +"zł";
        document.getElementById("valuation-revenue-book").style.display = "none";
   }

}

function AddValueFinacialReport(){
    valuationText = document.getElementById("valuation-cost");

   if(isAddedFinacialReport == false)
   {
    isAddedFinacialReport = true;
        valuationPrice+=450;
        valuationText.textContent = "od " + valuationPrice +"zł";
        document.getElementById("valuation-finacial-report").style.display = "flex";
       
   }
   else if (isAddedFinacialReport == true){
    isAddedFinacialReport = false;
        valuationPrice-=450;
        valuationText.textContent = "od " + valuationPrice +"zł";
        document.getElementById("valuation-finacial-report").style.display = "none";
   }

}

function AddValueCompanySuccess(){
    valuationText = document.getElementById("valuation-cost");

   if(isAddedCompanySuccess == false)
   {
    isAddedCompanySuccess = true;
        valuationPrice+=0;
        valuationText.textContent = "od " + valuationPrice +"zł";
        document.getElementById("valuation-company-success").style.display = "flex";
       
   }
   else if (isAddedCompanySuccess == true){
    isAddedCompanySuccess = false;
        valuationPrice-=0;
        valuationText.textContent = "od " + valuationPrice +"zł";
        document.getElementById("valuation-company-success").style.display = "none";
   }

}