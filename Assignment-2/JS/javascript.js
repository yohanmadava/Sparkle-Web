$(document).ready(function(){
    if ($('div').hasClass('navigationBar')) {
        navbar.init();
    }
});

var navbar = {
    init: function(){
        navbar.navigation();
    },

    navigation: function(){
        $('.ham , .back-open-nav').click(function () {
            $('body').toggleClass('change').toggleClass('open-navigation');
        });
    }
}
