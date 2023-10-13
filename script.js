function roundResult(value) {
    return Math.round(value * 100000000) / 100000000;
}

function calculate() {
    let result = eval(display.value);
    display.value = roundResult(result);
}
