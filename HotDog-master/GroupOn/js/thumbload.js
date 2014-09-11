$(document).ready(function(){
  
  $.ajax({
                    url: "json/deal.json",
                    //force to handle it as text
                    dataType: "text",
                    success: function(data) {
                        
                        var json = $.parseJSON(data);
                        
                        for(i=0;i<4;i++)
                        {
                        str=json.start[i].photo;
                        $("#"+i+"_thumbnail").html("<img width='100%' height='100%' src='"+str+"'/>");

                        str_title=json.start[i]._title;
                        $("#"+i+"_title").html(str_title);

                        str_desc=json.start[i]._location;
                        $("#"+i+"_desc").html(str_desc);

                        str_loc=json.start[i].city;
                        $("#"+i+"_locn").html(str_loc);

                        str_ogcost=json.start[i].original_value;
                        $("#"+i+"_price").html("$"+str_ogcost+"&nbsp");

                        str_discount=json.start[i].discount_price;
                        $("#"+i+"_disc").html("From $"+str_discount+"&nbsp");
 
                        }
                     }
                });
});