const menuData = [
    {
        category: "BIG BURGER",
        items: [
            { id: "bb1", name: "Classic Beef Burger", price: 99, image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=500&q=60" },
            { id: "bb2", name: "Cheese Beef Burger", price: 127, image: "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=500&q=60" },
            { id: "bb3", name: "Double Beef Burger", price: 129, image: "https://images.unsplash.com/photo-1534790566855-4cb788d389ec?auto=format&fit=crop&w=500&q=60" },
            { id: "bb4", name: "Chicken Burger", price: 129, image: "https://images.unsplash.com/photo-1615297928064-24977384d0f9?auto=format&fit=crop&w=500&q=60" }
        ]
    },
    {
        category: "STEAK & CHICKEN SANDWICH",
        items: [
            { id: "sc1", name: "Chicken Fajita Sandwich", price: 79, image: "https://images.unsplash.com/photo-1553909489-cd47e3b2e525?auto=format&fit=crop&w=500&q=60" },
            { id: "sc2", name: "Chicken Shawerma Sandwich", price: 97, image: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?auto=format&fit=crop&w=500&q=60" },
            { id: "sc3", name: "Steak Sandwich", price: 99, image: "https://images.unsplash.com/photo-1603064750589-399518f9dd30?auto=format&fit=crop&w=500&q=60" }
        ]
    },
    {
        category: "CHICKEN CRISPY",
        items: [
            { id: "cc1", name: "Crispy Chicken Sandwich", price: 99, image: "https://images.unsplash.com/photo-1619860604242-aa51e626cb66?auto=format&fit=crop&w=500&q=60" },
            { id: "cc2", name: "Crispy Chicken Meal", price: 118, image: "https://images.unsplash.com/photo-1615996001375-c7ec13294ba5?auto=format&fit=crop&w=500&q=60" }
        ]
    },
    {
        category: "EXPRESS MIX",
        items: [
            {
                id: "em1",
                name: "Express Mix Meal",
                prices: [177, 269, 319],
                variants: ["Small", "Medium", "Large"],
                image: "https://images.unsplash.com/photo-1544025162-d76690b67f61?auto=format&fit=crop&w=500&q=60"
            }
        ]
    },
    {
        category: "EXPRESS CHEESY",
        items: [
            { id: "ec1", name: "Cheesy Chicken", price: 132, image: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=500&q=60" },
            { id: "ec2", name: "Cheesy Meat", price: 132, image: "https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?auto=format&fit=crop&w=500&q=60" }
        ]
    },
    {
        category: "RICE TO GO",
        items: [
            { id: "rg1", name: "Chicken Rice", price: 99, image: "https://images.unsplash.com/photo-1604908177453-7462950a6a3b?auto=format&fit=crop&w=500&q=60" },
            { id: "rg2", name: "Meat Rice", price: 167, image: "https://images.unsplash.com/photo-1596560548464-f010549b84d7?auto=format&fit=crop&w=500&q=60" },
            { id: "rg3", name: "Mix Rice", price: 169, image: "https://images.unsplash.com/photo-1553604113-11ad5eb9526b?auto=format&fit=crop&w=500&q=60" }
        ]
    },
    {
        category: "CHEESY RICE",
        items: [
            { id: "cr1", name: "Cheesy Chicken Rice", price: 99, image: "https://images.unsplash.com/photo-1595295333158-4742f28fbd85?auto=format&fit=crop&w=500&q=60" },
            { id: "cr2", name: "Cheesy Meat Rice", price: 152, image: "https://images.unsplash.com/photo-1603569283847-aa295f0d016a?auto=format&fit=crop&w=500&q=60" }
        ]
    },
    {
        category: "PASTA CHEESE",
        items: [
            {
                id: "pc1",
                name: "Chicken Pasta",
                prices: [87, 109, 119],
                variants: ["Small", "Medium", "Large"],
                image: "https://images.unsplash.com/photo-1473093226795-af9932fe5856?auto=format&fit=crop&w=500&q=60"
            },
            {
                id: "pc2",
                name: "Meat Pasta",
                prices: [98, 162, 167],
                variants: ["Small", "Medium", "Large"],
                image: "https://images.unsplash.com/photo-1555949258-eb67b1ef0ceb?auto=format&fit=crop&w=500&q=60"
            }
        ]
    },
    {
        category: "ITALIAN MEALS",
        items: [
            {
                id: "im1",
                name: "Italian Chicken",
                prices: [173, 212],
                variants: ["Standard", "Large"],
                image: "https://images.unsplash.com/photo-1532550907401-a500c9a57435?auto=format&fit=crop&w=500&q=60"
            },
            {
                id: "im2",
                name: "Italian Meat",
                prices: [177, 227],
                variants: ["Standard", "Large"],
                image: "https://images.unsplash.com/photo-1604908177191-508d2d47bfd4?auto=format&fit=crop&w=500&q=60"
            }
        ]
    },
    {
        category: "ORIENTAL GRILLED",
        items: [
            { id: "og1", name: "Grilled Kofta", price: 179, image: "https://images.unsplash.com/photo-1549488344-c73885b5f543?auto=format&fit=crop&w=500&q=60" },
            { id: "og2", name: "Grilled Meat", price: 199, image: "https://images.unsplash.com/photo-1558199141-391d93567ccf?auto=format&fit=crop&w=500&q=60" },
            { id: "og3", name: "Grilled Chicken", price: 207, image: "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?auto=format&fit=crop&w=500&q=60" },
            { id: "og4", name: "Mix Grill", price: 257, image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=500&q=60" }
        ]
    },
    {
        category: "ADDITIONS",
        items: [
            { id: "ad1", name: "Fries", price: 25, image: "https://images.unsplash.com/photo-1630384060421-9c086b9a8cb4?auto=format&fit=crop&w=500&q=60" },
            { id: "ad2", name: "Cheese Sauce", price: 15, image: "https://images.unsplash.com/photo-1613580468949-a2e6f4812328?auto=format&fit=crop&w=500&q=60" },
            { id: "ad3", name: "Coleslaw", price: 15, image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=500&q=60" }
        ]
    }
];

// Helper to get all items flattened
function getAllItems() {
    return menuData.flatMap(cat => cat.items);
}

function formatPrice(price) {
    return `${price} EGP`;
}

// Rendering Logic
function renderMenu(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = '';

    menuData.forEach(category => {
        const categorySection = document.createElement('div');
        categorySection.className = 'category-section';

        // Header
        const header = document.createElement('h3');
        header.className = 'category-header';
        header.textContent = category.category;
        categorySection.appendChild(header);

        // Grid
        const grid = document.createElement('div');
        grid.className = 'menu-grid';

        category.items.forEach(item => {
            grid.appendChild(createItemCard(item));
        });

        categorySection.appendChild(grid);
        container.appendChild(categorySection);
    });
}

function renderBestSellers(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    // Pick specific best sellers
    const bestSellerIds = ['bb1', 'cc2', 'im1', 'og4']; // Classic Beef, Crispy Meal, Italian Chicken, Mix Grill
    const items = [];

    menuData.forEach(cat => {
        cat.items.forEach(item => {
            if (bestSellerIds.includes(item.id)) {
                items.push(item);
            }
        });
    });

    const grid = document.createElement('div');
    grid.className = 'menu-grid';

    items.forEach(item => {
        grid.appendChild(createItemCard(item));
    });

    container.appendChild(grid);
}

function createItemCard(item) {
    const card = document.createElement('div');
    card.className = 'item-card';

    // Logic for price display
    let priceDisplay = formatPrice(item.price);
    if (item.prices) {
        priceDisplay = `${item.prices[0]} - ${item.prices[item.prices.length - 1]} EGP`;
    }

    // Variant Selector HTML if needed
    let variantSelectHTML = '';
    if (item.variants) {
        const options = item.variants.map((v, idx) =>
            `<option value="${idx}">${v} - ${item.prices[idx]} EGP</option>`
        ).join('');
        variantSelectHTML = `<select class="variant-select" id="variant-${item.id}">${options}</select>`;
    }

    // Handle Image - defaults to placeholder if not present (but now all are present)
    // Fallback for safety
    const imgSrc = item.image || "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60";

    card.innerHTML = `
    <div style="width:100%; height: 180px; overflow:hidden; border-radius: 8px; margin-bottom: 12px;">
       <img src="${imgSrc}" alt="${item.name}" loading="lazy" style="width: 100%; height: 100%; object-fit: cover;">
    </div>
    <div style="display:flex; flex-direction:column; flex:1;">
      <div class="item-name">${item.name}</div>
      <div class="item-price">${priceDisplay}</div>
      <div style="margin-top:auto;">
        ${variantSelectHTML}
        <button class="btn btn-primary" style="width:100%;" onclick="handleAddToCart('${item.id}')">Add to Cart</button>
      </div>
    </div>
  `;

    return card;
}

function handleAddToCart(itemId) {
    // Find item
    let item;
    outerInfo:
    for (const cat of menuData) {
        for (const i of cat.items) {
            if (i.id === itemId) {
                item = i;
                break outerInfo;
            }
        }
    }

    if (!item) return;

    let variantIndex = null;
    if (item.variants) {
        const select = document.getElementById(`variant-${item.id}`);
        if (select) {
            variantIndex = parseInt(select.value);
        }
    }

    addToCart(item, variantIndex);
}

// Mobile Menu Toggle
function toggleMobileMenu() {
    const navLinks = document.getElementById('nav-links');
    navLinks.classList.toggle('active');
}
