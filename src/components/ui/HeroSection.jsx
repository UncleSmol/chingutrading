import React from 'react';
import '../../styles/HeroSection.css';

const HeroSection = ({ 
  title = "Welcome to Chingu Asian Market",
  subtitle = "Discover Authentic Asian Flavors",
  description = "From traditional ingredients to modern fusion snacks, explore our curated collection of premium Asian products delivered fresh to your door.",
  ctaText = "Shop Now",
  ctaLink = "/store",
  secondaryCtaText = "Learn More",
  secondaryCtaLink = "/info",
  backgroundImage = null,
  showCta = true
}) => {
  return (
    <section className="HeroSection" style={backgroundImage ? { backgroundImage: `url(${backgroundImage})` } : {}}>
      <div className="HeroOverlay" />
      <div className="HeroContainer">
        <div className="HeroContent">
          <h1 className="HeroTitle">{title}</h1>
          <p className="HeroSubtitle">{subtitle}</p>
          <p className="HeroDescription">{description}</p>
          
          {showCta && (
            <div className="HeroActions">
              <a href={ctaLink} className="HeroButton HeroButtonPrimary">
                {ctaText}
                <i className="bi bi-arrow-right"></i>
              </a>
              {secondaryCtaText && (
                <a href={secondaryCtaLink} className="HeroButton HeroButtonSecondary">
                  {secondaryCtaText}
                  <i className="bi bi-info-circle"></i>
                </a>
              )}
            </div>
          )}
        </div>

        <div className="HeroDecorations">
          <div className="HeroDecor HeroDecor1"></div>
          <div className="HeroDecor HeroDecor2"></div>
          <div className="HeroDecor HeroDecor3"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;