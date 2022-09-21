let elForm = document.querySelector(".form");
let elInputLogin = document.querySelector(".form__login");
let elInputPassword = document.querySelector(".form__password");


let login = "1234";
let password = "321";

elForm.addEventListener("submit", function (evt) {
    evt.preventDefault();

    let  formLogin = elInputLogin.value.trim();
    let  formPassword = elInputPassword.value.trim();


    fetch(`https://fast-ravine-16741.herokuapp.com/api/auth`,{

  method: "Post",
  headers:{
    "Content-Type":"application/json"
  },
  body:JSON.stringify(
    { 
    "email":formLogin,
    "password":formPassword
  }

  ),

})

.then(res => res.json())
.then(data => {
  if (!data.error) {
    localStorage.setItem("token", data.Authorization)
    console.log(data.Authorization)
    window.location.href = "/index.html"
      elInputLogin.value = null;
      elInputPassword.value = null;
      
  }else{
    alert(data.error)
  }
})



    // console.log(checkLogin(formLogin, formPassword));
    // if (checkLogin(formLogin, formPassword)) {
    //   localStorage.setItem("token", "ajoyib")
    //   window.location.href = "/index.html"
    // }
    // else{
    //   alert("error")
    // }


})


// function checkLogin(loginValue, passwordValue) {
   
//    if (loginValue == login && passwordValue == password) {
      
//       return true

//    }
//    else{
//         return false
//    }

// }

// console.log(checkLogin("1234", "321"));


// "email":"example@gmail.com",
// "password":"12345"