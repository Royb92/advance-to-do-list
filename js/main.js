$(function(){
    
    var i=0;

    $('ul').html(localStorage['data']);
    
      function getColor() {
      return '#' + Math.random().toString(16).slice(2, 8);
    }

    //Sets li color style
    function setlicolor(){
      var bgColor = getColor();
      $('#item'+i).css('color', bgColor);
    }
    
  //Add new item
   function newItem(){
        var item = $('input').val();
        $('ul').append('<li id="item'+i+'">'+ item + '' + '</li>');
        $('input').val('');
        setlicolor();
       i++;
       localStorage['data']=$('ul').html();
    };
    
    //Runs function on space pressed
    $(window).keypress(function (e) {
      if (e.keyCode === 13) {
        newItem();  
      }
    });


  //Remove clicked item
  $('ul').on('click', 'li',function(e) { //Register click event
    $(e.target).remove(); //Remove clicked element
     localStorage['data']=$('ul').html();

  });

});