var products = {
    "books": [
            {
        "name": "The Little Prince",
        "category": "books",
        "price": "100 L.E.",
        "picture_url": "https://images-na.ssl-images-amazon.com/images/I/710H4c%2BmDeL.jpg",
        "id": "books1",
        "description": "The Little Prince, French Le Petit Prince, fable and modern classic by French aviator and writer Antoine de Saint-Exupéry that was published with his own illustrations in French as Le Petit Prince in 1943. The simple tale tells the story of a child, the little prince, who travels the universe gaining wisdom. The novella has been translated into hundreds of languages and has sold some 200 million copies worldwide, making it one of the best-selling books in publishing history."
    },
            {
        "name": "The City Always Wins",
        "category": "books",
        "price": "250 LE",
        "picture_url": "https://www.easons.com/globalassets/5637150827/all/books/fiction/fiction-a-to-z/contemporary-fiction/9780571335176.jpg",
        "id": "books2",
        "description": "The City Always Wins is a novel from the front line of a revolution. Deeply enmeshed in the 2011 uprising in Tahrir Square, Mariam and Khalil move through Cairo’s surging streets and roiling political underground, their lives burning with purpose, their city alive in open revolt, the world watching, listening, as they chart a course into an unknown future. They are―they believe―fighting a new kind of revolution; they are players in a new epic in the making."
    },
            {
        "name": "The Map of Love",
        "category": "books",
        "price": "100 LE",
        "picture_url": "https://images-na.ssl-images-amazon.com/images/I/71Zh1DdRD9L.jpg",
        "id": "books3",
        "description": "At either end of the twentieth century, two women fall in love with men outside their familiar worlds. In 1901, Anna Winterbourne, recently widowed, leaves England for Egypt, an outpost of the Empire roiling with nationalist sentiment. Far from the comfort of the British colony, she finds herself enraptured by the real Egypt and in love with Sharif Pasha al-Baroudi. Nearly a hundred years later, Isabel Parkman, a divorced American journalist and descendant of Anna and Sharif has fallen in love with Omar al-Ghamrawi, a gifted and difficult Egyptian-American conductor with his own passionate politics. In an attempt to understand her conflicting emotions and to discover the truth behind her heritage, Isabel, too, travels to Egypt, and enlists Omar's sister's help in unravelling the story of Anna and Sharif's love."
    },
],
    "movies": [
            {
        "name": "Brooklyn Nine-Nine",
        "category": "movies",
        "price": "200 LE",
        "picture_url": "https://m.media-amazon.com/images/M/MV5BMGU3NGYyYTYtYjIzMS00ZmUwLTlmMjAtZDhhMzFiNWI0NzNkXkEyXkFqcGdeQXVyMzQ2MDI5NjU@._V1_.jpg",
        "id": "movies1",
        "description": "Jake Peralta, an immature, but talented N.Y.P.D. detective in Brooklyn's 99th Precinct, comes into immediate conflict with his new commanding officer, the serious and stern Captain Ray Holt."
    },
            {
        "name": "La Casa De Papel",
        "category": "movies",
        "price": "150 LE",
        "picture_url": "https://i.ebayimg.com/images/i/163093272041-0-1/s-l1000.jpg",
        "id": "movies2",
        "description": "A group of very peculiar robbers assault the Factory of Moneda and Timbre to carry out the most perfect robbery in the history of Spain and take home 2.4 billion euros."
    },
            {
        "name": "The Good Place",
        "category": "movies",
        "price": "200 LE",
        "picture_url": "https://images-na.ssl-images-amazon.com/images/I/91DHcyLCfaL._SL1500_.jpg",
        "id": "movies3",
        "description": "Four people and their otherworldly frienemy struggle in the afterlife to define what it means to be good."
    },
],
    "albums": [
            {
        "name": "Don't Smile At Me",
        "category": "albums",
        "price": "300 LE",
        "picture_url": "https://cdn.shopify.com/s/files/1/2171/7009/products/dontsmile-vinyl_grande.png?v=1532122195",
        "id": "albums1",
        "description": "Don't Smile at Me (stylized as dont smile at me) is the debut extended play by American singer and songwriter Billie Eilish. It was released on August 11, 2017 through Interscope Records, and contains several of her previously released singles, including 'Ocean Eyes', 'Bellyache', 'Watch' and 'idontwannabeyouanymore'. The track 'My Boy' was used in the fourth episode of the third season of the American television series Shadowhunters."
    },
            {
        "name": "Solstice",
        "category": "albums",
        "price": "250 LE",
        "picture_url": "https://sidekick-music.com/wp-content/uploads/2018/09/Down.jpg",
        "id": "albums2",
        "description": "With over 20 Million streams on spotify and a successful debut album, Justine Rousseau and Benjamin Cholet (Napkey) are back with a retro-futuristic electro-pop record documenting the journey of the young robot ‘SOL’, as he endeavours to find the complete understanding of being human."
    },
            {
        "name": "Currents",
        "category": "albums",
        "price": "100 LE",
        "picture_url": "https://dx72k0ec4onep.cloudfront.net/product/1616/28332732/8WQFMW-1478305742-1280x1280-602547394897.jpg",
        "id": "albums3",
        "description": "Currents is the third studio album by Australian rock band Tame Impala, released on 17 July 2015 by Modular Recordings through Universal Music Australia in Australia, Fiction Records in Europe and Interscope Records in the United States. Like the group's previous two albums, Currents was written, recorded, performed, and produced by primary member Kevin Parker. For the first time, Parker also mixed the music. It was also the first time that Parker recorded all instruments by himself; the album featured no other collaborators."
    }
]
};

