var emailpattern = /^([a-zA-Z0-9_.-])+@([a-zA-Z0-9_.-])+\.([a-zA-Z])+([a-zA-Z])+/;
var passwordpattern = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
var namepattern = /[A-Za-z]/;

//validation for new_login page

function loginValidation()
{
 
 var email = document.getElementById("txtEmail").value;
 var password  = document.getElementById("txtPassword").value;
 var flag=true;



 if( !emailpattern.test(email) ){
  flag=false;
  document.getElementById("email_failed").innerHTML="Enter a valid Email Id";
 }
 else{
 	document.getElementById("email_failed").innerHTML="";
 }

 if(!passwordpattern.test(password)){
  flag=false;
  document.getElementById("pswd_failed").innerHTML="Enter a valid password";
 }
 else{
 	document.getElementById("pswd_failed").innerHTML="";
 }
 return flag;
}

//validation for new_user page

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

 //var emailpattern=/^([a-zA-Z0-9_.-])+@([a-zA-Z0-9_.-])+\.([a-zA-Z])+([a-zA-Z])+/;
 //var passwordpattern=/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
// var namepattern=/[A-Za-z]/;

if(full_name=="" || !namepattern.test(full_name)){
 	flag=false;
 document.getElementById("full_name_failed").innerHTML="Enter your fullname";
 }
 else{
 	document.getElementById("full_name_failed").innerHTML="";
 } 

 if(security1=="" || !namepattern.test(security1)){
 	flag=false;
 document.getElementById("security1_failed").innerHTML="Enter the answer";
 }
 else{
 	document.getElementById("security1_failed").innerHTML="";
 } 

 if(security2=="" || !namepattern.test(security2)){
 	flag=false;
 document.getElementById("security2_failed").innerHTML="Enter the city name";
 }
 else{
 	document.getElementById("security2_failed").innerHTML="";
 } 

 if(password != conf_password){
 	flag=false;
 document.getElementById("cnfpswd_signup_failed").innerHTML="Passwords donot match";
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
  document.getElementById("email_signup_failed").innerHTML="Enter a valid Email Id";
 }
 else{
 	document.getElementById("email_signup_failed").innerHTML="";
 }

 if(!passwordpattern.test(password)){
  flag=false;
  document.getElementById("pswd_signup_failed").innerHTML="Enter a valid password";
 }
 else{
 	document.getElementById("pswd_signup_failed").innerHTML="";
 }
 return flag;	
}

//validation for new_login page

function lemailValidation()
{
    var email = document.getElementById("txtEmail").value;
    if (!emailpattern.test(email)) {
        
        document.getElementById("email_failed").innerHTML = "Enter valid Email Id";
    }
    else {
        document.getElementById("email_failed").innerHTML = "";
    }
}
function lpasswordValidation()
{
    var password = document.getElementById("txtPassword").value;
    if (!passwordpattern.test(password)) {
       
        document.getElementById("pswd_failed").innerHTML = "Enter valid password";
    }
    else {
        document.getElementById("pswd_failed").innerHTML = "";
    }
}

//validation for new_user page

function ufullnamevalidation()
{
    var full_name = document.getElementById("full_name").value;
    if (full_name == "" || !namepattern.test(full_name)) {
       
        document.getElementById("full_name_failed").innerHTML = "Enter your fullname";
    }
    else {
        document.getElementById("full_name_failed").innerHTML = "";
    }
}
function uemailvalidation()
{
    var email = document.getElementById("email_id").value;
    if (!emailpattern.test(email)) {
       
        document.getElementById("email_signup_failed").innerHTML = "Enter a valid Email Id";
    }
    else {
        document.getElementById("email_signup_failed").innerHTML = "";
    }
}
function upasswordvalidation()
{
    var password = document.getElementById("pswd").value;
    if (!passwordpattern.test(password)) {
       
        document.getElementById("pswd_signup_failed").innerHTML = "Enter a valid password";
    }
    else {
        document.getElementById("pswd_signup_failed").innerHTML = "";
    }
}
function uconfpasswordvalidation()
{
    var password = document.getElementById("pswd").value;
    var conf_password = document.getElementById("confirm_pswd").value;
    alert("password" + conf_password);
    alert("reenter" + password);
    if (!(password == conf_password)) {
       
        document.getElementById("cnfpswd_signup_failed").innerHTML = "Passwords donot match";
    }
    else {
        document.getElementById("cnfpswd_signup_failed").innerHTML = "";
    }

    if (conf_password == "") {
     
        document.getElementById("cnfpswd_signup_failed").innerHTML = "Re-enter password";
    }
    else {
        document.getElementById("cnfpswd_signup_failed").innerHTML = "";
    }
}
function usecurity1validation()
{
    var security1 = document.getElementById("security1").value;
    if (security1 == "" || !namepattern.test(security1)) {
      
        document.getElementById("security1_failed").innerHTML = "Enter the answer";
    }
    else {
        document.getElementById("security1_failed").innerHTML = "";
    }
}
function usecurity2validation()
{
    var security2 = document.getElementById("security2").value;
    if (security2 == "" || !namepattern.test(security2)) {
      
        document.getElementById("security2_failed").innerHTML = "Enter the city name";
    }
    else {
        document.getElementById("security2_failed").innerHTML = "";
    }
}

//validation for reset password page

function remailvalidation()
{
    var email = document.getElementById("rtxtemail").value;
    if (!emailpattern.test(email)) {

        document.getElementById("divemailerrormessage").innerHTML = "Enter a valid Email Id";
        return true;
    }
    else {
        document.getElementById("divemailerrormessage").innerHTML = "";
    }
}

function rsecurityque1validation()
{
    var security1 = document.getElementById("rtxtsecurityque1").value;
    if (security1 == "" || !namepattern.test(security1)) {

        document.getElementById("divsecurityque1errormessage").innerHTML = "Enter the answer";
        return true;
    }
    else {
        document.getElementById("divsecurityque1errormessage").innerHTML = "";
    }
}

function rsecurityque2validation() {
    var security1 = document.getElementById("rtxtsecurityque2").value;
    if (security1 == "" || !namepattern.test(security1)) {

        document.getElementById("divsecurityque2errormessage").innerHTML = "Enter the city name";
        return true;
    }
    else {
        document.getElementById("divsecurityque2errormessage").innerHTML = "";
    }
}

function resetpassvalidation()
{
   
    remailvalidation();
    rsecurityque1validation();
    rsecurityque2validation();

   

    var flag = true;

    if (remailvalidation()) {
        flag = false;
    }
    if (rsecurityque1validation()) {
        flag = false;
    }
    if (rsecurityque2validation()) {
        flag = false;
    }
 
    return flag;
}