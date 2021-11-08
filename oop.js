class Validator {
    static REQUIRED = 'REQUIRED';
    static MIN_LENGTH = 'MIN_LENGTH';

    static validate(value, flag, validatorValue) {
        if (flag === this.REQUIRED) {
            return value.trim().length > 0;
        }
        if (flag === this.MIN_LENGTH) {
            return value.trim().length > validatorValue;
        }
    }
}

class User {
    constructor(uName, uPassword){
        this.username = uName;
        this.password = uPassword;
    }

    greet() {
        console.log('Hi, I am' + this.username);
    }
}

class UserInputForm { 
    constructor() {
        this.frmSignUp = document.getElementById('frmSignUp');
        this.usernameInput = document.getElementById('username');
        this.passwordInput = document.getElementById('password');

        this.frmSignUp.addEventListener('submit', this.signUpHandler.bind(this));
    }

    signUpHandler(e) {
        e.preventDefault();

        const usernameVal = this.usernameInput.value;
        const passwordVal = this.passwordInput.value;

        if ( 
            !Validator.validate(usernameVal, Validator.REQUIRED) || 
            !Validator.validate(passwordVal, Validator.MIN_LENGTH, 5)
        ){
            alert('Invalid input or password is wrong (password should be atleast six characters.');
            return;
        }

        const newUser = new User(usernameVal, passwordVal);
        console.log(newUser);
        newUser.greet();
    }
}


// create new Intance
new UserInputForm();