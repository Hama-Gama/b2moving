'use client'

import SectionTitle from '../components/shared/SectionTitle'
import Container from '../components/layout/Container'
import { motion } from 'framer-motion'

const licenses = [
	{
		title: 'Carrier ID',
		value: 'MTR0192394',
		icon: '/license/carrier-id.png',
		description: 'Official registered carrier identification number.',
	},
	{
		title: 'Cargo Policy',
		value: '#8122019451089Y',
		icon: '/license/cargo-policy.png',
		description: 'Covers all transported goods under federal protection.',
	},
	{
		title: 'Insurance Policy',
		value: '#504610119748001',
		icon: '/license/insurance-policy.png',
		description: 'Comprehensive liability and property insurance coverage.',
	},
	{
		title: 'US DOT',
		value: '3585923',
		icon: '/license/us-dot.png',
		description: 'Registered with the U.S. Department of Transportation.',
	},
	{
		title: 'CA Permit',
		value: '581337',
		icon: '/license/ca-permit.png',
		description: 'Authorized moving operations across California.',
	},
]

const License = () => {
	return (
		<section id='license' className='scroll-mt-24 py-16 bg-gray-50'>
			<Container>
				<SectionTitle
					subtitle='Certifications'
					title='Our Licenses & Permits'
				/>

				<motion.div
					className='mt-12 grid sm:grid-cols-2 md:grid-cols-3 gap-8 justify-items-center'
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
							className='bg-white p-6 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-center max-w-[320px]'
							variants={{
								hidden: { opacity: 0, y: 20 },
								visible: { opacity: 1, y: 0 },
							}}
						>
							<div className='flex justify-center mb-4'>
								<img
									src={item.icon}
									alt={item.title}
									className='w-24 h-24 object-contain'
								/>
							</div>

							<h3 className='text-lg font-semibold text-gray-900 mb-2'>
								{item.title}
							</h3>

							{/* VALUE */}
							<p className='inline-block bg-orange-300 text-white font-semibold px-4 py-1 rounded-xl mb-3 text-sm'>
								{item.value}
							</p>

							<p className='text-gray-600 text-sm'>{item.description}</p>
						</motion.div>
					))}
				</motion.div>
			</Container>
		</section>
	)
}

export default License
