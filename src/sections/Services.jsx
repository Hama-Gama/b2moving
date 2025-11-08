import SectionTitle from '../components/shared/SectionTitle'
import Container from '../components/layout/Container'
import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card' // shadcn/ui Card

const services = [
	{
		title: 'Residential Moving',
		description:
			'We handle apartment and house moves efficiently and safely, ensuring your belongings arrive intact.',
		icon: '/assets/icons/residential.svg',
	},
	{
		title: 'Office Relocation',
		description:
			'We organize office moves without downtime, making your business transition smooth.',
		icon: '/assets/icons/office.svg',
	},
	{
		title: 'Packing & Unpacking',
		description:
			'Professional packing and unpacking services to protect your items during transport.',
		icon: '/assets/icons/packing.svg',
	},
	{
		title: 'Furniture Assembly',
		description:
			'Our team assembles and disassembles furniture, saving you time and effort.',
		icon: '/assets/icons/furniture.svg',
	},
	{
		title: 'Storage Solutions',
		description:
			'Secure storage options for short-term or long-term needs, fully insured and monitored.',
		icon: '/assets/icons/storage.svg',
	},
]

const Services = () => {
	return (
		<section id='services' className='py-20 bg-white'>
			<Container>
				<SectionTitle subtitle='Our Offerings' title='Services We Provide' />

				<motion.div
					className='mt-10 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'
					initial='hidden'
					whileInView='visible'
					viewport={{ once: true, amount: 0.3 }}
					variants={{
						hidden: {},
						visible: { transition: { staggerChildren: 0.15 } },
					}}
				>
					{services.map((service, index) => (
						<motion.div
							key={index}
							variants={{
								hidden: { opacity: 0, y: 20 },
								visible: { opacity: 1, y: 0 },
							}}
						>
							<Card className='hover:shadow-lg transition cursor-default'>
								<CardContent className='text-center space-y-4'>
									<img
										src={service.icon}
										alt={service.title}
										className='w-12 h-12 mx-auto'
									/>
									<h3 className='text-xl font-semibold text-gray-900'>
										{service.title}
									</h3>
									<p className='text-gray-700 text-sm'>{service.description}</p>
								</CardContent>
							</Card>
						</motion.div>
					))}
				</motion.div>
			</Container>
		</section>
	)
}

export default Services
