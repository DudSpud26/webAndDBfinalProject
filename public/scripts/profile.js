import 
{ getCurrentUser, setCurrentUser, removeCurrentUser, logout, fetchData } 
from './main.js'


let user = getCurrentUser();

if(!user) window.location.href = "login.html";

let profile = document.getElementById("profile");
profile.innerHTML = `
<div id = profile-box>
        
<img id="profilepicture" src="${pic}" alt="Picture of a dog">
<h2>${dogname}</h2>
<h3>${dogage}</h3>

<section class="container">
    <!-- trait 1 -->
    <div class="trait">
     
      <p>
        Lazy
      </p>
    </div>
    <!-- trait 2 -->
    <div class="trait">
      
      <p>
        Mouthy
      </p>
    </div>
    <!-- trait 3 -->
    <div class="trait">
      
      <p>
        Stubborn
      </p>
    </div>
    <!-- trait 4 -->
    <div class="trait">
      
      <p>
        Friendly
      </p>
    </div>


</div>
`;

document.getElementById("edit").addEventListener('click', editProfile);
document.getElementById("delete").addEventListener('click', deleteAccount);



function editAccount(e) {
  e.preventDefault();

  let userName = document.getElementById("username").value;
  if(userName === user.username) {
    let err = "No changes made";
    document.querySelector("#editForm p.error").innerHTML = err;
  } else {
    fetchData('/users/edit', {userId: user.user_id, userName: userName}, "PUT")
    .then((data) => {
      if(!data.message) {
        removeCurrentUser();
        setCurrentUser(data);
        window.location.href = "profile.html"
      }
    })
 
    .catch((error) => {
       const errText = error.message;
       document.querySelector("#editForm p.error").innerHTML = errText;
       console.log(`Error! ${errText}`)
     });
  
  }
}

function deleteAccount() {
  if(confirm('Are you sure you want to delete your account???')) {
    fetchData('/users/delete', {userId: user.user_id}, "DELETE")
    .then((data) => {
      if(!data.message) {
        console.log(data.success)
        logout();
        window.location.href = "register.html"
      }
    })
    .catch((error) => {
      const errText = error.message;
      document.querySelector("#profile div p.error").innerHTML = errText;
      console.log(`Error! ${errText}`)
    })
  }
}