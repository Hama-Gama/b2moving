'use client'

import SectionTitle from '../components/shared/SectionTitle'
import Container from '../components/layout/Container'
import { motion } from 'framer-motion'
import { Send, MapPin, Phone, AtSign, Clock, Copy } from 'lucide-react'
import { useState } from 'react'

const Contacts = () => {
	const [copied, setCopied] = useState(false)
	const email = 'info@b2movingcompany.com'

	const handleCopy = () => {
		navigator.clipboard.writeText(email)
		setCopied(true)
		setTimeout(() => setCopied(false), 1300)
	}

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
						className='space-y-4 text-gray-700 text-lg font-semibold'
						variants={{
							hidden: { opacity: 0, y: 20 },
							visible: { opacity: 1, y: 0 },
						}}
					>
						{/* Address */}
						<div className='flex items-start'>
							<MapPin className='w-5 h-5 text-gray-700 mr-2 opacity-70 mt-1' />
							<div className='font-normal'>
								30508 Union City Blvd, Union City, CA 94587
							</div>
						</div>

						{/* Phone */}
						<div className='flex items-start'>
							<Phone className='w-5 h-5 text-gray-700 mr-2 opacity-70 mt-1' />
							<a
								href='tel:+16699995505'
								className='text-gray-700 hover:underline font-normal'
							>
								(669) 999-5505
							</a>
						</div>

						{/* Email with COPY like in example */}
						<div className='flex items-center gap-2 mr-2'>
							<AtSign className='w-5 h-5 text-gray-700 opacity-70' />

							<a
								href={`mailto:${email}`}
								className='text-gray-700 hover:underline font-normal'
							>
								{email}
							</a>

							<button
								onClick={handleCopy}
								className='p-1 rounded-lg hover:bg-gray-200 transition'
								title='Copy email'
							>
								<Copy size={18} />
							</button>

							{copied && <span className='text-gray-700 text-sm'>copied!</span>}
						</div>

						{/* Working Hours */}
						<div className='flex items-start'>
							<Clock className='w-5 h-5 text-gray-700 mr-2 opacity-70 mt-1' />
							<div className='font-normal'>Mon - Fri: 9:00 AM - 6:00 PM</div>
						</div>
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

						<motion.button
							type='submit'
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}
							transition={{ type: 'spring', stiffness: 250, damping: 15 }}
							className='group relative inline-flex items-center justify-center px-8 py-3 overflow-hidden font-semibold text-white rounded-md shadow-lg 
							bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700
							focus:outline-none focus:ring-2 focus:ring-blue-400'
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
