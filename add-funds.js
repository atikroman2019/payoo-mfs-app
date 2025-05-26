document.getElementById('add-funds-button').addEventListener('click', function (event) {
   event.preventDefault()
   const inputFieldValue = getInputFieldValue('input-amount')
   const inputPin = getInputFieldValue('input-pin')
   if(isNaN(inputFieldValue)){
      alert('please input any number')
      return
   }
   if(inputFieldValue <= 0 ){
      alert('number must be greater than zero')
      return
   }

   if (inputPin === 1234) {
      alert('money added')
      const balance = getTextValue('balance')
      const currentBalance = inputFieldValue + balance
      document.getElementById('balance').innerText = currentBalance

      const p = document.createElement('p')
      p.innerText = `Added: ${inputFieldValue}, Current Balance is : ${currentBalance}`
      document.getElementById('transaction-history').appendChild(p)
   }
   else {
      alert('try again')
   }

})
document.getElementById('add-funds').addEventListener('click', function () {
   const addFundsForm = document.getElementById('add-money-form')
   addFundsForm.classList.remove('hidden')
   const withdrawForm = document.getElementById('cash-out-form')
   withdrawForm.classList.add('hidden')
   const addTransactionHistory = document.getElementById('transaction-history')
   addTransactionHistory.classList.add('hidden')
})