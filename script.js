

const num1 = document.getElementById('no1')
const num2 = document.getElementById('no2')
const num3 = document.getElementById('no3')
const num4 = document.getElementById('no4')
const num5 = document.getElementById('no5')
const num6 = document.getElementById('no6')
const num7 = document.getElementById('no7')
const num8 = document.getElementById('no8')
const num9 = document.getElementById('no9')
const num0 = document.getElementById('no0')
const numdot = document.getElementById('nodot')
const off = document.getElementById('off')

const plus = document.getElementById('plus')
const minus = document.getElementById('minus')
const mult = document.getElementById('mult')
const divise = document.getElementById('divise')
const squered = document.getElementById('squered')
const cubed = document.getElementById('cubed')
const equal = document.getElementById('equal')
const clear = document.getElementById('clear')
let wincont = ""
let onoff = 0;
console.log(num1)

function adno(winText, btnval) {

    if (["+", "-", "*", "/", "^2", "^3", "."].includes(btnval)) {


        if (winText[winText.length - 1] == btnval) {
            return winText;
        } else if (btnval == "+" && ["-", "*", "/"].includes(winText[winText.length - 1])) {
            winText = winText.substring(0, winText.length - 1) + "+";
            return winText;
        } else if (btnval == "-" && ["+", "*", "/"].includes(winText[winText.length - 1])) {
            winText = winText.substring(0, winText.length - 1) + "-";
            return winText;
        } else if (btnval == "*" && ["+", "-", "/"].includes(winText[winText.length - 1])) {
            winText = winText.substring(0, winText.length - 1) + "*";
            return winText;
        } else if (btnval == "/" && ["+", "-", "*"].includes(winText[winText.length - 1])) {
            winText = winText.substring(0, winText.length - 1) + "/";
            return winText;
        } else if (btnval == "^2" && ["+", "-", "*", "/",].includes(winText[winText.length - 1])) {
            winText = winText.substring(0, winText.length - 1) + "^2";
            return winText;
        } else if (btnval == "^3" && ["+", "-", "*", "/",].includes(winText[winText.length - 1])) {
            winText = winText.substring(0, winText.length - 1) + "^3";
            return winText;
        } else if (btnval == ".") {
            if (winText.includes(".")) {
                let dotint = winText.slice(winText.lastIndexOf(".", winText.length - 1), winText.length);
                if (dotint.includes("+") || dotint.includes("-") || dotint.includes("*") || dotint.includes("/")) {
                    winText += btnval;
                    return winText;
                } else if (winText[winText.length - 2] == "^") {
                    winText = winText + "*" + btnval;
                    return winText;

                } else {
                    return winText;
                }
            } else if (winText.lastIndexOf(".", winText.length - 1) == -1) {

                if (["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"].includes(winText)) {
                    winText = winText + "."
                    return winText;
                } else if (winText == "") {
                    winText = 0 + ".";
                    return winText;
                } else if (winText[winText.length - 2] == "^") {
                    winText = winText + "*" + btnval;
                    return winText;

                }
                winText += btnval;
                return winText;
            }

            else {
                return winText;
            }
        }

        else {
            winText += btnval;
            return winText;
        }

    } else if (winText[winText.length - 2] == "^") {
        winText = winText + "*" + btnval;
        return winText;

    }

    else {
        winText += btnval;
        console.log(winText)
        return winText;
    }

}
function clrno(winText) {



    if (winText[winText.length - 2] == "^") {
        winText = winText.substring(0, winText.length - 2);
        return winText;

    } else if (winText == "Syntax Error") {
        winText = "";
        document.getElementById('equal').innerHTML = "=";
        document.getElementById('equal').style.backgroundColor = "darkcyan";
        return winText;

    }
    else {
        winText = winText.toString();
        winText = winText.substring(0, winText.length - 1);
        if (winText == "") {

            document.getElementById('equal').innerHTML = "=";
            document.getElementById('equal').style.backgroundColor = "darkcyan";

        }
        return winText;
    }

}

function addsubmuldev(i, j, final, winText, y) {
    let ad2 = "";



    for (let r = i + 1; r <= winText.length; r++) {



        let d = winText[r];
        if (["+", "-", "*", "/", "^"].includes(winText[r])) {

            if (y == "+") {
                j = ((10 * j) + (10 * ad2)) / 10;
                final = j;
                i = i + 1;
                return final;

            } else if (y == "-") {

                j = ((10 * j) - (10 * ad2)) / 10;
                final = j;
                i = i + 1;
                return final;
            } else if (y == "*") {

                j = ((10 * j) * (10 * ad2)) / 100;
                final = j;
                i = i + 1;
                return final;
            } else if (y == "/") {

                j = (10 * j) / (10 * ad2);
                final = j;
                i = i + 1;
                return final;
            }


        }
        if (winText[winText.length - 3] != "^") {
            ad2 += d;
        }

        if (r == winText.length - 1) {

            if (y == "+") {
                j = ((10 * j) + (10 * ad2)) / 10;
                final = j;
                return final;

            } else if (y == "-") {

                j = ((10 * j) - (10 * ad2)) / 10;
                final = j;
                return final;
            } else if (y == "*") {

                j = ((10 * j) * (10 * ad2)) / 100;
                final = j;
                return final;
            } else if (y == "/") {

                j = (10 * j) / (10 * ad2);
                final = j;
                return final;
            }


        }


    }
}

