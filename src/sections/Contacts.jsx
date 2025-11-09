import SectionTitle from '../components/shared/SectionTitle'
import Container from '../components/layout/Container'
import { motion } from 'framer-motion'
import { Send } from 'lucide-react'

const Contacts = () => {
	return (
		<section id='contacts' className='scroll-mt-24 py-10 bg-white'>
			<Container>
				<SectionTitle subtitle='Get in Touch' title='Contact Us' />

				<motion.div
					className='mt-10 grid md:grid-cols-2 gap-12'
					initial='hidden'
					whileInView='visible'
					viewport={{ once: true, amount: 0.3 }}
					variants={{
						hidden: {},
						visible: { transition: { staggerChildren: 0.2 } },
					}}
				>
					{/* Contact Info */}
					<motion.div
						className='space-y-4 text-gray-700'
						variants={{
							hidden: { opacity: 0, y: 20 },
							visible: { opacity: 1, y: 0 },
						}}
					>
						<p>
							<strong>Address:</strong> 123 Main Street, San Francisco, US
						</p>
						<p>
							<strong>Phone:</strong> +1 123 456 7895
						</p>
						<p>
							<strong>Email:</strong> b2moving@gmail.com
						</p>
						<p>
							<strong>Working Hours:</strong> Mon - Fri: 9:00 AM - 6:00 PM
						</p>
					</motion.div>

					{/* Contact Form */}
					<motion.form
						className='space-y-4'
						variants={{
							hidden: { opacity: 0, y: 20 },
							visible: { opacity: 1, y: 0 },
						}}
						onSubmit={e => e.preventDefault()}
					>
						<div>
							<label className='block text-sm font-medium text-gray-700'>
								Name
							</label>
							<input
								type='text'
								placeholder='Your Name'
								className='mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500'
								required
							/>
						</div>
						<div>
							<label className='block text-sm font-medium text-gray-700'>
								Email
							</label>
							<input
								type='email'
								placeholder='Your Email'
								className='mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500'
								required
							/>
						</div>
						<div>
							<label className='block text-sm font-medium text-gray-700'>
								Message
							</label>
							<textarea
								placeholder='Your Message'
								className='mt-1 block w-full border border-gray-300 rounded-md p-2 h-32 focus:outline-none focus:ring-2 focus:ring-blue-500'
								required
							/>
						</div>

						{/* 🔥 Stylish Send Button */}
						<motion.button
							type='submit'
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}
							transition={{ type: 'spring', stiffness: 250, damping: 15 }}
							className='group relative inline-flex items-center justify-center px-8 py-3 overflow-hidden font-semibold text-white rounded-md shadow-lg bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 focus:outline-none focus:ring-2 focus:ring-blue-400'
						>
							<span className='absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300'></span>
							<Send className='w-5 h-5 mr-2' />
							Send Message
						</motion.button>
					</motion.form>
				</motion.div>
			</Container>
		</section>
	)
}

export default Contacts
