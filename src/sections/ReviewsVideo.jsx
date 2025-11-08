import SectionTitle from '../components/shared/SectionTitle'
import Container from '../components/layout/Container'
import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card' // shadcn/ui Card

const reviewsVideoData = [
	{
		name: 'John Smith',
		role: 'Homeowner',
		message: 'MovePro made my move completely stress-free!',
		video: '/assets/video/review1.mp4',
		avatar: '/assets/images/reviewer1.jpg',
	},
	{
		name: 'Emily Johnson',
		role: 'Office Manager',
		message: 'Our office relocation was smooth and fast thanks to MovePro!',
		video: '/assets/video/review2.mp4',
		avatar: '/assets/images/reviewer2.jpg',
	},
	{
		name: 'Michael Brown',
		role: 'Entrepreneur',
		message: 'Great team, punctual and efficient.',
		video: '/assets/video/review3.mp4',
		avatar: '/assets/images/reviewer3.jpg',
	},
]

const ReviewsVideo = () => {
	return (
		<section id='reviews-video' className='py-20 bg-gray-50'>
			<Container>
				<SectionTitle
					subtitle='Video Testimonials'
					title='What Our Clients Say'
				/>

				<motion.div
					className='mt-10 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'
					initial='hidden'
					whileInView='visible'
					viewport={{ once: true, amount: 0.3 }}
					variants={{
						hidden: {},
						visible: { transition: { staggerChildren: 0.2 } },
					}}
				>
					{reviewsVideoData.map((item, index) => (
						<motion.div
							key={index}
							variants={{
								hidden: { opacity: 0, y: 20 },
								visible: { opacity: 1, y: 0 },
							}}
						>
							<Card className='hover:shadow-lg transition'>
								<CardContent className='flex flex-col items-center space-y-4 text-center'>
									<img
										src={item.avatar}
										alt={item.name}
										className='w-16 h-16 rounded-full object-cover'
									/>
									<p className='text-gray-700 text-sm'>{item.message}</p>
									<video
										src={item.video}
										controls
										className='w-full rounded-lg shadow-md mt-2'
									/>
									<div className='space-y-1'>
										<h4 className='font-semibold text-gray-900'>{item.name}</h4>
										<p className='text-gray-500 text-sm'>{item.role}</p>
									</div>
								</CardContent>
							</Card>
						</motion.div>
					))}
				</motion.div>
			</Container>
		</section>
	)
}

export default ReviewsVideo
