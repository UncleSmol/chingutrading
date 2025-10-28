import React from 'react';
import { useCart } from '../../context/CartContext'; 
import productsData from '../../Products.json';
import '../../styles/NewArrivals.css';

const NewArrivals = () => {
  const { addToCart, isInCart, getItemQuantity } = useCart();

  // Filter new arrival products from JSON data
  const newArrivalProducts = productsData.products.filter(product => product.isNew);

  const handleAddToCart = (product) => {
    addToCart(product);
    console.log(`Added ${product.name} to cart!`);
  };

  const ProductCard = ({ product }) => (
    <div className="NewArrivalCard" key={product.id}>
      <div className="NewArrivalImage">
        <img src={product.image} alt={product.name} />
        <div className="ProductBadges">
          <span className="Badge BadgeNew">New Arrival</span>
          {product.isOnSale && <span className="Badge BadgeSale">Sale</span>}
        </div>
        <button className="ProductWishlist">
          <i className="bi bi-heart"></i>
        </button>
      </div>
      
      <div className="NewArrivalInfo">
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
    <section className="NewArrivals">
      <div className="Container">
        <div className="SectionHeader">
          <h2 className="SectionTitle">New Arrivals</h2>
          <p className="SectionSubtitle">Fresh from Asia - Discover our latest products</p>
        </div>
        
        <div className="NewArrivalsGrid">
          {newArrivalProducts.length > 0 ? (
            newArrivalProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))
          ) : (
            <div className="NoProductsMessage">
              <p>No new arrivals at the moment.</p>
            </div>
          )}
        </div>
        
        <div className="SectionFooter">
          <a href="/store?filter=new" className="ViewAllButton">
            View All New Arrivals
            <i className="bi bi-arrow-right"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default NewArrivals;