//product filtering from navbar dropdown menu item

$('.dropdown-item').on('click', function (x) {
    if (x.target.innerHTML === "All Products") {
        $(".books").show();
        $(".movies").show();
        $(".albums").show();
    }
    if (x.target.innerHTML === "Books") {
        $(".books").show();
        $(".movies").hide();
        $(".albums").hide();
    }
    if (x.target.innerHTML === "Movies") {
        $(".movies").show();
        $(".books").hide();
        $(".albums").hide();
    }
    if (x.target.innerHTML === "Albums") {
        $(".albums").show();
        $(".movies").hide();
        $(".books").hide();
    }
});

//for filtering with the select option, uncomment the form in index.html and uncomment the code below. It is working but looks ugly, thought it would be more user-friendly to incorporate filtering through the menu.

// $('#inlineFormCustomSelect').on('change', function (event) {
//     event.preventDefault();
//     var userSelectOption = event.target.value;
//     if (userSelectOption === "categ") {
//         $(".books").show();
//         $(".movies").show();
//         $(".albums").show();
//     }
//     if (userSelectOption === "books") {
//         $(".books").show();
//         $(".movies").hide();
//         $(".albums").hide();
//     }
//     if (userSelectOption === "movies") {
//         $(".movies").show();
//         $(".books").hide();
//         $(".albums").hide();
//     }
//     if (userSelectOption === "albums") {
//         $(".albums").show();
//         $(".movies").hide();
//         $(".books").hide();
//     }
// });

//adding products to the page
$(window).on('load', function () {
    addToPage();
});
function addToPage() {
    document.querySelector("#cart .price").innerHTML = localStorage.getItem("price");
    // for (var keys in products) {
    //     var appendToDropDown = '<a  href="" class="dropdown-item ' + keys + '">' + keys + '</a>';
    //     $(".dropdown-menu").append(appendToDropDown);
    // }
    var arr = Object.entries(products);
    for (var j = 0; j < Object.keys(products).length; j++) {
        for (var i = 0; i < Object.entries(products)[j][1].length; i++) {
            var id = arr[j][1][i].category + [i + 1];
            var cardContent = '<div class="col-4">\
								<div id="'+ i + '" class="card p-4 border-0 product" style="width: 18rem;">\
									<a href="details.html?id='+ id + '"><img class="card-img-top img"  alt="Card image cap"></a> \
								  	<div> \
									    <h5 class="name"></h5> \
                                        <p class="card-text category capitalize"></p> \
                                        <p class="card-text price"></p> \
									    <a href="details.html?id='+ id + '" class="btn btn-outline-dark btn-sm">Details</a> \
								  	</div>\
								</div>\
							 </div>'
            $('#content').append(cardContent);
            $('#' + i).attr("id", arr[j][1][i].category + [i + 1]);
            $('#' + arr[j][1][i].category + [i + 1]).addClass(arr[j][1][i].category);
            $('#' + arr[j][1][i].category + [i + 1] + ' .name').text(arr[j][1][i].name);
            $('#' + arr[j][1][i].category + [i + 1] + ' .category').text(arr[j][1][i].category);
            $('#' + arr[j][1][i].category + [i + 1] + ' .price').text(arr[j][1][i].price);
            $('#' + arr[j][1][i].category + [i + 1] + ' .img').attr('src', arr[j][1][i].picture_url);
        }
    }
}

