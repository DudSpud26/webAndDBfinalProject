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

const registerform= document.getElementById("register-form");
if (registerform) registerform.addEventListener('submit',registerUser);

function registerUser(e) {
    e.preventDefault();

    let first = document.getElementById("firstname").value;
    let last = document.getElementById("lastname").value;
    let bday = document.getElementById("birthday").value;
    let pass = document.getElementById("pswd").value;
    let email = document.getElementById("email").value;
}

const loginform = document.getElementById("login-form");
if(loginform) loginform.addEventListener('submit', loginUser);

function loginUser(e) {
    e.preventDefault();

    let loginemail = document.getElementById("email").value;
    let loginpass = document.getElementById("pswd").value;
}

const picform = document.getElementById("pic-form");
if(picform) picform.addEventListener('submit', uploadpic);

function uploadpic(e){
    e.preventDefault();

    let pic = document.getElementById("profile-pic").value;

}

const nameageform = document.getElementById("name-age-form");
if(nameageform) nameageform.addEventListener('submit',getnameage);

function getnameage(e){
    e.preventDefault();

    let dogname = document.getElementById("dog-age").value;
    let dogage = document.getElementById("dog-age").value;

}

const personalityform = document.getElementById("personality-form");
if(personalityform) personalityform.addEventListener('submit', gettraits);

function gettraits(e){
    e.preventDefault();

    let trait1 = document.getElementById("trait1").value;
    let trait2 = document.getElementById("trait2").value;
    let trait3 = document.getElementById("trait3").value;
    let trait4 = document.getElementById("trait4").value;
    let trait5 = document.getElementById("trait5").value;
    let trait6 = document.getElementById("trait6").value;
    let trait7 = document.getElementById("trait7").value;
    let trait8 = document.getElementById("trait8").value;
    let trait9 = document.getElementById("trait9").value;
    let trait10 = document.getElementById("trait10").value;
    let trait11 = document.getElementById("trait11").value;
    let trait12 = document.getElementById("trait12").value;


}