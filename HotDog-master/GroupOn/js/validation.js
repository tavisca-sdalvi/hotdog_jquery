var emailpattern = /^([a-zA-Z0-9_.-])+@([a-zA-Z0-9_.-])+\.([a-zA-Z])+([a-zA-Z])+/;
var passwordpattern = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
var namepattern = /^[a-zA-Z ]+$/;

//validation for new_login page

function loginValidation(){
    var email = $("#txtEmail").val();
    var password  = $("#txtPassword").val();
    var flag=true;

    if( !emailpattern.test(email) ){
        flag=false;
        $("#email_failed").html("Enter a valid Email Id");
    }
    else{
        $("#email_failed").html("");
    }

    if(!passwordpattern.test(password)){
        flag=false;
        $("#pswd_failed").html("Enter a valid password");
    }
    else{
        $("#pswd_failed").html("");
    }

    if(flag==true){
        var ans=localStorage.getItem(email);
        var res = ans.split("|");
        var pass_from_string=res[0];
            
            if(pass_from_string==password){
                flag=true;
            }
            else{
                flag=false;
                $("#not_user").html("invalid combination of ID and Password");
            }
    }
    return flag;
}

//validation for new_user page

function uservalidation(){
    var flag=true;
    var full_name=$("#full_name").val();
    var email = $("#email_id").val();
    var password  = $("#pswd").val();
    var conf_password=$("#confirm_pswd").val();
    var security1=$("#security1").val();
    var security2=$("#security2").val();
    var checkbox_iagree = $("#i_agree").attr('checked');
 
    if(!namepattern.test(full_name)){
        flag=false;
        $("#full_name_failed").html("Enter your fullname");
    }
    else{
        $("#full_name_failed").html("");
    } 

    if(!namepattern.test(security1)){
        flag=false;
        $("#security1_failed").html("Enter the answer");
    }
    else{
        $("#security1_failed").html("");
    } 

    if(security2=="" || !namepattern.test(security2)){
        flag=false;
        $("#security2_failed").html("Enter the city name");
    }
    else{
        $("#security2_failed").html("");
    } 

    if(password != conf_password){
        flag=false;
        $("#cnfpswd_signup_failed").html("Passwords donot match");
    }  
    else{
        $("#cnfpswd_signup_failed").html("");
    } 

    if(conf_password==""){
        flag=false;
        $("#cnfpswd_signup_failed").html("Re-enter password");
    }
    else{
        $("#cnfpswd_signup_failed").html("");
    } 

    if( !emailpattern.test(email) ){
        flag=false;
        $("#email_signup_failed").html("Enter a valid Email Id");
    }
    else{
        $("#email_signup_failed").html("");
    }

    if(!passwordpattern.test(password)){
        flag=false;
        $("#pswd_signup_failed").html("Enter a valid password");
    }
    else{
        $("#pswd_signup_failed").html("");
    }
    if (!checkbox_iagree) {
        flag = false;
        $("#div_errorsms_iagree").html("Accept term and conditions");
    }
    else{
        $("#div_errorsms_iagree").html("");
    }
    if(flag==true){
        var info=""+password+"|"+full_name+"|"+security1+"|"+security2;
        localStorage.setItem(email, info);
    }

    return flag;   
}

//validation for new_login page

function lemailValidation() {
    var email = $("#txtEmail").val();
    
    if (!emailpattern.test(email)) {    
        $("#email_failed").html("Enter valid Email Id");
    }
    else {
        $("#email_failed").html("");
    }
}

function lpasswordValidation() {
    var password = $("#txtPassword").val();
    
    if (!passwordpattern.test(password)) {    
        $("#pswd_failed").html("Enter valid password");
    }
    else {
        $("#pswd_failed").html("");
    }
}

//validation for new_user page

function ufullnamevalidation() {
    var full_name = $("#full_name").val();
    
    if (full_name == "" || !namepattern.test(full_name)) {
        $("#full_name_failed").html("Enter your fullname");
    }
    else {
        $("#full_name_failed").html("");
    }
}

function uemailvalidation() {
    var email = $("#email_id").val();
    
    if (!emailpattern.test(email)) {    
        $("#email_signup_failed").html("Enter a valid Email Id");
    }
    else {
        $("#email_signup_failed").html("");
    }
}

function upasswordvalidation() {
    var password = $("#pswd").val();
    
    if (!passwordpattern.test(password)) {
       
        $("#pswd_signup_failed").html("Enter a valid password");
    }
    else {
        $("#pswd_signup_failed").html("");
    }
}

