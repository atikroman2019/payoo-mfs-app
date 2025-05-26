function getInputFieldValue (id){
    const inputField = document.getElementById(id).value
    const inputNumber = parseFloat(inputField)
    return inputNumber
}

function getTextValue (id) {
    const textValue = document.getElementById(id).innerText
    const textNumber = parseFloat(textValue)
    return textNumber
}