const product = [
    {
        id: 0,
        image: 'image/1.jpg',
        title: 'z flip foldable mobil',
        price: 120,
    },
    {
        id: 1,
        image: 'image/2.jpg',
        title: 'air pods pro',
        price: 60,
    },
    {
        id: 2,
        image: 'image/3.jpg',
        title: '250D DSLR Camera',
        price: 230,
    },
    {
        id: 3,
        image: 'image/4.jpg',
        title: 'Head Phones',
        price: 100,
    }
];

const categories = [...new Set(product.map((item) => item))];

let i = 0;
const rt = document.getElementById('root');
rt.innerHTML = categories.map((item) => {
    const { image, title, price } = item;
    return `
        <div class="box">
            <div class="img-box">
                <img class="images" src="${image}" />
            </div>
            <div class="bottom">
                <p>${title}</p>
                <h2>$${price}.00</h2>
                <button onclick="addtocart(${i++})">Add to cart</button>
            </div>
        </div>
    `;
}).join("");

let cart = [];

function addtocart(index) {
    cart.push(product[index]);
    displaycart();
    updateCartCount();
}

function displaycart() {
    if (cart.length === 0) {
        document.getElementById('cartItem').innerHTML = "Your cart is empty";
    } else {
        document.getElementById("cartItem").innerHTML = cart.map((item) => {
            const { image, title } = item;
            return `
                <div class="cart-item">
                    <img class="rowing" src="${image}" />
                    <p style="font-size:12px;">${title}</p>
                </div>
            `;
        }).join("");
    }
}

function updateCartCount() {
    document.getElementById('count').innerText = cart.length;
}
