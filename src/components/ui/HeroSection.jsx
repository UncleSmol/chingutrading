import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles/HeroSection.css';

const HeroSection = ({ 
  title = "Welcome to Chingu Asian Market",
  subtitle = "Discover Authentic Asian Flavors",
  description = "From traditional ingredients to modern fusion snacks, explore our curated collection of premium Asian products delivered fresh to your door.",
  ctaText = "Shop Now",
  ctaLink = "/store",
  secondaryCtaText = "Learn More",
  secondaryCtaLink = "/info",
  videoSrc = "https://cdn.pixabay.com/video/2015/10/16/1034-142621321_large.mp4",
  showCta = true
}) => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const videoRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleLoadedData = () => {
      setIsVideoLoaded(true);
      video.play().catch(error => {
        console.log('Auto-play prevented:', error);
      });
    };

    const handleCanPlay = () => {
      setIsVideoLoaded(true);
    };

    video.addEventListener('loadeddata', handleLoadedData);
    video.addEventListener('canplay', handleCanPlay);
    video.preload = 'metadata';

    return () => {
      video.removeEventListener('loadeddata', handleLoadedData);
      video.removeEventListener('canplay', handleCanPlay);
    };
  }, []);

  const handleUserInteraction = () => {
    const video = videoRef.current;
    if (video && video.paused) {
      video.play().catch(console.error);
    }
  };

  const handleCtaClick = (e, path) => {
    e.preventDefault();
    handleUserInteraction();
    navigate(path);
  };

  const handleSecondaryCtaClick = (e, path) => {
    e.preventDefault();
    handleUserInteraction();
    navigate(path);
  };

  return (
    <section 
      className="HeroSection" 
      onClick={handleUserInteraction}
    >
      {/* Optimized Video Background */}
      <div className={`VideoBackground ${isVideoLoaded ? 'video-loaded' : 'video-loading'}`}>
        <video
          ref={videoRef}
          className="BackgroundVideo"
          muted
          loop
          playsInline
          disablePictureInPicture
          preload="metadata"
          aria-hidden="true"
        >
          <source src={videoSrc} type="video/mp4" />
          <div className="VideoFallback">
            <div className="FallbackGradient"></div>
          </div>
        </video>
        <div className="VideoOverlay"></div>
        
        {!isVideoLoaded && (
          <div className="VideoPlaceholder">
            <div className="LoadingSpinner"></div>
          </div>
        )}
      </div>

      <div className="HeroContainer">
        <div className="HeroContent">
          <h1 className="HeroTitle">{title}</h1>
          <p className="HeroSubtitle">{subtitle}</p>
          <p className="HeroDescription">{description}</p>
          
          {showCta && (
            <div className="HeroActions">
              <button 
                onClick={(e) => handleCtaClick(e, ctaLink)}
                className="HeroButton HeroButtonPrimary"
              >
                {ctaText}
                <i className="bi bi-arrow-right"></i>
              </button>
              {secondaryCtaText && (
                <button 
                  onClick={(e) => handleSecondaryCtaClick(e, secondaryCtaLink)}
                  className="HeroButton HeroButtonSecondary"
                >
                  {secondaryCtaText}
                  <i className="bi bi-info-circle"></i>
                </button>
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