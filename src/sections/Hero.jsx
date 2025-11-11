'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Container from '../components/layout/Container'

const QuoteModal = ({ isOpen, onClose }) => {
	return (
		<>
			{isOpen && (
				<>
					{/* Фон */}
					<div
						className='fixed inset-0 bg-black/50 z-40'
						onClick={onClose}
					></div>

					{/* Модалка */}
					<div className='fixed top-1/2 left-1/2 z-50 w-11/12 max-w-lg -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg shadow-lg p-6'>
						<h2 className='text-2xl font-bold mb-4'>Get a Quote</h2>
						<form className='space-y-4'>
							<input
								type='text'
								placeholder='Full Name'
								className='w-full border rounded-md px-3 py-2'
								required
							/>
							<input
								type='email'
								placeholder='Email'
								className='w-full border rounded-md px-3 py-2'
								required
							/>
							<input
								type='tel'
								placeholder='Phone'
								className='w-full border rounded-md px-3 py-2'
								required
							/>
							<input
								type='date'
								placeholder='Move Date'
								className='w-full border rounded-md px-3 py-2'
								required
							/>
							<div className='grid grid-cols-2 gap-2'>
								<input
									type='text'
									placeholder='Pick Up Zip'
									className='w-full border rounded-md px-3 py-2'
									required
								/>
								<input
									type='text'
									placeholder='Drop Off Zip'
									className='w-full border rounded-md px-3 py-2'
									required
								/>
							</div>
							<select className='w-full border rounded-md px-3 py-2' required>
								<option value=''>Select your move size</option>
								<option value='studio'>Studio / 1 Bedroom</option>
								<option value='2bed'>2 Bedrooms</option>
								<option value='3bed'>3 Bedrooms</option>
								<option value='4plus'>4+ Bedrooms</option>
							</select>
							<button
								type='submit'
								className='w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition font-bold'
							>
								Get a Quote Now
							</button>
						</form>
					</div>
				</>
			)}
		</>
	)
}

const Hero = () => {
	const [modalOpen, setModalOpen] = useState(false)

	return (
		<section
			id='hero'
			className='relative h-[100dvh] flex items-center bg-cover bg-center bg-no-repeat overflow-hidden'
			style={{ backgroundImage: "url('/hero-image.jpg')" }}
		>
			<div className='absolute inset-0 bg-black/40'></div>

			<Container>
				<div className='relative z-10 grid md:grid-cols-2 gap-8 items-center pt-24 md:pt-32'>
					<motion.div
						initial={{ opacity: 0, x: -50 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.8 }}
						className='space-y-6 text-white'
					>
						<h1 className='text-[36px] md:text-5xl lg:text-6xl font-extrabold leading-tight drop-shadow-lg'>
							STRESS-FREE MOVING SOLUTIONS
						</h1>

						<p className='text-lg md:text-xl text-gray-200'>
							B2Moving makes your relocation fast, safe, and hassle-free.
							Trusted by families and businesses alike.
						</p>

						{/* CTA-кнопки */}
						<div className='grid grid-cols-2 gap-4 w-full sm:w-auto'>
							<button
								onClick={() => setModalOpen(true)}
								className='bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition font-bold text-lg tracking-wider w-full'
							>
								Get a Quote
							</button>
							<a
								href='#services'
								className='text-center bg-white/20 text-white px-6 py-3 rounded-md hover:bg-white/30 transition font-bold text-lg tracking-wider w-full'
							>
								Our Services
							</a>
						</div>

						{/* Google Reviews */}
						<a
							href='https://www.google.com/'
							target='_blank'
							rel='noopener noreferrer'
							className='mt-6 flex items-center justify-center gap-4 bg-white/10 backdrop-blur-md border border-white/20 px-3 py-4 rounded-lg hover:bg-white/20 transition-all w-full sm:w-auto'
						>
							<img
								src='/hero-google.png'
								alt='Google Reviews'
								className='w-14 h-14 rounded-full'
							/>
							<div className='flex items-center gap-4'>
								<div className='flex flex-row items-center justify-center text-white'>
									<span className='text-4xl font-extrabold leading-none'>
										4.9
									</span>
									<svg
										xmlns='http://www.w3.org/2000/svg'
										viewBox='0 0 24 24'
										fill='currentColor'
										className='w-6 h-6 text-yellow-400 mt-1'
									>
										<path d='M12 .587l3.668 7.431 8.2 1.192-5.934 5.78 1.4 8.164L12 18.897l-7.334 3.857 1.4-8.164L.132 9.21l8.2-1.192z' />
									</svg>
								</div>
								<div className='flex flex-col justify-center leading-tight text-left'>
									<span className='text-base font-semibold text-white'>
										Google Reviews
									</span>
									<span className='text-sm text-gray-300'>
										Based on 200+ reviews
									</span>
								</div>
							</div>
						</a>
					</motion.div>
					<div className='hidden md:block'></div>
				</div>
			</Container>

			{/* Рендер модалки */}
			<QuoteModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
		</section>
	)
}

export default Hero
