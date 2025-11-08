import SectionTitle from '../components/shared/SectionTitle'
import Container from '../components/layout/Container'
import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import YouTube from 'react-youtube'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'

const reviewsVideoData = [
	{
		name: 'John Smith',
		instagram: '@johnsmith',
		video: 'I2LTfVxEAZc',
	},
	{
		name: 'Emily Johnson',
		instagram: '@emilyoffice',
		video: 'lSfof4_MFLA',
	},
	{
		name: 'Michael Brown',
		instagram: '@michaelbiz',
		video: '_SzC8GJ72Mw',
	},
	{
		name: 'Emily Johnson',
		instagram: '@emilyoffice',
		video: 'hmrsGZErbyw',
	},
	{
		name: 'Michael Brown',
		instagram: '@michaelbiz',
		video: 'p1Ofp2fDDwE',
	},
]

const ReviewsVideo = () => {
	const opts = {
		height: '100%',
		width: '100%',
		playerVars: {
			autoplay: 0,
			controls: 1,
			modestbranding: 1,
			rel: 0,
		},
	}

	return (
		<section id='reviews-video' className='scroll-mt-24 py-10 bg-gray-50'>
			<Container>
				<SectionTitle subtitle='Video Reviews' title='What Our Clients Say' />

				<motion.div
					initial='hidden'
					whileInView='visible'
					viewport={{ once: true, amount: 0.3 }}
					variants={{
						hidden: {},
						visible: { transition: { staggerChildren: 0.2 } },
					}}
				>
					<Swiper
						modules={[Pagination]}
						spaceBetween={16}
						slidesPerView={1.2}
						pagination={{ clickable: true }}
						breakpoints={{
							640: { slidesPerView: 1.5 },
							768: { slidesPerView: 2 },
							1024: { slidesPerView: 3 },
						}}
					>
						{reviewsVideoData.map((item, index) => (
							<SwiperSlide key={index}>
								<Card className='hover:shadow-xl transition mb-10'>
									<CardContent className='flex flex-col justify-between items-center p-1.5 text-center'>
										{/* Видео YouTube */}
										<motion.div
											whileHover={{ scale: 1.02 }}
											className='w-full aspect-[9/16] overflow-hidden rounded-xl border-2 border-blue-500 shadow-lg'
										>
											<YouTube
												videoId={item.video}
												opts={opts}
												className='w-full h-full'
											/>
										</motion.div>

										{/* Имя и Instagram снизу */}
										<div className='mt-6 text-center'>
											<h4 className='font-semibold text-gray-900'>
												{item.name}
											</h4>
											<a
												href={`https://instagram.com/${item.instagram.replace(
													'@',
													''
												)}`}
												target='_blank'
												rel='noopener noreferrer'
												className='text-blue-500 text-sm hover:underline'
											>
												{item.instagram}
											</a>
										</div>
									</CardContent>
								</Card>
							</SwiperSlide>
						))}
					</Swiper>
				</motion.div>
			</Container>
		</section>
	)
}

export default ReviewsVideo
