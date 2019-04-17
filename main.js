(function($){
    $(function() {
      $('.menu__icon').on('click', function() {
        $(this).closest('.items').toggleClass('menu_state_open');
      });
    });
  })(jQuery);