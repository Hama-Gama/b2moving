import SectionTitle from '../components/shared/SectionTitle'
import Container from '../components/layout/Container'
import { motion } from 'framer-motion'

const Contacts = () => {
	return (
		<section id='contacts' className='py-10 bg-white'>
			<Container>
				{/* Section Title */}
				<SectionTitle subtitle='Get in Touch' title='Contact Us' />

				<motion.div
					className='mt-10 grid md:grid-cols-2 gap-12'
					initial='hidden'
					whileInView='visible'
					viewport={{ once: true, amount: 0.3 }}
					variants={{
						hidden: {},
						visible: {
							transition: { staggerChildren: 0.2 },
						},
					}}
				>
					{/* Contact Information */}
					<motion.div
						className='space-y-4 text-gray-700'
						variants={{
							hidden: { opacity: 0, y: 20 },
							visible: { opacity: 1, y: 0 },
						}}
					>
						<p>
							<strong>Address:</strong> 123 Main Street, London, UK
						</p>
						<p>
							<strong>Phone:</strong> +44 123 456 789
						</p>
						<p>
							<strong>Email:</strong> info@movepro.com
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
						<button
							type='submit'
							className='bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition'
						>
							Send Message
						</button>
					</motion.form>
				</motion.div>
			</Container>
		</section>
	)
}

export default Contacts
