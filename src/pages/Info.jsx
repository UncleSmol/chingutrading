import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Info.css';

const Info = () => {
  const navigate = useNavigate();
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const videoRef = useRef(null);

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

  const handleShopClick = (e) => {
    e.preventDefault();
    navigate('/store');
  };

  const handleContactClick = (e) => {
    e.preventDefault();
    navigate('/contact');
  };

  return (
    <div className="InfoPage">
      {/* Hero Banner with Video Background */}
      <section 
        className="InfoHero"
        onClick={handleUserInteraction}
      >
        {/* Video Background */}
        <div className={`InfoVideoBackground ${isVideoLoaded ? 'video-loaded' : 'video-loading'}`}>
          <video
            ref={videoRef}
            className="InfoBackgroundVideo"
            muted
            loop
            playsInline
            disablePictureInPicture
            preload="metadata"
            aria-hidden="true"
          >
            <source src="https://cdn.pixabay.com/video/2017/07/23/10853-226632937_large.mp4" type="video/mp4" />
            {/* Fallback for browsers that don't support video */}
            <div className="InfoVideoFallback">
              <div className="InfoFallbackGradient"></div>
            </div>
          </video>
          <div className="InfoVideoOverlay"></div>
          
          {/* Loading placeholder */}
          {!isVideoLoaded && (
            <div className="InfoVideoPlaceholder">
              <div className="InfoLoadingSpinner"></div>
            </div>
          )}
        </div>

        <div className="InfoHeroContent">
          <div className="Container">
            <div className="InfoHeroText">
              <h1 className="InfoTitle">Our Story</h1>
              <p className="InfoSubtitle">
                From humble beginnings to becoming South Africa's trusted source for authentic Asian ingredients
              </p>
              <div className="InfoHeroStats">
                <div className="HeroStat">
                  <span className="HeroStatNumber">4</span>
                  <span className="HeroStatLabel">Years of Excellence</span>
                </div>
                <div className="HeroStat">
                  <span className="HeroStatNumber">500+</span>
                  <span className="HeroStatLabel">Authentic Products</span>
                </div>
                <div className="HeroStat">
                  <span className="HeroStatNumber">10k+</span>
                  <span className="HeroStatLabel">Happy Customers</span>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="InfoHeroActions">
                <button 
                  onClick={handleShopClick}
                  className="InfoHeroButton InfoHeroButtonPrimary"
                >
                  <i className="bi bi-basket"></i>
                  Start Shopping
                </button>
                <button 
                  onClick={handleContactClick}
                  className="InfoHeroButton InfoHeroButtonSecondary"
                >
                  <i className="bi bi-chat"></i>
                  Contact Our Experts
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Origin Story */}
      <section className="OriginSection">
        <div className="Container">
          <div className="OriginContent">
            <div className="OriginImage">
              <div className="OriginVisual">
                <div className="VisualElement visual-1"></div>
                <div className="VisualElement visual-2"></div>
                <div className="VisualElement visual-3"></div>
              </div>
            </div>
            <div className="OriginText">
              <h2>The Chingu Journey</h2>
              <div className="OriginStory">
                <p>
                  In 2020, amidst the vibrant streets of Johannesburg, a passion for authentic Asian cuisine 
                  sparked an idea. Founders Sarah and Min-ho noticed the growing demand for genuine Asian 
                  ingredients that were either unavailable or of questionable quality in local markets.
                </p>
                <p>
                  The name <strong>"Chingu"</strong> (친구), meaning "friend" in Korean, was chosen to reflect 
                  our core philosophy: building friendships through food. What started as a small stall 
                  at weekend markets has blossomed into South Africa's most trusted Asian grocery destination.
                </p>
                <p>
                  Today, we work directly with family-owned producers across Asia to bring you ingredients 
                  that tell stories of tradition, craftsmanship, and culinary heritage.
                </p>
              </div>
              <div className="FounderQuote">
                <div className="QuoteIcon">"</div>
                <p className="QuoteText">
                  Food is the universal language that connects us all. At Chingu, we're not just selling 
                  ingredients; we're sharing cultures and creating connections.
                </p>
                <div className="QuoteAuthor">
                  <strong>Min-ho & Sarah Kim</strong>
                  <span>Founders, Chingu Asian Market</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="ValuesSection">
        <div className="Container">
          <div className="ValuesHeader">
            <h2>Our Commitment to You</h2>
            <p>Three pillars that define the Chingu experience</p>
          </div>
          <div className="ValuesGrid">
            <div className="ValueCard value-1">
              <div className="ValueIcon">
                <i className="bi bi-shield-check"></i>
              </div>
              <h3>Authenticity Guaranteed</h3>
              <p>
                Every product in our store is sourced directly from reputable producers in Asia. 
                We personally vet each supplier to ensure you receive genuine ingredients that 
                honor traditional recipes and flavors.
              </p>
              <ul className="ValueFeatures">
                <li>Direct supplier relationships</li>
                <li>Traditional production methods</li>
                <li>Cultural authenticity verification</li>
              </ul>
            </div>

            <div className="ValueCard value-2">
              <div className="ValueIcon">
                <i className="bi bi-award"></i>
              </div>
              <h3>Uncompromising Quality</h3>
              <p>
                From farm to your kitchen, we maintain the highest standards. Our products undergo 
                rigorous quality checks to ensure freshness, purity, and exceptional taste in every package.
              </p>
              <ul className="ValueFeatures">
                <li>Freshness guarantee</li>
                <li>Quality control at every stage</li>
                <li>Premium ingredient selection</li>
              </ul>
            </div>

            <div className="ValueCard value-3">
              <div className="ValueIcon">
                <i className="bi bi-heart"></i>
              </div>
              <h3>Community First</h3>
              <p>
                We believe in building relationships, not just making sales. Our team of Asian cuisine 
                experts is here to guide you, share knowledge, and help you create memorable meals.
              </p>
              <ul className="ValueFeatures">
                <li>Expert culinary guidance</li>
                <li>Recipe sharing community</li>
                <li>Personalized customer care</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="ProcessSection">
        <div className="Container">
          <h2>From Asia to Your Kitchen</h2>
          <div className="ProcessTimeline">
            <div className="ProcessStep">
              <div className="StepNumber">01</div>
              <div className="StepContent">
                <h3>Sourcing</h3>
                <p>We travel across Asia to find family-owned producers who maintain traditional methods</p>
              </div>
            </div>
            <div className="ProcessStep">
              <div className="StepNumber">02</div>
              <div className="StepContent">
                <h3>Quality Check</h3>
                <p>Every product undergoes rigorous testing for authenticity, freshness, and quality</p>
              </div>
            </div>
            <div className="ProcessStep">
              <div className="StepNumber">03</div>
              <div className="StepContent">
                <h3>Careful Import</h3>
                <p>Temperature-controlled shipping ensures products arrive in perfect condition</p>
              </div>
            </div>
            <div className="ProcessStep">
              <div className="StepNumber">04</div>
              <div className="StepContent">
                <h3>Your Kitchen</h3>
                <p>Fast, reliable delivery brings authentic Asian flavors directly to your home</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="TeamSection">
        <div className="Container">
          <div className="TeamHeader">
            <h2>Meet the Chingu Family</h2>
            <p>The passionate team behind your favorite Asian market</p>
          </div>
          <div className="TeamGrid">
            <div className="TeamMember">
              <div className="MemberImage member-1"></div>
              <div className="MemberInfo">
                <h3>Min-ho Kim</h3>
                <span className="MemberRole">Co-Founder & CEO</span>
                <p>
                  Born in Seoul and raised with a deep appreciation for Korean culinary traditions. 
                  Min-ho ensures every product meets authentic standards.
                </p>
              </div>
            </div>
            <div className="TeamMember">
              <div className="MemberImage member-2"></div>
              <div className="MemberInfo">
                <h3>Sarah Kim</h3>
                <span className="MemberRole">Co-Founder & Operations</span>
                <p>
                  South African-born with a passion for bringing Asian flavors to local communities. 
                  Sarah manages our customer experience and community outreach.
                </p>
              </div>
            </div>
            <div className="TeamMember">
              <div className="MemberImage member-3"></div>
              <div className="MemberInfo">
                <h3>Chen Li</h3>
                <span className="MemberRole">Head Chef & Product Curator</span>
                <p>
                  Former executive chef with 15 years experience in Asian fusion cuisine. 
                  Chen tests and approves every product in our collection.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="InfoCTASection">
        <div className="Container">
          <div className="InfoCTAContent">
            <h2>Ready to Explore Authentic Asian Flavors?</h2>
            <p>Join thousands of South Africans who trust Chingu for their Asian cooking needs</p>
            <div className="InfoCTAActions">
              <button 
                onClick={handleShopClick}
                className="CTAPrimary"
              >
                <i className="bi bi-basket"></i>
                Start Shopping
              </button>
              <button 
                onClick={handleContactClick}
                className="CTASecondary"
              >
                <i className="bi bi-chat"></i>
                Contact Our Experts
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Info;