function calc(winText) {
    let j = ""
    let final = ""

    for (let i = 0; i < winText.length; i++) {

        let a = winText.length

        if (["+", "-", "*", "/", "^"].includes(winText[0]) || ["+", "-", "*", "/", "^"].includes(winText[a - 1])) {
            winText = ""
            return winText;
        }

        let y = winText[i];

        if (y == "+") {
            final = addsubmuldev(i, j, final, winText, y);

        } else if (y == "-") {

            final = addsubmuldev(i, j, final, winText, y);

        } else if (y == "*") {

            final = addsubmuldev(i, j, final, winText, y);

        } else if (y == "/") {

            final = addsubmuldev(i, j, final, winText, y);

        } else if (y == "^") {

            if (winText[i + 1] == "2") {
                final = ((10 * j) * (j * 10)) / 100;
                i = i + 1;

            } else if (winText[i + 1] == "3") {
                final = ((10 * j) * (10 * j) * (10 * j)) / 1000;
                i = i + 1;
            }

        }

        if (final == "") {

            j += y;

        } else {
            j = final;
        }








    }

    return winText = final;





}

num1.addEventListener('click', () => {
    if (onoff == 1) {
        wincont = adno(wincont, "1");
        document.getElementById('inpWindow').innerHTML = wincont;
        document.getElementById('equal').innerHTML = "=";
        document.getElementById('equal').style.backgroundColor = "darkcyan";

    } else {
        alert("Please switch on the Calculator by cicking the ON button");
    }

})
num2.addEventListener('click', () => {
    if (onoff == 1) {
        wincont = adno(wincont, "2");
        document.getElementById('inpWindow').innerHTML = wincont;
        document.getElementById('equal').innerHTML = "=";
        document.getElementById('equal').style.backgroundColor = "darkcyan";

    } else {
        alert("Please switch on the Calculator by cicking the ON button");
    }
})


num3.addEventListener('click', () => {
    if (onoff == 1) {
        wincont = adno(wincont, "3");
        document.getElementById('inpWindow').innerHTML = wincont;
        document.getElementById('equal').innerHTML = "=";
        document.getElementById('equal').style.backgroundColor = "darkcyan";

    } else {
        alert("Please switch on the Calculator by cicking the ON button");
    }
})

num4.addEventListener('click', () => {
    if (onoff == 1) {
        wincont = adno(wincont, "4");
        document.getElementById('inpWindow').innerHTML = wincont;
        document.getElementById('equal').innerHTML = "=";
        document.getElementById('equal').style.backgroundColor = "darkcyan";

    } else {
        alert("Please switch on the Calculator by cicking the ON button");
    }
})
num5.addEventListener('click', () => {
    if (onoff == 1) {
        wincont = adno(wincont, "5");
        document.getElementById('inpWindow').innerHTML = wincont;
        document.getElementById('equal').innerHTML = "=";
        document.getElementById('equal').style.backgroundColor = "darkcyan";

    } else {
        alert("Please switch on the Calculator by cicking the ON button");
    }
})
num6.addEventListener('click', () => {
    if (onoff == 1) {
        wincont = adno(wincont, "6");
        document.getElementById('inpWindow').innerHTML = wincont;
        document.getElementById('equal').innerHTML = "=";
        document.getElementById('equal').style.backgroundColor = "darkcyan";

    } else {
        alert("Please switch on the Calculator by cicking the ON button");
    }
})
num7.addEventListener('click', () => {
    if (onoff == 1) {
        wincont = adno(wincont, "7");
        document.getElementById('inpWindow').innerHTML = wincont;
        document.getElementById('equal').innerHTML = "=";
        document.getElementById('equal').style.backgroundColor = "darkcyan";

    } else {
        alert("Please switch on the Calculator by cicking the ON button");
    }
})
num8.addEventListener('click', () => {
    if (onoff == 1) {
        wincont = adno(wincont, "8");
        document.getElementById('inpWindow').innerHTML = wincont;
        document.getElementById('equal').innerHTML = "=";
        document.getElementById('equal').style.backgroundColor = "darkcyan";

    } else {
        alert("Please switch on the Calculator by cicking the ON button");
    }
})
num9.addEventListener('click', () => {
    if (onoff == 1) {
        wincont = adno(wincont, "9");
        document.getElementById('inpWindow').innerHTML = wincont;
        document.getElementById('equal').innerHTML = "=";
        document.getElementById('equal').style.backgroundColor = "darkcyan";

    } else {
        alert("Please switch on the Calculator by cicking the ON button");
    }
})
num0.addEventListener('click', () => {
    if (onoff == 1) {
        wincont = adno(wincont, "0");
        document.getElementById('inpWindow').innerHTML = wincont;
        document.getElementById('equal').innerHTML = "=";
        document.getElementById('equal').style.backgroundColor = "darkcyan";

    } else {
        alert("Please switch on the Calculator by cicking the ON button");
    }
})
numdot.addEventListener('click', () => {
    if (onoff == 1) {
        wincont = adno(wincont, ".");
        document.getElementById('inpWindow').innerHTML = wincont;
        document.getElementById('equal').innerHTML = "=";
        document.getElementById('equal').style.backgroundColor = "darkcyan";

    } else {
        alert("Please switch on the Calculator by cicking the ON button");
    }
})
off.addEventListener('click', () => {
    if (onoff == 1) {

        document.getElementById('off').innerHTML = "ON";
        document.getElementById('off').style.backgroundColor = "rgb(162, 19, 6)";
        document.getElementById('inpWindow').innerHTML = wincont = "";
        document.getElementById('eqwindow').innerHTML = "";
        document.getElementById('equal').innerHTML = "=";
        document.getElementById('equal').style.backgroundColor = "darkcyan";
        onoff = 0;


    } else {
        document.getElementById('off').innerHTML = "OFF";
        document.getElementById('off').style.backgroundColor = "green";
        onoff = 1;
    }



})
plus.addEventListener('click', () => {
    if (onoff == 1) {
        wincont = adno(wincont, "+");
        document.getElementById('inpWindow').innerHTML = wincont;
        document.getElementById('equal').innerHTML = "=";
        document.getElementById('equal').style.backgroundColor = "darkcyan";

    } else {
        alert("Please switch on the Calculator by cicking the ON button");
    }
})

