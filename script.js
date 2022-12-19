
let counterfunc = 0;
let flag = false;
let flagNewNumber = false;
let showtextOfHistory = false;
let showtextOfMemory = false;
let firsDot = 0;
let ShowPWhitLastHistory = 0;
let ShowPWhitLastMemory = 0;
let equalAgain = " ";
let equalAgainFlage = false;
let testvariable = 0;
let newArray = [];
let firstEqual = 0;
/*persentage*/
let percentageArray1 = [];
let percentageArray2 = [];
let firstAmal = 0;
/*persentage*/
let flagFirstDot = false;
let floatBug = [];
let start = 0;
let firstNumber = 0;
let getSecondNumber = [];
// 3 + = 6
let aginAmal = [];
let flagOneAmalPress = false;
let whichpForAdd = 0;

/*-------------------------------------- 1 - 9 button ------------------------------------*/
function press_button(value) {


    if (!(value == ".")) {
        flagFirstDot = false;
    }
    /*persentage*/
    if (firstAmal == 0) {
        let valueNumber = value;
        percentageArray1.push(valueNumber);
    }
    if (firstAmal > 0) {
        let valueNumber2 = value;
        percentageArray2.push(valueNumber2);

    }

    if (firstNumber == 0 && value == 0) {
        flag = false;
    }
    else {
        flag = true;
        firstNumber++;
    }


    /*persentage*/


    flagOneAmalPress = false;
    aginAmal.push(value);

    firstEqual = 0;
    let getLastValue = value;
    newArray.push(getLastValue);

    let displayy = getDisplayValue();

    if (displayy == "0.") {
        document.getElementById("for_dis").innerText = "0." + value;
        flag = true;
    }
    else {

        if (flagNewNumber == false) {
            showNumberToDis();
        }

        if (flagNewNumber == true) {
            document.getElementById("showBeforResult").innerText = " ";
            if (value == "/" || value == "*" || value == "+" || value == "-") {
                showNumberToDis();
                flagNewNumber = false;
            }
            else {
                document.getElementById("for_dis").innerHTML = 0;
                showNumberToDis();
                flagNewNumber = false;
            }
        }
    }
    function showNumberToDis() {

        document.getElementById("showBeforResult").innerText
        let x = document.getElementById("for_dis").innerHTML;
        counterfunc++;

        if (x == 0 && value == "+") {
            document.getElementById("for_dis").innerHTML = 0;
        }

        if (x == 0) {
            document.getElementById("for_dis").innerHTML = value;
        } else {
            document.getElementById("for_dis").innerHTML += value;
        }
    }

    if (start == 0 && value == 0) {
        return;
    } else {
        firsDot++;
        start++;
    }
}
function getDisplayValue() {
    let display = document.getElementById("for_dis").innerText;
    return display;
}
/*-------------------------------------- 1 - 9 button --(END)----------------------------------*/


/*-------------------------------------dot button----------------------------------------*/
let oneDotePress = 0;
let getDotBtn = document.getElementById("dotBtn");
getDotBtn.addEventListener("click", () => {
    if (flag == false && firsDot == 0 && oneDotePress == 0) {
        document.getElementById("for_dis").innerText = "0.";
        flag = false;
        start++;
    }
    // press first dote after result
    if (flagFirstDot == true) {
        let dispalyafterDot = document.getElementById("for_dis").innerText;
        let display2 = dispalyafterDot + ".";
        press_button(display2)
        flag = false;
        return
    }
    if (flag == true) {
        press_button(dotBtn.value);
        flag = false;
        mosavivariable++;
    }
    oneDotePress++;
});
/*-------------------------------------dot button--(END)--------------------------------------*/


/*-------------------------------------mosavi button--------------------------------------*/
let mosavivariable = 0;


