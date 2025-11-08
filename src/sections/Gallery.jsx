import SectionTitle from '../components/shared/SectionTitle'
import Container from '../components/layout/Container'
import { motion } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Parallax, Pagination, EffectCreative } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/effect-creative'

const images = [
	'/gallery1.jpg',
	'/gallery2.jpg',
	'/gallery3.jpg',
	'/gallery4.jpg',
	'/gallery5.jpg',
	'/gallery6.jpg',
]

const Gallery = () => {
	return (
		<section
			id='gallery'
			className='scroll-mt-24 py-10 bg-gray-100 overflow-hidden'
		>
			<Container>
				<SectionTitle
					subtitle='Our Work'
					title='Highlights from Our Moving Journeys'
				/>

				<motion.div
					className='mt-10 relative'
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					viewport={{ once: true }}
				>
					<Swiper
						modules={[Parallax, Pagination, EffectCreative]}
						speed={1000}
						parallax={true}
						grabCursor={true}
						pagination={{ clickable: true }}
						effect='creative'
						creativeEffect={{
							prev: {
								shadow: true,
								translate: ['-120%', 0, -500],
								rotate: [0, 0, -10],
								scale: 0.8,
							},
							next: {
								translate: ['120%', 0, -500],
								rotate: [0, 0, 10],
								scale: 0.8,
							},
						}}
						className='rounded-2xl shadow-xl'
					>
						{images.map((src, index) => (
							<SwiperSlide key={index}>
								<div
									className='relative w-full h-[400px] md:h-[500px] overflow-hidden rounded-2xl'
									data-swiper-parallax='30%'
								>
									<img
										src={src}
										alt={`Moving moment ${index + 1}`}
										className='absolute inset-0 w-full h-full object-cover scale-110 transition-transform duration-700 hover:scale-125'
									/>
									<div className='absolute inset-0 bg-gradient-to-t from-black/50 to-transparent'></div>
								</div>
							</SwiperSlide>
						))}
					</Swiper>
				</motion.div>
			</Container>
		</section>
	)
}

export default Gallery
