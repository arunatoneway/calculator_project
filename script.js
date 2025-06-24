

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
const plus = document.getElementById('plus')
const minus = document.getElementById('minus')
const mult = document.getElementById('mult')
const divise = document.getElementById('divise')
const squered = document.getElementById('squered')
const cubed = document.getElementById('cubed')
const equal = document.getElementById('equal')
const clear = document.getElementById('clear')
let wincont = ""

console.log(num1)

function adno(winText, btnval) {
    winText += btnval;
    console.log(winText)
    return winText;
}
function clrno(winText) {
    winText = winText.slice(0, winText.length - 1);
    return winText;

}

function calc(winText) {
    let j = ""

    let ad2 = ""

    let final = ""




    for (let i = 0; i < winText.length; i++) {


        let a = winText.length
        if (["+", "-", "*", "/", "^"].includes(winText[0]) || ["+", "-", "*", "/", "^"].includes(winText[a - 1])) {
            winText = ""
            return winText;
        }

        let y = winText[i];
        if (y == "+") {

            for (let r = i + 1; r <= winText.length + 1; r++) {



                let d = winText[r];
                if (["+", "-", "*", "/", "^"].includes(winText[r]) || r == winText.length + 1) {

                    j = (1 * j) + (1 * ad2);
                    final = j;
                    break;

                }
                ad2 += d;


            }



        }



        j += y;


    }
    return winText = final;





}

num1.addEventListener('click', () => {
    wincont = adno(wincont, "1");
    document.getElementById('inpWindow').innerHTML = wincont;
})
num2.addEventListener('click', () => {
    wincont = adno(wincont, "2");
    document.getElementById('inpWindow').innerHTML = wincont;
})


num3.addEventListener('click', () => {
    wincont = adno(wincont, "3");
    document.getElementById('inpWindow').innerHTML = wincont;
})

num4.addEventListener('click', () => {
    wincont = adno(wincont, "4");
    document.getElementById('inpWindow').innerHTML = wincont;
})
num5.addEventListener('click', () => {
    wincont = adno(wincont, "5");
    document.getElementById('inpWindow').innerHTML = wincont;
})
num6.addEventListener('click', () => {
    wincont = adno(wincont, "6");
    document.getElementById('inpWindow').innerHTML = wincont;
})
num7.addEventListener('click', () => {
    wincont = adno(wincont, "7");
    document.getElementById('inpWindow').innerHTML = wincont;
})
num8.addEventListener('click', () => {
    wincont = adno(wincont, "8");
    document.getElementById('inpWindow').innerHTML = wincont;
})
num9.addEventListener('click', () => {
    wincont = adno(wincont, "9");
    document.getElementById('inpWindow').innerHTML = wincont;
})
num0.addEventListener('click', () => {
    wincont = adno(wincont, "0");
    document.getElementById('inpWindow').innerHTML = wincont;
})
plus.addEventListener('click', () => {
    wincont = adno(wincont, "+");
    document.getElementById('inpWindow').innerHTML = wincont;
})

minus.addEventListener('click', () => {
    wincont = adno(wincont, "-");
    document.getElementById('inpWindow').innerHTML = wincont;
})
mult.addEventListener('click', () => {
    wincont = adno(wincont, "*");
    document.getElementById('inpWindow').innerHTML = wincont;
})
divise.addEventListener('click', () => {
    wincont = adno(wincont, "/");
    document.getElementById('inpWindow').innerHTML = wincont;
})
squered.addEventListener('click', () => {
    wincont = adno(wincont, "^2");
    document.getElementById('inpWindow').innerHTML = wincont;
})
cubed.addEventListener('click', () => {
    wincont = adno(wincont, "^3");
    document.getElementById('inpWindow').innerHTML = wincont;
})
equal.addEventListener('click', () => {
    wincont = calc(wincont);
    document.getElementById('inpWindow').innerHTML = wincont;
})
clear.addEventListener('click', () => {
    wincont = clrno(wincont);
    document.getElementById('inpWindow').innerHTML = wincont;
})