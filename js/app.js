function calculateTip() {
    var bill = document.getElementById("bill").value;
    var percent = document.getElementById("percent").value;
    var tip = document.getElementById("tip").value;
    var billTotal = document.getElementById("billTotal").value;

    var total = bill * percent;
    var Total = parseFloat(bill) + parseFloat(total);
    document.getElementById("tip").innerHTML = total.toFixed(2);
    document.getElementById("billTotal").innerHTML = Total.toFixed(2);
}
document.getElementById("calculate").onclick = function () {
    calculateTip();
};