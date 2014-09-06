var emailpattern = /^([a-zA-Z0-9_.-])+@([a-zA-Z0-9_.-])+\.([a-zA-Z])+([a-zA-Z])+/;
var passwordpattern = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
var namepattern = /[A-Za-z]/;
var contactpattern = /[A-Za-z]/;
var pricepattern = /[0-9]/;
var price1pattern = /[0-9]/;

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

 if(flag==true)
 {
    var ans=localStorage.getItem(email);
    var res = ans.split("|");
    var pass_from_string=res[0];
    if(pass_from_string==password){
        flag=true;
    }
    else{
        flag=false;
        document.getElementById("not_user").innerHTML="invalid combination of ID and Password";

    }
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
if(flag==true){
    var info=""+password+"|"+full_name+"|"+security1+"|"+security2;
    
    localStorage.setItem(email, info);
    
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
    alert("hello");
    var password = document.getElementById("pswd").value;
    var conf_password = document.getElementById("confirm_pswd").value;
    alert(conf_password);
    alert("password" + password);
    alert("reenter" + conf_password);
    if ((password != conf_password)||(conf_password == "")) {
        document.getElementById("cnfpswd_signup_failed").innerHTML = "retype password";
    }
    else {
        alert("proper passwd");
        document.getElementById("cnfpswd_match_failed").innerHTML = "b";
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

function contactvalidation()
{
   var contact_name = document.getElementById("contact_name").value;
    if (contact_name == "" || !contactpattern.test(contact_name)) {
        document.getElementById("contact_name_failed").innerHTML = "Enter your contact name";
    }
    else {
        document.getElementById("contact_name_failed").innerHTML = "";
    }
}

function pricevalidation()
{
 var price = document.getElementById("price").value;
    if (price == "" || !pricepattern.test(price)) {
        document.getElementById("price_failed").innerHTML = "Enter the correct price";
    }
    else {
        document.getElementById("price_failed").innerHTML = "";
    }

var price1 = document.getElementById("price1").value;
    if (price1 == "" || !price1pattern.test(price1)) {
        document.getElementById("price1_failed").innerHTML = "Enter the correct price";
    }
    else {
        document.getElementById("price1_failed").innerHTML = "";
    }

}