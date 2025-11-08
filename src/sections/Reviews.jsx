import SectionTitle from '../components/shared/SectionTitle'
import Container from '../components/layout/Container'
import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card' // shadcn/ui Card

const reviews = [
	{
		name: 'John Smith',
		role: 'Homeowner',
		message:
			'MovePro made my move completely stress-free! The team was professional and handled everything with care.',
		avatar: '/assets/images/reviewer1.jpg',
	},
	{
		name: 'Emily Johnson',
		role: 'Office Manager',
		message:
			'Our office relocation was smooth and fast thanks to MovePro. Highly recommend their services!',
		avatar: '/assets/images/reviewer2.jpg',
	},
	{
		name: 'Michael Brown',
		role: 'Entrepreneur',
		message:
			'Great team, punctual and efficient. They handled all our items carefully and professionally.',
		avatar: '/assets/images/reviewer3.jpg',
	},
]

const Reviews = () => {
	return (
		<section id='reviews' className='py-10 bg-gray-50'>
			<Container>
				<SectionTitle subtitle='Testimonials' title='What Our Clients Say' />

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
					{reviews.map((review, index) => (
						<motion.div
							key={index}
							variants={{
								hidden: { opacity: 0, y: 20 },
								visible: { opacity: 1, y: 0 },
							}}
						>
							<Card className='h-full hover:shadow-lg transition'>
								<CardContent className='flex flex-col items-center text-center space-y-4'>
									<img
										src={review.avatar}
										alt={review.name}
										className='w-16 h-16 rounded-full object-cover'
									/>
									<p className='text-gray-700 text-sm'>{review.message}</p>
									<div className='space-y-1'>
										<h4 className='font-semibold text-gray-900'>
											{review.name}
										</h4>
										<p className='text-gray-500 text-sm'>{review.role}</p>
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

export default Reviews
