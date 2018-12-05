import $ from 'jquery';
import AOS from 'aos';

const common = () => {

  // tabs

  $(document).ready(function($) {
    $('.tab-pane').hide();
    $('.tab-pane:first').show();
    $('.tab-nav__item:first').addClass('active');
    $('.tab-nav__item').click(function(e) {
      e.preventDefault();
      $('.tab-nav__item').removeClass('active');
      $(this).addClass('active');
      $('.tab-pane').hide();

      var selectTab = $(this).find('a').attr("href");

      $(selectTab).fadeIn();
    });
  });


  // toggle menu

  $('.btn-menu-toggle').on('click', function(){
    $(this).toggleClass('active');
    $(this).find('.bars').toggleClass('open');
    $('.header .menu_header').toggleClass('menu_opened');
    $('body').toggleClass('noscroll');
  });

  $('.menu__item-link').on('click', function(){
    $('.header .menu_header').removeClass('menu_opened');
    $('body').removeClass('noscroll');
    $('.btn-menu-toggle').removeClass('active');
    $('.bars').removeClass('open');
  });


  // on scroll animation

  AOS.init({
    once: true,
    delay: 100,
    offset: 90,
    anchorPlacement: 'center'
  });

  // anchors

  $('.anchor').on('click', function(e){
    e.preventDefault();
    var elem = $(this).attr('href'),
        positionscroll = $(elem).offset().top - 100;
    $('body,html').animate({scrollTop:positionscroll}, 1000);
  });


  $(document).ready(function($) {
    let $nav = $('.anchor-top');
    let $win = $(window);
    let winH = $win.height()-101;

    $win.on("scroll", function () {
        if ($(this).scrollTop() > winH ) {
            $nav.show().animate({right: "30px"}, 100);
        } else {
            $nav.animate({right: "-60px"}, 100);
        }
    }).on("resize", function(){
       winH = $(this).height();
    });
    });
};

export default common();