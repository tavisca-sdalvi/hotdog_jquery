function loginValidation()
{
 
 var email = document.getElementById("txtEmail").value;
 var password  = document.getElementById("txtPassword").value;
var flag=true;

 var emailpattern=/^([a-zA-Z0-9_.-])+@([a-zA-Z0-9_.-])+\.([a-zA-Z])+([a-zA-Z])+/;
 var passwordpattern=/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;   

 if( !emailpattern.test(email) ){
  flag=false;
  document.getElementById("email_failed").innerHTML="Enter valid Email Id";
 }
 else{
 	document.getElementById("email_failed").innerHTML="";
 }

 if(!passwordpattern.test(password)){
  flag=false;
  document.getElementById("pswd_failed").innerHTML="Enter valid password";
 }
 else{
 	document.getElementById("pswd_failed").innerHTML="";
 }
 return flag;
}