//code for search:
$(document).ready(function () {

$("#search-bar").on("keyup", function () {
    var searchInput = $(this).val().toLowerCase();
    $(".product .name").each(function () {
        var s = $(this).text().toLowerCase();
        console.log(s);
        //s here refers to the titles of all products in each iteration
        if (s.indexOf(searchInput) != -1) {
            console.log(this);
            $(this).parent().parent().show();
        }
        else {
            $(this).parent().parent().hide();
        }
    })
})
});


//details page 

function addToDetails() {
    var querystring = window.location.search.substring(1);
    var equalIndex = querystring.indexOf('=');
    var idValue = querystring.slice(equalIndex + 1);
    var arr = Object.entries(products);
    for (var j = 0; j < Object.keys(products).length; j++) {
        for (var i = 0; i < Object.entries(products)[j][1].length; i++) {
            if (idValue === arr[j][1][i].id) {
                $('#details .product-name').text(arr[j][1][i].name);
                $('#details .category').text(arr[j][1][i].category);
                $('#details .price').text(arr[j][1][i].price);
                $('#details .picture_url').attr('src', arr[j][1][i].picture_url);
                $('#details .description').text(arr[j][1][i].description);
            }
        }
    }

};

$("#addtocart").on('click', function (event) {
    event.preventDefault();
    var itemPrice = document.querySelector('#details .price').innerHTML;
    var itemName = document.querySelector('#details .product-name').innerHTML;
    var imageSource = document.querySelector('#details .picture_url').src;
    localStorage.setItem('price', itemPrice);
    localStorage.setItem('name', itemName);
    localStorage.setItem('picture_url', imageSource);
    document.querySelector("#cart .price").innerHTML = localStorage.getItem("price");
});


function checkout() {
    document.querySelector('#checkout .picture_url').src = localStorage.getItem("picture_url");
    document.querySelector('#checkout .name').innerHTML = localStorage.getItem("name");
    document.querySelector('#checkout .price').innerHTML = localStorage.getItem("price");
    document.querySelector('.order-summary .total').innerHTML = localStorage.getItem("price");
    // document.querySelector('#sum .sub-total').innerHTML = localStorage.getItem("price");
    // document.querySelector('#sum .total').innerHTML = localStorage.getItem("price");
}



















// //cart
// var itemCount = 0;
// var priceTotal = 0;

// // Add Item to Cart
// $('.add').click(function () {
//     itemCount++;

//     $('#itemCount').text(itemCount).css('display', 'block');
//     $(this).siblings().clone().appendTo('#cartItems').append('<button class="removeItem">Remove Item</button>');

//     // Calculate Total Price
//     var price = parseInt($(this).siblings().find('.price').text());
//     priceTotal += price;
//     $('#cartTotal').text("Total: €" + priceTotal);
// });



// // Hide and Show Cart Items
// $('.openCloseCart').click(function () {
//     $('#shoppingCart').toggle();
// });


// // Empty Cart
// $('#emptyCart').click(function () {
//     itemCount = 0;
//     priceTotal = 0;

//     $('#itemCount').css('display', 'none');
//     $('#cartItems').text('');
//     $('#cartTotal').text("Total: €" + priceTotal);
// });



// // Remove Item From Cart
// $('#shoppingCart').on('click', '.removeItem', function () {
//     $(this).parent().remove();
//     itemCount--;
//     $('#itemCount').text(itemCount);

//     // Remove Cost of Deleted Item from Total Price
//     var price = parseInt($(this).siblings().find('.price').text());
//     priceTotal -= price;
//     $('#cartTotal').text("Total: €" + priceTotal);

//     if (itemCount == 0) {
//         $('#itemCount').css('display', 'none');
//     }
// });