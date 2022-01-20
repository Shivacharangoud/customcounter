let fromE = document.getElementById("fromUserInput");
let toE = document.getElementById("toUserInput");
let paraE = document.getElementById("counterText");
let buttonE = document.getElementById("startBtn");

function start() {



    let fromV = fromE.value;
    let toV = toE.value;
    paraE.textContent = fromV;

    if (fromV === "") {
        alert("Enter the from value");
    } else if (toV === "") {
        alert("Enter to value");
    } else {
        let counter = parseInt(fromV);
        let intervalId = setInterval(function() {
            paraE.textContent = counter;
            if (counter === parseInt(toV)) {
                clearInterval(intervalId)
            }
            counter = counter + 1;

        }, 2000);
    }

}

buttonE.addEventListener("click", start);