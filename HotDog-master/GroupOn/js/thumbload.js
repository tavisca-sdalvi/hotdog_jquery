function loadXMLDoc()
{
  url="xml/Deal.xml";
alert("hello");
var xmlhttp;
if (window.XMLHttpRequest)
  {// code for IE7+, Firefox, Chrome, Opera, Safari
  xmlhttp=new XMLHttpRequest();
  alert("in if");
  }
else
  {// code for IE6, IE5
  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  alert("else");
  }
xmlhttp.onreadystatechange=function()
  {
  if (xmlhttp.readyState==4 && xmlhttp.status==200|| true)
    {

      alert(xmlhttp);
     var txt=xmlhttp.responseXML;
     alert(txt);
      str=txt.getElementsByTagName("photo")[0].childNodes[0].nodeValue;
      alert(str);
      document.getElementById("first_thumbnail").innerHTML+="<img src='"+str+"'>";
   // document.getElementById("first_thumbnail").innerHTML=;
    
    }
  }
xmlhttp.open("GET",url,true);
xmlhttp.send();

}

