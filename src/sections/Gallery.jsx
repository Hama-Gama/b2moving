import SectionTitle from '../components/shared/SectionTitle'
import Container from '../components/layout/Container'
import { motion } from 'framer-motion'

const images = [
	'/assets/images/move1.jpg',
	'/assets/images/move2.jpg',
	'/assets/images/move3.jpg',
	'/assets/images/move4.jpg',
	'/assets/images/move5.jpg',
	'/assets/images/move6.jpg',
]

const Gallery = () => {
	return (
		<section id='gallery' className='py-20 bg-gray-100'>
			<Container>
				<SectionTitle
					subtitle='Our Work'
					title='Highlights from Our Moving Journeys'
				/>

				<motion.div
					className='mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'
					initial='hidden'
					whileInView='visible'
					viewport={{ once: true, amount: 0.3 }}
					variants={{
						hidden: {},
						visible: { transition: { staggerChildren: 0.1 } },
					}}
				>
					{images.map((src, index) => (
						<motion.div
							key={index}
							className='overflow-hidden rounded-lg cursor-pointer shadow-lg hover:scale-105 transition-transform'
							variants={{
								hidden: { opacity: 0, y: 20 },
								visible: { opacity: 1, y: 0 },
							}}
						>
							<img
								src={src}
								alt={`Moving moment ${index + 1}`}
								className='w-full h-48 object-cover'
							/>
						</motion.div>
					))}
				</motion.div>
			</Container>
		</section>
	)
}

export default Gallery
