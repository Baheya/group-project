var products = {
    "books": [
            {
        "name": "The Little Prince",
        "category": "books",
        "price": "100 L.E.",
        "picture_url": "https://images-na.ssl-images-amazon.com/images/I/710H4c%2BmDeL.jpg",
        "id": "books1"
    },
            {
        "name": "The City Always Wins",
        "category": "books",
        "price": "250 LE",
        "picture_url": "https://www.easons.com/globalassets/5637150827/all/books/fiction/fiction-a-to-z/contemporary-fiction/9780571335176.jpg",
        "id": "books2"
    },
            {
        "name": "The Map of Love",
        "category": "books",
        "price": "100 LE",
        "picture_url": "https://images-na.ssl-images-amazon.com/images/I/71Zh1DdRD9L.jpg",
        "id": "books3"
    },
],
    "movies": [
            {
        "name": "Brooklyn Nine-Nine",
        "category": "movies",
        "price": "200 LE",
        "picture_url": "https://m.media-amazon.com/images/M/MV5BMGU3NGYyYTYtYjIzMS00ZmUwLTlmMjAtZDhhMzFiNWI0NzNkXkEyXkFqcGdeQXVyMzQ2MDI5NjU@._V1_.jpg",
        "id": "movies1"
    },
            {
        "name": "La Casa De Papel",
        "category": "movies",
        "price": "150 LE",
        "picture_url": "https://i.ebayimg.com/images/i/163093272041-0-1/s-l1000.jpg",
        "id": "movies2"
    },
            {
        "name": "The Good Place",
        "category": "movies",
        "price": "200 LE",
        "picture_url": "https://images-na.ssl-images-amazon.com/images/I/91DHcyLCfaL._SL1500_.jpg",
        "id": "movies3"
    },
],
    "albums": [
            {
        "name": "Don't Smile At Me",
        "category": "albums",
        "price": "300 LE",
        "picture_url": "https://cdn.shopify.com/s/files/1/2171/7009/products/dontsmile-vinyl_grande.png?v=1532122195",
        "id": "albums1"
    },
            {
        "name": "Solstice",
        "category": "albums",
        "price": "250 LE",
        "picture_url": "https://sidekick-music.com/wp-content/uploads/2018/09/Down.jpg",
        "id": "albums2"
    },
            {
        "name": "Tame Impala",
        "category": "albums",
        "price": "100 LE",
        "picture_url": "https://dx72k0ec4onep.cloudfront.net/product/1616/28332732/8WQFMW-1478305742-1280x1280-602547394897.jpg",
        "id": "albums3"
    }
]
};

$('#inlineFormCustomSelect').on('change', function (event) {
    event.preventDefault();
    var userSelectOption = event.target.value;
    if (userSelectOption === "categ") {
        $(".books").show();
        $(".movies").show();
        $(".albums").show();
    }
    if (userSelectOption === "books") {
        $(".books").show();
        $(".movies").hide();
        $(".albums").hide();
    }
    if (userSelectOption === "movies") {
        $(".movies").show();
        $(".books").hide();
        $(".albums").hide();
    }
    if (userSelectOption === "albums") {
        $(".albums").show();
        $(".movies").hide();
        $(".books").hide();
    }
});

//adding products to the page
$(window).on('load', function () {
    addToPage();
});
function addToPage() {
    // document.querySelector("#cart .price").innerHTML = localStorage.getItem("price");
    for (var keys in products) {
        var appendToDropDown = '<option class="capitalize" value="' + keys + '">' + keys + '</option>';
        $("#inlineFormCustomSelect").append(appendToDropDown);
    }
    var arr = Object.entries(products);
    for (var j = 0; j < Object.keys(products).length; j++) {
        for (var i = 0; i < Object.entries(products)[j][1].length; i++) {
            var id = arr[j][1][i].category + [i + 1];
            var cardContent = '<div class="col-4">\
								<div id="'+ i + '" class="card p-4 border-0 text-center product" style="width: 18rem;">\
									<a href="details.html?id='+ id + '"><img class="card-img-top img"  alt="Card image cap"></a> \
								  	<div class="card-body"> \
									    <h5 class="card-title name"></h5> \
									    <p class="card-text category"></p> \
									    <a href="details.html?id='+ id + '" class="btn btn-primary price"></a> \
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
    $(".product .card-body .name").each(function () {
        var s = $(this).text().toLowerCase();
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
            }
        }
    }

};

$("#addtocart").on('click', function (event) {
    event.preventDefault();
    var itemPrice = document.querySelector('#details .price').innerHTML;
    console.log(itemPrice);
    var itemName = document.querySelector('#details .product-name').innerHTML;
    localStorage.setItem('price', itemPrice);
    localStorage.setItem('name', itemName);
    document.querySelector("#cart .price").innerHTML = localStorage.getItem("price");
});


function checkout() {
    document.querySelector('#checkout .name').innerHTML = localStorage.getItem("name");
    document.querySelector('#checkout .price').innerHTML = localStorage.getItem("price");
    // document.querySelector('#checkout .total').innerHTML = localStorage.getItem("price");
    // document.querySelector('#sum .sub-total').innerHTML = localStorage.getItem("price");
    // document.querySelector('#sum .total').innerHTML = localStorage.getItem("price");
}



















//cart
var itemCount = 0;
var priceTotal = 0;

// Add Item to Cart
$('.add').click(function () {
    itemCount++;

    $('#itemCount').text(itemCount).css('display', 'block');
    $(this).siblings().clone().appendTo('#cartItems').append('<button class="removeItem">Remove Item</button>');

    // Calculate Total Price
    var price = parseInt($(this).siblings().find('.price').text());
    priceTotal += price;
    $('#cartTotal').text("Total: €" + priceTotal);
});



// Hide and Show Cart Items
$('.openCloseCart').click(function () {
    $('#shoppingCart').toggle();
});


// Empty Cart
$('#emptyCart').click(function () {
    itemCount = 0;
    priceTotal = 0;

    $('#itemCount').css('display', 'none');
    $('#cartItems').text('');
    $('#cartTotal').text("Total: €" + priceTotal);
});



// Remove Item From Cart
$('#shoppingCart').on('click', '.removeItem', function () {
    $(this).parent().remove();
    itemCount--;
    $('#itemCount').text(itemCount);

    // Remove Cost of Deleted Item from Total Price
    var price = parseInt($(this).siblings().find('.price').text());
    priceTotal -= price;
    $('#cartTotal').text("Total: €" + priceTotal);

    if (itemCount == 0) {
        $('#itemCount').css('display', 'none');
    }
});