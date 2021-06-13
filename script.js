$(function () {
    $('.zdjecie img').mousover(function () {
        var old = $(this).attr('src');
        var news = old.replace('milk', 'ee');
        $('#popup img').attr('src', news);
        $('#popup').show();
    }).mousout(function () {
        $('#popup').hide();
    })
})