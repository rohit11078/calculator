// ======================================
// PIZZA HUB - SHOPPING CART
// ======================================


// Cart array
let cart = [];


// ======================================
// ADD TO CART
// ======================================

function addToCart(name, price) {

    // Check whether pizza already exists
    let existingItem = cart.find(
        item => item.name === name
    );


    if (existingItem) {

        // Increase quantity
        existingItem.quantity++;

    } else {

        // Add new item
        cart.push({

            name: name,

            price: price,

            quantity: 1

        });

    }


    updateCart();


    // Show message
    alert(name + " added to cart 🛒");


    // Scroll to cart
    document
        .getElementById("cart")
        .scrollIntoView({
            behavior: "smooth"
        });
}


// ======================================
// UPDATE CART
// ======================================

function updateCart() {

    const cartItems =
        document.getElementById("cartItems");

    const cartTotal =
        document.getElementById("cartTotal");

    const totalItems =
        document.getElementById("totalItems");

    const cartCount =
        document.getElementById("cartCount");


    // Clear old cart
    cartItems.innerHTML = "";


    // Empty cart
    if (cart.length === 0) {

        cartItems.innerHTML = `

            <div class="empty-cart">

                <p>Your cart is empty.</p>

                <button onclick="scrollToMenu()">
                    Browse Menu
                </button>

            </div>

        `;


        cartTotal.innerText = "0";

        totalItems.innerText = "0";

        cartCount.innerText = "0";

        return;
    }


    let total = 0;

    let itemCount = 0;


    // Display every cart item
    cart.forEach((item, index) => {

        let itemTotal =
            item.price * item.quantity;


        total += itemTotal;

        itemCount += item.quantity;


        let cartItem =
            document.createElement("div");


        cartItem.className =
            "cart-item";


        cartItem.innerHTML = `

            <div class="cart-info">

                <h3>
                    ${item.name}
                </h3>

                <p>
                    ₹${item.price} per pizza
                </p>

            </div>


            <div class="quantity">

                <button
                    onclick="decreaseQuantity(${index})"
                >
                    −
                </button>


                <span>
                    ${item.quantity}
                </span>


                <button
                    onclick="increaseQuantity(${index})"
                >
                    +
                </button>

            </div>


            <div class="item-total">

                ₹${itemTotal}

            </div>


            <button
                class="remove-btn"
                onclick="removeItem(${index})"
            >
                🗑️ Remove
            </button>

        `;


        cartItems.appendChild(cartItem);

    });


    // Update totals

    cartTotal.innerText =
        total;


    totalItems.innerText =
        itemCount;


    cartCount.innerText =
        itemCount;


    // Checkout total

    document.getElementById("checkoutTotal")
        .innerText = total;
}


// ======================================
// INCREASE QUANTITY
// ======================================

function increaseQuantity(index) {

    cart[index].quantity++;

    updateCart();
}


// ======================================
// DECREASE QUANTITY
// ======================================

function decreaseQuantity(index) {

    if (cart[index].quantity > 1) {

        cart[index].quantity--;

    } else {

        cart.splice(index, 1);

    }


    updateCart();
}


// ======================================
// REMOVE ITEM
// ======================================

function removeItem(index) {

    let itemName =
        cart[index].name;


    cart.splice(index, 1);


    updateCart();


    alert(itemName + " removed from cart.");
}


// ======================================
// SHOW CHECKOUT
// ======================================

function showCheckout() {

    if (cart.length === 0) {

        alert(
            "Your cart is empty. Please add a pizza first!"
        );

        return;
    }


    // Calculate latest total

    updateCart();


    // Show checkout

    document.getElementById("checkout")
        .style.display = "block";


    // Scroll

    document
        .getElementById("checkout")
        .scrollIntoView({
            behavior: "smooth"
        });
}


// ======================================
// PLACE ORDER
// ======================================

document
    .getElementById("checkoutForm")
    .addEventListener(
        "submit",
        function(event) {

            event.preventDefault();


            // Check cart

            if (cart.length === 0) {

                alert(
                    "Your cart is empty!"
                );

                return;
            }


            // Get customer information

            const customerName =
                document
                    .getElementById("customerName")
                    .value
                    .trim();


            const customerPhone =
                document
                    .getElementById("customerPhone")
                    .value
                    .trim();


            const customerAddress =
                document
                    .getElementById("customerAddress")
                    .value
                    .trim();


            const paymentMethod =
                document
                    .getElementById("paymentMethod")
                    .value;


            // Calculate total

            let total = 0;

            let totalQuantity = 0;


            let orderItemsHTML = "";


            cart.forEach(item => {

                const itemTotal =
                    item.price *
                    item.quantity;


                total += itemTotal;

                totalQuantity +=
                    item.quantity;


                orderItemsHTML += `

                    <p>
                        🍕 ${item.name}
                        × ${item.quantity}
                        = ₹${itemTotal}
                    </p>

                `;

            });


            // Generate order ID

            const orderID =
                "PH" +
                Math.floor(
                    100000 +
                    Math.random() * 900000
                );


            // Current date

            const orderDate =
                new Date()
                    .toLocaleString(
                        "en-IN"
                    );


            // Display order confirmation

            document
                .getElementById("orderDetails")
                .innerHTML = `

                    <p>
                        <strong>
                            Order ID:
                        </strong>

                        ${orderID}
                    </p>


                    <p>
                        <strong>
                            Order Date:
                        </strong>

                        ${orderDate}
                    </p>


                    <p>
                        <strong>
                            Customer:
                        </strong>

                        ${customerName}
                    </p>


                    <p>
                        <strong>
                            Mobile:
                        </strong>

                        ${customerPhone}
                    </p>


                    <p>
                        <strong>
                            Address:
                        </strong>

                        ${customerAddress}
                    </p>


                    <p>
                        <strong>
                            Payment:
                        </strong>

                        ${paymentMethod}
                    </p>


                    <div class="order-items">

                        <h3>
                            Ordered Items
                        </h3>

                        ${orderItemsHTML}

                    </div>


                    <p>
                        <strong>
                            Total Items:
                        </strong>

                        ${totalQuantity}
                    </p>


                    <p class="order-total">

                        Total Amount:
                        ₹${total}

                    </p>


                    <p>
                        🚚 Your order has been
                        successfully placed!
                    </p>

                `;


            // Hide checkout

            document
                .getElementById("checkout")
                .style.display = "none";


            // Show confirmation

            document
                .getElementById("confirmation")
                .style.display = "block";


            // Empty cart

            cart = [];


            updateCart();


            // Reset form

            document
                .getElementById("checkoutForm")
                .reset();


            // Scroll to confirmation

            document
                .getElementById("confirmation")
                .scrollIntoView({
                    behavior: "smooth"
                });

        }
    );


// ======================================
// CONTINUE SHOPPING
// ======================================

function continueShopping() {

    // Hide confirmation

    document
        .getElementById("confirmation")
        .style.display = "none";


    // Go to menu

    document
        .getElementById("menu")
        .scrollIntoView({
            behavior: "smooth"
        });
}


// ======================================
// ORDER NOW
// ======================================

function scrollToMenu() {

    document
        .getElementById("menu")
        .scrollIntoView({
            behavior: "smooth"
        });
}


// ======================================
// INITIAL CART
// ======================================

updateCart();