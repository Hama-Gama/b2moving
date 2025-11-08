import SectionTitle from '../components/shared/SectionTitle'
import Container from '../components/layout/Container'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button' // shadcn/ui Button

const Promo = () => {
	return (
		<section id='promo' className='py-20 bg-gray-100'>
			<Container>
				<SectionTitle subtitle='Watch Now' title='Our Company in Action' />

				<motion.div
					className='mt-10 flex flex-col md:flex-row items-center justify-center gap-8'
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
				>
					{/* Video */}
					<div className='w-full md:w-2/3 rounded-lg overflow-hidden shadow-lg'>
						<video
							src='/assets/video/company-promo.mp4'
							controls
							className='w-full h-auto'
						/>
					</div>

					{/* Text and CTA */}
					<div className='w-full md:w-1/3 flex flex-col items-start space-y-4'>
						<p className='text-gray-700 text-lg'>
							Watch our short video to see how MovePro makes moving simple,
							safe, and stress-free.
						</p>
						<Button
							asChild
							className='bg-blue-600 hover:bg-blue-700 text-white'
						>
							<a href='#contacts'>Get a Quote</a>
						</Button>
					</div>
				</motion.div>
			</Container>
		</section>
	)
}

export default Promo
