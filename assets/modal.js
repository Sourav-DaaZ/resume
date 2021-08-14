$(document).ready(function() {
  // MODAL
  var modalText = {
    web_1: {
      title: 'Mantra Labs',
      tag: 'AI First InsurTech Products and Solutions.',
      detail:
        'Mantra Labs is an AI First InsurTech Products and Solutions Firm working with the largest Insurance companies in India & the World.',
      link: 'https://www.mantralabsglobal.com/'
    },
    web_2: {
      title: 'Mantra AI',
      tag: 'AI & ML.',
      detail:
        'Mantra.AI is a team of AI & ML developers who augment your AI/ML Practice. From consulting on niche technologies, to completely owning the AI initiative ....',
      link: 'https://www.mantra.ai/'
    },
    web_3: {
      title: 'Mantra Design',
      tag: 'Specialized Design and Development Company.',
      detail:
        'Mantra.design is an initiative of Mantra Labs and a specialized design and development company with our specialities in providing great customer experience, ....',
      link: 'https://mantra.design/'
    },
    react: {
      title: 'Globalise',
      tag: 'International share market project',
      detail:
        "Experience global investing made easy with Globalise. Globalise your wealth by investing in international stock markets. Trusted & secure platform. Easy Global investing. Highlights: Experienced Team Available, Secure Platform, Newsletter Available.",
      link: 'https://www.globalise.co/'
    },
    angular: {
      title: 'Think Ahoy',
      tag: 'Businesses Website.',
      detail:
        'Setting up or growing businesses has been daunting for many years. We believe that with Think Ahoy you can handle everything from the comforts of a couch and ....',
      link: 'https://www.thinkahoy.com/'
    },
    raligare: {
      title: 'Religare Health Insurance',
      tag: 'Health Insurance‎.',
      detail:
        'Buy Affordable Mediclaim Policy from Religare. No Paperwork. Tax Benefit u/s 80D. 4.7 Lacs + Claim Settled. 540+ Day Care Treatments. Lifetime Renewability. 5420+ Network Hospitals. Pre-Post Hospitalization. Organ Donor Cover. Cashless Hospitalization. No Claim Bonus..',
      link: 'https://www.religarehealthinsurance.com/'
    },
    aem: {
      title: 'Claims Academy',
      tag: 'Academic Website.',
      detail:
        'Focussing on developing the skills of new recruits in the operations department, the Claims Academy will ensure they can fit seamlessly into our team once their ....'
    },
    reactNative: {
      title: 'Mobile Application',
      tag: 'E-Cart Mobile Application',
      detail:
        'We offer Ecommerce mobile applications for development to manage entire system on your mobile device. Our mobile applications are developed using native App.'
    },
  };

  $('#gallery .button').on('click', function() {
    fillModal(this.id);
    $('.modal-wrap').addClass('visible');
  });

  $('.close').on('click', function() {
    $('.modal-wrap, #modal .button').removeClass('visible');
  });

  $('.mask').on('click', function() {
    $('.modal-wrap, #modal .button').removeClass('visible');
  });

  var carousel = $('#carousel'),
    slideWidth = 700,
    threshold = slideWidth / 3,
    dragStart,
    dragEnd;

  setDimensions();

  $('#next').click(function() {
    shiftSlide(-1);
  });
  $('#prev').click(function() {
    shiftSlide(1);
  });

  carousel.on('mousedown', function() {
    if (carousel.hasClass('transition')) return;
    dragStart = event.pageX;
    $(this).on('mousemove', function() {
      dragEnd = event.pageX;
      $(this).css('transform', 'translateX(' + dragPos() + 'px)');
    });
    $(document).on('mouseup', function() {
      if (dragPos() > threshold) {
        return shiftSlide(1);
      }
      if (dragPos() < -threshold) {
        return shiftSlide(-1);
      }
      shiftSlide(0);
    });
  });

  function setDimensions() {
    if (
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      )
    ) {
      slideWidth = $(window).innerWidth();
    }
    $('.carousel-wrap, .slide').css('width', slideWidth);
    $('.modal').css('max-width', slideWidth);
    $('#carousel').css('left', slideWidth * -1);
  }

  function dragPos() {
    return dragEnd - dragStart;
  }

  function shiftSlide(direction) {
    if (carousel.hasClass('transition')) return;
    dragEnd = dragStart;
    $(document).off('mouseup');
    carousel
      .off('mousemove')
      .addClass('transition')
      .css('transform', 'translateX(' + direction * slideWidth + 'px)');
    setTimeout(function() {
      if (direction === 1) {
        $('.slide:first').before($('.slide:last'));
      } else if (direction === -1) {
        $('.slide:last').after($('.slide:first'));
      }
      carousel.removeClass('transition');
      carousel.css('transform', 'translateX(0px)');
    }, 700);
  }

  function fillModal(id) {
    $('#modal .title').text(modalText[id].title);
    $('#modal .detail').text(modalText[id].detail);
    $('#modal .tag').text(modalText[id].tag);
    if (modalText[id].link)
      $('#modal .button')
        .addClass('visible')
        .parent()
        .attr('href', modalText[id].link);

    $.each($('#modal li'), function(index, value) {
      $(this).text(modalText[id].bullets[index]);
    });
    $.each($('#modal .slide'), function(index, value) {
      $(this).css({
        background:
          "url('./assets/" + id + ".png') center center/cover",
        backgroundSize: 'cover'
      });
    });
  }
});
