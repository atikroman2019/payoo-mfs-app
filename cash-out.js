document.getElementById('cash-out').addEventListener('click',function(event){
    event.preventDefault();
    const cashOut = inputValue('input-number')
    const balanceNumber = getTextValue('balance')
    const currentBalance = balanceNumber - cashOut
    document.getElementById('balance').innerText = currentBalance

})