const CART_STORAGE_KEY = 'lazez_cart';
const WHATSAPP_NUMBER = '+201020614188';

let cart = [];

// Initialize cart from local storage
function initCart() {
    const stored = localStorage.getItem(CART_STORAGE_KEY);
    if (stored) {
        cart = JSON.parse(stored);
    }
    updateCartUI();
}

// Add item to cart
function addToCart(item, variantIndex = null) {
    let cartItem;

    let price = item.price;
    let variantName = null;
    let itemId = item.id;

    if (variantIndex !== null && item.prices) {
        price = item.prices[variantIndex];
        variantName = item.variants[variantIndex];
        itemId = `${item.id}_${variantIndex}`;
    }

    const existing = cart.find(i => i.itemId === itemId);

    if (existing) {
        existing.quantity++;
    } else {
        cartItem = {
            itemId: itemId,
            originalId: item.id,
            name: item.name,
            price: price,
            variant: variantName,
            quantity: 1
        };
        cart.push(cartItem);
    }

    saveCart();
    updateCartUI();
    showToast(`Added ${item.name} to cart`);
}

// Remove or decrease
function updateItemQuantity(itemId, change) {
    const index = cart.findIndex(i => i.itemId === itemId);
    if (index === -1) return;

    cart[index].quantity += change;

    if (cart[index].quantity <= 0) {
        cart.splice(index, 1);
    }

    saveCart();
    updateCartUI();
}

function removeItem(itemId) {
    const index = cart.findIndex(i => i.itemId === itemId);
    if (index !== -1) {
        cart.splice(index, 1);
        saveCart();
        updateCartUI();
    }
}

function saveCart() {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
}

function getCartTotal() {
    return cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
}

function getCartCount() {
    return cart.reduce((sum, item) => sum + item.quantity, 0);
}

// WhatsApp Integration
function checkout() {
    if (cart.length === 0) {
        alert("Your cart is empty!");
        return;
    }

    let message = "*New Order from Website:*\n\n";

    cart.forEach(item => {
        const variantStr = item.variant ? ` (${item.variant})` : '';
        message += `- ${item.name}${variantStr}: ${item.quantity} x ${item.price} EGP = ${item.quantity * item.price} EGP\n`;
    });

    message += `\n*Total: ${getCartTotal()} EGP*`;

    const encodedMessage = encodeURIComponent(message);
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;

    window.open(url, '_blank');
}

// UI Updates
function updateCartUI() {
    // Update Floating Icon Count
    const countBadge = document.getElementById('cart-count');
    if (countBadge) {
        const count = getCartCount();
        countBadge.textContent = count;
        countBadge.style.display = count > 0 ? 'flex' : 'none';

        // Mobile menu also, if separate? Currently reused.
    }

    // Always try to render modal if elements exist
    renderCartModal();
}

function toggleCart() {
    const overlay = document.getElementById('cart-modal-overlay');
    if (!overlay) return;

    const isOpen = overlay.classList.contains('open');
    if (isOpen) {
        overlay.classList.remove('open');
    } else {
        renderCartModal();
        overlay.classList.add('open');
    }
}

function closeCart(e) {
    const overlay = document.getElementById('cart-modal-overlay');
    if (e.target === overlay) {
        overlay.classList.remove('open');
    }
}

function renderCartModal() {
    const cartItemsContainer = document.getElementById('cart-items-container');
    const cartTotalEl = document.getElementById('cart-total');

    if (!cartItemsContainer || !cartTotalEl) return;

    cartItemsContainer.innerHTML = '';

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<p style="text-align:center; margin-top: 20px;">Your cart is empty.</p>';
    } else {
        cart.forEach(item => {
            const el = document.createElement('div');
            el.className = 'cart-item';
            const variantTxt = item.variant ? `<br><small>${item.variant}</small>` : '';
            // Note: Update quantity buttons use item.itemId
            el.innerHTML = `
                <div class="cart-item-details">
                    <h4>${item.name}</h4>
                    <p>${item.price} EGP ${variantTxt}</p>
                </div>
                <div class="cart-controls">
                    <button class="qty-btn" onclick="updateItemQuantity('${item.itemId}', -1)">-</button>
                    <span>${item.quantity}</span>
                    <button class="qty-btn" onclick="updateItemQuantity('${item.itemId}', 1)">+</button>
                    <button class="qty-btn" style="color:red; background:none;" onclick="removeItem('${item.itemId}')">×</button>
                </div>
            `;
            cartItemsContainer.appendChild(el);
        });
    }
    cartTotalEl.textContent = `${getCartTotal()} EGP`;
}

// Simple Toast Notification
function showToast(message) {
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = message;
    document.body.appendChild(toast);

    // Trigger reflow
    toast.offsetHeight;

    toast.classList.add('show');

    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => toast.remove(), 300);
    }, 2000);
}

