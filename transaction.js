
document.getElementById('transaction').addEventListener('click', function (event) {
    event.preventDefault()
    const addTransactionHistory = document.getElementById('transaction-history')
    addTransactionHistory.classList.remove('hidden')
    const withdrawForm = document.getElementById('cash-out-form')
    withdrawForm.classList.add('hidden')
    const addFundsForm = document.getElementById('add-money-form')
    addFundsForm.classList.add('hidden')

})