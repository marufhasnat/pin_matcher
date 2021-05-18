
function generateFourDigitPin(){
    let pin = Math.floor(1000 + Math.random() * 9000);
    return pin;
}

function showFourDigitPin(pin) {
    document.getElementById('showPin').value = pin;
}

function getFourDigitPin() {
    return document.getElementById('showPin').value;
}

function getTypedNumbers() {
    return document.getElementById('typePin').value;
}

function showTypedNumbers(output) {
    document.getElementById('typePin').value = output;
}

const generatePin = document.getElementById('generatePin');
generatePin.addEventListener('click', function(){
    let pin = generateFourDigitPin();
    showFourDigitPin(pin);
});


let showNumbers = document.getElementsByClassName('button');
for (let i = 0; i < showNumbers.length; i++) {
    const value = showNumbers[i];
    value.addEventListener('click', function () {
        if(this.id == 'clear'){
            showTypedNumbers('');
        }
        else if(this.id == 'backspace'){
            let output = getTypedNumbers().toString();
            if (output) {
                output = output.substr(0, output.length - 1);
                showTypedNumbers(output);
            }
        }
        else{
            let output = getTypedNumbers();
            output = output + this.id;
            showTypedNumbers(output);
        }
    });
}

let count = 3;
function tryLeft() {
    count--;
    return count;
}

const submitPin = document.getElementById('submitPin');
submitPin.addEventListener('click', function () {
    let pin = getFourDigitPin();
    let typedNum = getTypedNumbers();

    if (pin == '' || typedNum == '') {
        alert('Please Generate & Enter Pin Number');
    }
    else if (pin == typedNum) {
        document.getElementById('action-left').style.display = 'none';
        document.getElementById('notify-right').style.display = 'block';
        document.getElementById('notify-wrong').style.display = 'none';
    }
    else {
        let tryCount = tryLeft();
        if (tryCount != 0) {
            document.getElementById('try-number').innerText = tryCount;
            document.getElementById('notify-right').style.display = 'none';
            document.getElementById('notify-wrong').style.display = 'block';
        } else {
            document.getElementById('try-number').innerText = tryCount;
            document.getElementById("submitPin").disabled = true;
        }
    }
});


