import { Button } from '@/components/ui/button'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Hero from './sections/Hero'
import ReviewsVideo from './sections/ReviewsVideo'
import About from './sections/About'
import Promo from './sections/Promo'
import Reviews from './sections/Reviews'
import License from './sections/License'
// import Services from './sections/Services'
import Gallery from './sections/Gallery'
import FaqSection from './sections/FaqSection'
import Contacts from './sections/Contacts'
import FloatingQuoteButton from './components/layout/FloatingQuoteButton'
import BrandCarousel from './sections/BrandCarousel'

function App() {
	return (
		<div>
      <Header />
			<main>
        <Hero />
				<BrandCarousel />
				<ReviewsVideo />
				<About />
				<Promo />
				<Reviews />
				{/* <ServiceArea /> */}
				<License />
				{/* <Services /> */}
				<Gallery />
				<FaqSection />
				<Contacts />
			</main>
			<Footer />
			<FloatingQuoteButton />
		</div>
	
	)
}

export default App
