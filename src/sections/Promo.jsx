import SectionTitle from '../components/shared/SectionTitle'
import Container from '../components/layout/Container'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button' // shadcn/ui Button
import YouTube from 'react-youtube'

const Promo = () => {
	const opts = {
		width: '100%',
		height: '100%',
		playerVars: {
			autoplay: 0,
			controls: 1,
			modestbranding: 1,
			rel: 0,
		},
	}

	return (
		<section id='promo' className='py-10 bg-gray-100'>
			<Container>
				<SectionTitle subtitle='Watch Now' title='Our Company in Action' />

				<motion.div
					className='mt-10 flex flex-col md:flex-row items-center justify-center gap-8'
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
				>
					{/* Video via React-YouTube */}
					<div className='w-full md:w-2/3 rounded-lg overflow-hidden shadow-lg aspect-[16/9]'>
						<YouTube
							videoId='WChwe50uxjc'
							opts={opts}
							className='w-full h-full'
						/>
					</div>

					{/* Text and CTA */}
					<div className='w-full md:w-1/3 flex flex-col items-start space-y-4'>
						<p className='text-gray-700 text-lg'>
							Watch our short video to see how B2Moving makes moving simple,
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
