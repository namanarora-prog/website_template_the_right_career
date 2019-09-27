$(document).ready(function () {
        
    $(this).scrollTop(0);
    $("a[href$='#no']").addClass('active')

    //Dropdown animation
    $('ul.nav li.dropdown').hover(function () {
        $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn(500);
    }, function () {
        $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut(500);
    });

    //Carousel
    $('.carousel').carousel({
        interval: 4000,
        pause: 'hover'
    });



    //scrolling animations
    $(window).scroll(function (event) {
        var scroll = $(window).scrollTop();
        if (scroll >= 50) {
            $('#main_nav #logo').css({ "height": "50px", "width": "97px" })
            $('#main_nav.navbar').removeClass('bg-light navbar-light')
            $('#main_nav.navbar').addClass('bg-dark navbar-dark')
            $('#main_nav .dropdown-menu').removeClass('bg-light')
            $('#main_nav .dropdown-menu').addClass('bg-dark')
            $('#main_nav .dropdown-menu a').css({ "color": "white" });
            $('#main_nav').removeClass('mt-5')
            $('#main_nav .dropdown-menu a').mouseover(function () {
                $(this).css({ "color": "white" });
            })
            $('#main_nav .dropdown-menu a').mouseout(function () {
                $(this).css({ "color": "white" });
            })
            $("a[href$='#ap_test']").removeClass('mt-5');
            $("a[href$='#ap_test']").addClass('mt-2');
        }
        if (scroll < 50) {
            $('#main_nav #logo').css({ "height": "100px", "width": "177px" })
            $('#main_nav.navbar').removeClass('bg-dark navbar-dark')
            $('#main_nav.navbar').addClass('bg-light navbar-light')
            $('#main_nav .dropdown-menu').removeClass('bg-dark')
            $('#main_nav .dropdown-menu').addClass('bg-light')
            $('#main_nav .dropdown-menu a').css({ "color": "black" });
            $('#main_nav').addClass('mt-5')
            $('#main_nav .dropdown-menu a').mouseover(function () {
                $(this).css({ "color": "white" });
            })
            $('#main_nav .dropdown-menu a').mouseout(function () {
                $(this).css({ "color": "black" });
            })
            $("a[href$='#ap_test']").removeClass('mt-2');
            $("a[href$='#ap_test']").addClass('mt-5');
        }

        var current = $(this).scrollTop();

        $('section').each(function () {
            var top = $(this).offset().top - 90
            //var bottom = $(this).outerHeight();
            if (current >= top) {
                $('#main_nav').find('a').removeClass('active')
                $('#main_nav').find('a[href="#' + $(this).attr('id') + '"]').addClass('active')
            }

            if ($("a[href$='#ap_test'],a[href$='#ca_cc'],a[href$='#cai']").hasClass('active')) {
                $('#services').addClass('active')
            }
            else{
                $('#services').removeClass('active')
            }
        })
    });

    //nav link click function
    $('#main_nav').find('a').on('click', function () {
        $('#main_nav a').removeClass('active')
        $(this).addClass('active')
    })

    //nav link click animation
    $('#main_nav a').on('click', function (event) {
        if (this.hash !== '') {
            event.preventDefault();

            const hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top - 75
            }, 800, function () {
                window.location.hash = hash - 75
            });
        }
        if ($("a[href$='#ap_test'],a[href$='#ca_cc'],a[href$='#cai']").hasClass('active')) {
            $('#services').addClass('active')
        }
    });
    var btn = $('#button');
    
    $(window).scroll(function () {
        if ($(window).scrollTop() > 300) {
            btn.addClass('show');
        } else {
            btn.removeClass('show');
        }
    });

    btn.on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({ scrollTop: 0 }, '3aAAZ00');
    });
})