function mosavi() {
    let secondNumber = percentageArray2.join("");
    if (secondNumber == "/0") {
        alert("Cannot divide by zero");
        document.getElementById("for_dis").innerHTML = "0";
        return
    }

    let displayContent = document.getElementById("for_dis").innerText;
    floatBug.push(displayContent);
    let content = floatBug.join("")

    aginAmal.pop();
    let firstNumberEnterd = aginAmal.join("");
    if (flagOneAmalPress == true) {
        for_dis.innerText = for_dis.innerText + firstNumberEnterd;
        flagOneAmalPress = false;
        flag = true;
    }
    flagFirstDot = true;
    percentageArray2 = [];
    /* functionlty press equal again*/
    firstEqual++;
    if (firstEqual == 1) {
        newArray.shift();
    }
    let lastNumber = + newArray.join("");
    let natijeh = eval(document.getElementById("for_dis").innerHTML);
    let soal = document.getElementById("for_dis").innerHTML;
    let memoryDis = document.getElementById("historyFuncID");

    // equal function to add number for press again
    //plus 
    if (equalAgainFlage == true && equalAgain == "A") {

        let soal = + document.getElementById("for_dis").innerHTML;
        let newsoal = soal + lastNumber;
        document.getElementById("for_dis").innerHTML = newsoal;
        // add to history 
        ShowPWhitLastHistory++;
        let newHistory = document.createElement("div");
        newHistory.className = "contetnthistory";
        newHistory.innerHTML = "<p>" + soal + "+" + lastNumber + "=" + " " + newsoal + "</p>";
        memoryDis.appendChild(newHistory);
        // add button delete in history
        let memoryDeleter = document.createElement("button");
        memoryDeleter.classList.add("memoryDelete");
        memoryDeleter.innerHTML = "delete";
        newHistory.appendChild(memoryDeleter);

        memoryDeleter.addEventListener("click", (event) => {
            const target = event.target;
            target.parentNode.remove();
            ShowPWhitLastHistory--;
            if (ShowPWhitLastHistory == 0) {
                let gettextOfMemory = document.getElementById("textOfHistory");
                gettextOfMemory.classList.remove("hide");
            }

        })
        document.getElementById("showBeforResult").innerHTML = soal + "+" + lastNumber + "=";
    }
    //mines
    if (equalAgainFlage == true && equalAgain == "B") {
        let soal = + document.getElementById("for_dis").innerHTML;
        let newsoal = soal - lastNumber;
        document.getElementById("for_dis").innerHTML = newsoal;
        // add to history 
        ShowPWhitLastHistory++;
        let newHistory = document.createElement("div");
        newHistory.className = "contetnthistory";
        newHistory.innerHTML = "<p>" + soal + "-" + lastNumber + "=" + " " + newsoal + "</p>";
        memoryDis.appendChild(newHistory);
        // add button delete in history
        let memoryDeleter = document.createElement("button");
        memoryDeleter.classList.add("memoryDelete");
        memoryDeleter.innerHTML = "delete";
        newHistory.appendChild(memoryDeleter);

        memoryDeleter.addEventListener("click", (event) => {
            const target = event.target;
            target.parentNode.remove();
            ShowPWhitLastHistory--;
            if (ShowPWhitLastHistory == 0) {
                let gettextOfMemory = document.getElementById("textOfHistory");
                gettextOfMemory.classList.remove("hide");
            }

        })
        document.getElementById("showBeforResult").innerHTML = soal + "-" + lastNumber + "=";
    }
    //zarb
    if (equalAgainFlage == true && equalAgain == "C") {
        let soal = + document.getElementById("for_dis").innerHTML;
        let newsoal = soal * lastNumber;
        document.getElementById("for_dis").innerHTML = newsoal;
        // add to history 
        ShowPWhitLastHistory++;
        let newHistory = document.createElement("div");
        newHistory.className = "contetnthistory";
        newHistory.innerHTML = "<p>" + soal + "*" + lastNumber + "=" + " " + newsoal + "</p>";
        memoryDis.appendChild(newHistory);
        // add button delete in history
        let memoryDeleter = document.createElement("button");
        memoryDeleter.classList.add("memoryDelete");
        memoryDeleter.innerHTML = "delete";
        newHistory.appendChild(memoryDeleter);

        memoryDeleter.addEventListener("click", (event) => {
            const target = event.target;
            target.parentNode.remove();
            ShowPWhitLastHistory--;
            if (ShowPWhitLastHistory == 0) {
                let gettextOfMemory = document.getElementById("textOfHistory");
                gettextOfMemory.classList.remove("hide");
            }

        })
        document.getElementById("showBeforResult").innerHTML = soal + "*" + lastNumber + "=";
    }
    //division
    if (equalAgainFlage == true && equalAgain == "D") {
        let soal = + document.getElementById("for_dis").innerHTML;
        let newsoal = soal / lastNumber;
        document.getElementById("for_dis").innerHTML = newsoal;
        // add to history 
        ShowPWhitLastHistory++;
        let newHistory = document.createElement("div");
        newHistory.className = "contetnthistory";
        newHistory.innerHTML = "<p>" + soal + "/" + lastNumber + "=" + " " + newsoal + "</p>";
        memoryDis.appendChild(newHistory);
        // add button delete in history
        let memoryDeleter = document.createElement("button");
        memoryDeleter.classList.add("memoryDelete");
        memoryDeleter.innerHTML = "delete";
        newHistory.appendChild(memoryDeleter);

        memoryDeleter.addEventListener("click", (event) => {
            const target = event.target;
            target.parentNode.remove();
            ShowPWhitLastHistory--;
            if (ShowPWhitLastHistory == 0) {
                let gettextOfMemory = document.getElementById("textOfHistory");
                gettextOfMemory.classList.remove("hide");
            }

        })
        document.getElementById("showBeforResult").innerHTML = soal + "/" + lastNumber + "=";
    }
    //////////////////////////////////////////////////////////////
    if (flagNewNumber == true) {
        return
    }
    if (flagNewNumber == false && mosavivariable > 0) {
        if (floatBug == "0.1+0.2" || floatBug == "0.2+0.1") {
            let newnumber = natijeh.toFixed(1);
            document.getElementById("for_dis").innerHTML = newnumber;
            document.getElementById("showBeforResult").innerHTML = soal + " " + "=";
        }
        else {
            document.getElementById("for_dis").innerHTML = natijeh;
            document.getElementById("showBeforResult").innerHTML = soal + " " + "=";
        }
    }


    // --------------show and add to history----------
    if (mosavivariable > 0) {
        if (floatBug == "0.1+0.2") {
            let newNatijeh = natijeh.toFixed(1)
            ShowPWhitLastHistory++;
            let newHistory = document.createElement("div");
            newHistory.className = "contetnthistory";
            newHistory.innerHTML = "<p>" + soal + " " + "=" + " " + newNatijeh + "</p>";
            memoryDis.appendChild(newHistory);
            // add to mini history
            let miniHistoryDiv = document.getElementById("showForMiniHistory2");
            let addToMiniHistory = document.createElement("div");
            addToMiniHistory.className = "contentMiniHistory";
            addToMiniHistory.innerHTML = "<p class = 'showInMiniHistory'>" + "0.1" + "+" + "0.2" + " " + "=" + " " + "0.3" + "</p>";
            miniHistoryDiv.appendChild(addToMiniHistory);

            // add button delete in history
            let memoryDeleter = document.createElement("button");
            memoryDeleter.classList.add("memoryDelete");
            memoryDeleter.innerHTML = "delete";
            newHistory.appendChild(memoryDeleter);

            memoryDeleter.addEventListener("click", (event) => {
                const target = event.target;
                target.parentNode.remove();
                ShowPWhitLastHistory--;
                if (ShowPWhitLastHistory == 0) {
                    let gettextOfMemory = document.getElementById("textOfHistory");
                    gettextOfMemory.classList.remove("hide");
                }
            })


            mosavivariable = 0;
            flagNewNumber = true;

            // remove the (There's no history yet) text
            showtextOfHistory = true;
            let gettextOfHistory = document.getElementById("textOfHistory");
            gettextOfHistory.classList.add("hide");
            equalAgainFlage = true;
            return;
        }
        if (floatBug == "0.2+0.1") {
            let newNatijeh = natijeh.toFixed(1)
            ShowPWhitLastHistory++;
            let newHistory = document.createElement("div");
            newHistory.className = "contetnthistory";
            newHistory.innerHTML = "<p>" + soal + " " + "=" + " " + newNatijeh + "</p>";
            memoryDis.appendChild(newHistory);
            // add to mini history
            let miniHistoryDiv = document.getElementById("showForMiniHistory2");
            let addToMiniHistory = document.createElement("div");
            addToMiniHistory.className = "contentMiniHistory";
            addToMiniHistory.innerHTML = "<p class = 'showInMiniHistory'>" + "0.2" + "+" + "0.1" + " " + "=" + " " + "0.3" + "</p>";
            miniHistoryDiv.appendChild(addToMiniHistory);

            // add button delete in history
            let memoryDeleter = document.createElement("button");
            memoryDeleter.classList.add("memoryDelete");
            memoryDeleter.innerHTML = "delete";
            newHistory.appendChild(memoryDeleter);

            memoryDeleter.addEventListener("click", (event) => {
                const target = event.target;
                target.parentNode.remove();
                ShowPWhitLastHistory--;
                if (ShowPWhitLastHistory == 0) {
                    let gettextOfMemory = document.getElementById("textOfHistory");
                    gettextOfMemory.classList.remove("hide");
                }
            })


            mosavivariable = 0;
            flagNewNumber = true;

            // remove the (There's no history yet) text
            showtextOfHistory = true;
            let gettextOfHistory = document.getElementById("textOfHistory");
            gettextOfHistory.classList.add("hide");
            equalAgainFlage = true;
        }
        else {
            ShowPWhitLastHistory++;
            let newHistory = document.createElement("div");
            newHistory.className = "contetnthistory";
            newHistory.innerHTML = "<p>" + soal + " " + "=" + " " + natijeh + "</p>";
            memoryDis.appendChild(newHistory);

            // add to mini history
            let miniHistoryDiv = document.getElementById("showForMiniHistory2");
            let addToMiniHistory = document.createElement("div");
            addToMiniHistory.className = "contentMiniHistory";
            addToMiniHistory.innerHTML = "<p class = 'showInMiniHistory'>" + soal + " " + "=" + " " + natijeh + "</p>";
            miniHistoryDiv.appendChild(addToMiniHistory);

            // add button delete in history
            let memoryDeleter = document.createElement("button");
            memoryDeleter.classList.add("memoryDelete");
            memoryDeleter.innerHTML = "delete";
            newHistory.appendChild(memoryDeleter);

            memoryDeleter.addEventListener("click", (event) => {
                const target = event.target;
                target.parentNode.remove();
                ShowPWhitLastHistory--;
                if (ShowPWhitLastHistory == 0) {
                    let gettextOfMemory = document.getElementById("textOfHistory");
                    gettextOfMemory.classList.remove("hide");
                }
            })


            mosavivariable = 0;
            flagNewNumber = true;

            // remove the (There's no history yet) text
            showtextOfHistory = true;
            let gettextOfHistory = document.getElementById("textOfHistory");
            gettextOfHistory.classList.add("hide");
            equalAgainFlage = true;

        }
    }
    firsDot = 0

}
/*-------------------------------------mosavi button--(END)------------------------------------*/


