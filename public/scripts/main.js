const nav = document.querySelector('nav');
if(getCurrentUser()) {
    nav.innerHTML = `
    <ul>
        <li><a href="profile.html">Home</a></li>
        <li><a href="#">Messages</a></li>
        <li><a href="editprofile.html">Edit Profile</a></li>
        <li><a id="logout">Logout</a></li>
    </ul>`;
} else {
    nav.innerHTML = `
    <ul>
        <li><a href="login.html">Login</a></li>
        <li><a href="register.html">Sign up</a></li>
        
    </ul>`;
}
// Fetch method implementation:
export async function fetchData(url = '', data = {}, methodType) {
    const response = await fetch(`http://localhost:3000${url}`, {
      method: methodType, // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: 'follow', // manual, *follow, error
      referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify(data) // body data type must match "Content-Type" header
    });
    if(response.ok) {
      return await response.json(); // parses JSON response into native JavaScript objects
    } else {
      throw await response.json();
    }
  }
  

  export function setCurrentUser(user) {
    localStorage.setItem('user', JSON.stringify(user));
  }
  
  export function removeCurrentUser() {
    localStorage.removeItem('user')
  }
  
  export function getCurrentUser() {
    return JSON.parse(localStorage.getItem('user'));
  }
  
  export const logoutBtn = document.getElementById("logout");
  if(logoutBtn) logoutBtn.addEventListener('click', logout)
  
  export function logout() {
    removeCurrentUser();
    window.location.href = "login.html";
  }

  //from index.s
  
class User {
  constructor(id, userFirstName, userLastName, pswd, birthday, email) {
      this.userId = id;
      this.userFirstName = userFirstName;
      this.userLastName = userLastName;
      this.userPassword=pswd;
      this.userBirthday = birthday;
      this.userEmail = email;
  }
  //get methods
  getUserId() {
      return this.userId;
  }
  getUserFirstName() {
      return this.userFirstName;
  }
  getUserLastName() {
      return this.userLastName;
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
  setUserFirstName(userFirstName){
      this.userFirstName = userFirstName;
  }
  setUserLastName(userLastName){
      this.userLastName = userLastName;
  }
  /*
  setUserPassword(pswd){
      if(this.validPassword(pswd)) {
          this.userPassword = pswd;
      }
      else {
          console.log("Password must have at least 1 uppercase letter, 1 symbol, 2 numbers and be at least 8 characters long.")
      }

  }
  */
 setUserPassword(pswd){
   this.userPassword=pswd;
 }

 setUserBirthday(birthday){
      this.userBirthday = birthday;
  }
  setUserEmail(email){
      this.userEmail = email;
  }
  /*
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
  }*/
}
class Profile {
  constructor (id,pic,name,age,trait1,trait2,trait3,trait4,trait5) {
    this.dogId = id;
    this.dogPicture = pic;
    this.dogName = name;
    this.dogAge = age;
    this.trait1 = trait1;
    this.trait2 = trait2;
    this.trait3 = trait3;
    this.trait4 = trait4;
    this.trait5 = trait5;
  }
  //get methods
  getDogId() {
    return this.dogId;
  }
  getDogPicture(){
    return this.dogPicture;
  }
  getDogName() {
    return this.dogName;
  }
  getDogAge() {
    return this.dogAge;
  }
  getTrait1() {
    return this.trait1;
  }
  getTrait2() {
    return this.trait2;
  }
  getTrait3() {
    return this.trait3;
  }
  getTrait4() {
    return this.trait4;
  }
  getTrait5() {
    return this.trait5;
  }
  //set methods
  setDogId(id) {
    this.dogId=id;
  }
  setDogPicture(pic){
    this.dogPicture=pic;
  }
  setDogName(name) {
    this.dogName=name;
  }
  setDogAge(age) {
    this.dogAge=age;
  }
  setTrait1(trait) {
    this.trait1=trait;
  }
  setTrait2(trait) {
    this.trait2=trait;
  }
  setTrait3(trait) {
    this.trait3=trait;
  }
  setTrait4(trait) {
    this.trait4=trait;
  }
  setTrait5(trait) {
    this.trait5=trait;
  }
}


const registerform = document.getElementById("register-form");
if (registerform) registerform.addEventListener('submit',registerUser);

function registerUser(e) {
  e.preventDefault();

  let first = document.getElementById("firstname").value;
  let last = document.getElementById("lastname").value;
  let bday = document.getElementById("birthday").value;
  let pass = document.getElementById("pswd").value;
  let email = document.getElementById("email").value;

  fetchData('/users/register', {userFirstName:first,userLastName:last,userBirthday:bday,password:pass,userEmail:email}, "POST")
  .then((data) => {
    if(!data.message) {
      setCurrentUser(data);
      window.location.href = "profile.html"
    }
  })
  .catch((error) => {
    const errText = error.message;
    document.querySelector("#register-form p.error").innerHTML = errText;
    document.getElementById("pswd").value="";
    console.log(`Error! ${errText}`)
  });
}

const loginform = document.getElementById("login-form");
if(loginform) loginform.addEventListener('submit', loginUser);

function loginUser(e) {
  e.preventDefault();

  let loginemail = document.getElementById("email").value;
  let loginpass = document.getElementById("pswd").value;
  fetchData('/users/login', {userEmail:loginemail,password:loginpass}, "POST")
  .then((data) => {
    if(!data.message) {
      setCurrentUser(data);
      window.location.href="profile.html";
    }
  })
  .catch((error) => {
    const errText = error.message;
    document.querySelector("#login-form p.error").innerHTML = errText;
    document.getElementById("pswd").value = "";
    console.log(`Error! ${errText}`)
  });
}

const picform = document.getElementById("pic-form");
if(picform) picform.addEventListener('submit', uploadpic);

function uploadpic(e){
  e.preventDefault();

  let pic = document.getElementById("profile-pic").value;

  fetchData('/profiles/uploadpic', {dogPicture:pic}, "POST" )
  .then((data => {
    if(!data.message) {
      setCurrentPic(data);
      
    }
  }))
}

const nameageform = document.getElementById("name-age-form");
if(nameageform) nameageform.addEventListener('submit',getnameage);

function getnameage(e){
  e.preventDefault();

  let dogname = document.getElementById("dog-name").value;
  let dogage = document.getElementById("dog-age").value;

}
/*
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
*/
let checks = document.querySelectorAll(".trait");
let max = 5;
for (let i =0; i<checks.length;i++)
  checks[i].onclick = selectiveCheck;
function selectiveCheck (event) {
  let checkedChecks = document.querySelectorAll(".trait:checked");
  if (checkedChecks.length > max)
    return false;
  let trait1=checkedCheck[0]
  let trait2=checkedCheck[1]
  let trait3=checkedCheck[2]
  let trait4=checkedCheck[3]
  let trait5=checkedCheck[4]
  
  }

//let usercount = 0;
//let user = new User(12345,first,last,pass,bday,email);
//console.log(user1);
//console.log(user1.getUserId());