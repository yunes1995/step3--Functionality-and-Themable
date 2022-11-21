
function testfunction() {
    // console.log(ShowPWhitLastMemory);
    // // console.log("firsDot = "+ firsDot)
    let fortest = document.getElementsByClassName(".history")
    fortest.childNodes;
    console.log(fortest)
}
/*----------------- 1 - 9 button -------------*/
let counterfunc = 0;
let flagNewNumber = false;
let showtextOfHistory = false;
let showtextOfMemory = false;
let firsDot = 0;
let ShowPWhitLastHistory = 0;
let ShowPWhitLastMemory = 0;
// let historyMiniflag = false;

function press_button(value) {

    let displayy = getDisplayValue();
    console.log("dispay value = " + displayy)
    if (displayy == "0.") {
        document.getElementById("for_dis").innerText = "0." + value;
        flag = true;
        console.log("ta inja omadam")
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
        flag = true;
    }
    firsDot++;
}
function getDisplayValue() {
    let display = document.getElementById("for_dis").innerText;
    return display;
}

/*-----------dot button---------------*/
let getDotBtn = document.getElementById("dotBtn");
getDotBtn.addEventListener("click", () => {

    if (flag == false && firsDot == 0) {
        console.log("first ")
        document.getElementById("for_dis").innerText = "0.";
        flag = false
    }
    if (flag == false && firsDot > 0) {
        console.log("second")
        return
    }
    if (flag == true && firsDot == 0) {
        return
    }

    if (flag == true) {
        console.log("thired")
        press_button(dotBtn.value);
        flag = false;
        mosavivariable++;
    }
});

/*--------------mosavi button-----------*/
let mosavivariable = 0;

function mosavi() {

    let natijeh = eval(document.getElementById("for_dis").innerHTML);
    let soal = document.getElementById("for_dis").innerHTML;
    let memoryDis = document.getElementById("historyFuncID");
    if (flagNewNumber == true) {
        return
    }
    if (flagNewNumber == false && mosavivariable > 0) {
        document.getElementById("for_dis").innerHTML = natijeh;
        document.getElementById("showBeforResult").innerHTML = soal + " " + "=";
    }


    // show and add to history
    if (mosavivariable > 0) {
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
                gettextOfMemory.classList.remove("hide")
            }
        })


        mosavivariable = 0;
        flagNewNumber = true;
        // remove the (There's no history yet) text
        showtextOfHistory = true;
        let gettextOfHistory = document.getElementById("textOfHistory");
        gettextOfHistory.classList.add("hide");

    }
    firsDot = 0

}




/*------------------------ + - /  * *----------------------*/
let flag = false;

const getBtndivision = document.getElementById("divisionBtn");
getBtndivision.addEventListener("click", () => {
    if (flag == false) {
        return;
    } else {
        press_button(divisionBtn.value);
        flag = false;
        mosavivariable++;
    }
});

const getBtnMultiplay = document.getElementById("multiplayBtn");
getBtnMultiplay.addEventListener("click", () => {
    if (flag == false) {
        return;
    } else {
        press_button(multiplayBtn.value);
        flag = false;
        mosavivariable++;
    }
});

const getMinesBtn = document.getElementById("minesBtn");
getMinesBtn.addEventListener("click", () => {
    if (flag == false) {
        return;
    } else {
        press_button(minesBtn.value);
        flag = false;
        mosavivariable++;
    }
})

const getSubBtn = document.getElementById("subBtn");
getSubBtn.addEventListener("click", () => {
    if (flag == false) {
        return;
    } else {
        press_button(subBtn.value);
        flag = false;
        mosavivariable++;
    }
})



/* ----------------c button---------------*/
document.querySelector(".grid3").addEventListener("click", clear);
function clear() {
    firsDot = 0;
    document.getElementById("for_dis").innerHTML = "0";
    document.getElementById("showBeforResult").innerText = " ";

}


/* ------------اعمال ریاضی----------------*/

function mathic() {
    alert("hi");
}



/*----------------hazv konandeh yeki -----------*/
function deleter() {
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
/*------------------------------history--------------------------------*/

/*----------------- mini size history------------------*/
function historyMini(){
    console.log("ok")
    let showMiniHistory = document.getElementById("showForMiniHistory");
        showMiniHistory.classList.remove("hide");
}
function clearMiniHistory(){
    document.getElementById("showForMiniHistory2").innerHTML = " ";
}
function closeMiniHistory(){
    let showMiniHistory = document.getElementById("showForMiniHistory");
        showMiniHistory.classList.add("hide");
}

/****************clear history ********************** */
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
        gettextOfMemory.classList.add("hide")
    }
    // let gettextOfMemory = document.getElementById("textOfMemory");
    // gettextOfMemory.classList.add("hide")
    // if (showtextOfHistory == true) {
    //     return
    // }
    // else {
    //     let gettextOfHistory = document.getElementById("textOfHistory");
    //     gettextOfHistory.classList.remove("hide");
    // }
}




/*-------------------ce button----------- */

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
/*---------------------darsad button------------- */

function percentage() {

}

/*------------------------sqrt root 2 ----------*/