/*---------------------------------------( + - /  * )----------------------------------------*/


const getBtndivision = document.getElementById("divisionBtn");
getBtndivision.addEventListener("click", () => {
    /* first zieo*/
    if (start == 0) {
        alert("invalid input");
        return;
    }
    /* first zieo*/

    if (flag == false) {
        return;
    } else {
        percentageArray2 = []
        oneDotePress = 0;
        firstAmal++;
        newArray = [];
        press_button(divisionBtn.value);
        flag = false;
        mosavivariable++;
        equalAgain = "D";
        equalAgainFlage = false;
        flagOneAmalPress = true;
    }
});

const getBtnMultiplay = document.getElementById("multiplayBtn");
getBtnMultiplay.addEventListener("click", () => {
    /* first zieo*/
    if (start == 0) {
        document.getElementById("for_dis").innerText = "0*";
        mosavivariable++;
    }
    /* first zieo*/
    if (flag == false) {
        return;
    } else {
        oneDotePress = 0;
        firstAmal++;
        newArray = [];
        press_button(multiplayBtn.value);
        flag = false;
        mosavivariable++;
        equalAgain = "C";
        equalAgainFlage = false;
        flagOneAmalPress = true;
    }
});

const getMinesBtn = document.getElementById("minesBtn");
getMinesBtn.addEventListener("click", () => {
    /* first zieo*/
    if (start == 0) {
        document.getElementById("for_dis").innerText = "0-";
        mosavivariable++;
    }
    /* first zieo*/
    if (flag == false) {
        return;
    } else {
        oneDotePress = 0;
        firstAmal++;
        newArray = [];
        press_button(minesBtn.value);
        flag = false;
        mosavivariable++;
        equalAgain = "B"
        equalAgainFlage = false;
        flagOneAmalPress = true;
    }
})

