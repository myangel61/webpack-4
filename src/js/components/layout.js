$(document).ready(($) => {
  const Layout = (() => {
    const handleHeaderOnScroll = () => {
      if ($(window)
        .scrollTop() > 60) {
        $('body')
          .addClass('page-on-scroll');
      } else {
        $('body')
          .removeClass('page-on-scroll');
      }
    };

    const handleOnePageHeader = () => {
      if ($('.navbar')
        .offset().top > 150) {
        $('.navbar-fixed-top')
          .addClass('top-nav-collapse');
      }
      $(window)
        .scroll(() => {
          if ($('.navbar')
            .offset().top > 150) {
            $('.navbar-fixed-top')
              .addClass('top-nav-collapse');
          } else {
            $('.navbar-fixed-top')
              .removeClass('top-nav-collapse');
          }
        });

      let $offset = 0;
      $offset = $('.navbar-fixed-top')
        .height() - 96;

      $('.js_nav-item a')
        .bind('click', function click(event) {
          const $position = $($(this)
            .attr('href'))
            .offset().top;
          $('html, body')
            .stop()
            .animate({
              scrollTop: $position - $offset,
            }, 600);
          event.preventDefault();
        });
    };

    $(document)
      .on('click', '.navbar-collapse.in', function hideMenu(e) {
        if ($(e.target)
          .is('a')) {
          $(this)
            .collapse('hide');
        }
      });

    const handleCarousel = () => {
      const $item = $('.slogan-item');
      let wHeight = $(window)
        .height();
      $item.height(wHeight);

      $(window)
        .on('resize', () => {
          wHeight = $(window)
            .height();
          $item.height(wHeight);
        });
    };

    return {
      init() {
        handleCarousel();
        handleHeaderOnScroll();
        handleOnePageHeader();

        $(window)
          .scroll(() => {
            handleHeaderOnScroll();
          });
      },
    };
  })();

  $(document)
    .ready(() => {
      Layout.init();
    });
});
