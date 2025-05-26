// // step-1: add eventlistener to the add funds button

// const addFundsButton = document.getElementById('add-funds-button').addEventListener('click', function (event) {
//     event.preventDefault();
//     // step-2: get the data from amount & pin input field
//     const inputAmount = document.getElementById('input-amount').value
//     const inputAmountNumber = parseFloat(inputAmount);
//     const inputPin = document.getElementById('input-pin').value
//     // step-3: validate pin number

//     if (inputPin === '1234') {
//         alert('money added')
//         // step-4: get the balance

//         const balance = document.getElementById('balance').innerText
//         const balanceNumber = parseFloat(balance)


//         // step-5: add-money from input amount into the balance


        
//         const updatedAmount = balanceNumber + inputAmountNumber
//         document.getElementById('balance').innerText = updatedAmount



//     }
//     else {
//         alert('wrong pin number')
//     }




// })
// const withdrawFunds = document.getElementById('withdrawal').addEventListener('click', function (event) {
//     event.preventDefault();
    
//     const cashOutAmount = document.getElementById('cash-out-amount').value
//     // console.log(cashOutAmount)
//     const cashOutAmountNumber = parseFloat(cashOutAmount)
//     const cashOutPin = document.getElementById('cash-out-pin').value
//     // console.log(cashOutPin)

//   if (cashOutPin === '1234') {
//         alert('success')

//         const balance = document.getElementById('balance').innerText
//         // console.log(balance)
//         const balanceNumber = parseFloat(balance)
//         // console.log(typeof balanceNumber)
//         const newBalance = balanceNumber - cashOutAmountNumber
//         // console.log(newBalance)
//         document.getElementById('balance').innerText = newBalance
//   }
//   else{
//     alert('error')
//   }


   
// })
// const addFunds = document.getElementById('add-funds').addEventListener('click',function(){
//     const addMoneyForm = document.getElementById('add-money-form')
//     addMoneyForm.classList.remove('hidden')
//     const cashOutForm = document.getElementById('cash-out-form')
//     cashOutForm.classList.add('hidden')
// })
// const withdraw = document.getElementById('withdraw').addEventListener('click',function(){
//     const cashOutForm = document.getElementById('cash-out-form')
//     cashOutForm.classList.remove('hidden')
//     const addMoneyForm = document.getElementById('add-money-form')
//     addMoneyForm.classList.add('hidden')
// })

