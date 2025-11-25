import { Button } from '@/components/ui/button'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Hero from './sections/Hero'
import About from './sections/About'
import Reviews from './sections/Reviews'
import License from './sections/License'
import Gallery from './sections/Gallery'
import FaqSection from './sections/FaqSection'
import Contacts from './sections/Contacts'
import FloatingQuoteButton from './components/layout/FloatingQuoteButton'
import BrandCarousel from './sections/BrandCarousel'
import { QuoteModalProvider } from './context/QuoteModalContext'
import QuoteModal from './components/layout/QuoteModal'
// import ReviewsVideo from './sections/ReviewsVideo'
// import Promo from './sections/Promo'
// import Services from './sections/Services'

function App() {
	return (
		<div>
			<QuoteModalProvider >
      <Header />
			<main>
        <Hero />
				<BrandCarousel />
				<About />
				<Reviews />
				<License />
				<Gallery />
				<FaqSection />
				<Contacts />
				{/* <ReviewsVideo /> */}
				{/* <Promo /> */}
				{/* <ServiceArea /> */}
				{/* <Services /> */}
			</main>
			<Footer />
			<FloatingQuoteButton />
		  	<QuoteModal />
			</QuoteModalProvider>
		</div>
	)
}

export default App
