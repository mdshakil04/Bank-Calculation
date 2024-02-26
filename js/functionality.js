document.getElementById("btn-deposit").addEventListener("click", function(){
    // console.log('btn clicked')
    const depositField = document.getElementById("deposit-field");
    const depositAmount = depositField.value;
    // console.log(deposit)
    const depositElement = document.getElementById('deposit-element');
    depositElement.innerText = depositAmount;
})