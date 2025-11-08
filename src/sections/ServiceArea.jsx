import SectionTitle from '../components/shared/SectionTitle'
import Container from '../components/layout/Container'
import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card' // shadcn/ui Card

const serviceAreas = [
	{ city: 'London', districts: ['Central London', 'West End', 'Camden'] },
	{ city: 'Manchester', districts: ['Salford', 'Didsbury', 'Rusholme'] },
	{
		city: 'Birmingham',
		districts: ['Edgbaston', 'Sutton Coldfield', 'Harborne'],
	},
	{ city: 'Liverpool', districts: ['Everton', 'Anfield', 'Aigburth'] },
	{ city: 'Leeds', districts: ['Headingley', 'Chapel Allerton', 'Hyde Park'] },
]

const ServiceArea = () => {
	return (
		<section id='service-area' className='py-20 bg-gray-100'>
			<Container>
				<SectionTitle subtitle='Coverage' title='Our Service Areas' />

				<motion.div
					className='mt-10 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'
					initial='hidden'
					whileInView='visible'
					viewport={{ once: true, amount: 0.3 }}
					variants={{
						hidden: {},
						visible: { transition: { staggerChildren: 0.15 } },
					}}
				>
					{serviceAreas.map((area, index) => (
						<motion.div
							key={index}
							variants={{
								hidden: { opacity: 0, y: 20 },
								visible: { opacity: 1, y: 0 },
							}}
						>
							<Card className='hover:shadow-lg transition cursor-default'>
								<CardContent className='text-center space-y-3'>
									<h3 className='text-xl font-semibold text-gray-900'>
										{area.city}
									</h3>
									<ul className='text-gray-700 text-sm space-y-1'>
										{area.districts.map((district, idx) => (
											<li key={idx}>{district}</li>
										))}
									</ul>
								</CardContent>
							</Card>
						</motion.div>
					))}
				</motion.div>
			</Container>
		</section>
	)
}

export default ServiceArea
