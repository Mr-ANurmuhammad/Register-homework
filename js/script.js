
// if (!localStorage.getItem('token')){
//    window.location.href = "/login.html"
// };

let elBtnLogOut = document.querySelector(".log__out");
let elWrapper = document.querySelector(".wrapper");
let elTempUser = document.querySelector("#row-temp").content;

let authtToken = localStorage.getItem('token');

elBtnLogOut.addEventListener("click", function (evt) {
   localStorage.removeItem("token");

   window.location.href = "/login.html";   
})



fetch(`https://fast-ravine-16741.herokuapp.com/api/users`,{

   method: "Get",
   headers:{
      "Content-Type":"application/json",
     "Authorization":authtToken
   }
 
 })

 .then(res => res.json())
 .then(data => 
   
  {
   if (!data.error) {
         renderUsers([data]);
         // console.log(data);  
   }
   else{
      window.location.href = "/login.html"
   }
  }

   )

   function renderUsers(array) {
      
      elWrapper.innerHTML = null

      let newFragment = document.createDocumentFragment();

      for (const item of array) {
         
         let rowTemp = elTempUser.cloneNode(true);

         console.log(rowTemp);

         rowTemp.querySelector(".user__name").textContent = item.name;
         rowTemp.querySelector(".user__email").textContent = item.email;
         rowTemp.querySelector(".user__isAdmin").textContent = item.isAdmin;
         rowTemp.querySelector(".user__id").textContent = item._id;

         newFragment.appendChild(rowTemp);

      }

      elWrapper.appendChild(newFragment);

   }