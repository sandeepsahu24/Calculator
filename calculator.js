function display(val) {
    document.getElementById("result").value += val;
}

function solve() {
    let x = document.getElementById("result").value
    let y = math.evaluate(x)
    document.getElementById("result").value = y
}

function allclear(){
    document.getElementById("result").value = '';
}