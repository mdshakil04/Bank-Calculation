document.getElementById("btn-deposit").addEventListener("click", function(){
    // console.log('btn clicked')
    const depositField = document.getElementById("deposit-field");
    const depositAmountString = depositField.value;
    const depositAmount = parseFloat(depositAmountString)
    // console.log(deposit)
    const depositElement = document.getElementById('deposit-element');
    const previousDepositString = depositElement.innerText;
    const previousDeposit = parseFloat(previousDepositString);

    const totalDeposit = previousDeposit + depositAmount;
    depositElement.innerText = totalDeposit;
// ------------------------------------------------------------
    const totalBalanceElement = document.getElementById('total-balance');
    const totalBalanceString = totalBalanceElement.innerText;
    const totalBalance = parseFloat(totalBalanceString);
    const newBalance = totalBalance + depositAmount;
    totalBalanceElement.innerText = newBalance;

    depositField.value = '';
})