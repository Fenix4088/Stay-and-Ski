
  $(document).ready(function(){

    // Animation 
    AOS.init({
      offset: 200,
      duration: 600,
      easing: 'ease-in-sine',
    });
    
    // Owl Carousle 
    $(".owl-carousel").owlCarousel({
      loop: true,
      items: 1,
      dotsEach: true
    });


    // MOBILE MENUE ACTION ON CLICK
    const hamburgerBtn = document.querySelector('.header__burger');
    const mobileMenu = document.querySelector('.header__navigation-menue');
    const bodyElement = document.querySelector('body');
    const overlayElement = document.querySelector('.overlay');
    const checkedImput = document.querySelector('.header__burger-checkbox');

    hamburgerBtn.addEventListener('click', function(){
      mobileMenu.classList.toggle('active');
      bodyElement.classList.toggle('no-scroll');
      overlayElement.classList.toggle('active');

    })

    window.addEventListener('resize', function(){
      mobileMenu.classList.remove('active');
      bodyElement.classList.remove('no-scroll');
      overlayElement.classList.remove('active');
      checkedImput.checked = false;
    })

    // FIXED NAVIGATION 
    window.onscroll = function showNav() {
      let navFixed = document.querySelector('.fixed-wrapper');
      

      if(window.pageYOffset > 200) {
          navFixed.classList.add('nav-fixed');
      } else {
          navFixed.classList.remove('nav-fixed');
      }
  };

  // PAGE NAVIGATION 

  $('#page-nav').onePageNav({
    currentClass: 'active',
    changeHash: false,
    scrollSpeed: 750,
    scrollThreshold: 0.5,
    filter: '',
    easing: 'swing',
    begin: function () {},
    end: function () {},
    scrollChange: function ($currentListItem) {}
  });



  });
 
