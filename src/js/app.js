//=include libs/jquery.min.js
//=include libs/rateit.js
'use strict';


$( document ).ready(() => {

  const $btnHowTo = $('.howto');

  $btnHowTo.on('click',function() {
    const margin = 50;
    $('body,html').animate({
      scrollTop: $('.game-wrapper').offset().top - margin
    }, 1000);
  });

});


