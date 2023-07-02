(function(){

  $('.filter .btn').click(function(){
      $('.filter .btn').removeClass('on');
      $(this).addClass('on');
      $('.card').hide();
      var thisType = $(this).attr('data-filter');
      $('.card[data-filter="'+thisType+'"]').show();
      return false;
  });
  
  $('.btn[data-filter="all"]').click(function(){
      $('.card').show();
  });

}());