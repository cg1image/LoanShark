


//get the values from the Page
//starts or controller function
function getValues(){
    //get values from the page
    let loanAmount = document.getElementById("loanAmount").value;
    let term = document.getElementById("term").value;
    let rate = document.getElementById("rate").value;

    loanAmount = parseInt(loanAmount);
    term = parseInt(term);
    rate = parseInt(rate);

    //check that the numbers are integers
    if (Number.isInteger(loanAmount) && Number.isInteger(term) && Number.isInteger(rate) ){
        
        //call mortgageCalc
        let dataArray = mortgageCalc(loanAmount, term, rate);
        //call displayData and write the values to the screen
        displayData(dataArray);

    } else {
        alert("You must enter integers");
    }

}

//calculate total monthly payment (amount loaned)*(rate/1200)/(1-(1+rate/1200)-Number of Months)
//logic function(s)
function mortgageCalc(loanAmount, term, rate){

    returnArray = [];
         
    for (let index = 0; index <= 5; index++) {
        
        if (condition) {
            returnArray.length
        }
    }
}


function displayData(dataArray){

        //get the table body element from the page
        let tableBody = document.getElementById("results");
        let totalMonthly = document.getElementById("totalMonthly");

        //get the template row
        let templateRow = document.getElementById("dataTemplate");

        //clear the table first
        tableBody.innerHTML = "";

        for (let index = 0; index < dataArray.length; index += 6) {

            let tableRow = document.importNode(templateRow.content, true);

            //grab just the td and put them into an array
            let rowCols = tableRow.querySelectorAll("td");
            rowCols[0].textContent = dataArray[index];
            rowCols[1].textContent = dataArray[index + 1];
            rowCols[2].textContent = dataArray[index + 2];
            rowCols[3].textContent = dataArray[index + 3];
            rowCols[4].textContent = dataArray[index + 4];
            rowCols[5].textContent = dataArray[index + 5];

            tableBody.appendChild(tableRow);
        }
}