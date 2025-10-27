import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="Footer">
      <div className="FooterContainer">
        {/* Main Footer Content */}
        <div className="FooterMain">
          {/* Brand Section */}
          <div className="FooterBrand">
            <h3 className="FooterLogo">Chingu Asian Market</h3>
            <p className="FooterDescription">
              Your premier destination for authentic Asian groceries and culinary 
              delights in South Africa. Bringing the vibrant tastes of Asia to your doorstep.
            </p>
            <div className="SocialLinks">
              <a href="#" className="SocialLink" aria-label="Facebook">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="#" className="SocialLink" aria-label="Instagram">
                <i className="bi bi-instagram"></i>
              </a>
              <a href="#" className="SocialLink" aria-label="Twitter">
                <i className="bi bi-twitter"></i>
              </a>
              <a href="#" className="SocialLink" aria-label="TikTok">
                <i className="bi bi-tiktok"></i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="FooterSection">
            <h4 className="FooterTitle">Quick Links</h4>
            <ul className="FooterLinks">
              <li><a href="/">Home</a></li>
              <li><a href="/store">Shop All</a></li>
              <li><a href="/new-arrivals">New Arrivals</a></li>
              <li><a href="/specials">Special Offers</a></li>
              <li><a href="/recipes">Recipes</a></li>
            </ul>
          </div>

          {/* Categories */}
          <div className="FooterSection">
            <h4 className="FooterTitle">Categories</h4>
            <ul className="FooterLinks">
              <li><a href="/category/noodles">Noodles & Rice</a></li>
              <li><a href="/category/sauces">Sauces & Condiments</a></li>
              <li><a href="/category/snacks">Snacks & Sweets</a></li>
              <li><a href="/category/tea">Tea & Beverages</a></li>
              <li><a href="/category/frozen">Frozen Foods</a></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div className="FooterSection">
            <h4 className="FooterTitle">Customer Service</h4>
            <ul className="FooterLinks">
              <li><a href="/contact">Contact Us</a></li>
              <li><a href="/shipping">Shipping Info</a></li>
              <li><a href="/returns">Returns & Refunds</a></li>
              <li><a href="/faq">FAQ</a></li>
              <li><a href="/track-order">Track Order</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="FooterSection">
            <h4 className="FooterTitle">Contact Info</h4>
            <div className="ContactInfo">
              <div className="ContactItem">
                <i className="bi bi-geo-alt"></i>
                <span>123 Asian Street, Johannesburg, SA</span>
              </div>
              <div className="ContactItem">
                <i className="bi bi-telephone"></i>
                <span>+27 11 123 4567</span>
              </div>
              <div className="ContactItem">
                <i className="bi bi-envelope"></i>
                <span>hello@chingu.co.za</span>
              </div>
              <div className="ContactItem">
                <i className="bi bi-clock"></i>
                <span>Mon-Sat: 8AM-6PM</span>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="NewsletterSection">
          <div className="NewsletterContent">
            <div className="NewsletterText">
              <h4 className="NewsletterTitle">Stay Updated</h4>
              <p className="NewsletterDescription">
                Get the latest on new products, special offers, and Asian cooking tips delivered to your inbox.
              </p>
            </div>
            <form className="NewsletterForm">
              <div className="InputGroup">
                <input 
                  type="email" 
                  placeholder="Enter your email address"
                  className="NewsletterInput"
                  required
                />
                <button type="submit" className="NewsletterButton">
                  <i className="bi bi-send"></i>
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="FooterBottom">
          <div className="FooterBottomContent">
            <div className="Copyright">
              <p>&copy; {new Date().getFullYear()} Chingu Asian Market. All rights reserved.</p>
            </div>
            <div className="FooterLegal">
              <a href="/privacy">Privacy Policy</a>
              <a href="/terms">Terms of Service</a>
              <a href="/cookies">Cookie Policy</a>
            </div>
            <div className="PaymentMethods">
              <i className="bi bi-credit-card" title="Credit Cards"></i>
              <i className="bi bi-paypal" title="PayPal"></i>
              <i className="bi bi-bank" title="Bank Transfer"></i>
              <i className="bi bi-cash-coin" title="Cash on Delivery"></i>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;