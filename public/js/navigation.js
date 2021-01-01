// Navigation Menu
const NavigationMenu = function () {
    // jQuery Handlers
    let $window = $(window);
    let $buttonMenu = $('.button-menu');
    let $buttonClose = $('.button-close');
    let $navMobile = $('.nav-mobile');
    let $overlay = $('.overlay-freeze');
    let $html = $('html');
    let $body = $(document.body);

    // Declarations
    const freezeClass = 'freeze';
    const openClass = 'menu-open';
    const mobileOffsetClass = 'offscreen';
    const navHeight = 53; // Safari bounce fix

    // State
    let isWindowFrozen = false;
    let isMobileNavOffset = false;

    // Methods
    let showMenu = function () {
        $html.addClass(freezeClass);
        $body.addClass(freezeClass);
        $navMobile.addClass(openClass);
        isWindowFrozen = true;
    };

    let hideMenu = function () {
        $html.removeClass(freezeClass);
        $body.removeClass(freezeClass);
        $navMobile.removeClass(openClass);
        isWindowFrozen = false;
    };

    // Event Tracking
    $buttonMenu.on('click touchstart', showMenu);
    $buttonClose.on('click touchstart', hideMenu);
    $overlay.on('click touchstart', hideMenu);

    // Mobile Navigation
    let lastScrollTop = 0;
    $window.on('scroll', function () {
        // Drawer behavior
        let scrolled = $('html, body').scrollTop();
        if (scrolled < lastScrollTop || scrolled < navHeight) {
            $navMobile.removeClass(mobileOffsetClass);
            isMobileNavOffset = false;
        } else if (scrolled > lastScrollTop) {
            $navMobile.addClass(mobileOffsetClass);
            isMobileNavOffset = true;
        }
        lastScrollTop = scrolled;
    });
};