function uconfpasswordvalidation() {
    var password = $("#pswd").val();
    var conf_password = $("#confirm_pswd").val();

    if (conf_password == "") {

        $("#cnfpswd_signup_failed").html("Re-enter password");
    }
    
    else if (password != conf_password) {

        $("#cnfpswd_signup_failed").html("Passwords donot match");
    }
    else {

        $("#cnfpswd_signup_failed").html("");
       
    }
}

function usecurity1validation() {
    var security1 = $("#security1").val();
    
    if (security1 == "" || !namepattern.test(security1)) {
      
        $("#security1_failed").html("Enter the answer");
    }
    else {
        $("#security1_failed").html("");
    }
}

function usecurity2validation() {
    var security2 = $("#security2").val();
    
    if (security2 == "" || !namepattern.test(security2)) {
      
        $("#security2_failed").html("Enter the city name");
    }
    else {
        $("#security2_failed").html("");
    }
}

function checkboxclicked() {
    $("#div_errorsms_iagree").html("");
}

//validation for reset password page

function remailvalidation() {
    var email = $("#rtxtemail").val();
    
    if (!emailpattern.test(email)) {

        $("#divemailerrormessage").html("Enter a valid Email Id");
        return true;
    }
    else {
        $("#divemailerrormessage").html("");
    }
}

function rsecurityque1validation() {
    var security1 = $("#rtxtsecurityque1").val();
    
    if (security1 == "" || !namepattern.test(security1)) {

        $("#divsecurityque1errormessage").html("Enter the answer");
        return true;
    }
    else {
        $("#divsecurityque1errormessage").html("");
    }
}

function rsecurityque2validation() {
    var security1 = $("#rtxtsecurityque2").val();
    if (security1 == "" || !namepattern.test(security1)) {

        $("#divsecurityque2errormessage").html("Enter the city name");
        return true;
    }
    else {
        $("#divsecurityque2errormessage").html("");
    }
}

function resetpassvalidation() {
   
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
    var addtitle = $("#txt_addtitle").val();
    
    if (addtitle == "" ) {
        $("#div_errormessage_addtitle").html("Enter title");
        return true;
    }
    else {
        $("#div_errormessage_addtitle").html("");
    }
}


function descriptionvalidation() {
    var describtion = $("#txta_description").val();
    
    if (describtion == "") {
        $("#div_errormessage_description").html("Enter description");
        return true;
    }
    else {
        $("#div_errormessage_description").html("");
    }
}

function contactnamevalidation() {
    var contact_name = $("#txt_contact_name").val();
    
    if (contact_name == "" || !namepattern.test(contact_name)) {
        $("#div_errormessage_contact_name").html("Enter your contact name");
        return true;
    }
    else {
        $("#div_errormessage_contact_name").html("");
    }
}

function pricevalidation() {
    var price = $("#txt_price").val();
    
    if (price=="" || isNaN(price)) {
        $("#div_errormessage_price").html("Enter the correct price");
        return true;
    }
    else {
        $("#div_errormessage_price").html("");
    }
}
function discountpricevalidation() {
    var discountprice = $("txt_discount_price").val();
    
    if (discountprice==""||isNaN(discountprice)) {
        $("#div_errormessage_discount_price").html("Enter the correct discount price");
        return true;
    }
    else {
        $("#div_errormessage_discount_price").html("");
    } 
}
function selectcategoryvalidation() {
    var selectcategory = $("#select_category").val();
    
    if (selectcategory=="Select") {
        $("#div_errormessage_selectcategory").html("Select category");
        return true;
    }
    else {
        $("#div_errormessage_selectcategory").html("");
    }

}

function selectcountryvalidation() {
    var country = $("#country").val();
   
    if (country == "-1") {
        $("#div_errormessage_country").html("Select country");
        return true;
    }
    else {
        $("#div_errormessage_country").html("");
    }

}
function selectstatevalidation() {
    var state = $("#state").val();

    if (state == "") {
        $("#div_errormessage_state").html("Select state");
        return true;
    }
    else {
        $("#div_errormessage_state").html("");
    }
}
function photovalidation() {
    var photo = $("#txt_photo").val();

    if (photo == "") {
        $("#div_errormessage_photo").html("Upload Image");
        return true;
    }
    else {
        $("#div_errormessage_photo").html("");
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
    var email = $(emailid).val();
    
    if (!emailpattern.test(email)) {

        $(diverrorid).html("Enter a valid Email Id");
        return true;
    }
    else {
        $(diverrorid).html("");
    }
}

function password_hint(){
    $("#pswd_signup_failed").html("Password should contain
<br />
atleast 1 uppercse,1 lowercase latter,<br />
one special char, one number");
}