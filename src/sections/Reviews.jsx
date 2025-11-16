import SectionTitle from '../components/shared/SectionTitle'
import Container from '../components/layout/Container'
import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Star } from 'lucide-react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, EffectCube } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/effect-cube'

// Данные отзывов
const reviews = [
	{
		name: 'Emily Smith',
		role: 'Homeowner',
		message:
			'The quality of service I received from B2 Moving Company was unparalleled. They made what is often a daunting task feel effortless. Highly recommended!',
		avatar: '/review-1.jpg',
		rating: 4.9,
	},
	{
		name: 'Kate Johnson',
		role: 'Office Manager',
		message:
			'Our office relocation was smooth and fast thanks to B2Moving. Highly recommend their services!',
		avatar: '/review-2.jpg',
		rating: 5.0,
	},
	{
		name: 'Michael Brown',
		role: 'Entrepreneur',
		message:
			'Great team, punctual and efficient. They handled all our items carefully and professionally.',
		avatar: '/review-3.jpg',
		rating: 4.8,
	},
	{
		name: 'Simon Dewalt',
		role: 'Interior Designer',
		message:
			'They made my moving experience feel effortless. Excellent coordination and support throughout!',
		avatar: '/review-4.jpg',
		rating: 4.9,
	},
	{
		name: 'Laura Wilson',
		role: 'Freelancer',
		message:
			'B2 Moving Company exceeded my expectations in every way. Their team was friendly, efficient, and took great care of my belongings.',
		avatar: '/review-5.jpg',
		rating: 4.8,
	},
]

const Reviews = () => {
	return (
		<section id='reviews' className='scroll-mt-24 py-20 bg-gray-50'>
			<Container>
				<SectionTitle subtitle='Reviews' title='What Our Clients Say' />

				<motion.div
					className='mt-10 max-w-2xl mx-auto'
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
				>
					<Swiper
						modules={[Autoplay, EffectCube]}
						effect='cube'
						grabCursor={true}
						cubeEffect={{
							shadow: true,
							slideShadows: true,
							shadowOffset: 20,
							shadowScale: 0.94,
						}}
						autoplay={{ delay: 2000, disableOnInteraction: true }}
						className='max-w-md mx-auto'
					>
						{reviews.map((review, index) => (
							<SwiperSlide key={index}>
								<motion.div
									whileHover={{ scale: 1.02 }}
									transition={{ type: 'spring', stiffness: 120 }}
								>
									<Card className='h-full p-6 bg-white border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 rounded-2xl pb-10'>
										<CardContent className='flex flex-col items-center text-center space-y-4'>
											<div className='relative w-20 h-20'>
												{/* Синий круг позади */}
												<div className='absolute top-[6px] top-0 w-20 h-20 bg-blue-500 rounded-full z-0 shadow-lg' />

												{/* Аватар поверх */}
												<img
													src={review.avatar}
													alt={review.name}
													className='relative z-10 w-20 h-20 rounded-full object-cover shadow-lg'
												/>
											</div>

											{/* Аватар */}
											{/* <img
												src={review.avatar}
												alt={review.name}
												className='w-20 h-20 rounded-full object-cover shadow-md'
											/> */}

											{/* Текст отзыва */}
											<p className='text-gray-700 text-[15px] leading-relaxed italic'>
												“{review.message}”
											</p>

											{/* Имя и должность */}
											<div className='space-y-1'>
												<h4 className='font-semibold text-gray-900'>
													{review.name}
												</h4>
												<p className='text-gray-500 text-sm'>{review.role}</p>
											</div>

											{/* Рейтинг */}
											<div className='flex items-center justify-center gap-1'>
												{[...Array(5)].map((_, i) => (
													<Star
														key={i}
														size={18}
														className={
															i < Math.round(review.rating)
																? 'text-yellow-400 fill-yellow-400'
																: 'text-gray-300'
														}
													/>
												))}
												<span className='ml-2 text-sm text-gray-600 font-medium'>
													{review.rating.toFixed(1)}
												</span>
											</div>
										</CardContent>
									</Card>
								</motion.div>
							</SwiperSlide>
						))}
					</Swiper>
				</motion.div>
			</Container>
		</section>
	)
}

export default Reviews
