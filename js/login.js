document.getElementById('submit-button').addEventListener('click', function(){
    const emailField= document.getElementById('user-email');
    const email = emailField.value;
   const passwordFeild = document.getElementById('user-password');
   const password = passwordFeild.value;
   if(email === "sakiuzzaman26@gmail.com" && password === "12345678"){
    window.location.href = "bank.html";
   }
   else{
  alert("Not Valid User");       
}
})
