import React from 'react';
import { useCart } from '../context/CartContext';
import '../styles/Cart.css';

const Cart = () => {
  const {
    cartItems,
    isCartOpen,
    removeFromCart,
    updateQuantity,
    clearCart,
    getTotalItems,
    getTotalPrice,
    closeCart,
    toggleCart,
    addToCart // Add this to use in the test button
  } = useCart();

  // Sample product for testing
  const sampleProduct = {
    id: Date.now(),
    name: "Japanese Ramen Kit",
    price: 89.99,
    image: "/images/ramen-kit.jpg",
    category: "Noodles"
  };

  return (
    <div className="CartContainer">
      {/* Cart Trigger Button */}
      <button 
        className="CartTrigger"
        onClick={toggleCart}
        aria-label={`Shopping cart with ${getTotalItems()} items`}
      >
        <i className="bi bi-cart3"></i>
        {getTotalItems() > 0 && (
          <span className="CartCount">{getTotalItems()}</span>
        )}
      </button>

      {/* Cart Overlay */}
      {isCartOpen && (
        <div className="CartOverlay" onClick={closeCart}></div>
      )}

      {/* Cart Sidebar */}
      <div className={`CartSidebar ${isCartOpen ? 'active' : ''}`}>
        <div className="CartHeader">
          <h2 className="CartTitle">
            <i className="bi bi-cart3"></i>
            Your Cart
            {getTotalItems() > 0 && (
              <span className="CartItemCount">({getTotalItems()})</span>
            )}
          </h2>
          <button className="CartClose" onClick={closeCart}>
            <i className="bi bi-x-lg"></i>
          </button>
        </div>

        <div className="CartContent">
          {cartItems.length === 0 ? (
            <div className="EmptyCart">
              <i className="bi bi-cart-x"></i>
              <p>Your cart is empty</p>
              <small>Add some delicious Asian products!</small>
            </div>
          ) : (
            <>
              <div className="CartItems">
                {cartItems.map(item => (
                  <div key={item.id} className="CartItem">
                    <div className="CartItemImage">
                      <img src={item.image} alt={item.name} />
                    </div>
                    
                    <div className="CartItemDetails">
                      <h4 className="CartItemName">{item.name}</h4>
                      <p className="CartItemCategory">{item.category}</p>
                      <div className="CartItemPrice">R{item.price}</div>
                    </div>

                    <div className="CartItemControls">
                      <div className="QuantityControls">
                        <button 
                          className="QuantityBtn"
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          aria-label="Decrease quantity"
                        >
                          <i className="bi bi-dash"></i>
                        </button>
                        <span className="QuantityDisplay">{item.quantity}</span>
                        <button 
                          className="QuantityBtn"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          aria-label="Increase quantity"
                        >
                          <i className="bi bi-plus"></i>
                        </button>
                      </div>
                      
                      <button 
                        className="RemoveItem"
                        onClick={() => removeFromCart(item.id)}
                        aria-label="Remove item from cart"
                      >
                        <i className="bi bi-trash"></i>
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              <div className="CartFooter">
                <div className="CartTotal">
                  <span className="TotalLabel">Total:</span>
                  <span className="TotalAmount">R{getTotalPrice().toFixed(2)}</span>
                </div>
                
                <div className="CartActions">
                  <button 
                    className="ClearCartBtn"
                    onClick={clearCart}
                  >
                    <i className="bi bi-trash"></i>
                    Clear Cart
                  </button>
                  
                  <button className="CheckoutBtn">
                    <i className="bi bi-credit-card"></i>
                    Checkout
                  </button>
                </div>
                
                <div className="CartNote">
                  <i className="bi bi-truck"></i>
                  Free delivery on orders over R500
                </div>
              </div>
            </>
          )}
        </div>

        {/* Test button for development - Remove in production */}
        <div className="DevTest">
          <button 
            className="TestAddBtn"
            onClick={() => addToCart(sampleProduct)} // Now using the addToCart from context
          >
            <i className="bi bi-plus-circle"></i>
            Test Add Item
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;