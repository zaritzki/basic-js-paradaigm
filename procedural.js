const frmSignUp = document.getElementById('frmSignUp');

function signUpHandler(e) {
    e.preventDefault();

    const usernameInput = document.getElementById('username').value;
    const passwordInput = document.getElementById('password').value;
    
    if ( usernameInput.trim().length === 0 ) {
        alert('Username must not be empty!');
        return;
    }

    if ( passwordInput.trim().length <= 5 ) {
        alert('Password must be atleast six characters or longer!');
        return;
    }

    const user = {
        username: usernameInput,
        password: passwordInput
    };
 
    console.log(user);
    console.log('Hi, I am ' + user.username);
}

frmSignUp.addEventListener('submit', signUpHandler);