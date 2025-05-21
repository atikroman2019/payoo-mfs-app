document.getElementById('btn-login').addEventListener('click', function(event){
    event.preventDefault();
    // console.log('clicked')
    const email =  document.getElementById('email').value
    const password = document.getElementById('password').value
    // console.log(email,password)

    if (email === 'atikroman2016@gmail.com' && password === '123456'){
        alert ('login-success')
        window.location.href = '/home.html'
    }
    else{
        alert('email or password did not matched')
    }
})