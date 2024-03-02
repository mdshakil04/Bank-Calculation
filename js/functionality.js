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
 // -----------------Withdrawal functionality ----------------
 document.getElementById('btn-withdraw').addEventListener('click', function(){
    // console.log('Withdraw button clicked')
    const widthdrawField = document.getElementById('withdraw-field');
    // console.log(widthdrawField)
    const withdrawFieldValueString = widthdrawField.value;
    // console.log(withdrawFieldValueString)
    const withdrawFieldValue = parseFloat(withdrawFieldValueString);
    const withdrawElement = document.getElementById('withdraw-total');
    // console.log(withdrawElement)
    const withdrawElementString = withdrawElement.innerText;
    // console.log(withdrawElementString)
    const withdrawAmount = parseFloat(withdrawElementString);
    const totalWithdraw = withdrawFieldValue + withdrawAmount;
    console.log(totalWithdraw)
    withdrawElement.innerText = totalWithdraw;
    // totalWithdraw.innerText = '';
    // -------------total Calculations---------------------
    const totalBalanceElement = document.getElementById('total-balance');
    const totalBalanceString = totalBalanceElement.innerText;
    const totalBalance = parseFloat(totalBalanceString);
    const balanceAfterWithdraw = totalBalance - totalWithdraw;
    totalBalanceElement.innerText = balanceAfterWithdraw;
    
 })