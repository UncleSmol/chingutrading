import React from 'react';
import '../../styles/AboutUs.css';

const AboutUs = () => {
  return (
    <section className="AboutUs">
      <div className="Container">
        <div className="AboutContent">
          <div className="AboutText">
            <div className="SectionHeader">
              <h2 className="SectionTitle">About Chingu Asian Market</h2>
              <p className="SectionSubtitle">Bringing Authentic Asian Flavors to South Africa</p>
            </div>
            
            <div className="AboutDescription">
              <p>
                Welcome to <strong>Chingu Asian Market</strong>, your premier destination for authentic 
                Asian groceries and culinary delights in South Africa. Founded with a passion for 
                bringing the vibrant tastes of Asia to our local community, we curate the finest 
                products from across the continent.
              </p>
              
              <p>
                From traditional Japanese ingredients to Korean snacks, Chinese teas to Thai spices, 
                we're committed to providing genuine quality that honors Asian culinary traditions 
                while making them accessible to everyone.
              </p>
            </div>

            <div className="AboutFeatures">
              <div className="Feature">
                <i className="bi bi-check-circle"></i>
                <span>100% Authentic Products</span>
              </div>
              <div className="Feature">
                <i className="bi bi-check-circle"></i>
                <span>Fresh & Quality Guaranteed</span>
              </div>
              <div className="Feature">
                <i className="bi bi-check-circle"></i>
                <span>Nationwide Delivery</span>
              </div>
              <div className="Feature">
                <i className="bi bi-check-circle"></i>
                <span>Expertly Curated Selection</span>
              </div>
            </div>

            <div className="AboutStats">
              <div className="Stat">
                <span className="StatNumber">500+</span>
                <span className="StatLabel">Products</span>
              </div>
              <div className="Stat">
                <span className="StatNumber">10+</span>
                <span className="StatLabel">Asian Countries</span>
              </div>
              <div className="Stat">
                <span className="StatNumber">1000+</span>
                <span className="StatLabel">Happy Customers</span>
              </div>
              <div className="Stat">
                <span className="StatNumber">24/7</span>
                <span className="StatLabel">Online Support</span>
              </div>
            </div>
          </div>

          <div className="AboutVisual">
            <div className="VisualCard VisualCard1">
              <i className="bi bi-basket"></i>
              <h4>Fresh Ingredients</h4>
              <p>Direct from source to your kitchen</p>
            </div>
            <div className="VisualCard VisualCard2">
              <i className="bi bi-truck"></i>
              <h4>Fast Delivery</h4>
              <p>Across South Africa</p>
            </div>
            <div className="VisualCard VisualCard3">
              <i className="bi bi-star"></i>
              <h4>Premium Quality</h4>
              <p>Curated by experts</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;