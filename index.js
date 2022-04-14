class User {
    constructor(id, userName, pswd, birthday, email) {
        this.userId = id;
        this.userName = userName;
        this.setUserPassword(pswd);
        this.userBirthday = birthday;
        this.userEmail = email;
    }
    //get methods
    getUserId() {
        return this.userId;
    }
    getUserName() {
        return this.userName;
    }
    getUserPassword(){
        return this.userPassword;
    }
    getUserBirthday(){
        return this.userBirthday;
    }
    getUserEmail(){
        return this.userEmail;
    }
    //set methods
    setUserId(id){
        this.userId = id;
    }
    setUserName(userName){
        this.userName = userName;
    }
    setUserPassword(pswd){
        if(this.validPassword(pswd)) {
            this.userPassword = pswd;
        }
        else {
            console.log("Password must have at least 1 uppercase letter, 1 symbol, 2 numbers and be at least 8 characters long.")
        }

    }
    setUserBirthday(birthday){
        this.userBirthday = birthday;
    }
    setUserEmail(email){
        this.userEmail = email;
    }
    //valid password method
    validPassword(pswd){
        if (pswd.length >=8) {
            let upper = 0;
            let numbers = 0;
            let symbols = 0;

            for (let i = 0; i<pswd.length; i++){
                if (this.isDigit(pswd[i])) {
                    numbers++;
                } else if(!this.isLetterOrDigit(pswd[i])) {
                    symbols++;
                } else if (this.isUpperCase(pswd[i])) {
                    upper++;
                }
            }

            if(upper >= 1 && numbers >=2 && symbols >=1) {
                return true;
            }
        }
        return false;
    }

    //returns if character is a letter
    isUpperCase(char) {
        return (/[A-Z]/).test(char)
    }
    //returns if character is a digit
    isDigit(char) {
        return (/[0-9]/).test(char)
    }
    //returns if character is a letter or digit
    isLetterOrDigit(char){
        return ((/[a-zA-Z]/).test(char)||(/[0-9]/).test(char))
    }
}

let usercount = 0;
let user = new User(12345,`${first} ${last}`,pass,bday,email);
console.log(user1);
console.log(user1.getUserId());

const form1 = document.getElementById("register-form");
form1.addEventListener('submit',registerUser);

function registerUser(e) {
    e.preventDefault();

    first = document.getElementById("firstname").value;
    last = document.getElementById("lastname").value;
    bday = document.getElementById("birthday").value;
    pass = document.getElementById("pswd").value;
    email = document.getElementById("email").value;
}