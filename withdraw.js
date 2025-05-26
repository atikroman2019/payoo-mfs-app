document.getElementById('withdrawal').addEventListener('click', function (event) {
    event.preventDefault()
    const withdrawAmount = getInputFieldValue('cash-out-amount')
    const withdrawPin = getInputFieldValue('cash-out-pin')
    console.log(withdrawAmount, withdrawPin)
    const balance = getTextValue('balance')

    if (withdrawAmount <= 0) {
        alert('Amount must be greater then zero')
        return

    }

     if(isNaN(withdrawAmount)){
      alert('please input any number')
      return
   }

   
  if (withdrawAmount > balance) {
            alert('Insufficient Balance')
            return 
        }

    if (withdrawPin === 1234) {
        alert('withdraw-success')
        const updatedBalance = balance - withdrawAmount
        document.getElementById('balance').innerText = updatedBalance

      

        const p = document.createElement('p')
        p.innerText = `Withdraw Amount: ${withdrawAmount}, Current Balance is : ${updatedBalance}`
        document.getElementById('transaction-history').appendChild(p)

    }
    else {
        alert('try later')
    }
})





document.getElementById('withdraw').addEventListener('click', function () {
    const withdrawForm = document.getElementById('cash-out-form')
    withdrawForm.classList.remove('hidden')
    const addFundsForm = document.getElementById('add-money-form')
    addFundsForm.classList.add('hidden')
    const addTransactionHistory = document.getElementById('transaction-history')
    addTransactionHistory.classList.add('hidden')
})


