import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import SectionTitle from '../components/shared/SectionTitle'
import Container from '../components/layout/Container'
import { ChevronDown, ChevronUp } from 'lucide-react'

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
		<section id='faq' className='scroll-mt-24 py-20 bg-gray-50'>
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
							className={`border rounded-2xl overflow-hidden shadow-sm transition-all duration-300 ${
								openIndex === index
									? 'bg-white shadow-md border-blue-300'
									: 'bg-white hover:shadow-md'
							}`}
						>
							{/* Заголовок вопроса */}
							<button
								onClick={() => toggleIndex(index)}
								className='w-full flex justify-between items-center text-left px-6 py-5 focus:outline-none transition-colors duration-200'
							>
								<span
									className={`font-medium text-[16px] ${
										openIndex === index ? 'text-blue-600' : 'text-gray-900'
									}`}
								>
									{item.question}
								</span>

								<motion.div
									animate={{ rotate: openIndex === index ? 180 : 0 }}
									transition={{
										type: 'spring',
										stiffness: 300,
										damping: 20,
									}}
								>
									{openIndex === index ? (
										<ChevronUp className='text-blue-500' />
									) : (
										<ChevronDown className='text-gray-500' />
									)}
								</motion.div>
							</button>

							{/* Ответ с bounce-анимацией */}
							<AnimatePresence initial={false}>
								{openIndex === index && (
									<motion.div
										key='content'
										initial={{ height: 0, opacity: 0, scale: 0.98 }}
										animate={{
											height: 'auto',
											opacity: 1,
											scale: 1,
										}}
										exit={{
											height: 0,
											opacity: 0,
											scale: 0.98,
										}}
										transition={{
											type: 'spring',
											stiffness: 120,
											damping: 18,
											mass: 0.8,
										}}
										className='px-6 pb-5 text-gray-700 text-[16px] leading-relaxed overflow-hidden'
									>
										{item.answer}
									</motion.div>
								)}
							</AnimatePresence>
						</motion.div>
					))}
				</div>
			</Container>
		</section>
	)
}

export default FaqSection
