document.getElementById('deposit-button').addEventListener('click', function () {
    const depositInput = document.getElementById('deposit-input');
    const depositAmount = depositInput.Value;

    // get current deposit
    const depositTotal = document.getElementById('deposit-total');
    const depositeTotalText = depositTotal.innerText;
    depositTotal.innerText = depositAmount;
    console.log(depositeTotalText);


})