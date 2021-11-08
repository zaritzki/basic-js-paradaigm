const REQUIRED = 'REQUIRED';
const MIN_LENGTH = 'MIN_LENGTH';

const getUserInput = (txtElmId) => {
    // could add a check here if its input field.
    // just assume true here
    return document.getElementById(txtElmId).value;
}

const validate = (value, flag, validatorVal) => {
    if (flag === REQUIRED) {
        return value.trim().length > 0;
    }
    if (flag === MIN_LENGTH) {
        return value.trim().length > validatorVal;
    }
}

const createUser = (usernameVal, passwordVal) => {
    if( !validate(usernameVal, REQUIRED) || !validate(passwordVal, MIN_LENGTH, 5) ) {
        throw new Error('Invalid input or password is wrong (password should be atleast six characters.');
    }

    // if error not thrown - return new object
    return {
        username: usernameVal,
        password: passwordVal,
    };
}

const greetUser = (user) => {
    console.log('Hi, I am ' + user.username);
}

const signUpHandler = (e) => {
    e.preventDefault();

    const usernameVal = getUserInput('username');
    const passwordVal = getUserInput('password');

    try {
        const newUser = createUser(usernameVal, passwordVal);
        console.log(newUser);
        greetUser(newUser);
    } catch(err) {
        alert(err.message);
    }
}

const connectForm = (frmId, frmSubmithandler) => {
    const frmSignUp = document.getElementById(frmId);
    frmSignUp.addEventListener('submit', frmSubmithandler);
}

connectForm('frmSignUp', signUpHandler);