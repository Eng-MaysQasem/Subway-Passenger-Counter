let CountElm = document.getElementById('counter');
let SaveElm = document.getElementById('save-el');
let counter = 0;

function CalculatePassenger() {
    counter += 1;
    CountElm.innerText = counter;
}

function Save() {
    let countStr = counter + " - ";
    SaveElm.textContent += countStr;
    CountElm.innerText = 0;
    counter = 0;
}