const getSubBtn = document.getElementById("subBtn");
getSubBtn.addEventListener("click", () => {
    /* first zieo*/
    if (start == 0) {
        document.getElementById("for_dis").innerText = "0+";
        mosavivariable++;
    }
    /* first zieo*/
    if (flag == false) {
        return;
    } else {
        oneDotePress = 0;
        firstAmal++;
        newArray = [];
        press_button(subBtn.value);
        flag = false;
        mosavivariable++;
        equalAgain = "A";
        equalAgainFlage = false;
        flagOneAmalPress = true;
    }
})
/*---------------------------------------( + - /  * )---(END)-------------------------------------*/


/* ---------------------------------------c button--------------------------------------------*/

document.querySelector(".grid3").addEventListener("click", clear);
function clear() {
    start = 0;
    flag = false;
    firsDot = 0;
    document.getElementById("for_dis").innerHTML = "0";
    document.getElementById("showBeforResult").innerText = " ";
    percentageArray1 = [];
    percentageArray2 = [];
}
/* ---------------------------------------c button--(END)------------------------------------------*/


/*--------------------------------------delete one number -------------------------------------*/
function deleter() {
    /*persentage*/
    if (firstAmal == 0) {
        percentageArray1.pop();
    }
    if (firstAmal > 0) {
        percentageArray2.pop();
    }
    /*persentage*/
    let valudisplay = document.getElementById("for_dis").innerHTML;
    var value = document.getElementById("for_dis").innerHTML;
    document.getElementById("for_dis").innerHTML = value.substr(0, value.length - 1);
    if (valudisplay.length < 2) {
        document.getElementById("for_dis").innerHTML = 0;
    }
    let discontent = document.getElementById("for_dis").innerHTML;
    if (discontent == "-") {
        document.getElementById("for_dis").innerHTML = 0;

    }
    if (flagNewNumber == true) {
        document.getElementById("showBeforResult").innerText = " ";
    }
    flag = true;


}
/*--------------------------------------delete one number ---(END)----------------------------------*/


/*-------------------------------------------History-------------------------------------------*/

/*----------------- mini size history------------------*/

function historyMini() {
    let showMiniHistory = document.getElementById("showForMiniHistory");
    showMiniHistory.classList.remove("hide");
}
function clearMiniHistory() {
    document.getElementById("showForMiniHistory2").innerHTML = " ";
}
function closeMiniHistory() {
    let showMiniHistory = document.getElementById("showForMiniHistory");
    showMiniHistory.classList.add("hide");
}
/*----------------- mini size history------------------*/


/*-----------------clear history------------------------*/

function cleanerHistory() {
    if (memoryFlag == false) {
        document.getElementById("historyFuncID").innerHTML = " ";
        showtextOfHistory = false;
        let gettextOfHistory = document.getElementById("textOfHistory");
        gettextOfHistory.classList.remove("hide");
        ShowPWhitLastHistory = 0;
    }
    else if (memoryFlag == true) {
        document.getElementById("memoryFuncID").innerHTML = " ";
        showtextOfMemory = false;
        let gettextOfHistory = document.getElementById("textOfMemory");
        gettextOfHistory.classList.remove("hide");
    }

}
/*-----------------clear history------------------------*/


/* ---------------part memory and history----------------*/

let memoryFlag = false;
function memoryBTN() {

    /* red line in below*/
    let history = document.getElementById("historyBtnID");
    let memory = document.getElementById("memoryBtnID");
    memory.classList.add("active");
    history.classList.remove("active");
    /* red line in below*/

    /* swich between memory and history display */
    let changeDisplayHis = document.getElementById("historyFuncID");
    let changeDisplayMem = document.getElementById("memoryFuncID");
    changeDisplayHis.classList.add("displayshow");
    changeDisplayMem.classList.remove("displayshow");
    /* swich between memory and history display */
    memoryFlag = true;
    // history hidder 
    let gettextOfHistory = document.getElementById("textOfHistory");
    gettextOfHistory.classList.add("hide");
    // memory hidder 
    if (showtextOfMemory == true) {
        return
    } else {
        let gettextOfMemory = document.getElementById("textOfMemory");
        gettextOfMemory.classList.remove("hide")
    }

}
/* ---------------part memory and history----------------*/


/* --------------------history Button -------------------*/
function historyBTN() {
    /* red line in below*/
    let history = document.getElementById("historyBtnID");
    let memory = document.getElementById("memoryBtnID");
    memory.classList.remove("active");
    history.classList.add("active");
    /* red line in below*/

    /* swich between memory and history display */
    let changeDisplayHis = document.getElementById("historyFuncID");
    let changeDisplayMem = document.getElementById("memoryFuncID");
    changeDisplayHis.classList.remove("displayshow");
    changeDisplayMem.classList.add("displayshow");
    /* swich between memory and history display */
    memoryFlag = false;
    // show or hide text (There's no history yet)
    if (memoryFlag == false && ShowPWhitLastHistory == 0) {
        let gettextOfHistory = document.getElementById("textOfHistory");
        gettextOfHistory.classList.remove("hide");
        let gettextOfMemory = document.getElementById("textOfMemory");
        gettextOfMemory.classList.add("hide")
    }
    if (memoryFlag == false && ShowPWhitLastHistory > 0) {
        let gettextOfMemory = document.getElementById("textOfMemory");
        gettextOfMemory.classList.add("hide");
    }

}
/* --------------------history Button -------------------*/


