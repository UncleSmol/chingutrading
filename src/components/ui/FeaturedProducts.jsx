import React from 'react';
import { useCart } from '../../context/CartContext'; 
import productsData from '../../Products.json'; 
import '../../styles/FeaturedProducts.css';

const FeaturedProducts = ({
  title = "Featured Products",
  subtitle = "Customer Favorites",
  products = [],
  categoryFilter = null,
  maxProducts = 6,
  showViewAll = true,
  viewAllLink = "/store"
}) => {
  const { addToCart, isInCart, getItemQuantity } = useCart();

  // Use products from props or JSON data, filtered for featured products
  const displayProducts = products.length > 0 ? products : productsData.products;
  
  const filteredProducts = categoryFilter 
    ? displayProducts.filter(product => product.category === categoryFilter)
    : displayProducts.filter(product => product.isFeatured);
  
  const productsToShow = filteredProducts.slice(0, maxProducts);

  const handleAddToCart = (product) => {
    addToCart(product);
    // Optional: You can add a toast notification here later
    console.log(`Added ${product.name} to cart!`);
  };

  const ProductCard = ({ product }) => (
    <div className="ProductCard" key={product.id}>
      <div className="ProductImage">
        <img src={product.image} alt={product.name} />
        <div className="ProductBadges">
          {product.isNew && <span className="Badge BadgeNew">New</span>}
          {product.isOnSale && <span className="Badge BadgeSale">Sale</span>}
          {product.isFeatured && <span className="Badge BadgeFeatured">Featured</span>}
        </div>
        <button className="ProductWishlist">
          <i className="bi bi-heart"></i>
        </button>
      </div>
      
      <div className="ProductInfo">
        <span className="ProductCategory">{product.category}</span>
        <h3 className="ProductName">{product.name}</h3>
        
        <div className="ProductRating">
          <i className="bi bi-star-fill"></i>
          <span>{product.rating}</span>
        </div>
        
        <div className="ProductPrice">
          {product.originalPrice && (
            <span className="OriginalPrice">R{product.originalPrice}</span>
          )}
          <span className="CurrentPrice">R{product.price}</span>
        </div>
        
        <div className="ProductActions">
          {isInCart(product.id) ? (
            <div className="AddedToCart">
              <i className="bi bi-check-circle"></i>
              In Cart ({getItemQuantity(product.id)})
            </div>
          ) : (
            <button 
              className="AddToCart"
              onClick={() => handleAddToCart(product)}
            >
              <i className="bi bi-cart-plus"></i>
              Add to Cart
            </button>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <section className="FeaturedProducts">
      <div className="Container">
        <div className="SectionHeader">
          <h2 className="SectionTitle">{title}</h2>
          <p className="SectionSubtitle">{subtitle}</p>
        </div>
        
        <div className="ProductsGrid">
          {productsToShow.length > 0 ? (
            productsToShow.map(product => (
              <ProductCard key={product.id} product={product} />
            ))
          ) : (
            <div className="NoProductsMessage">
              <p>No featured products found.</p>
            </div>
          )}
        </div>
        
        {showViewAll && productsToShow.length > 0 && (
          <div className="SectionFooter">
            <a href={viewAllLink} className="ViewAllButton">
              View All Products
              <i className="bi bi-arrow-right"></i>
            </a>
          </div>
        )}
      </div>
    </section>
  );
};

export default FeaturedProducts;