function calsqrt() {
    const x = document.getElementById("for_dis").innerHTML;
    let xresult = Math.sqrt(x);
    document.getElementById("for_dis").innerHTML = xresult;
    if (x < 0) {
        document.getElementById("for_dis").innerHTML = "Invalid input";
    }
}
/*---------------------------tavan 2--------------*/

function powerTwo() {
    const x = document.getElementById("for_dis").innerHTML;
    let xresult = Math.pow(x, 2);
    document.getElementById("for_dis").innerHTML = xresult;
}

/*---------------------------tavan 3--------------*/

function powerThree() {
    const x = document.getElementById("for_dis").innerHTML;
    let xresult = Math.pow(x, 3);
    document.getElementById("for_dis").innerHTML = xresult;
}

/*------------------------1/x---------------------*/

function onedivison() {
    const x = document.getElementById("for_dis").innerHTML;
    let result = 1 / x;
    document.getElementById("for_dis").innerHTML = result;
}
/* ---------------------negative number ------------*/

function negativeNum() {


    const x = document.getElementById("for_dis").innerHTML;
    let xresult = -Math.abs(x);
    document.getElementById("for_dis").innerHTML = xresult;
}


/* ----------------them---------------*/
let counter = 0;
function changethem() {
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

    // alert("hi");
}

/* chose them with button ---------*/
function chosethem() {
    let x = prompt("which them? 1-green * 2-blue * 3-rainbol ?")
    let btnchanger = document.getElementById("maincontent");
    if (x == 1 || x == "green") {
        btnchanger.classList.remove("default", "blue", "custom");
        btnchanger.classList.add("green");
    }
    if (x == 2 || x == "blue") {
        btnchanger.classList.remove("green", "custom", "default");
        btnchanger.classList.add("blue");
    }
    else if (x == 3 || x == "raibbol") {
        btnchanger.classList.remove("blue", "green", "default");
        btnchanger.classList.add("custom");
    }
    else if (x > 3 || x == 0) {
        alert("Them is not valid");
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
    // css.textContent = body.style.background + ";";
}


color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);




/*--------------------- option part (Memory)-----------------*/

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

    Btn3.setAttribute("onclick", "Mmines()");

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
    let getDivInMemory = document.querySelectorAll("#memoryFuncID div");
    let tedadkol = getDivInMemory.length;

    if (counetrMemory == 0 && MScounter == 0) {
        creatMemory();
    }
    else if (counetrMemory > 0 && MScounter == 0) {
        let natijeh = + document.getElementById("for_dis").innerText;
        let MplusResult = + document.querySelector("#memoryFuncID p").innerText;
        let sum = natijeh + MplusResult;

        showinP = document.getElementsByTagName("p")[2];
        showinP.innerText = sum;
    }
    else if (counetrMemory > 0 && MScounter > 0) {

        let whichp = document.getElementsByTagName("p");
        let pcounternew = whichp.length;
        let lastParagraph = + document.getElementsByTagName("p")[pcounternew - 1].innerText;
        let contentInDis = + document.getElementById("for_dis").innerText;
        let lastsum = lastParagraph + contentInDis;
        document.getElementsByTagName("p")[pcounternew - 1].innerText = lastsum;
    }
    let gettextOfMemory = document.getElementById("textOfMemory");
    gettextOfMemory.classList.add("hide")
    showtextOfMemory = true;
}
/*-------------------- M+ in new div -------------------*/
let whichnutton = 7;
let chosep = 1;


/*************** M- Button ***************/
function Mmines() {
    if (counetrMemory > 0 && MScounter == 0) {
        let natijeh = + document.getElementById("for_dis").innerText;
        let MplusResult = + document.querySelector("#memoryFuncID p").innerText;
        let sum = MplusResult - natijeh;

        let onlyfortest = document.getElementsByTagName("p");
        let pcounter = onlyfortest.length;

        if (pcounter <= 2) {
            showinP = document.getElementsByTagName("p")[1];
            showinP.innerText = sum;
        } else if (pcounter > 2) {
            let showinPNew = document.getElementsByTagName("p")[pcounter - 1];
            showinPNew.innerText = sum;
        }
    } else if (counetrMemory > 0 && MScounter > 0) {
        let whichp = document.getElementsByTagName("p");
        let pcounternew = whichp.length;
        let lastParagraph = + document.getElementsByTagName("p")[pcounternew - 1].innerText;
        let contentInDis = + document.getElementById("for_dis").innerText;
        let lastsum = lastParagraph - contentInDis;

        document.getElementsByTagName("p")[pcounternew - 1].innerText = lastsum;

    }
}
/************************* MC Button ********************/
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

/************************* MR button *********************/

function MRbuttonFunc() {
    let MplusResult = + document.querySelector("#memoryFuncID p").innerText;
    document.getElementById("for_dis").innerHTML = MplusResult;
}
/************************MS button********************** */

const MSButtonFunc = () => {
    MScounter++;
    chosep++;
    // whichnutton += 3;
    MCcounter++;
    MCcounterDisable++;
    creatMemory();
    let gettextOfMemory = document.getElementById("textOfMemory");
    gettextOfMemory.classList.add("hide");
    showtextOfMemory = true;
}