/*----------------------minisize Memory------------------*/
function miniMemory() {
    let getShowMiniMemmory = document.getElementById("showForMiniMemory");
    getShowMiniMemmory.classList.remove("hide");
    MCButton.setAttribute("disabled", true);
    MRButton.setAttribute("disabled", true);
    mPlusBtnId.setAttribute("disabled", true);
    mMinesBtnId.setAttribute("disabled", true);
    MSBtnId.setAttribute("disabled", true);

}

function closeMiniMemory() {
    let getShowMiniMemmory = document.getElementById("showForMiniMemory");
    getShowMiniMemmory.classList.add("hide");

    MCButton.removeAttribute("disabled")
    MRButton.removeAttribute("disabled");
    mPlusBtnId.removeAttribute("disabled");
    mMinesBtnId.removeAttribute("disabled");
    MSBtnId.removeAttribute("disabled");
}
function clearMiniMemory() {
    showForMiniMemory2.innerHTML = " ";
}

/*-------------------------------------------History---(END)----------------------------------------*/


/*---------------------------------------- percentage function----------------------------------*/
function percentage() {
    let gettextOfMemory = document.getElementById("textOfHistory");
    gettextOfMemory.classList.add("hide");
    ShowPWhitLastHistory++;

    let firstPartOfNumber = + percentageArray1.join("");

    percentageArray2.shift();


    let secondPartOfNumber = + percentageArray2.join("");

    let darsadNumber = firstPartOfNumber * (secondPartOfNumber / 100);

    if (equalAgain == "A") {
        let result = firstPartOfNumber + darsadNumber;
        document.getElementById("for_dis").innerHTML = result;
        addToHistorPersentage(result);
    }
    if (equalAgain == "B") {
        let result = firstPartOfNumber - darsadNumber;
        document.getElementById("for_dis").innerHTML = result;
        addToHistorPersentage(result);
    }
    if (equalAgain == "C") {
        let result = firstPartOfNumber * darsadNumber;
        document.getElementById("for_dis").innerHTML = result;
        addToHistorPersentage(result);
    }
    if (equalAgain == "D") {
        let result = firstPartOfNumber / darsadNumber;
        document.getElementById("for_dis").innerHTML = result;
        addToHistorPersentage(result);
    }

    firstAmal = 0;
    /* add to history*/
    function addToHistorPersentage(result) {
        let beforResult = document.getElementById("showBeforResult");
        let memoryDis = document.getElementById("historyFuncID");
        let newHistory = document.createElement("div");
        newHistory.className = "contetnthistory";
        if (equalAgain == "A") {
            newHistory.innerHTML = "<p>" + firstPartOfNumber + "+" + secondPartOfNumber + "%" + "=" + " " + result + "</p>";
            beforResult.innerHTML = "<p>" + firstPartOfNumber + "+" + secondPartOfNumber + "%" + "=" + "</p>";
        }
        if (equalAgain == "B") {
            newHistory.innerHTML = "<p>" + firstPartOfNumber + "-" + secondPartOfNumber + "%" + "=" + " " + result + "</p>";
            beforResult.innerHTML = "<p>" + firstPartOfNumber + "-" + secondPartOfNumber + "%" + "=" + "</p>";
        }
        if (equalAgain == "C") {
            newHistory.innerHTML = "<p>" + firstPartOfNumber + "*" + secondPartOfNumber + "%" + "=" + " " + result + "</p>";
            beforResult.innerHTML = "<p>" + firstPartOfNumber + "*" + secondPartOfNumber + "%" + "=" + "</p>";
        }
        if (equalAgain == "D") {
            newHistory.innerHTML = "<p>" + firstPartOfNumber + "/" + secondPartOfNumber + "%" + "=" + " " + result + "</p>";
            beforResult.innerHTML = "<p>" + firstPartOfNumber + "/" + secondPartOfNumber + "%" + "=" + "</p>";
        }
        memoryDis.appendChild(newHistory);
        // add delete button
        let memoryDeleter = document.createElement("button");
        memoryDeleter.classList.add("memoryDelete");
        memoryDeleter.innerHTML = "delete";
        newHistory.appendChild(memoryDeleter);

        memoryDeleter.addEventListener("click", (event) => {
            const target = event.target;
            target.parentNode.remove();
            ShowPWhitLastHistory--;
            if (ShowPWhitLastHistory == 0) {
                let gettextOfMemory = document.getElementById("textOfHistory");
                gettextOfMemory.classList.remove("hide")
            }
        })
    }
    percentageArray2 = [];
    flagNewNumber = true;

}
/*---------------------------------------- percentage function--(END)--------------------------------*/


/*---------------------------------------------CE button---------------------------------------- */

function cebutton() {

    let v = document.getElementById("for_dis").innerHTML.split('');

    let ar = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    for (ar of v) {
        let index = ar.indexOf(parseInt(ar));
        if (index == -1) {
            v.pop();
            v = v.join("");
            document.getElementById("for_dis").innerHTML = v;
            break;
        } else {
            v.pop();
        }

    }
    flag = true;
}
/*---------------------------------------------CE button---(END)------------------------------------- */


/*--------------------------------------------Sqrt root 2 ----------------------------------------*/

