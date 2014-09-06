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
      str1=txt.getElementsByTagName("title")[0].childNodes[0].nodeValue;
      alert(str1);
      str2=txt.getElementsByTagName("description")[0].childNodes[0].nodeValue;
      alert(str2);
      str3=txt.getElementsByTagName("city")[0].childNodes[0].nodeValue;
      alert(str3);
      document.getElementById("first_thumbnail").innerHTML+="<img src='"+str+"'>";
      document.getElementById("first_title").innerHTML=str1;
      document.getElementById("first_desc").innerHTML=str2;
      document.getElementById("first_locn").innerHTML=str3;
    
    
    }
  }
xmlhttp.open("GET",url,true);
xmlhttp.send();

}

