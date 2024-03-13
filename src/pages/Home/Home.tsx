import Footer from "../../components/Footer/Footer"
import Banner from "./components/Banner/Banner"
import BottomBanner from "./components/BottomBanner/BottomBanner"
import { Featured } from "./components/Featured/Featured"
import { FeaturedProducts } from "./components/FeaturedProducts/FeaturedProducts"
import { HeroSection } from "./components/HeroSection/HeroSection"
import NewArrival from "./components/NewArrival/NewArrival"
import NewsLetters from "./components/NewsLetters/NewsLetters"

export function Home () {
  return (
    <>
      <HeroSection />
      <Featured />
      <FeaturedProducts />
      <Banner />
      <NewArrival />
      <BottomBanner />
      <NewsLetters />
      <Footer />
    </>
  )
}