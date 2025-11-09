import { motion } from 'framer-motion'
import Container from '../components/layout/Container'

const Hero = () => {
	return (
		<section
			id='hero'
			className='relative bg-white min-h-screen flex items-center'
		>
			<Container>
				<div className='grid md:grid-cols-2 gap-8 items-center'>
					{/* Text Content */}
					<motion.div
						initial={{ opacity: 0, x: -50 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.8 }}
						className='space-y-6'
					>
						<h1 className='text-4xl md:text-5xl font-bold text-gray-900 leading-tight'>
							Stress-Free Moving Solutions
						</h1>
						<p className='text-gray-700 text-lg md:text-xl'>
							MovePro makes your relocation fast, safe, and hassle-free. Trusted
							by families and businesses alike.
						</p>
						<div className='flex space-x-4'>
							<a
								href='#contacts'
								className='bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition'
							>
								Get a Quote
							</a>
							<a
								href='#services'
								className='bg-gray-200 text-gray-900 px-6 py-3 rounded-md hover:bg-gray-300 transition'
							>
								Our Services
							</a>
						</div>
					</motion.div>

					{/* Image */}
					<motion.div
						initial={{ opacity: 0, x: 50 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.8 }}
						className='w-full flex justify-center md:justify-end'
					>
						<img
							src='/gallery1.jpg'
							alt='Professional movers in action'
							className='rounded-lg shadow-xl max-w-full h-auto'
						/>
					</motion.div>
				</div>
			</Container>
		</section>
	)
}

export default Hero
