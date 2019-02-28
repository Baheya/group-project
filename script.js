var book1 = {
    "name": "The Little Prince",
    "category": "Book",
    "price": 100,
    "picture_url": "https://images-na.ssl-images-amazon.com/images/I/710H4c%2BmDeL.jpg",
    "id": "book-1"
};
var book2 = {
    "name": "The City Always Wins",
    "category": "Book",
    "price": 250,
    "picture_url": "https://www.easons.com/globalassets/5637150827/all/books/fiction/fiction-a-to-z/contemporary-fiction/9780571335176.jpg",
    "id": "book-2"
};
var book3 = {
    "name": "The Map of Love",
    "category": "Book",
    "price": 100,
    "picture_url": "https://images-na.ssl-images-amazon.com/images/I/71Zh1DdRD9L.jpg",
    "id": "book-3"
};
var movie1 = {
    "name": "Brooklyn Nine-Nine",
    "category": "Movie",
    "price": 200,
    "picture_url": "https://m.media-amazon.com/images/M/MV5BMGU3NGYyYTYtYjIzMS00ZmUwLTlmMjAtZDhhMzFiNWI0NzNkXkEyXkFqcGdeQXVyMzQ2MDI5NjU@._V1_.jpg",
    "id": "movie-1"
};
var movie2 = {
    "name": "La Casa De Papel",
    "category": "Movie",
    "price": 150,
    "picture_url": "https://i.ebayimg.com/images/i/163093272041-0-1/s-l1000.jpg",
    "id": "movie-2"
};
var movie3 = {
    "name": "The Good Place",
    "category": "Movie",
    "price": 200,
    "picture_url": "https://images-na.ssl-images-amazon.com/images/I/91DHcyLCfaL._SL1500_.jpg",
    "id": "movie-3"
};
var album1 = {
    "name": "Don't Smile At Me",
    "category": "Album",
    "price": 300,
    "picture_url": "https://cdn.shopify.com/s/files/1/2171/7009/products/dontsmile-vinyl_grande.png?v=1532122195",
    "id": "album-1"
};
var album2 = {
    "name": "Solstice",
    "category": "Album",
    "price": 250,
    "picture_url": "https://sidekick-music.com/wp-content/uploads/2018/09/Down.jpg",
    "id": "album-2"
};
var album3 = {
    "name": "Tame Impala",
    "category": "Album",
    "price": 100,
    "picture_url": "https://dx72k0ec4onep.cloudfront.net/product/1616/28332732/8WQFMW-1478305742-1280x1280-602547394897.jpg",
    "id": "album-3"
};

$('#book-1 .name').text(book1.name);
$('#book-1 .category').text(book1.category);
$('#book-1 .price').text(book1.price);
$('#book-1 img').attr('src', book1.picture_url);

$('#book-2 .name').text(book2.name);
$('#book-2 .category').text(book2.category);
$('#book-2 .price').text(book2.price);
$('#book-2 img').attr('src', book2.picture_url);

$('#book-3 .name').text(book3.name);
$('#book-3 .category').text(book3.category);
$('#book-3 .price').text(book3.price);
$('#book-3 img').attr('src', book3.picture_url);

$('#movie-1 .name').text(movie1.name);
$('#movie-1 .category').text(movie1.category);
$('#movie-1 .price').text(movie1.price);
$('#movie-1 img').attr('src', movie1.picture_url);

$('#movie-2 .name').text(movie2.name);
$('#movie-2 .category').text(movie2.category);
$('#movie-2 .price').text(movie2.price);
$('#movie-2 img').attr('src', movie2.picture_url);

$('#movie-3 .name').text(movie3.name);
$('#movie-3 .category').text(movie3.category);
$('#movie-3 .price').text(movie3.price);
$('#movie-3 img').attr('src', movie3.picture_url);

$('#album-1 .name').text(album1.name);
$('#album-1 .category').text(album1.category);
$('#album-1 .price').text(album1.price);
$('#album-1 img').attr('src', album1.picture_url);

$('#album-2 .name').text(album2.name);
$('#album-2 .category').text(album2.category);
$('#album-2 .price').text(album2.price);
$('#album-2 img').attr('src', album2.picture_url);

$('#album-3 .name').text(album3.name);
$('#album-3 .category').text(album3.category);
$('#album-3 .price').text(album3.price);
$('#album-3 img').attr('src', album3.picture_url);

//code to create the bootstrap grid and place it in the HTML doc,
//it works, just need to add all the objects to it:

for(var i=0; i < 3; i++) {
    var row = $("<div class='row pb-5'></div>");
    for(var j=0; j < 3; j++) {
        var column = $("<div class=col-sm></div>");
        column.append($("<div class=product></div>"));
        row.append(column);

        //to do: for each column append one object so all the products are placed in the grid with jquery?
    }
    $("#content").append(row);
}

//store all objects in an array
var bookArray = [book1, book2, book3];
var movieArray = [movie1, movie2, movie3];
var albumArray = [album1, album2, album3];

// code for adding object keys and values with their respective divs. So far I am only able to append the outermost div with a nested div (class=picture, with img tag nested inside the div) inside it. 
function add_to_page(x) {
    $('#content').append($("<div id=" + x.id + " class=" + x.category + ">").html($('<div class=picture>').html($('<img />').attr('src', x.picture_url))));
    // $('#content').append($('<div class=name></div>').text(x.name));
    // $('#book-1').append($('<div class=category></div>').text(x.category));
    // $('#book-1').append($('<div class=price></div>').text(x.price));
};
// add_to_page(book1);



//code for search:

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