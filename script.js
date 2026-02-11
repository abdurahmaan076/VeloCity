* { margin: 0; padding: 0; box-sizing: border-box; }
body { font-family: 'Inter', sans-serif; color: #111; line-height: 1.6; }

/* NAVBAR */
.navbar { 
    display: flex; justify-content: space-between; align-items: center; 
    padding: 0 5%; height: 80px; position: fixed; width: 100%; top: 0; 
    background: #fff; z-index: 1000; border-bottom: 1px solid #eee; 
}
.logo { font-family: 'Syncopate'; font-size: 1.1rem; letter-spacing: 3px; }
.hamburger { cursor: pointer; }
.hamburger span { display: block; width: 22px; height: 2px; background: #000; margin: 5px 0; }

/* CART & BADGE */
.cart-container { position: relative; cursor: pointer; }
.cart-badge { 
    position: absolute; top: -8px; right: -10px; background: #000; color: #fff; 
    width: 18px; height: 18px; border-radius: 50%; font-size: 10px; 
    display: flex; align-items: center; justify-content: center; font-weight: 700;
}

/* SIDEBARS */
.side-nav, .cart-nav { 
    height: 100%; width: 0; position: fixed; z-index: 2000; top: 0; 
    background: #fff; transition: 0.4s ease; overflow: hidden; box-shadow: 0 0 20px rgba(0,0,0,0.1); 
}
.side-nav { left: 0; }
.cart-nav { right: 0; }
.close-btn { font-size: 30px; cursor: pointer; padding: 20px; display: block; }
.menu-list { list-style: none; padding: 20px; }
.menu-list li a { text-decoration: none; color: #000; font-weight: 700; padding: 15px 0; display: block; border-bottom: 1px solid #f5f5f5; }

/* HERO */
.hero { 
    height: 100vh; background: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('https://images.unsplash.com/photo-1552346154-21d32810aba3?q=80&w=2070'); 
    background-size: cover; background-position: center; display: flex; align-items: center; justify-content: center; text-align: center; color: #fff; 
}
.loading-text { font-family: 'Syncopate'; font-size: 3.5rem; animation: pulse 2s infinite; }
@keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.3; } }
.btn { display: inline-block; padding: 12px 35px; border: 2px solid #fff; color: #fff; text-decoration: none; font-weight: 900; margin-top: 20px; }

/* PRODUCT GRID */
.products-section { padding: 80px 5%; text-align: center; }
.section-title { font-family: 'Syncopate'; margin-bottom: 50px; }
.product-grid { 
    display: grid; grid-template-columns: repeat(3, 1fr); gap: 30px; max-width: 1200px; margin: 0 auto; 
}
@media (max-width: 900px) { .product-grid { grid-template-columns: 1fr; } }

.product-card { background: #fff; padding: 10px; text-align: left; }
.product-image { background: #f6f6f6; padding: 20px; margin-bottom: 15px; }
.product-image img { width: 100%; height: auto; transition: 0.3s; }
.product-card:hover img { transform: scale(1.05); }

.brand { font-size: 11px; color: #888; }
.model { font-weight: 700; font-size: 16px; margin: 5px 0; }
.size-select { width: 100%; padding: 8px; margin: 10px 0; border: 1px solid #ddd; }
.add-to-cart { width: 100%; padding: 12px; background: #000; color: #fff; border: none; font-weight: 700; cursor: pointer; text-transform: uppercase; font-size: 11px; }

.checkout-btn { width: 90%; margin: 5%; padding: 15px; background: #000; color: #fff; border: none; font-weight: 700; position: absolute; bottom: 0; cursor: pointer; }
