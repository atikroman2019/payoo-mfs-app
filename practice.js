document.getElementById('add-money')
.addEventListener('click', function(event){
    event.preventDefault();
    const inputNumber = inputValue('input-number')
    const inputPassword = inputValue('password')
    // console.log('Number :', inputNumber, 'password : ',inputPassword )
    if (inputPassword === 1234){
        alert('add money-success')
        const balanceNumber = getTextValue('balance')
        // console.log(balanceNumber)
        const currentBalance = inputNumber + balanceNumber
        // console.log(currentBalance)
        document.getElementById('balance').innerText = currentBalance
    }
    else{
        alert('phone or password did not matched' )
    }
})