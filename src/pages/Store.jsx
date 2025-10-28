import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import {products} from '../Products.json'
import '../styles/Store.css';

const Store = () => {
  const { addToCart, isInCart, getItemQuantity } = useCart();
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortOption, setSortOption] = useState('featured');
  const [searchTerm, setSearchTerm] = useState('');

  // Get unique categories
  const categories = ['All', ...new Set(products.map(product => product.category))];

  // Filter and sort products
  const updateProducts = () => {
    let updatedProducts = [...products];

    // Filter by category
    if (selectedCategory !== 'All') {
      updatedProducts = updatedProducts.filter(product => product.category === selectedCategory);
    }

    // Filter by search term
    if (searchTerm) {
      updatedProducts = updatedProducts.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Sort products
    switch (sortOption) {
      case 'price-low':
        updatedProducts.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        updatedProducts.sort((a, b) => b.price - a.price);
        break;
      case 'name':
        updatedProducts.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'rating':
        updatedProducts.sort((a, b) => b.rating - a.rating);
        break;
      case 'new':
        updatedProducts = updatedProducts.filter(product => product.isNew);
        break;
      case 'sale':
        updatedProducts = updatedProducts.filter(product => product.isOnSale);
        break;
      case 'featured':
      default:
        updatedProducts.sort((a, b) => (b.isFeatured === a.isFeatured) ? 0 : b.isFeatured ? -1 : 1);
        break;
    }

    setFilteredProducts(updatedProducts);
  };

  // Handle category filter
  const handleCategoryFilter = (category) => {
    setSelectedCategory(category);
    const updatedProducts = category === 'All' 
      ? products 
      : products.filter(product => product.category === category);
    setFilteredProducts(updatedProducts);
  };

  // Handle sort change
  const handleSortChange = (option) => {
    setSortOption(option);
    updateProducts();
  };

  // Handle search
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    updateProducts();
  };

  // Handle add to cart
  const handleAddToCart = (product) => {
    addToCart(product);
    console.log(`Added ${product.name} to cart!`);
  };

  // Product card component
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
    <div className="Store">
      <div className="Container">
        {/* Store Header */}
        <div className="StoreHeader">
          <h1 className="StoreTitle">Asian Market Store</h1>
          <p className="StoreSubtitle">Discover authentic Asian ingredients and products</p>
        </div>

        {/* Filters and Search */}
        <div className="StoreControls">
          {/* Search Bar */}
          <div className="SearchBar">
            <input
              type="text"
              placeholder="Search products..."
              value={searchTerm}
              onChange={handleSearch}
              className="SearchInput"
            />
            <i className="bi bi-search SearchIcon"></i>
          </div>

          {/* Category Filter */}
          <div className="FilterGroup">
            <label className="FilterLabel">Category:</label>
            <select 
              value={selectedCategory} 
              onChange={(e) => handleCategoryFilter(e.target.value)}
              className="FilterSelect"
            >
              {categories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
          </div>

          {/* Sort Options */}
          <div className="FilterGroup">
            <label className="FilterLabel">Sort by:</label>
            <select 
              value={sortOption} 
              onChange={(e) => handleSortChange(e.target.value)}
              className="FilterSelect"
            >
              <option value="featured">Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="name">Name</option>
              <option value="rating">Rating</option>
              <option value="new">New Arrivals</option>
              <option value="sale">On Sale</option>
            </select>
          </div>
        </div>

        {/* Products Grid */}
        <div className="ProductsGrid">
          {filteredProducts.length > 0 ? (
            filteredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))
          ) : (
            <div className="NoProducts">
              <i className="bi bi-search NoProductsIcon"></i>
              <h3 className="NoProductsTitle">No products found</h3>
              <p className="NoProductsText">Try adjusting your search or filter criteria</p>
            </div>
          )}
        </div>

        {/* Results Count */}
        <div className="ResultsCount">
          <p>Showing {filteredProducts.length} of {products.length} products</p>
        </div>
      </div>
    </div>
  );
};

export default Store;