// generate random pin
document.getElementById('generate-btn').addEventListener('click', function() {
    const pin = Math.floor(Math.random() * (10000 - 1000)) + 1000;
    document.getElementById('generated-pin').value = pin;
})

function strPush(str, char) {
    str += char;
    return str;
}

function strPop(str) {
    str = str.split('');
    str.pop();
    str = str.join('');
    return str;
}

function getCurrentPin() {
    const inputPin = document.getElementById('input-pin');
    const currentPin = inputPin.value;
    return currentPin;
}

function setNewPin(pin) {
    const inputPin = document.getElementById('input-pin');
    inputPin.value = pin;
}

// event handler on calculator buttons
document.getElementById('calc-body').addEventListener('click', function(event) {
    const clickedBtn = event.target;
    if(clickedBtn.className == 'button') {
        const btnValue = clickedBtn.innerText;
        
        if(btnValue == '<') {
            const currentPin = getCurrentPin();
            const newPin = strPop(currentPin);
            setNewPin(newPin);
        }
        else if(btnValue == 'C') {
            setNewPin("");
        }
        else {
            const currentPin = getCurrentPin();
            const newPin = strPush(currentPin, btnValue);
            setNewPin(newPin);
        }
    }
})

// event handler on submit button
document.getElementById('submit').addEventListener('click', function() {
    const generatedPin = document.getElementById('generated-pin').value;;
    const inputPin = document.getElementById('input-pin').value;

    if(generatedPin === inputPin && generatedPin != "") {
        document.getElementById('pin-matched').style.display = "block";
        document.getElementById('pin-not-matched').style.display = "none";
    }
    if(generatedPin !== inputPin && generatedPin != "") {
        document.getElementById('pin-matched').style.display = "none";
        document.getElementById('pin-not-matched').style.display = "block";
    }
})