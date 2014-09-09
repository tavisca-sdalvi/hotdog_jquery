var emailpattern = /^([a-zA-Z0-9_.-])+@([a-zA-Z0-9_.-])+\.([a-zA-Z])+([a-zA-Z])+/;
var passwordpattern = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
var namepattern = /^[a-zA-Z]+$/;

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
 var checkbox_iagree = document.getElementById("i_agree").checked;
 
if(!namepattern.test(full_name)){
    flag=false;
 document.getElementById("full_name_failed").innerHTML="Enter your fullname";
 }
 else{
    document.getElementById("full_name_failed").innerHTML="";
 } 

 if(!namepattern.test(security1)){
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
if (!checkbox_iagree) {
    flag = false;
    document.getElementById("div_errorsms_iagree").innerHTML = "Accept term and conditions";
}
else {
    document.getElementById("div_errorsms_iagree").innerHTML = "";
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

    if (conf_password == "") {

        document.getElementById("cnfpswd_signup_failed").innerHTML = "Re-enter password";
    }
    
    else if (password != conf_password) {

        document.getElementById("cnfpswd_signup_failed").innerHTML = "Passwords donot match";
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
function checkboxclicked() {
    document.getElementById("div_errorsms_iagree").innerHTML = "";
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

//validation for deal registration page

function addtitlevalidation() {
    var addtitle = document.getElementById("txt_addtitle").value;
    if (addtitle == "" ) {
        document.getElementById("div_errormessage_addtitle").innerHTML = "Enter title";
        return true;
    }
    else {
        document.getElementById("div_errormessage_addtitle").innerHTML = "";
    }

}


function descriptionvalidation() {
    var describtion = document.getElementById("txta_description").value;
    if (describtion == "") {
        document.getElementById("div_errormessage_description").innerHTML = "Enter description";
        return true;
    }
    else {
        document.getElementById("div_errormessage_description").innerHTML = "";
    }
}
function contactnamevalidation()
{
    var contact_name = document.getElementById("txt_contact_name").value;
    if (contact_name == "" || !namepattern.test(contact_name)) {
        document.getElementById("div_errormessage_contact_name").innerHTML = "Enter your contact name";
        return true;
    }
    else {
        document.getElementById("div_errormessage_contact_name").innerHTML = "";
    }
}

function pricevalidation()
{
    var price = document.getElementById("txt_price").value;
    if (price=="" || isNaN(price)) {
        document.getElementById("div_errormessage_price").innerHTML = "Enter the correct price";
        return true;
    }
    else {
        document.getElementById("div_errormessage_price").innerHTML = "";
    }
}
function discountpricevalidation() {
    var discountprice = document.getElementById("txt_discount_price").value;
    if (discountprice==""||isNaN(discountprice)) {
        document.getElementById("div_errormessage_discount_price").innerHTML = "Enter the correct discount price";
        return true;
    }
    else {
        document.getElementById("div_errormessage_discount_price").innerHTML = "";
    } 
}
function selectcategoryvalidation()
{
    var selectcategory = document.getElementById("select_category").value;
    
    if (selectcategory=="Select") {
        document.getElementById("div_errormessage_selectcategory").innerHTML = "Select category";
        return true;
    }
    else {
        document.getElementById("div_errormessage_selectcategory").innerHTML = "";
    }

}
function selectcountryvalidation() {
    var country = document.getElementById("country").value;
   
    if (country == "-1") {
        document.getElementById("div_errormessage_country").innerHTML = "Select country";
        return true;
    }
    else {
        document.getElementById("div_errormessage_country").innerHTML = "";
    }

}
function selectstatevalidation() {
    var state = document.getElementById("state").value;

    if (state == "") {
        document.getElementById("div_errormessage_state").innerHTML = "Select state";
        return true;
    }
    else {
        document.getElementById("div_errormessage_state").innerHTML = "";
    }
}
function photovalidation() {
    var photo = document.getElementById("txt_photo").value;

    if (photo == "") {
        document.getElementById("div_errormessage_photo").innerHTML = "Upload Image";
        return true;
    }
    else {
        document.getElementById("div_errormessage_photo").innerHTML = "";
    }
}

function dealregvalidation() {
    addtitlevalidation();
    descriptionvalidation();
    contactnamevalidation();
    pricevalidation();
    discountpricevalidation();
    selectcategoryvalidation();
    selectcountryvalidation();
    selectstatevalidation();
    photovalidation();

    var flag = true;

    if (addtitlevalidation()) {
        flag = false;
    }
    if (descriptionvalidation()) {
        flag = false;
    }
    if (contactnamevalidation()) {
        flag = false;
    }
    if (pricevalidation()) {
        flag = false;
    }
    if (discountpricevalidation()) {
        flag = false;
    }
    if (selectcategoryvalidation()) {
        flag = false;
    }
    if (selectcountryvalidation()) {
        flag = false;
    }
    if (selectstatevalidation()) {
        flag = false;
    }
    if (photovalidation) {
        flag = false;
    }
    return flag;
}


//common functions

function emailvalidation(emailid,diverrorid) {
    var email = document.getElementById(emailid).value;
    if (!emailpattern.test(email)) {

        document.getElementById(diverrorid).innerHTML = "Enter a valid Email Id";
        return true;
    }
    else {
        document.getElementById(diverrorid).innerHTML = "";
    }
}
function password_hint(){
    document.getElementById("pswd_signup_failed").innerHTML = "Password should contain <br/>atleast 1 uppercse,1 lowercase latter,<br/> one special char, one number";
}