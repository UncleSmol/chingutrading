import React from 'react'
import HeroSection from '../components/ui/HeroSection'
import FeaturedProducts from '../components/ui/FeaturedProducts'
import NewArrivals from '../components/ui/NewArrivals'
import AboutUs from '../components/ui/AboutUs'

const Homepage = () => {
  return (
    <section>
      <HeroSection />
      <FeaturedProducts 
      title="Chingu Store Favorites"
      subtitle="Best-selling products loved by our customers"
      maxProducts={4}
      showViewAll={true}
    />
    <NewArrivals />
    <AboutUs />
    </section>
  )
}

export default Homepage