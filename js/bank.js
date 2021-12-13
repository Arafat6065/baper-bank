// document.getElementById('login-submit').addEventListener('click', function () {
//     let emailFild = document.getElementById('user-email')
//     let userEmail = emailFild.value;
//     console.log(userEmail)

//     // get password
//     let passwordFild = document.getElementById('user-password');
//     let userPassword = passwordFild.value;



//     if (userEmail == 'sontan@bap.com' && userPassword == 'secret') {
//         console.log('valid user')
//         window.location.href = "banking.html"
//     }
// })


document.getElementById('login-submit').addEventListener('click', function () {
    let emailFild = document.getElementById('user-email');
    let userEmail = emailFild.value;

    let passwordFild = document.getElementById('user-password');
    let userPassword = passwordFild.value;

    if (userEmail == 'sontan@bap.com' && userPassword == 'secret') {
        console.log('valid user')
        window.location.href = "banking.html"
    }
})

