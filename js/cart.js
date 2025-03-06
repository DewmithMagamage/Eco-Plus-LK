

document.querySelector('.carousel-inner').addEventListener('mouseout', function() {
    this.style.animationPlayState = 'running';
});
            let cart = [];
            const cartBtn = document.getElementById('cartBtn');
            const cartCount = document.getElementById('cartCount');
            const cartModal = document.getElementById('cartModal');
            const cartModalContent = document.getElementById('cartModalContent');
            const closeCartModal = document.getElementById('closeCartModal');
            const cartSummary = document.getElementById('cartSummary');
            const checkoutBtn = document.getElementById('checkoutBtn');
            const continueShoppingBtn = document.getElementById('continueShoppingBtn');
            const paymentModal = document.getElementById('paymentModal');
            const closePaymentModal = document.getElementById('closePaymentModal');
            const paymentForm = document.getElementById('paymentForm');
            const addToCartBtns = document.querySelectorAll('.addToCartBtn');
    
    // JavaScript to control the modal behavior
    var modal = document.getElementById('paymentModal');
    var closeButton = document.getElementById('closePaymentModal');

    // Open modal function (you can trigger this with a button click)
    function openModal() {
        modal.style.display = 'block';
    }

    // Close modal when clicking the close button (x)
    closeButton.onclick = function() {
        modal.style.display = 'none';
    }

    // Close modal if user clicks outside of the modal content
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    }

    // Optional: Close modal when pressing Escape key
    document.onkeydown = function(event) {
        if (event.key === "Escape") {
            modal.style.display = 'none';
        }
    }

            // Open Cart Modal
            cartBtn.addEventListener('click', () => {
                updateCartSummary();
                cartModal.style.display = 'block';
            });
    
            // Close Cart Modal
            closeCartModal.addEventListener('click', () => {
                cartModal.style.display = 'none';
            });
    
            // Add to Cart
            addToCartBtns.forEach(button => {
                button.addEventListener('click', function() {
                    const productElement = this.parentElement.parentElement;
                    const name = productElement.querySelector('h2').textContent;
                    const price = parseFloat(productElement.querySelector('.price').textContent.replace('$', ''));
                    const quantity = parseInt(productElement.querySelector('input[type="number"]').value);
                    const imgSrc = productElement.querySelector('img').src;
    
                    const existingProduct = cart.find(item => item.name === name);
                    if (existingProduct) {
                        existingProduct.quantity += quantity;
                    } else {
                        cart.push({ name, price, quantity, imgSrc });
                    }
    
                    cartCount.textContent = cart.reduce((total, item) => total + item.quantity, 0);
                    alert(`${name} successfully added to your cart!`);
                });
            });
    
            // Update Cart Summary
            function updateCartSummary() {
                cartSummary.innerHTML = '';
                if (cart.length === 0) {
                    cartSummary.innerHTML = '<p>Your cart is empty.</p><button class="checkout-button" id="continueShoppingBtnEmpty">Continue Shopping</button>';
                    document.getElementById('continueShoppingBtnEmpty').addEventListener('click', () => {
                        cartModal.style.display = 'none';
                    });
                } else {
                    let total = 0;
                    cart.forEach(item => {
                        total += item.price * item.quantity;
                        cartSummary.innerHTML += `
                            <div class="cart-item">
                                <img src="${item.imgSrc}" alt="${item.name}">
                                <div class="item-details">
                                    <p>${item.name}</p>
                                    <p>$${item.price.toFixed(2)}</p>
                                </div>
                                <div class="item-actions">
                                    <input type="number" value="${item.quantity}" min="1" data-name="${item.name}">
                                    <button class="removeFromCartBtn" data-name="${item.name}">Remove</button>
                                </div>
                            </div>
                        `;
                    });
                    cartSummary.innerHTML += `<h3>Total: $${total.toFixed(2)}</h3>`;
                }
            }
    
            // Remove from Cart and Update Quantity
            cartSummary.addEventListener('click', function(e) {
                if (e.target.classList.contains('removeFromCartBtn')) {
                    const name = e.target.getAttribute('data-name');
                    cart = cart.filter(item => item.name !== name);
                    cartCount.textContent = cart.reduce((total, item) => total + item.quantity, 0);
                    updateCartSummary();
                }
    
                if (e.target.tagName === 'INPUT' && e.target.type === 'number') {
                    const name = e.target.getAttribute('data-name');
                    const newQuantity = parseInt(e.target.value);
                    const cartItem = cart.find(item => item.name === name);
                    if (cartItem) {
                        cartItem.quantity = newQuantity;
                        updateCartSummary();
                    }
                }
            });
    
            // Proceed to Payment
            checkoutBtn.addEventListener('click', () => {
                if (cart.length > 0) {
                    cartModal.style.display = 'none';
                    paymentModal.style.display = 'block';
                } else {
                    alert('Your cart is empty. Please add some products before proceeding to payment.');
                }
            });
    
            // Continue Shopping
            continueShoppingBtn.addEventListener('click', () => {
                cartModal.style.display = 'none';
            });
    
            // Payment Form Submission
            paymentForm.addEventListener('submit', function (e) {
                e.prevent
                const formData = new FormData(this);
            const name = formData.get('name');
            const address = formData.get('address');
            const cardNumber = formData.get('cardNumber');
            const expiryDate = formData.get('expiryDate');
            const cvv = formData.get('cvv');

            setTimeout(() => {
                alert(`Payment successful! Thank you, ${name}, for your purchase.`);
                cart = []; // Clear the cart after successful payment
                cartCount.textContent = '0';
                updateCartSummary();
                paymentModal.style.display = 'none';
            }, 2000);
        });

        closePaymentModal.addEventListener('click', () => {
            paymentModal.style.display = 'none';
        });
nt
        window.addEventListener('click', (e) => {
            if (e.target === cartModal) {
                cartModal.style.display = 'none';
            }
            if (e.target === paymentModal) {
                paymentModal.style.display = 'none';
            }
        });


        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                cartModal.style.display = 'none';
                paymentModal.style.display = 'none';
            }
        });

 