function calsqrt() {
    let gettextOfMemory = document.getElementById("textOfHistory");
    gettextOfMemory.classList.add("hide");
    ShowPWhitLastHistory++;
    const x = document.getElementById("for_dis").innerHTML;
    let xresult = Math.sqrt(x);
    document.getElementById("for_dis").innerHTML = xresult.toFixed(2);
    if (x < 0) {
        document.getElementById("for_dis").innerHTML = "Invalid input";
        return;
    }
    /* add to history*/
    let memoryDis = document.getElementById("historyFuncID");
    let newHistory = document.createElement("div");
    newHistory.className = "contetnthistory";
    newHistory.innerHTML = "<p>" + "sqrt" + " " + "(" + x + ")" + " " + "=" + " " + xresult.toFixed(2) + "</p>";
    memoryDis.appendChild(newHistory);
    // add delete button
    let memoryDeleter = document.createElement("button");
    memoryDeleter.classList.add("memoryDelete");
    memoryDeleter.innerHTML = "delete";
    newHistory.appendChild(memoryDeleter);

    memoryDeleter.addEventListener("click", (event) => {
        const target = event.target;
        target.parentNode.remove();
        ShowPWhitLastHistory--;
        if (ShowPWhitLastHistory == 0) {
            let gettextOfMemory = document.getElementById("textOfHistory");
            gettextOfMemory.classList.remove("hide")
        }
    })
    let beforResult = document.getElementById("showBeforResult");
    beforResult.innerHTML = "<p>" + "sqrt" + "(" + x + ")" + "=" + "</p>";
}
/*--------------------------------------------Sqrt root 2 ---(END)-------------------------------------*/


/*-----------------------------------------------Root 2---------------------------------------------*/

function powerTwo() {
    let gettextOfMemory = document.getElementById("textOfHistory");
    gettextOfMemory.classList.add("hide");
    ShowPWhitLastHistory++;

    const x = document.getElementById("for_dis").innerHTML;
    let xresult = Math.pow(x, 2);
    document.getElementById("for_dis").innerHTML = xresult;
    /* add to history*/
    let memoryDis = document.getElementById("historyFuncID");
    let newHistory = document.createElement("div");
    newHistory.className = "contetnthistory";
    newHistory.innerHTML = "<p>" + x + "<sup>" + "2" + "</sup>" + " " + "=" + " " + xresult + "</p>";
    memoryDis.appendChild(newHistory);
    // add delete button
    let memoryDeleter = document.createElement("button");
    memoryDeleter.classList.add("memoryDelete");
    memoryDeleter.innerHTML = "delete";
    newHistory.appendChild(memoryDeleter);

    memoryDeleter.addEventListener("click", (event) => {
        const target = event.target;
        target.parentNode.remove();
        ShowPWhitLastHistory--;
        if (ShowPWhitLastHistory == 0) {
            let gettextOfMemory = document.getElementById("textOfHistory");
            gettextOfMemory.classList.remove("hide")
        }

    })
    let beforResult = document.getElementById("showBeforResult");
    beforResult.innerHTML = "<p>" + x + "<sup>" + "2" + "</sup>" + " " + "=" + "</p>";
}
/*-----------------------------------------------Root 2---(END)------------------------------------------*/


/*------------------------------------------------Root 3---------------------------------------------*/

function powerThree() {
    ShowPWhitLastHistory++;
    let gettextOfMemory = document.getElementById("textOfHistory");
    gettextOfMemory.classList.add("hide");

    const x = document.getElementById("for_dis").innerHTML;
    let xresult = Math.pow(x, 3);
    document.getElementById("for_dis").innerHTML = xresult;
    /* add to history*/
    let memoryDis = document.getElementById("historyFuncID");
    let newHistory = document.createElement("div");
    newHistory.className = "contetnthistory";
    newHistory.innerHTML = "<p>" + x + "<sup>" + "3" + "</sup>" + " " + "=" + " " + xresult + "</p>";
    memoryDis.appendChild(newHistory);
    // add delete button
    let memoryDeleter = document.createElement("button");
    memoryDeleter.classList.add("memoryDelete");
    memoryDeleter.innerHTML = "delete";
    newHistory.appendChild(memoryDeleter);

    memoryDeleter.addEventListener("click", (event) => {
        const target = event.target;
        target.parentNode.remove();
        ShowPWhitLastHistory--;
        if (ShowPWhitLastHistory == 0) {
            let gettextOfMemory = document.getElementById("textOfHistory");
            gettextOfMemory.classList.remove("hide")
        }

    })
    let beforResult = document.getElementById("showBeforResult");
    beforResult.innerHTML = "<p>" + x + "<sup>" + "3" + "</sup>" + " " + "=" + "</p>";
}
/*------------------------------------------------Root 3---(END)------------------------------------------*/


/*--------------------------------------------------1/x-----------------------------------------------*/

function onedivison() {
    if (start == 0) {
        alert("Cannot divide by zero");
        return;
    }
    ShowPWhitLastHistory++;
    let gettextOfMemory = document.getElementById("textOfHistory");
    gettextOfMemory.classList.add("hide");
    const x = document.getElementById("for_dis").innerHTML;
    let result = 1 / x;
    document.getElementById("for_dis").innerHTML = result.toFixed(2);

    let memoryDis = document.getElementById("historyFuncID");
    let newHistory = document.createElement("div");
    newHistory.className = "contetnthistory";
    newHistory.innerHTML = "<p>" + "1" + " " + "/" + " " + x + " " + "=" + " " + result.toFixed(2) + "</p>";
    memoryDis.appendChild(newHistory);
    // add delete button
    let memoryDeleter = document.createElement("button");
    memoryDeleter.classList.add("memoryDelete");
    memoryDeleter.innerHTML = "delete";
    newHistory.appendChild(memoryDeleter);

    memoryDeleter.addEventListener("click", (event) => {
        const target = event.target;
        target.parentNode.remove();
        ShowPWhitLastHistory--;
        if (ShowPWhitLastHistory == 0) {
            let gettextOfMemory = document.getElementById("textOfHistory");
            gettextOfMemory.classList.remove("hide")
        }

    })
    let beforResult = document.getElementById("showBeforResult");
    beforResult.innerHTML = "<p>" + "1" + " " + "/" + " " + x + " " + "=" + " " + "</p>";
}
/*--------------------------------------------------1/x----(END)-------------------------------------------*/


