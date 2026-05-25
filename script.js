
        // --- Data ---
        const PRODUCTS = [
            { 
                id: 1, 
                name: 'Portable Car Vacuum Cleaner', 
                price: 999, 
                image: 'https://m.media-amazon.com/images/I/51xLLJOLsoL._SL1000_.jpg', 
                category: 'Auto Accessories', 
                description: 'Keep your car spotless with this high-power portable vacuum cleaner. Designed for deep cleaning, it easily reaches tight corners and under seats.',
                specs: { 'Brand': 'AutoClean', 'Recommended Uses For Product': 'Car Interior, Upholstery', 'Special Feature': 'Lightweight, HEPA Filter', 'Power Source': 'Corded Electric (12V)', 'Model Name': 'High Power Car Vacuum', 'Included Components': 'Vacuum, Brush Nozzle, Crevice Tube', 'Item Weight': '400 Grams', 'Colour': 'Black', 'Filter Type': 'Washable HEPA', 'Form Factor': 'Handheld' },
                features: ['🌪️ Strong Suction – High-power motor easily picks up dust, pet hair, and crumbs.', '🔌 12V Car Plug – Plugs directly into your car\'s cigarette lighter port.', '🧹 Multiple Attachments – Includes brush and crevice tools for hard-to-reach areas.', '🧼 Washable Filter – Reusable HEPA filter ensures long-lasting performance.', '🧳 Compact Design – Easy to store in your trunk or under the seat.'],
                reviews: [
                    { user: "Rahul S.", rating: 5, date: "12 Mar 2026", comment: "Amazing suction power! Cleaned my car seats perfectly." },
                    { user: "Amit K.", rating: 4, date: "05 Mar 2026", comment: "Good product, but the cord could be a bit longer." },
                    { user: "Priya M.", rating: 5, date: "28 Feb 2026", comment: "Very handy and easy to store in the boot." }
                ]
            },
            { 
                id: 2, 
                name: 'Electric Mini Shaver', 
                price: 649, 
                originalPrice: 1299,
                image: 'https://m.media-amazon.com/images/I/6123OHKBtlL._SL1500_.jpg', 
                images: [
                    'https://m.media-amazon.com/images/I/6123OHKBtlL._SL1500_.jpg',
                    'https://m.media-amazon.com/images/I/512pk4BswlL.jpg',
                    'https://m.media-amazon.com/images/I/61Uvkh8YtaL.jpg'
                ],
                category: 'Personal Care', 
                description: 'Compact, powerful, and travel-friendly. This electric mini shaver gives you a clean, smooth shave on the go. Perfect for quick touch-ups.',
                specs: { 'Brand': 'HNOSS HABITAT', 'Recommended Uses For Product': 'Facial Hair', 'Special Feature': 'Rechargeable', 'Power Source': 'Battery Powered', 'Model Name': 'Powerful Mini Electric Shaver', 'Included Components': 'Electric Shaver', 'Item Weight': '150 Grams', 'Colour': 'Black', 'Blade Material': 'Stainless Steel', 'Head Type': 'Rotary' },
                features: ['⚡ Powerful Shaving Performance – High-speed motor for a smooth, close shave.', '🔋 Rechargeable & Portable – Convenient USB charging for home, car, or travel use.', '🧳 Perfect for Travel – Compact design fits perfectly in your bag or car.', '🎁 Ideal Gift for Men – A thoughtful gift for birthdays, Father’s Day, or any occasion.', '💨 New Upgrade – Latest shaving technology for superior performance and durability.', '🚗 Car-Friendly Design – Shave on the go with an easy-to-carry design.', '✨ Close & Comfortable Shave – Suitable for all skin types, ensuring no irritation.'],
                reviews: [
                    { user: "Vikram D.", rating: 5, date: "15 Mar 2026", comment: "Super compact and gives a really clean shave. Perfect for my business trips." },
                    { user: "Suresh P.", rating: 4, date: "10 Mar 2026", comment: "Battery life is decent. Does the job well." }
                ]
            },
            { 
                id: 3, 
                name: 'Yoga Puller Peddler', 
                price: 599, 
                image: 'https://m.media-amazon.com/images/I/61nBobL3gTL.jpg', 
                images: [
                    'https://m.media-amazon.com/images/I/61nBobL3gTL.jpg',
                    'https://m.media-amazon.com/images/I/71xFmx0tAsL._SL1500_.jpg',
                    'https://m.media-amazon.com/images/I/51dX9lucUtL.jpg'
                ],
                category: 'Fitness', 
                description: 'Tone your muscles and improve flexibility at home. This versatile resistance band peddler is perfect for yoga, pilates, and daily stretching routines.',
                specs: { 'Brand': 'FitLife', 'Recommended Uses For Product': 'Yoga, Pilates, Stretching', 'Special Feature': 'High Elasticity', 'Material': 'Natural Latex & High-Density Foam', 'Model Name': 'Resistance Band Peddler', 'Included Components': '1 Resistance Peddler', 'Item Weight': '250 Grams', 'Colour': 'Purple/Black', 'Tension Level': 'Medium Resistance', 'Style': '4-Tube Design' },
                features: ['💪 Full Body Workout – Target your arms, tummy, shoulders, legs, and butt.', '🧘‍♀️ High Elasticity – Premium latex tubes offer high tensile strength and durability.', '🏡 Home Gym Essential – Get a great workout without expensive gym equipment.', '🛡️ Safe & Comfortable – Non-slip foam handles and pedals prevent slipping.', '🧳 Lightweight & Portable – Easy to pack and use anywhere, anytime.'],
                reviews: [
                    { user: "Neha G.", rating: 5, date: "14 Mar 2026", comment: "Great for my morning stretches. The resistance is just right." },
                    { user: "Anjali T.", rating: 5, date: "02 Mar 2026", comment: "Very durable material. I use it daily." },
                    { user: "Rohan B.", rating: 4, date: "20 Feb 2026", comment: "Good quality, handles are comfortable." }
                ]
            },
            { 
                id: 4, 
                name: 'Fresh Juice Portable Mixer', 
                price: 999, 
                originalPrice: 1999,
                image: 'https://m.media-amazon.com/images/I/51YzRbZG7WL._SL1000_.jpg', 
                images: [
                    'https://m.media-amazon.com/images/I/51YzRbZG7WL._SL1000_.jpg',
                    'https://m.media-amazon.com/images/I/610tAmBSgDL._SL1080_.jpg',
                    'https://m.media-amazon.com/images/I/715EDGUShVL._SL1500_.jpg'
                ],
                category: 'Kitchen & Dining', 
                description: 'Blend fresh smoothies, shakes, and juices anywhere. USB rechargeable, easy to clean, and features powerful stainless steel blades.',
                specs: { 'Brand': 'BlendGo', 'Recommended Uses For Product': 'Smoothies, Juices, Protein Shakes', 'Special Feature': 'Portable, Self-Cleaning', 'Power Source': 'USB Rechargeable', 'Model Name': 'Fresh Juice Blender', 'Included Components': 'Blender Bottle, USB Cable', 'Item Weight': '450 Grams', 'Colour': 'Pink/White', 'Blade Material': '304 Stainless Steel (6 Blades)', 'Capacity': '380 Millilitres' },
                features: ['🍓 Blend Anywhere – Make fresh smoothies, protein shakes, and juices on the go.', '🔋 Long Battery Life – Built-in rechargeable battery makes up to 15 cups per charge.', '💧 Easy to Clean – Self-cleaning mode; just add water and a drop of soap, then blend.', '🛡️ Safe Design – Magnetic sensing switch prevents blades from spinning when open.', '⚡ Powerful Motor – 6 sharp stainless steel blades crush ice and frozen fruits easily.'],
                reviews: [
                    { user: "Kavita R.", rating: 5, date: "16 Mar 2026", comment: "I love making my protein shakes in this. So easy to clean!" },
                    { user: "Deepak S.", rating: 5, date: "11 Mar 2026", comment: "Blends ice effortlessly. Highly recommend." }
                ]
            },
            { 
                id: 5, 
                name: 'Smart Health Band', 
                price: 1499, 
                originalPrice: 2999,
                image: 'https://picsum.photos/seed/healthband/800/800', 
                category: 'Electronics', 
                description: 'Track your steps, heart rate, and sleep patterns. Stay connected with smart notifications right on your wrist. Water-resistant and long battery life.',
                specs: { 'Brand': 'TechFit', 'Recommended Uses For Product': 'Fitness Tracking, Health Monitoring', 'Special Feature': 'Heart Rate Monitor, Sleep Tracker', 'Power Source': 'Battery Powered', 'Model Name': 'Smart Health Band Pro', 'Included Components': 'Smart Band, Magnetic Charger', 'Item Weight': '24 Grams', 'Colour': 'Midnight Black', 'Water Resistance': '5 ATM (50 Meters)', 'Screen Size': '1.1 Inches AMOLED' },
                features: ['❤️ 24/7 Heart Rate Monitoring – Keep track of your cardiovascular health all day.', '🩸 SpO2 Tracking – Measure your blood oxygen saturation levels anytime.', '🏃‍♂️ 11 Sports Modes – Accurately track running, cycling, swimming, and more.', '😴 Sleep Analysis – Monitor light, deep, and REM sleep stages for better rest.', '📱 Smart Notifications – Receive calls, texts, and app alerts directly on your wrist.', '🔋 14-Day Battery – Spend less time charging and more time moving.'],
                reviews: [
                    { user: "Manish V.", rating: 4, date: "13 Mar 2026", comment: "Accurate step tracking and the sleep analysis is quite detailed." },
                    { user: "Sneha L.", rating: 5, date: "08 Mar 2026", comment: "Looks premium and battery lasts forever!" },
                    { user: "Karan W.", rating: 5, date: "01 Mar 2026", comment: "Best fitness band in this price range." }
                ]
            },
            { 
                id: 6, 
                name: 'Posture Corrector', 
                price: 899, 
                image: 'https://m.media-amazon.com/images/I/51Et71Q14rL.jpg', 
                category: 'Health & Wellness', 
                description: 'Improve your posture and relieve back pain with this adjustable posture corrector. Comfortable to wear under clothing.',
                specs: { 'Brand': 'HealthPlus', 'Recommended Uses For Product': 'Posture Correction, Back Support', 'Special Feature': 'Adjustable, Breathable', 'Material': 'Neoprene', 'Model Name': 'Pro Posture Corrector', 'Included Components': '1 Posture Corrector', 'Item Weight': '150 Grams', 'Colour': 'Black', 'Size': 'Universal Adjustable' },
                features: ['🧍‍♂️ Improve Posture – Gently pulls shoulders back to align the spine.', '😌 Relieve Back Pain – Helps reduce upper and lower back pain caused by slouching.', '👕 Invisible Under Clothes – Wear it discreetly at work, home, or the gym.', '🌬️ Breathable Material – Made from lightweight, porous neoprene for comfort.', '⚙️ Fully Adjustable – Fits chest sizes from 28 to 48 inches easily.'],
                reviews: [
                    { user: "Arjun M.", rating: 5, date: "17 Mar 2026", comment: "Really helped with my lower back pain from sitting at the desk all day." },
                    { user: "Pooja C.", rating: 4, date: "09 Mar 2026", comment: "A bit tight at first, but you get used to it. Posture has definitely improved." }
                ]
            }
        ];

        let cart = JSON.parse(localStorage.getItem("shopfly_cart") || "[]");
        let wishlist = JSON.parse(localStorage.getItem("shopfly_wishlist") || "[]");

        // --- DOM Elements ---
        const productGrid = document.getElementById('product-grid');
        const cartItemsContainer = document.getElementById('cart-items');
        const cartBadge = document.getElementById('cart-badge');
        const cartTitle = document.getElementById('cart-title');
        const cartFooter = document.getElementById('cart-footer');
        const cartSubtotal = document.getElementById('cart-subtotal');
        const cartDrawer = document.getElementById('cart-drawer');
        const cartOverlay = document.getElementById('cart-overlay');
        const mobileMenuDrawer = document.getElementById('mobile-menu-drawer');
        const mobileMenuOverlay = document.getElementById('mobile-menu-overlay');
        const searchOverlay = document.getElementById('search-overlay');
        const searchInput = document.getElementById('search-input');
        const searchResults = document.getElementById('search-results');
        const navbar = document.getElementById('navbar');

        // --- Format Currency ---
        function formatINR(amount) {
            return '₹' + amount.toLocaleString('en-IN', { maximumFractionDigits: 0 });
        }

        // --- Initialize ---
        function init() {
            renderProducts();
            updateCartUI();
            if(window.location.pathname.includes("checkout.html")) initCheckout();
            lucide.createIcons();

            // Scroll listener for navbar
            window.addEventListener('scroll', () => {
                if (window.scrollY > 40) {
                    navbar.classList.add('glass-nav', 'py-4');
                    navbar.classList.remove('bg-transparent', 'py-5');
                } else {
                    navbar.classList.add('bg-transparent', 'py-5');
                    navbar.classList.remove('glass-nav', 'py-4');
                }
            });
        }

        // --- Navigation Logic ---
        
        function navigateTo(viewId) {
            const map = {
                'home': 'index.html',
                'all': 'shop.html',
                'about': 'about.html',
                'terms': 'terms.html',
                'privacy': 'privacy.html',
                'contact': 'contact.html',
                'checkout': 'checkout.html',
                'confirmation': 'confirmation.html'
            };
            window.location.href = map[viewId] || 'index.html';
        }

        function toggleWishlist(productId, event) {
            event.stopPropagation();
            const index = wishlist.indexOf(productId);
            if (index > -1) {
                wishlist.splice(index, 1);
            } else {
                wishlist.push(productId);
            }
            localStorage.setItem("shopfly_wishlist", JSON.stringify(wishlist));
            renderProducts();
            lucide.createIcons();
        }

        // --- Render Products ---
        function createProductCard(product) {
            return `
                <div class="group cursor-pointer flex flex-col" onclick="openProductPage(${product.id})" tabindex="0" role="button" onkeydown="if(event.key==='Enter') openProductPage(${product.id})">
                    <div class="relative aspect-[4/5] bg-brand-50 rounded-3xl overflow-hidden mb-4 border border-brand-100">
                        <div class="absolute top-4 left-4 z-10">
                            <span class="bg-emerald-600 text-white text-[10px] font-bold px-2 py-1 rounded-full shadow-sm flex items-center gap-1">
                                <i data-lucide="truck" class="w-3 h-3"></i> FREE DELIVERY
                            </span>
                        </div>
                        <img src="${product.image}" alt="${product.name}" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out" referrerpolicy="no-referrer" />
                        <button onclick="event.stopPropagation(); addToCart(${product.id})" class="absolute bottom-2 left-2 right-2 sm:bottom-4 sm:left-4 sm:right-4 bg-white/90 backdrop-blur-md text-brand-900 py-2 sm:py-3.5 rounded-xl sm:rounded-2xl text-xs sm:text-base font-medium opacity-100 translate-y-0 lg:opacity-0 lg:translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 hover:bg-brand-900 hover:text-white shadow-lg flex justify-center items-center gap-1 sm:gap-2" aria-label="Add ${product.name} to cart">
                            <i data-lucide="shopping-bag" class="w-3 h-3 sm:w-4 sm:h-4"></i> <span class="hidden sm:inline">Add to Cart</span><span class="sm:hidden">Add</span>
                        </button>
                        <button onclick="toggleWishlist(${product.id}, event)" class="absolute top-4 right-4 p-2.5 bg-white/70 backdrop-blur-md rounded-full ${wishlist.includes(product.id) ? 'text-rose-500 bg-white' : 'text-brand-600 hover:text-rose-500 hover:bg-white'} transition-colors shadow-sm" aria-label="${wishlist.includes(product.id) ? 'Remove from wishlist' : 'Add to wishlist'}">
                            <i data-lucide="heart" class="w-4 h-4 ${wishlist.includes(product.id) ? 'fill-current' : ''}"></i>
                        </button>
                    </div>
                    <div class="flex flex-col flex-1 px-1">
                        <p class="text-[10px] text-brand-500 uppercase tracking-widest mb-1.5 font-medium">${product.category}</p>
                        <h3 class="font-medium text-brand-900 leading-tight mb-1">${product.name}</h3>
                        <div class="flex items-center gap-2">
                            <p class="font-semibold text-brand-900">${formatINR(product.price)}</p>
                            ${product.originalPrice ? `<p class="text-sm text-brand-400 line-through">${formatINR(product.originalPrice)}</p>` : ''}
                        </div>
                    </div>
                </div>
            `;
        }

        function renderProducts() {
            // Render Bestsellers (IDs: 2, 4, 1)
            const bestsellerIds = [2, 4, 1];
            const bestsellers = bestsellerIds.map(id => PRODUCTS.find(p => p.id === id)).filter(Boolean);
            const bestsellerGrid = document.getElementById('bestseller-grid');
            if (bestsellerGrid) {
                bestsellerGrid.innerHTML = bestsellers.map(createProductCard).join('');
            }

            // Render All Products (Trending Now)
            if (productGrid) {
                productGrid.innerHTML = PRODUCTS.map(createProductCard).join('');
            }

            // Render All Products View
            const allProductsGrid = document.getElementById('all-products-grid');
            if (allProductsGrid) {
                allProductsGrid.innerHTML = PRODUCTS.map(createProductCard).join('');
            }

            // Refresh icons
            if (window.lucide) {
                lucide.createIcons();
            }
        }

        // --- Cart Logic ---
        function addToCart(productId) {
            const product = PRODUCTS.find(p => p.id === productId);
            const existingItem = cart.find(item => item.id === productId);
            
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                cart.push({ ...product, quantity: 1 });
            }
            localStorage.setItem("shopfly_cart", JSON.stringify(cart));
            
            updateCartUI();
            toggleCart(true);
        }

        function updateQuantity(productId, delta) {
            const itemIndex = cart.findIndex(item => item.id === productId);
            if (itemIndex > -1) {
                cart[itemIndex].quantity += delta;
                if (cart[itemIndex].quantity <= 0) {
                    cart.splice(itemIndex, 1);
                }
                localStorage.setItem("shopfly_cart", JSON.stringify(cart));
            }
            updateCartUI();
        }

        function toggleCart(isOpen) {
            if (isOpen) {
                cartDrawer.classList.remove('translate-x-full');
                cartOverlay.classList.remove('opacity-0', 'pointer-events-none');
                cartOverlay.classList.add('opacity-100', 'pointer-events-auto');
                document.body.style.overflow = 'hidden'; // Prevent background scrolling
            } else {
                cartDrawer.classList.add('translate-x-full');
                cartOverlay.classList.add('opacity-0', 'pointer-events-none');
                cartOverlay.classList.remove('opacity-100', 'pointer-events-auto');
                document.body.style.overflow = '';
            }
        }

        function toggleMobileMenu(isOpen) {
            if (isOpen) {
                mobileMenuDrawer.classList.remove('-translate-x-full');
                mobileMenuOverlay.classList.remove('opacity-0', 'pointer-events-none');
                mobileMenuOverlay.classList.add('opacity-100', 'pointer-events-auto');
                document.body.style.overflow = 'hidden';
            } else {
                mobileMenuDrawer.classList.add('-translate-x-full');
                mobileMenuOverlay.classList.add('opacity-0', 'pointer-events-none');
                mobileMenuOverlay.classList.remove('opacity-100', 'pointer-events-auto');
                document.body.style.overflow = '';
            }
        }

        function toggleSearch(isOpen) {
            if (isOpen) {
                searchOverlay.classList.remove('opacity-0', 'pointer-events-none');
                searchOverlay.classList.add('opacity-100', 'pointer-events-auto');
                document.body.style.overflow = 'hidden';
                setTimeout(() => searchInput.focus(), 100);
            } else {
                searchOverlay.classList.add('opacity-0', 'pointer-events-none');
                searchOverlay.classList.remove('opacity-100', 'pointer-events-auto');
                document.body.style.overflow = '';
                searchInput.value = '';
                handleSearch('');
            }
        }

        function handleSearch(query) {
            if (!query.trim()) {
                searchResults.innerHTML = '<div class="text-brand-500 text-center col-span-full py-10">Type to start searching...</div>';
                return;
            }
            
            const lowerQuery = query.toLowerCase();
            const results = PRODUCTS.filter(p => 
                p.name.toLowerCase().includes(lowerQuery) || 
                p.category.toLowerCase().includes(lowerQuery) ||
                p.description.toLowerCase().includes(lowerQuery)
            );

            if (results.length === 0) {
                searchResults.innerHTML = '<div class="text-brand-500 text-center col-span-full py-10">No products found.</div>';
                return;
            }

            searchResults.innerHTML = results.map(p => `
                <div class="flex items-center gap-4 bg-white p-4 rounded-2xl shadow-sm cursor-pointer hover:shadow-md transition-shadow" onclick="toggleSearch(false); openProductPage(${p.id})" tabindex="0" role="button" onkeydown="if(event.key==='Enter') { toggleSearch(false); openProductPage(${p.id}); }">
                    <img src="${p.image}" alt="${p.name}" class="w-20 h-20 object-cover rounded-xl" referrerpolicy="no-referrer">
                    <div>
                        <h4 class="font-medium text-brand-900">${p.name}</h4>
                        <p class="text-sm text-brand-500">${p.category}</p>
                        <p class="font-semibold text-brand-900 mt-1">${formatINR(p.price)}</p>
                    </div>
                </div>
            `).join('');
            lucide.createIcons();
        }

        function updateCartUI() {
            const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
            const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

            // Update Badge
            if (totalItems > 0) {
                cartBadge.textContent = totalItems;
                cartBadge.classList.remove('hidden');
            } else {
                cartBadge.classList.add('hidden');
            }

            // Update Title
            cartTitle.textContent = `Your Cart (${totalItems})`;

            // Update Items
            if (cart.length === 0) {
                cartItemsContainer.innerHTML = `
                    <div class="h-full flex flex-col items-center justify-center text-brand-400 space-y-4">
                        <div class="w-24 h-24 bg-brand-50 rounded-full flex items-center justify-center mb-2">
                            <i data-lucide="shopping-bag" class="w-10 h-10 text-brand-300"></i>
                        </div>
                        <p class="text-lg font-serif text-brand-900">Your cart is empty</p>
                        <button onclick="toggleCart(false)" class="text-brand-600 font-medium underline underline-offset-4 hover:text-brand-900 transition-colors">
                            Continue Shopping
                        </button>
                    </div>
                `;
                cartFooter.classList.add('hidden');
            } else {
                cartItemsContainer.innerHTML = `<div class="space-y-6">` + cart.map(item => `
                    <div class="flex gap-4">
                        <div class="w-24 h-24 bg-brand-50 rounded-2xl overflow-hidden shrink-0 border border-brand-100">
                            <img src="${item.image}" alt="${item.name}" class="w-full h-full object-cover" referrerpolicy="no-referrer" />
                        </div>
                        <div class="flex-1 flex flex-col justify-between py-1">
                            <div>
                                <div class="flex justify-between items-start gap-2">
                                    <h3 class="font-medium text-brand-900 leading-tight">${item.name}</h3>
                                    <button onclick="updateQuantity(${item.id}, -${item.quantity})" class="text-brand-400 hover:text-rose-500 transition-colors p-1 -mt-1 -mr-1" aria-label="Remove item">
                                        <i data-lucide="trash-2" class="w-4 h-4"></i>
                                    </button>
                                </div>
                                <p class="text-brand-600 font-semibold mt-1">${formatINR(item.price)}</p>
                            </div>
                            <div class="flex items-center gap-3">
                                <div class="flex items-center border border-brand-200 rounded-full bg-brand-50">
                                    <button onclick="updateQuantity(${item.id}, -1)" class="w-8 h-8 flex items-center justify-center text-brand-600 hover:text-brand-900 transition-colors" aria-label="Decrease quantity">-</button>
                                    <span class="w-6 text-center text-sm font-medium text-brand-900" aria-label="Quantity">${item.quantity}</span>
                                    <button onclick="updateQuantity(${item.id}, 1)" class="w-8 h-8 flex items-center justify-center text-brand-600 hover:text-brand-900 transition-colors" aria-label="Increase quantity">+</button>
                                </div>
                            </div>
                        </div>
                    </div>
                `).join('') + `</div>`;
                
                cartFooter.classList.remove('hidden');
                cartSubtotal.textContent = formatINR(totalPrice);
            }

            // Re-initialize icons for newly injected HTML
            lucide.createIcons();
        }

        
        function openProductPage(productId) {
            window.location.href = 'product-' + productId + '.html';
        }


        let checkoutMode = "cart";
        let currentCheckoutSubtotal = 0;
        let currentCheckoutShipping = 0;
        let currentDiscountAmount = 0;

        
        function openCheckoutPage(productId = null) {
            if (productId) {
                localStorage.setItem('shopfly_checkout', JSON.stringify({ mode: 'single', productId }));
            } else {
                if (cart.length === 0) {
                    alert('Your cart is empty!');
                    return;
                }
                localStorage.setItem('shopfly_checkout', JSON.stringify({ mode: 'cart' }));
            }
            window.location.href = 'checkout.html';
        }
        
        function initCheckout() {
            if (!document.getElementById('checkout-order-items')) return;
            const checkoutData = JSON.parse(localStorage.getItem('shopfly_checkout') || '{"mode":"cart"}');
            const itemsContainer = document.getElementById('checkout-order-items');
            
            let subtotal = 0;
            let productNames = [];
            let totalQuantity = 0;
            
            if (checkoutData.mode === 'single') {
                checkoutMode = 'single';
                const product = PRODUCTS.find(p => p.id === checkoutData.productId);
                if (!product) return;
                subtotal = product.price;
                totalQuantity = 1;
                productNames.push(product.name);
                itemsContainer.innerHTML = `
                    <div class="flex gap-4 items-center">
                        <img src="${product.image}" alt="${product.name}" class="w-16 h-16 object-cover rounded-xl border border-brand-200" referrerpolicy="no-referrer">
                        <div class="flex-1">
                            <h4 class="font-medium text-brand-900 line-clamp-1">${product.name}</h4>
                            <p class="text-sm text-brand-500">Qty: 1</p>
                        </div>
                        <div class="font-semibold text-brand-900">${formatINR(product.price)}</div>
                    </div>`;
                document.getElementById('checkout-form-product').value = product.name;
                document.getElementById('checkout-form-quantity').value = "1";
            } else {
                checkoutMode = 'cart';
                if (cart.length === 0) {
                    itemsContainer.innerHTML = '<p class="text-brand-500 flex items-center justify-center h-32">Your cart is empty</p>';
                    return;
                }
                subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
                totalQuantity = cart.reduce((sum, item) => sum + item.quantity, 0);
                productNames = cart.map(item => item.name);
                
                itemsContainer.innerHTML = cart.map(item => `
                    <div class="flex gap-4 items-center">
                        <div class="relative">
                            <img src="${item.image}" alt="${item.name}" class="w-16 h-16 object-cover rounded-xl border border-brand-200" referrerpolicy="no-referrer">
                            <span class="absolute -top-2 -right-2 bg-brand-900 text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">${item.quantity}</span>
                        </div>
                        <div class="flex-1">
                            <h4 class="font-medium text-brand-900 line-clamp-1">${item.name}</h4>
                            <p class="text-sm text-brand-500">${formatINR(item.price)} each</p>
                        </div>
                        <div class="font-semibold text-brand-900">${formatINR(item.price * item.quantity)}</div>
                    </div>`).join('');
                    
                document.getElementById('checkout-form-product').value = productNames.join(' + ');
                document.getElementById('checkout-form-quantity').value = totalQuantity.toString();
            }
            
            document.getElementById('checkout-subtotal').textContent = formatINR(subtotal);
            document.getElementById('checkout-total').textContent = formatINR(subtotal);
            document.getElementById('checkout-form-amount').value = subtotal;
            currentCheckoutSubtotal = subtotal;
        }

        function applyDiscount() {
            const codeInput = document.getElementById('discount-code-input');
            const messageEl = document.getElementById('discount-message');
            const code = codeInput.value.trim().toUpperCase();
            
            if (!code) return;

            let discount = 0;
            let label = '';
            
            // Example discount logic
            if (code === 'WELCOME10') {
                discount = currentCheckoutSubtotal * 0.10;
                label = '10% Off';
            } else if (code === 'SAVE200') {
                discount = 200;
                label = '₹200 Off';
            } else {
                messageEl.textContent = 'Invalid discount code';
                messageEl.className = 'text-sm mt-2 text-red-500 block';
                return;
            }

            if (discount > currentCheckoutSubtotal) discount = currentCheckoutSubtotal;

            currentDiscountAmount = discount;
            
            messageEl.textContent = 'Discount applied successfully!';
            messageEl.className = 'text-sm mt-2 text-green-600 block';
            
            document.getElementById('checkout-discount-label').textContent = code;
            document.getElementById('checkout-discount-amount').textContent = '-' + formatINR(discount);
            document.getElementById('checkout-discount-row').classList.remove('hidden');
            
            updateCheckoutTotals();
        }

        function submitNewsletter(event) {
            event.preventDefault();
            
            const submitBtn = document.getElementById('newsletter-submit-btn');
            const originalBtnText = submitBtn.innerHTML;
            submitBtn.innerHTML = '<i data-lucide="loader-2" class="w-5 h-5 animate-spin"></i> <span>Subscribing...</span>';
            submitBtn.disabled = true;
            lucide.createIcons();

            const dateInput = document.getElementById('newsletter-form-date');
            if (dateInput) {
                dateInput.value = new Date().toISOString();
            }
            
            const formData = new FormData(event.target);
            
            fetch('https://script.google.com/macros/s/AKfycbwgQhSB8ypi4XqLhbftBRzQ8spHhJ3DTkY7dlLgUTVab9bkkNQQ5GJseI5_KCBDkTkS/exec', {
                method: 'POST',
                body: formData
            })
            .then(response => {
                event.target.reset();
                submitBtn.innerHTML = '<span>Subscribed!</span> <i data-lucide="check" class="w-5 h-5"></i>';
                lucide.createIcons();
                setTimeout(() => {
                    submitBtn.innerHTML = originalBtnText;
                    submitBtn.disabled = false;
                    lucide.createIcons();
                }, 3000);
            })
            .catch(error => {
                console.error('Error submitting newsletter:', error);
                alert('There was an error subscribing. Please try again.');
                submitBtn.innerHTML = originalBtnText;
                submitBtn.disabled = false;
                lucide.createIcons();
            });
        }

        function submitOrder(event) {
            event.preventDefault();
            
            const submitBtn = document.getElementById('checkout-submit-btn');
            const originalBtnText = submitBtn.innerHTML;
            submitBtn.innerHTML = '<i data-lucide="loader-2" class="w-5 h-5 animate-spin"></i> <span>Processing...</span>';
            submitBtn.disabled = true;
            lucide.createIcons();

            document.getElementById('checkout-form-date').value = new Date().toISOString();
            
            const formData = new FormData(event.target);
            
            fetch('https://script.google.com/macros/s/AKfycbwgQhSB8ypi4XqLhbftBRzQ8spHhJ3DTkY7dlLgUTVab9bkkNQQ5GJseI5_KCBDkTkS/exec', {
                method: 'POST',
                body: formData
            })
            .then(response => {
                if (checkoutMode === 'cart') {
                    cart = [];
                localStorage.setItem("shopfly_cart", "[]");
                updateCartUI();
                }
                
                event.target.reset();
                submitBtn.innerHTML = originalBtnText;
                submitBtn.disabled = false;
                lucide.createIcons();
                
                navigateTo('confirmation');
                window.scrollTo(0, 0);
            })
            .catch(error => {
                console.error('Error submitting order:', error);
                alert('There was an error processing your order. Please try again.');
                submitBtn.innerHTML = originalBtnText;
                submitBtn.disabled = false;
                lucide.createIcons();
            });
        }

        // --- Contact Form Logic ---
        function submitContactForm(event) {
            event.preventDefault();
            const form = event.target;
            const submitBtn = document.getElementById('contact-submit-btn');
            const successMsg = document.getElementById('contact-success-msg');
            
            const originalBtnText = submitBtn.innerHTML;
            submitBtn.innerHTML = '<i data-lucide="loader-2" class="w-5 h-5 animate-spin"></i> <span>Sending...</span>';
            submitBtn.disabled = true;
            lucide.createIcons();
            
            const formData = new FormData(form);
            
            fetch('https://script.google.com/macros/s/AKfycbwgQhSB8ypi4XqLhbftBRzQ8spHhJ3DTkY7dlLgUTVab9bkkNQQ5GJseI5_KCBDkTkS/exec', {
                method: 'POST',
                body: formData
            })
            .then(response => {
                form.reset();
                successMsg.classList.remove('hidden');
                submitBtn.innerHTML = originalBtnText;
                submitBtn.disabled = false;
                lucide.createIcons();
                setTimeout(() => {
                    successMsg.classList.add('hidden');
                }, 5000);
            })
            .catch(error => {
                console.error('Error submitting form:', error);
                alert('There was an error sending your message. Please try again.');
                submitBtn.innerHTML = originalBtnText;
                submitBtn.disabled = false;
                lucide.createIcons();
            });
        }

        // Run init on load
        document.addEventListener('DOMContentLoaded', init);
    