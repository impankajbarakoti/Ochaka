import { Features } from "tailwindcss"
import HeroSection from "./HeroSection"
import FeaturesSection from "./FeaturesSection"
import BookCategories from "./BookCategories"
import Countdown from "./Countdown"
import Bestsellers from "./Bestsellers"
import PromoSection from "./PromoSection"
import BestFiction from "./BestFiction"
import FrequentlyBoughtTogether from "./FrequentlyBoughtTogether"
import OurBest from "./OurBest"
import DiscountBanner from "./DiscountBanner"
import CustomerReviews from "./CustomerReviews"


const MainHome = () => {
  return (
    <div>
          <HeroSection />
          <FeaturesSection />
          <BookCategories />
          <Countdown />
          <Bestsellers />
          <PromoSection />
          <BestFiction />
          <FrequentlyBoughtTogether />
          <OurBest />
          <DiscountBanner />
          <CustomerReviews/>
          
    </div>
  )
}

export default MainHome