/* --------------------------------------------negative number ----------------------------------------*/

function negativeNum() {
    const x = document.getElementById("for_dis").innerHTML;
    let xresult = -Math.abs(x);
    document.getElementById("for_dis").innerHTML = xresult;
}
/* --------------------------------------------negative number ---(END)-------------------------------------*/


/* ----------------------------------------------Them--------------------------------------------------*/
let counter = 0;
let showThemBtn = 0;
function changethem() {
    showThemBtn++;
    if (showThemBtn == 1) {
        let getChoseThem = document.getElementById("choseThem");
        let getCustomThem = document.getElementById("customThem");
        getChoseThem.classList.remove("hide");
        getCustomThem.classList.remove("hide")
    }
    if (showThemBtn > 1) {
        counter++;
        let btnchanger = document.getElementById("maincontent");
        if (counter == 1) {
            btnchanger.classList.remove("default");
            btnchanger.classList.add("green");
        }
        if (counter == 2) {
            btnchanger.classList.remove("green");
            btnchanger.classList.add("blue");
        }
        else if (counter == 3) {
            btnchanger.classList.remove("blue");
            btnchanger.classList.add("custom");
        }
        else if (counter > 3) {
            btnchanger.classList.remove("custom");
            btnchanger.classList.add("default");
            counter = 0;
        }
    }
}

/* chose them with button ---------*/
function chosethem() {
    let x = prompt("which them?  1-blue * 2-rainbol ?")
    let btnchanger = document.getElementById("maincontent");
    if (x == 1 || x == "blue") {
        btnchanger.classList.remove("green", "custom", "default");
        btnchanger.classList.add("blue");
    }
    else if (x == 2 || x == "raibbol") {
        btnchanger.classList.remove("blue", "green", "default");
        btnchanger.classList.add("custom");
    }
    else if (x > 2 || x == 0) {
        alert("Number is invalid");
    }
    else {
        btnchanger.classList.remove("custom");
        btnchanger.classList.add("default");
        counter = 0;
    }
}

/* -----------------------custom them---------------------*/
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.querySelector(".gradient");
var Allbutton = document.querySelectorAll(".keyboard button");

function setGradient() {
    body.style.background =
        "linear-gradient(to right, "
        + color1.value
        + ", "
        + color2.value
        + ")";
}


color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

/* ----------------------------------------------Them--(END)------------------------------------------------*/


/*------------------------------------------- (Memory)---------------------------------------------------*/

let counetrMemory = -1;
let MScounter = 0;
let addToMemoryDiv = document.getElementById("memoryFuncID");
let contentDisplay = document.getElementById("for_dis").innerText;
let MCButton = document.querySelector("#calOption button");
let MRButton = document.getElementsByTagName("button")[7];


function creatMemory() {
    let natijeh = document.getElementById("for_dis").innerHTML;
    let newDIvInMemory = document.createElement("div");
    let Btn1 = document.createElement("button");
    let Btn2 = document.createElement("button");
    let Btn3 = document.createElement("button");

    newDIvInMemory.className = "memoryDataSaved";
    newDIvInMemory.innerHTML = "<p class='newtest'>" + natijeh + "</p>";

    Btn1.innerText = "MC";
    Btn2.innerText = "M+";
    Btn3.innerText = "M-";
    /*-------------- M+ button-------------- */
    Btn2.addEventListener("click", addToMemoryplus = (event) => {
        const target = event.target;
        let contentDisplay = + document.getElementById("for_dis").innerText;
        target.parentNode.querySelector(".newtest").innerHTML = contentDisplay + parseFloat(target.parentNode.querySelector(".newtest").innerHTML);

    });
    /*--------------M- button ----------------*/
    Btn3.addEventListener("click", (event) => {
        const target = event.target;
        let contentDisplay = + document.getElementById("for_dis").innerText;
        target.parentNode.querySelector(".newtest").innerHTML = parseFloat(target.parentNode.querySelector(".newtest").innerHTML) - contentDisplay;
    })

    /*-------------MC button------------------*/
    Btn1.addEventListener("click", MCremover = (event) => {
        ShowPWhitLastMemory--;
        const target = event.target;
        target.parentNode.remove();

        MCcounter--;
        MCcounterDisable--;
        if (MCcounterDisable == 0) {
            MCButton.setAttribute("disabled", true);
            MRButton.setAttribute("disabled", true);
        }
        if (ShowPWhitLastMemory == 0) {
            let gettextOfMemory = document.getElementById("textOfMemory");
            gettextOfMemory.classList.remove("hide")
        }
    })

    newDIvInMemory.appendChild(Btn1);
    newDIvInMemory.appendChild(Btn2);
    newDIvInMemory.appendChild(Btn3);

    addToMemoryDiv.appendChild(newDIvInMemory);
    MCButton.removeAttribute("disabled");
    MRButton.removeAttribute("disabled");
    ShowPWhitLastMemory++;
}

/*--------------------------- M+--------------------*/

