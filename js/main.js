let memoryNumber = 0;
let countNumber = 0;
let check = true;
let isPointOn = true;
let isNegative = false;
let ressultFlag = true;
let flag = '';
let dubBtn = document.getElementById('dub');
let display = document.getElementById('talo');
let plusBtn = document.getElementById('plusBtn');
let minusBtn = document.getElementById('minusBtn');
let divideBtn = document.getElementById('divideBtn');
let multiplyBtn = document.getElementById('multiplyBtn');
let clearBtn = document.getElementById('del');
let ressultBtn = document.getElementById('equally');
let allBtns = document.querySelectorAll('.btn,.bigbuttonend_n');


for (let i = 0; i < allBtns.length; i++) {
    let btn = allBtns[i];
    btn.addEventListener('click', function (e) {
        clickNumber(e.target.textContent);
        console.log(e.target.textContent);
    });

}
let clickNumber = num => {
    if (check) {
        display.value = num;
        check = false;
    } else {
        display.value += num;
        displayCut(display.value);
    }
}

dubBtn.addEventListener('click', function (e) {
    for (let i = 0; i < display.value.length; i++) {
        if (display.value[i] === '.') {
            return;
        }
    }
    display.value += '.';
    check = false;
});
plusBtn.addEventListener('click', function () {
    lastOperation();
    memoryNumber = +display.value;
    flag = '+';
    check = true;
    isNegative = false;
    ressultFlag = true;
    console.log("+");
});
minusBtn.addEventListener('click', function () {
    lastOperation();
    memoryNumber = +display.value;
    flag = '-';
    check = true;
    ressultFlag = true;
    console.log("-");
});
divideBtn.addEventListener('click', function () {
    lastOperation();
    if (memoryNumber === 0 && display.value === '0') {

        display.value = '0';
    }
    if (isNaN(display.value) || isNaN(memoryNumber)) {

        display.value = '0';
    }
    memoryNumber = +display.value;
    flag = '/';
    check = true;
    ressultFlag = true;
    console.log("/");
});
multiplyBtn.addEventListener('click', function () {
    lastOperation();
    memoryNumber = +display.value;
    flag = '*';
    check = true;
    ressultFlag = true;
    console.log("*");
});
clearBtn.addEventListener('click', function () {
    display.value = 0;
    memoryNumber = 0;
    flag = '';
    check = true;
    ressultFlag = true;
    console.log("Clear");
})

function Summ(a, b) {
    if(typeof a !== 'number' || typeof b !== 'number'){
        return 'не число';
    }
    else{
        a += b;
        let d = String(a);
        a = cutDisplay(d);
        a = parseFloat(a);
        return a;
    }

}

function minus(a, b) {
    if(typeof a !== 'number' || typeof b !== 'number'){
        return 'не число';
    }
    else{
        a -= b;
        let d = String(a);
        a = cutDisplay(d);
        a = parseFloat(a);
        return a;
    }
}

function divide(a, b) {
    if(typeof a !== 'number' || typeof b !== 'number'){
        return 'не число';
    }
    else if (b === 0){
        return 0;
    }
    else{
        a /= b;
        let d = String(a);
        a = cutDisplay(d);
        a = parseFloat(a);
        return a;
    }
    
}

function multiply(a, b) {
    if(typeof a !== 'number' || typeof b !== 'number'){
        return 'не число';
    }
    else if (b === 0){
        return 0;
    }
    else{
        a *= b;
        let d = String(a);
        a = cutDisplay(d);
        a = parseFloat(a);
        return a;
    }
}

ressultBtn.addEventListener('click', function () {
    if (ressultFlag) {
        countNumber = +display.value;
    }
    switch (flag) {
        case '+':
            memoryNumber = Summ(memoryNumber, countNumber);
            check = true;
            isPointOn = true;
            ressultFlag = false;
            break;
        case '-':
            memoryNumber = minus(memoryNumber, countNumber);
            check = true;
            isPointOn = true;
            ressultFlag = false;
            break;
        case '/':
            if (countNumber === 0) {
                memoryNumber = 0;
                display.value = countNumber;
            } else if (countNumber === '0') {
                memoryNumber = 0;
                display.value = countNumber;
            } else {
                memoryNumber = divide(memoryNumber, countNumber);
            }

            check = true;
            isPointOn = true;
            ressultFlag = false;
            break;
        case '*':
            memoryNumber = multiply(memoryNumber, countNumber);
            check = true;
            isPointOn = true;
            ressultFlag = false;
            break;
    }
    display.value = memoryNumber;
    displayCut(display.value);
    memoryNumber = 0;
    countNumber = 0;
});

function cutDisplay(a) {
    if (a.length > 9) {
        a = a.slice(0, 9);
    }
    return a;
}
function displayCut(a){
    display.value = cutDisplay(a)
}

function lastOperation() {
    switch (flag) {
        case '+' :
            if (check) {
                memoryNumber = display.value;
            } else {
                memoryNumber += +display.value;
            }
            display.value = memoryNumber;
            cutDisplay(display.value);
            break;
        case '-' :
            if (check) {
                memoryNumber = display.value;
            } else {
                memoryNumber -= +display.value;
            }
            display.value = memoryNumber;
            cutDisplay(display.value);
            break;
        case '/' :
            if (check) {
                memoryNumber = display.value;
            } else {
                memoryNumber /= +display.value;
            }
            display.value = memoryNumber;
            cutDisplay(display.value);
            break;
        case '*' :
            if (check) {
                memoryNumber = display.value;
            } else {
                memoryNumber *= +display.value;
            }
            display.value = memoryNumber;
            cutDisplay(display.value);
            break;
    }
}

