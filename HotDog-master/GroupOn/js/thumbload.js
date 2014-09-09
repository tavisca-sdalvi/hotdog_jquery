function loadXMLDoc()
{
  url="xml/Deal.xml";
//alert("hello");
var xmlhttp;
if (window.XMLHttpRequest)
  {// code for IE7+, Firefox, Chrome, Opera, Safari
  xmlhttp=new XMLHttpRequest();
  
  }
else
  {// code for IE6, IE5
  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  //alert("else");
  }
xmlhttp.onreadystatechange=function()
  {
  if (xmlhttp.readyState==4 && xmlhttp.status==200|| true)
    {

     // alert(xmlhttp);
     var txt=xmlhttp.responseXML;
     for(var i=0; i<4;i++)
     {
     var newvar=txt.getElementsByTagName("deal")[i];
      str=newvar.getElementsByTagName("photo")[0].childNodes[0].nodeValue;
     // alert(str);
      document.getElementById(i+"_thumbnail").innerHTML+="<img src='"+str+"'>";

      title_str=newvar.getElementsByTagName("title")[0].childNodes[0].nodeValue;
      document.getElementById(i+"_title").innerHTML+=title_str;

      desc_str=newvar.getElementsByTagName("location")[0].childNodes[0].nodeValue;
      document.getElementById(i+"_desc").innerHTML=desc_str;

      loc_str=newvar.getElementsByTagName("city")[0].childNodes[0].nodeValue;
      document.getElementById(i+"_locn").innerHTML=loc_str;

      og_cost=newvar.getElementsByTagName("original_value")[0].childNodes[0].nodeValue;
      document.getElementById(i+"_price").innerHTML="$"+og_cost+"&nbsp";

      discount_cost=newvar.getElementsByTagName("discount_price")[0].childNodes[0].nodeValue;
      document.getElementById(i+"_disc").innerHTML="From $"+discount_cost+"&nbsp"; 
      }
    }

  }
xmlhttp.open("GET",url,true);
xmlhttp.send();

}

