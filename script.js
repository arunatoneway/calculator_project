

const num1 = document.getElementById('no1')
const num2 = document.getElementById('no2')
let wincont =""

console.log(num1)

function adno(winText,btnval){
    winText += btnval;
    console.log(winText)
    return winText;

    

}

num1.addEventListener('click',() => {wincont = adno(wincont,"1");
    document.getElementById('inpWindow').innerHTML = wincont;
})
num2.addEventListener('click',() => {wincont = adno(wincont,"2");
    document.getElementById('inpWindow').innerHTML = wincont;
})



