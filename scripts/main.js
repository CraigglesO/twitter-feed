

$(document).ready(function(){
  // $.get( "http://localhost:5000/request", function ( data ) {
  //   console.log(data);
  // });



  //CLICKS

  let contentArr = ['.start','.calendar','.cron','.quote'];

  $("#start-text").click(() => {
    $(".start").css({'opacity': '1'});
    contentArr.forEach((x) => {
      if (x != '.start'){
        $(x).css({'opacity': '0'});
      }
    });
    $('body').css({'background-color': '#83BBB8'});
    closeNav();
  });

  $("#calendar-text").click(() => {
    $(".calendar").css({'opacity': '1'});
    contentArr.forEach((x) => {
      if (x != '.calendar'){
        $(x).css({'opacity': '0'});
      }
    });
    $('body').css({'background-color': '#485780'});
    closeNav();
  });

  $("#cron-text").click(() => {
    $(".cron").css({'opacity': '1'});
    contentArr.forEach((x) => {
      if (x != '.cron'){
        $(x).css({'opacity': '0'});
      }
    });
    $('body').css({'background-color': '#BA605F'});
    closeNav();
  });

  $("#quote-text").click(() => {
    $(".quote").css({'opacity': '1'});
    contentArr.forEach((x) => {
      if (x != '.quote'){
        $(x).css({'opacity': '0'});
      }
    });
    closeNav();
  });


  $("#submit-add").click(function(){
    // $.post("http://localhost:5000/add",add, function( data ){
    //   if(data==='done')
    //   {
    //     console.log("login success");
    //   }
    // });
    $("#name").val("WORDS WORDS WORDS");
  });

  $("#ham-hover").click(function(){
    if ($(".navigation").css("left") === '-287px'){
      openNav();
    }
    else {
      closeNav();
    }
  });


  $("#submit-remove").click(function(){
    $.post("http://localhost:5000/remove", add, function(data){
      if(data==='done')
      {
        console.log("login success");
      }
    });
  });

});

function openNav () {
  $(".navigation").css({"left": "-90px"});
  $("#ham-two").css({"opacity": "0"});
  $("#ham-one").css({'transform': 'rotate(45deg) translate(14px, 9px)'});
  $("#ham-three").css({'transform': 'rotate(-45deg) translate(14px, -9px)'});
  $('.navigation hr').css({'opacity': "1"});
  $('.nav-words').css({'opacity': '1', 'transform':'translateX(0px)'});
  $("#logo").css({'transform':'rotate(0deg)'});
}

function closeNav() {
  $(".navigation").css({"left": "-287px"})
  $("#ham-two").css({"opacity": "1"});
  $("#ham-one").css({'transform': 'rotate(0deg) translate(0px, 0px)'});
  $("#ham-three").css({'transform': 'rotate(0deg) translate(0px, 0px)'});
  $('.navigation hr').css({'opacity': "0"});
  $('.nav-words').css({'opacity': '0', 'transform':'translateX(-100px)'});
  $("#logo").css({'transform':'rotate(-180deg)'});
}
