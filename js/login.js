console.log("Welcome to the server")
document.getElementById('btn-submit').addEventListener('click', function(){
    // console.log('Button Clicked')
    const emailField = document.getElementById('email-field');
    const email = emailField.value;
    // console.log(email)
    const passwordField = document.getElementById('password-field');
    const password = passwordField.value;
    // console.log(email, password)
    if(email === 'shakil@gmail.com' && password === '12345'){
        window.location.href = '/main.html';
    }else{
        alert('Invalid credentials');
    }

})