function addToMemory() {
    counetrMemory++;
    let natijehForMini = + document.getElementById("for_dis").innerText;
    let getDivInMemory = document.querySelectorAll("#memoryFuncID div");
    let tedadkol = getDivInMemory.length;

    if (counetrMemory == 0 && MScounter == 0) {
        creatMemory();
        MScounter++;
        whichpForAdd++;
    }


    if (counetrMemory > 0 && MScounter == 1) {
        let natijeh = + document.getElementById("for_dis").innerText;
        let MplusResult = + document.querySelector("#memoryFuncID p").innerText;
        let sum = natijeh + MplusResult;
        document.querySelector("#memoryFuncID p").innerText = sum;
    }

    if (MScounter > 1) {
        let lastParagraph = + document.getElementsByTagName("p")[whichpForAdd].innerText;
        let contentInDis = + document.getElementById("for_dis").innerText;
        let lastsum = lastParagraph + contentInDis;
        document.getElementsByTagName("p")[whichpForAdd].innerText = lastsum;
    }
    let gettextOfMemory = document.getElementById("textOfMemory");
    gettextOfMemory.classList.add("hide")
    showtextOfMemory = true;

    // add to mini memeory
    addToMiniMemory();

}

let chosep = 1;

/*---------------------- M- Button ------------------*/
function Mmines() {

    let natijehForMini = + document.getElementById("for_dis").innerText;
    let getDivInMemory = document.querySelectorAll("#memoryFuncID div");
    let tedadkol = getDivInMemory.length;

    if (counetrMemory == 0 && MScounter == 0) {
        return;
    }


    if (counetrMemory > 0 && MScounter == 1) {
        let natijeh = + document.getElementById("for_dis").innerText;
        let MplusResult = + document.querySelector("#memoryFuncID p").innerText;
        let sum = MplusResult - natijeh;
        document.querySelector("#memoryFuncID p").innerText = sum;
    }

    if (MScounter > 1) {
        let lastParagraph = + document.getElementsByTagName("p")[whichpForAdd].innerText;
        let contentInDis = + document.getElementById("for_dis").innerText;
        let lastsum = lastParagraph - contentInDis;
        document.getElementsByTagName("p")[whichpForAdd].innerText = lastsum;
    }
}

/*--------------------- MC Button -----------------*/
let MCcounter = -1;
let MCcounterDisable = 0;

function clearMemory() {
    let getDivInMemory = document.querySelectorAll("#memoryFuncID div")[MCcounter];
    getDivInMemory.remove();
    MCcounter--;
    MCcounterDisable--;
    counetrMemory = -1;
    if (MCcounterDisable == 0) {
        MCButton.setAttribute("disabled", true);
        MRButton.setAttribute("disabled", true);
        if (memoryFlag == false) {
            return
        } else {
            let gettextOfMemory = document.getElementById("textOfMemory");
            gettextOfMemory.classList.remove("hide")
        }
    }
}

/*---------------------- MR button ----------------------*/

function MRbuttonFunc() {
    let MplusResult = + document.querySelector("#memoryFuncID p").innerText;
    document.getElementById("for_dis").innerHTML = MplusResult;
}
/*-------------------------MS button---------------------- */

const MSButtonFunc = () => {
    whichpForAdd++;
    MScounter++;
    chosep++;
    MCcounter++;
    MCcounterDisable++;
    creatMemory();
    if (memoryFlag == true) {
        let gettextOfMemory = document.getElementById("textOfMemory");
        gettextOfMemory.classList.add("hide");
    }
    showtextOfMemory = true;
    // add to mini memory 
    addToMiniMemory();
}

function addToMiniMemory() {
    let natijehForMini = for_dis.innerHTML;
    let getDivMiniMemory = document.getElementById("showForMiniMemory2");
    let creatNewDiv = document.createElement("div");
    creatNewDiv.className = "showInMiniMemory";
    let pInMiniMemory = document.createElement("p");
    pInMiniMemory.className = "pInMemory";
    pInMiniMemory.innerText = natijehForMini;
    let creatBTNForMini1 = document.createElement("button");
    let creatBTNForMini2 = document.createElement("button");
    let creatBTNForMini3 = document.createElement("button");
    creatBTNForMini1.innerText = "MC";
    creatBTNForMini2.innerText = "M+";
    creatBTNForMini3.innerText = "M-";
    getDivMiniMemory.appendChild(creatNewDiv);
    creatNewDiv.appendChild(pInMiniMemory)
    creatNewDiv.appendChild(creatBTNForMini1);
    creatNewDiv.appendChild(creatBTNForMini2);
    creatNewDiv.appendChild(creatBTNForMini3);

    creatBTNForMini2.addEventListener("click", addToMemoryplus = () => {
        let contentDisplay = + document.getElementById("for_dis").innerText;
        let parentContent = + creatBTNForMini2.parentNode.querySelector(".pInMemory").innerHTML;
        creatBTNForMini2.parentNode.querySelector(".pInMemory").innerHTML = contentDisplay + parentContent;
    });
    creatBTNForMini3.addEventListener("click", addToMemoryplus = () => {
        let contentDisplay = + document.getElementById("for_dis").innerText;
        let parentContent = + creatBTNForMini2.parentNode.querySelector(".pInMemory").innerHTML;
        creatBTNForMini2.parentNode.querySelector(".pInMemory").innerHTML = parentContent - contentDisplay;
    });
    creatBTNForMini1.addEventListener("click", () => {
        creatBTNForMini1.parentNode.remove();
    })
}
/*------------------------------------------- (Memory)--(END)-------------------------------------------------*/
function close() {
    clear();
}