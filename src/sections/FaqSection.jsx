import { useState } from 'react'
import SectionTitle from '../components/shared/SectionTitle'
import Container from '../components/layout/Container'
import { motion } from 'framer-motion'

const faqData = [
	{
		question: 'What services does MovePro offer?',
		answer:
			'We provide home and office moving services, packing and unpacking, furniture assembly, and storage solutions tailored to your needs.',
	},
	{
		question: 'How do I get a quote?',
		answer:
			"You can get a free quote by filling out our contact form or calling us directly. We'll provide an estimate based on your moving requirements.",
	},
	{
		question: 'Are my belongings insured during the move?',
		answer:
			'Yes, all items are insured during transit. We take every precaution to ensure your belongings arrive safely.',
	},
	{
		question: 'Do you offer same-day moving services?',
		answer:
			'Yes, we offer same-day moving services depending on availability. Please contact us to confirm.',
	},
]

const FaqSection = () => {
	const [openIndex, setOpenIndex] = useState(null)

	const toggleIndex = index => {
		setOpenIndex(openIndex === index ? null : index)
	}

	return (
		<section id='faq' className='py-10 bg-gray-50'>
			<Container>
				<SectionTitle subtitle='FAQ' title='Frequently Asked Questions' />

				<div className='mt-10 space-y-4 max-w-3xl mx-auto'>
					{faqData.map((item, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.4, delay: index * 0.1 }}
							className='border rounded-lg overflow-hidden'
						>
							<button
								onClick={() => toggleIndex(index)}
								className='w-full text-left px-6 py-4 bg-white flex justify-between items-center hover:bg-gray-50 focus:outline-none'
							>
								<span className='font-medium text-gray-900'>
									{item.question}
								</span>
								<span className='text-gray-500'>
									{openIndex === index ? '-' : '+'}
								</span>
							</button>
							{openIndex === index && (
								<div className='px-6 py-4 bg-gray-50 text-gray-700 text-sm'>
									{item.answer}
								</div>
							)}
						</motion.div>
					))}
				</div>
			</Container>
		</section>
	)
}

export default FaqSection
