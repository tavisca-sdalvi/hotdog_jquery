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

function uservalidation()
{
	var flag=true;
 var full_name=document.getElementById("full_name").value;
 var email = document.getElementById("email_id").value;
 var password  = document.getElementById("pswd").value;
 var conf_password=document.getElementById("confirm_pswd").value;
 var security1=document.getElementById("security1").value;
 var security2=document.getElementById("security2").value;
//var email_flag=true;
//var password_flag=true;

 var emailpattern=/^([a-zA-Z0-9_.-])+@([a-zA-Z0-9_.-])+\.([a-zA-Z])+([a-zA-Z])+/;
 var passwordpattern=/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
 var namepattern=/[A-Za-z]/;

if(full_name=="" || !namepattern.test(full_name)){
 	flag=false;
 document.getElementById("full_name_failed").innerHTML="Enter fullname & name should be alphabetic";
 }
 else{
 	document.getElementById("full_name_failed").innerHTML="";
 } 

 if(security1=="" || !namepattern.test(security1)){
 	flag=false;
 document.getElementById("security1_failed").innerHTML="Enter answer & name should be alphabetic";
 }
 else{
 	document.getElementById("security1_failed").innerHTML="";
 } 

 if(security2=="" || !namepattern.test(security2)){
 	flag=false;
 document.getElementById("security2_failed").innerHTML="Enter answer & city name should be alphabetic";
 }
 else{
 	document.getElementById("security2_failed").innerHTML="";
 } 

 if(password!=conf_password){
 	flag=false;
 document.getElementById("cnfpswd_signup_failed").innerHTML="password not match";
 }
 else{
 	document.getElementById("cnfpswd_signup_failed").innerHTML="";
 } 

if(conf_password==""){
 	flag=false;
 document.getElementById("cnfpswd_signup_failed").innerHTML="Re-enter password";
 }
 else{
 	document.getElementById("cnfpswd_signup_failed").innerHTML="";
 } 

 if( !emailpattern.test(email) ){
  flag=false;
  document.getElementById("email_signup_failed").innerHTML="Enter valid Email Id";
 }
 else{
 	document.getElementById("email_signup_failed").innerHTML="";
 }

 if(!passwordpattern.test(password)){
  flag=false;
  document.getElementById("pswd_signup_failed").innerHTML="Enter valid password";
 }
 else{
 	document.getElementById("pswd_signup_failed").innerHTML="";
 }
 return flag;	
}