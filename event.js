function inputValue(id){
    const inputNumber = document.getElementById(id).value
    const phoneNumber = parseFloat (inputNumber)
    const inputPassword = document.getElementById(id).value
    const passwordNumber = parseFloat(inputPassword)
    return (phoneNumber,passwordNumber)
}

function getTextValue(id) {
    const balance = document.getElementById(id).innerText
    const balanceNumber = parseFloat(balance)
    return balanceNumber
    
}