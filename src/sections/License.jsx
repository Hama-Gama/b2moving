import SectionTitle from '../components/shared/SectionTitle'
import Container from '../components/layout/Container'
import { motion } from 'framer-motion'

const licenses = [
	{
		title: 'Official Moving License',
		description: 'Certified and approved by the national moving association.',
		icon: '/assets/icons/license1.svg',
	},
	{
		title: 'Insurance Coverage',
		description: 'Full insurance coverage for all transported items.',
		icon: '/assets/icons/license2.svg',
	},
	{
		title: 'Quality Assurance',
		description:
			'Adhering to the highest quality standards in relocation services.',
		icon: '/assets/icons/license3.svg',
	},
]

const License = () => {
	return (
		<section id='license' className='scroll-mt-24 py-10 bg-gray-50'>
			<Container>
				<SectionTitle
					subtitle='Certifications'
					title='Our Licenses & Permits'
				/>

				<motion.div
					className='mt-10 grid sm:grid-cols-2 md:grid-cols-3 gap-8'
					initial='hidden'
					whileInView='visible'
					viewport={{ once: true, amount: 0.3 }}
					variants={{
						hidden: {},
						visible: { transition: { staggerChildren: 0.2 } },
					}}
				>
					{licenses.map((item, index) => (
						<motion.div
							key={index}
							className='bg-white p-6 rounded-xl shadow hover:shadow-lg transition cursor-default text-center'
							variants={{
								hidden: { opacity: 0, y: 20 },
								visible: { opacity: 1, y: 0 },
							}}
						>
							<img
								src={item.icon}
								alt={item.title}
								className='w-16 h-16 mx-auto mb-4'
							/>
							<h3 className='text-xl font-semibold mb-2'>{item.title}</h3>
							<p className='text-gray-600 text-sm'>{item.description}</p>
						</motion.div>
					))}
				</motion.div>
			</Container>
		</section>
	)
}

export default License
