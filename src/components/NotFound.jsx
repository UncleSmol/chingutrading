import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/NotFound.css';

const NotFound = () => {
  return (
    <div className="NotFoundPage">
      <div className="NotFoundContainer">
        {/* Animated Background Elements */}
        <div className="NotFoundBackground">
          <div className="BgElement bg-1"></div>
          <div className="BgElement bg-2"></div>
          <div className="BgElement bg-3"></div>
          <div className="BgElement bg-4"></div>
        </div>

        {/* Main Content */}
        <div className="NotFoundContent">
          <div className="NotFoundVisual">
            <div className="NotFoundNumber">
              <span className="NumberDigit">4</span>
              <div className="NotFoundIcon">
                <i className="bi bi-basket"></i>
              </div>
              <span className="NumberDigit">4</span>
            </div>
            <div className="NotFoundAnimation">
              <div className="FloatingItem item-1">
                <i className="bi bi-cup-straw"></i>
              </div>
              <div className="FloatingItem item-2">
                <i className="bi bi-egg-fried"></i>
              </div>
              <div className="FloatingItem item-3">
                <i className="bi bi-pepper-hot"></i>
              </div>
            </div>
          </div>

          <div className="NotFoundText">
            <h1 className="NotFoundTitle">Oops! Page Not Found</h1>
            <p className="NotFoundDescription">
              It seems like this page has wandered off like a lost ingredient in a big kitchen. 
              Don't worry, we'll help you find your way back to the delicious parts of our site.
            </p>

            <div className="NotFoundActions">
              <Link to="/" className="NotFoundButton primary">
                <i className="bi bi-house"></i>
                Back to Home
              </Link>
              <Link to="/store" className="NotFoundButton secondary">
                <i className="bi bi-basket"></i>
                Continue Shopping
              </Link>
            </div>

            {/* Quick Links */}
            <div className="NotFoundQuickLinks">
              <h3>Popular Pages You Might Like</h3>
              <div className="QuickLinksGrid">
                <Link to="/store" className="QuickLink">
                  <i className="bi bi-bag"></i>
                  <span>All Products</span>
                </Link>
  
                <Link to="/info" className="QuickLink">
                  <i className="bi bi-info-circle"></i>
                  <span>About Us</span>
                </Link>
                <Link to="/contact" className="QuickLink">
                  <i className="bi bi-chat"></i>
                  <span>Contact</span>
                </Link>
              </div>
            </div>

            {/* Search Suggestion */}
            <div className="SearchSuggestion">
              <p>Can't find what you're looking for?</p>
              <Link to="/store" className="SearchLink">
                <i className="bi bi-search"></i>
                Try searching our store
              </Link>
            </div>
          </div>
        </div>

        {/* Fun Food Facts */}
        <div className="FoodFacts">
          <div className="FoodFact">
            <i className="bi bi-lightbulb"></i>
            <p>Did you know? Soy sauce takes over 6 months to ferment properly!</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;