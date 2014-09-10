$(document).ready(function(){
  alert(jsonobj.start[0].category);

  for(i=0;i<4;i++)
  {
  str=jsonobj.start[i].photo;
  $("#"+i+"_thumbnail").html("<img width='100%' height='100%' src='"+str+"'/>");

  str_title=jsonobj.start[i]._title;
  $("#"+i+"_title").html(str_title);

  str_desc=jsonobj.start[i]._location;
  $("#"+i+"_desc").html(str_desc);

  str_loc=jsonobj.start[i].city;
  $("#"+i+"_locn").html(str_loc);

  str_ogcost=jsonobj.start[i].original_value;
  $("#"+i+"_price").html("$"+str_ogcost+"&nbsp");

  str_discount=jsonobj.start[i].discount_price;
  $("#"+i+"_disc").html("From $"+str_discount+"&nbsp");
 
  }
});