/**
 * Author: Christo Georgiev
 * Description: Fades in fixed position elements when the user scrolls to an article
 * License: MIT 2010
 * Date: 2013-05-26
 */

;(function() {

    $('.description').hide();
    $('article').first().children('.description').show();

    $(window).scroll(function () {
        var oneFourth = (window.innerHeight/4), //Halva höjden på fönstret
            currentPosition = $(window).scrollTop(), //Mäter hur långt vi scrollat
            theLine = currentPosition + oneFourth; //Skapar ett relativt tal

        $('article').each(function() {
            var articlePos = $(this).position().top, //Hämta artikelns position
                articleHeight = $(this).height(); //Hämta dess höjd
            function intersect() {
                return theLine > articlePos && theLine < articlePos + articleHeight;
                // befinner sig theLine mellan artikelns topp och artikelns botten
            }
            var visible = intersect();
            if (visible === true) {
                $(this).children('.description').clearQueue().fadeIn(600);
            } else {
                $(this).children('.description').clearQueue().hide();
            }
       })
    });
})();