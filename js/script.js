// get html element to work with

// for navbar
const navToggler = document.querySelector('.toggle');
const navList = document.querySelector('.navlist');

// for form
const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const number = document.getElementById('number');
const gender = document.getElementById('gender');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('cpassword');
const passEncrypt = document.getElementsByClassName('fas fa-eye')[0]
const _passEncrypt = document.getElementsByClassName('two fas fa-eye')[0]
const submitBtn = document.querySelector('.submit-btn')
// show message
const usernameVal = document.querySelector('.usernameVal');
const emailVal = document.querySelector('.emailVal');
const numberVal = document.querySelector('.numberVal');
const genderVal = document.querySelector('.genderVal');
const passwordVal = document.querySelector('.passwordVal');
const confirmPasswordVal = document.querySelector('.cpasswordVal');

// toggle navbar
navToggler.addEventListener('click', toggleNav);

// function to toggle navbar
function toggleNav()
{
    navList.classList.toggle('show');
    if(navList.classList == 'navlist show'){
    navToggler.style.backgroundColor = '#3498db';
    }else{
        navToggler.style.backgroundColor = '#fff';
        navToggler.style.transition = '300ms ease-in';
    }
}


// Form validation
form.addEventListener('submit', validateForm);


// function to validate form
function validateForm(e){
    if(username.value == '' || username.value == null)
    {
        username.addEventListener('keyup', ()=>{
            usernameVal.innerHTML = 'Good <i class="fas fa-check-circle"></i>';
            if(username.value == ''){
                usernameVal.style.color = 'red';
                usernameVal.innerHTML = "Cannot be null";
                submitBtn.userSelect = 'none';
    
            }else{
                usernameVal.style.color = 'green';
            }
        })
        alert('please supply your username');
    }else if(email.value == '' || email.value == null)
    {
        email.addEventListener('keyup', ()=>{
            emailVal.innerHTML = 'Good <i class="fas fa-check-circle"></i>';
            if(email.value == ''){
                emailVal.style.color = 'red';
                emailVal.innerHTML = "Cannot be null";
                submitBtn.userSelect = 'none';
    
            }else{
                emailVal.style.color = 'green';
            }
        })
        alert('please supply your email address');
    }else if(number.value == '' || number.value == null)
    {
        number.addEventListener('keyup', ()=>{
            numberVal.innerHTML = 'Good <i class="fas fa-check-circle"></i>';
            if(number.value == ''){
                numberVal.style.color = 'red';
                numberVal.innerHTML = "Cannot be null";
                submitBtn.userSelect = 'none';
    
            }else{
                numberVal.style.color = 'green';
            }
        })
        alert('please supply your number address');
    }else if(password.value == '' || password.value == null)
    {
        password.addEventListener('keyup', ()=>{
            
            passwordVal.innerHTML = 'Good <i class="fas fa-check-circle"></i>';
            if(password.value == ''){
                passwordVal.style.color = 'red';
                passwordVal.innerHTML = "Cannot be null";
                submitBtn.userSelect = 'none';
    
            }else{
                emailVal.style.color = 'green';
            }
        })
        alert('please supply your Password');
    }else if(confirmPassword.value == '' || confirmPassword.value == null)
    {
        confirmPassword.addEventListener('keyup', ()=>{
            confirmPasswordVal.innerHTML = 'Good <i class="fas fa-check-circle"></i>';
            if(confirmPassword.value == ''){
                confirmPasswordVal.style.color = 'red';
                confirmPasswordVal.innerHTML = "Cannot be null";
                submitBtn.userSelect = 'none';
    
            }else{
                emailVal.style.color = 'green';
            }
        })
        alert('please supply your Password');
    }else{
        alert('Account created successfully')
    }

    e.preventDefault();
    
}

// show success message
// for username
email.addEventListener('keyup', ()=>{
    emailVal.innerHTML = 'Good <i class="fas fa-check-circle"></i>';
    if(email.value == ''){
        emailVal.style.color = 'red';
        emailVal.innerHTML = "Cannot be null";
    }else{
        emailVal.style.color = 'green';
    }
})

// decrypt password
passEncrypt.addEventListener('click', ()=>{
    if(password.type == 'password'){
    password.type = 'text';
    passEncrypt.classList = 'fas fa-eye-slash';
    }else if(password.type == 'text'){
        password.type = 'password';
        passEncrypt.classList = 'fas fa-eye';
    }
})

_passEncrypt.addEventListener('click', ()=>{
    if(confirmPassword.type == 'password'){
        confirmPassword.type = 'text';
    _passEncrypt.classList = 'two fas fa-eye-slash';
    }else if(confirmPassword.type == 'text'){
        confirmPassword.type = 'password';
        _passEncrypt.classList = 'two fas fa-eye';
    }
})




{/* <i class="fas fa-eye-slash decrypt"></i> */}