minus.addEventListener('click', () => {
    if (onoff == 1) {
        wincont = adno(wincont, "-");
        document.getElementById('inpWindow').innerHTML = wincont;
        document.getElementById('equal').innerHTML = "=";
        document.getElementById('equal').style.backgroundColor = "darkcyan";

    } else {
        alert("Please switch on the Calculator by cicking the ON button");
    }
})
mult.addEventListener('click', () => {
    if (onoff == 1) {
        wincont = adno(wincont, "*");
        document.getElementById('inpWindow').innerHTML = wincont;
        document.getElementById('equal').innerHTML = "=";
        document.getElementById('equal').style.backgroundColor = "darkcyan";

    } else {
        alert("Please switch on the Calculator by cicking the ON button");
    }
})
divise.addEventListener('click', () => {
    if (onoff == 1) {
        wincont = adno(wincont, "/");
        document.getElementById('inpWindow').innerHTML = wincont;
        document.getElementById('equal').innerHTML = "=";
        document.getElementById('equal').style.backgroundColor = "darkcyan";

    } else {
        alert("Please switch on the Calculator by cicking the ON button");
    }
})
squered.addEventListener('click', () => {
    if (onoff == 1) {
        wincont = adno(wincont, "^2");
        document.getElementById('inpWindow').innerHTML = wincont;
        document.getElementById('equal').innerHTML = "=";
        document.getElementById('equal').style.backgroundColor = "darkcyan";

    } else {
        alert("Please switch on the Calculator by cicking the ON button");
    }
})
cubed.addEventListener('click', () => {
    if (onoff == 1) {
        wincont = adno(wincont, "^3");
        document.getElementById('inpWindow').innerHTML = wincont;
        document.getElementById('equal').innerHTML = "=";
        document.getElementById('equal').style.backgroundColor = "darkcyan";

    } else {
        alert("Please switch on the Calculator by cicking the ON button");
    }
})
let count = 0;
equal.addEventListener('click', () => {

    if (onoff == 1) {
        let equcont = wincont + " =";
        wincont = calc(wincont);

        if (isNaN(wincont)) {
            wincont = "Syntax Error";
            equcont = ""
        }
        if (wincont == ""){
            equcont = "";
        }

        document.getElementById('inpWindow').innerHTML = wincont;
        document.getElementById('eqwindow').style.color = "grey";
        document.getElementById('eqwindow').innerHTML = equcont;

        


        if (wincont != "") {

            document.getElementById('equal').innerHTML = "AC";
            document.getElementById('equal').style.backgroundColor = "grey";
            count = 1;

        } else if (count == 1) {
            document.getElementById('equal').innerHTML = "=";
            document.getElementById('equal').style.backgroundColor = "darkcyan";
            document.getElementById('eqwindow').style.color = "grey";
            document.getElementById('eqwindow').style.height = "1px";
            equcont ="";
            document.getElementById('eqwindow').innerHTML = equcont;

        }

    } else {
        alert("Please switch on the Calculator by cicking the ON button");
    }


})
clear.addEventListener('click', () => {
    if (onoff == 1) {
        wincont = clrno(wincont);
        document.getElementById('inpWindow').innerHTML = wincont;
        document.getElementById('eqwindow').innerHTML = "";

    } else {
        alert("Please switch on the Calculator by cicking the ON button");
    }
})