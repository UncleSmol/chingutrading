import React from 'react'
import { useCart } from '../../context/CartContext'; 
import '../../styles/NewArrivals.css';

const NewArrivals = () => {
  const { addToCart, isInCart, getItemQuantity } = useCart();

  // New arrival products data
  const newArrivalProducts = [
    {
      id: 101,
      name: "Matcha Green Tea Powder",
      category: "Tea",
      price: 149.99,
      originalPrice: 179.99,
      image: "/images/matcha-powder.jpg",
      isNew: true,
      isFeatured: false,
      rating: 4.9,
      arrivalDate: "2024-01"
    },
    {
      id: 102,
      name: "Japanese Wagashi Set",
      category: "Sweets",
      price: 199.99,
      image: "/images/wagashi-set.jpg",
      isNew: true,
      isFeatured: false,
      rating: 4.8,
      arrivalDate: "2024-01"
    },
    {
      id: 103,
      name: "Korean Bibimbap Bowl Set",
      category: "Kitchenware",
      price: 349.99,
      originalPrice: 399.99,
      image: "/images/bibimbap-set.jpg",
      isNew: true,
      isFeatured: false,
      rating: 4.7,
      arrivalDate: "2024-01"
    },
    {
      id: 104,
      name: "Thai Coconut Milk 6-Pack",
      category: "Canned Goods",
      price: 89.99,
      image: "/images/coconut-milk.jpg",
      isNew: true,
      isFeatured: false,
      rating: 4.6,
      arrivalDate: "2024-01"
    },
    {
      id: 105,
      name: "Chinese Hot Pot Kit",
      category: "Cooking Kits",
      price: 229.99,
      image: "/images/hot-pot-kit.jpg",
      isNew: true,
      isFeatured: false,
      rating: 4.9,
      arrivalDate: "2024-01"
    },
    {
      id: 106,
      name: "Japanese Sake Set",
      category: "Beverages",
      price: 459.99,
      originalPrice: 499.99,
      image: "/images/sake-set.jpg",
      isNew: true,
      isFeatured: false,
      rating: 4.8,
      arrivalDate: "2024-01"
    }
  ];

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
          {newArrivalProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        
        <div className="SectionFooter">
          <a href="/store?filter=new" className="ViewAllButton">
            View All New Arrivals
            <i className="bi bi-arrow-right"></i>
          </a>
        </div>
      </div>
    </section>
  )
}

export default NewArrivals