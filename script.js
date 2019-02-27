var book1 = {
    "name": "The Little Prince",
    "category": "book",
    "price": 100,
    "picture_url": "https://images-na.ssl-images-amazon.com/images/I/710H4c%2BmDeL.jpg"
};
var book2 = {
    "name": "The City Always Wins",
    "category": "book",
    "price": 250,
    "picture_url": "https://www.easons.com/globalassets/5637150827/all/books/fiction/fiction-a-to-z/contemporary-fiction/9780571335176.jpg"
};
var book3 = {
    "name": "The Map of Love",
    "category": "book",
    "price": 100,
    "picture_url": "https://images-na.ssl-images-amazon.com/images/I/710H4c%2BmDeL.jpg"
};
var movie1 = {
    "name": "Brooklyn Nine-Nine",
    "category": "movie",
    "price": 200,
    "picture_url": "https://m.media-amazon.com/images/M/MV5BMGU3NGYyYTYtYjIzMS00ZmUwLTlmMjAtZDhhMzFiNWI0NzNkXkEyXkFqcGdeQXVyMzQ2MDI5NjU@._V1_.jpg"
};
var movie2 = {
    "name": "La Casa De Papel",
    "category": "movie",
    "price": 150,
    "picture_url": "https://i.ebayimg.com/images/i/163093272041-0-1/s-l1000.jpg"
};
var movie3 = {
    "name": "The Good Place",
    "category": "movie",
    "price": 200,
    "picture_url": "https://images-na.ssl-images-amazon.com/images/I/91DHcyLCfaL._SL1500_.jpg"
};
var album1 = {
    "name": "Don't Smile At Me",
    "category": "album",
    "price": 300,
    "picture_url": "https://cdn.shopify.com/s/files/1/2171/7009/products/dontsmile-vinyl_grande.png?v=1532122195"
};
var album2 = {
    "name": "Solstice",
    "category": "album",
    "price": 250,
    "picture_url": "https://sidekick-music.com/wp-content/uploads/2018/09/Down.jpg"
};
var album3 = {
    "name": "Tame Impala",
    "category": "album",
    "price": 100,
    "picture_url": "https://dx72k0ec4onep.cloudfront.net/product/1616/28332732/8WQFMW-1478305742-1280x1280-602547394897.jpg"
};

$("#userInput").on("keyup", function () {
    var searchInput = $(this).val().toLowerCase();
    $(".product .name").each(function () {
        var s = $(this).text().toLowerCase();
        if (s.indexOf(searchInput) != -1) {
            $(this).parent().show();
        }
        else {
            $(this).parent().hide();
        }
    })
});