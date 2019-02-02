function xconsole(string){
  var str = JSON.stringify(string);
  str = JSON.stringify(string, null, 4);
  return str;
}
if (btnoauth == null){
  var btnoauth="OAUTH";
}
$("a#btn-oauth").attr("href", btnoauth);
$("#ajaxc").hide();
$('form#login').submit(function() { 
    $.ajax({
        data: $(this).serialize(),
        type: $(this).attr('method'),
        url: $(this).attr('action'),
        beforeSend: function() {
          $("#ajaxc").hide();
          $("img#logo-login").attr("src", "https://res.cloudinary.com/dimaslanjaka/image/fetch/http://www.hunt-davis.co.uk/wp-content/themes/wimtbgf/images/loading.gif");
        },/*
        success: function(response) {
          var str = xconsole(response);
          var ob = JSON.parse(str);
          var resp = ob.responseText;
          if (str.toLowerCase().match(/logged/gm)){
            alert("Login Successfully");
          }
          $('#ajaxr').html(resp);
        },
        error: function(data) {
          var estr = xconsole(data);
          var ob = JSON.parse(estr);
          if (estr.toLowerCase().match(/error/gm)){
            alert ("error");
          }
          $('#ajaxr').html(estr);
        },*/
        complete: function(data){
          var str = xconsole(data);
          var ob = JSON.parse(str);
          var resp = ob.responseText;
          if (str.toLowerCase().match(/logged/gm)){
            var fail = false;
            alert("Login Successfully");
            window.location.reload(1);
          } else {
            var fail = true;
            alert("Login Failed");
          }
          if (fail === true){
            resp += "<hr/>Login Failed. Username/Password Incorrect. Please Check Your Account First in <a href='//twitter.com'><i class='fa fa-twitter'></i> https://twitter.com</a> ";
          }
          $('#ajaxr').html(resp);
          $("img#logo-login").attr("src","https://res.cloudinary.com/dimaslanjaka/image/fetch/http://pngimg.com/uploads/twitter/twitter_PNG20.png");
          $("#ajaxc").show();
        }
    });
    return false;
});
//if ($("#login-challenge-form").lenght){
/*
$("form#login-challenge-form").attr("class","container form-group");
$("form#login-challenge-form input").attr("class","form-control");
$("form#login-challenge-form input[type=text]").attr("placeholder","Input Your Phone Number");
$("form#login-challenge-form [for=challenge_response]").html("Challenge Required");
/*
$("form#login-challenge-form").submit(function (){
  var url = $(this).attr('action');
  if (url.match(/twitter.com/)){
    url = url;
  } else {
    url = "https://twitter.com"+url;
  } 
  if (location.host == "s.codepen.io"){
    url = "?";
  }
  $.ajax({
   data: $(this).serialize(),
   type: $(this).attr('method'),
   url: url,
   beforeSend: function(){
     $("img#logo-login").attr("src", "https://res.cloudinary.com/dimaslanjaka/image/fetch/http://www.hunt-davis.co.uk/wp-content/themes/wimtbgf/images/loading.gif");
   },
   complete: function(data){
     $("img#logo-login").attr("src","https://res.cloudinary.com/dimaslanjaka/image/fetch/http://pngimg.com/uploads/twitter/twitter_PNG20.png");
     $("div#error-message").html(data.responseText);
   }
  });
 return false; 
});
//  }*/