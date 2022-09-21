let elForm = document.querySelector(".form");
let elInputEmail = document.querySelector(".user__email");
let elInputPassword = document.querySelector(".user__password");
let elInputName = document.querySelector(".user__name");
let elInputIsAdmin = document.querySelector(".user__isAdmin");


elForm.addEventListener("submit", function (evt) {
   evt.preventDefault();

   let inputEmail = elInputEmail.value.trim();
   let inputPassword = elInputPassword.value.trim();
   let inputName = elInputName.value.trim();
   let inputIsAdmin = elInputIsAdmin.value.trim();

   console.log(inputEmail);
   console.log(inputPassword);
   console.log(inputName);
   console.log(inputIsAdmin);


   fetch(`https://fast-ravine-16741.herokuapp.com/api/users`,{

      method: "Post",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify(
        { 
        "email":inputEmail,
        "password":inputPassword,
        "Name":inputName,
        "isAdmin":true
      }
    
      ),
    
    })

    .then(res => res.json())
.then(data => {
   console.log(data);
  if (!data.error) {
    console.log(data)
    window.location.href = "/login.html"
   //  location.href = "/login.html"
      elInputLogin.value = null;
      elInputPassword.value = null;
      
  }else{
    alert(data.error)
  }

})


})




