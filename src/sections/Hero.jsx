'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Container from '../components/layout/Container'
import { useQuoteModal } from '../context/QuoteModalContext'

const textVariant = {
	hidden: { opacity: 0, y: 30 },
	visible: (i = 1) => ({
		opacity: 1,
		y: 0,
		transition: {
			delay: i * 0.2,
			duration: 0.8,
			ease: 'easeOut',
		},
	}),
}

const Hero = () => {
	const { openModal } = useQuoteModal()

	return (
		<section
			id='hero'
			className='relative h-[100dvh] flex items-center bg-cover bg-center bg-no-repeat overflow-hidden'
			style={{ backgroundImage: "url('/hero-image.jpg')" }}
		>
			<div className='absolute inset-0 bg-black/40'></div>

			<Container>
				<div className='relative z-10 grid md:grid-cols-2 gap-8 items-center pt-24 md:pt-32'>
					<div className='space-y-6 text-white'>
						{/* Заголовок */}
						<motion.h1
							variants={textVariant}
							initial='hidden'
							animate='visible'
							custom={1}
							className='text-[36px] md:text-5xl lg:text-6xl font-extrabold leading-tight drop-shadow-lg'
						>
							STRESS-FREE <br />
							<motion.span
								variants={textVariant}
								custom={2}
								className='text-white'
							>
								MOVING SOLUTIONS
							</motion.span>
						</motion.h1>

						{/* Подзаголовок */}
						<motion.p
							variants={textVariant}
							initial='hidden'
							animate='visible'
							custom={3}
							className='text-lg md:text-xl text-gray-200 max-w-[550px] drop-shadow-lg'
						>
							B2 Moving makes your relocation fast, safe, and hassle-free.
							Trusted by families and businesses alike.
						</motion.p>

						{/* Кнопки */}
						<motion.div
							variants={textVariant}
							initial='hidden'
							animate='visible'
							custom={4}
							className='grid grid-cols-2 gap-4 w-full sm:w-auto'
						>
							<button
								onClick={openModal}
								className='bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition font-bold text-lg tracking-wider w-full'
							>
								Get a Quote
							</button>
							<a
								href='#services'
								className='text-center bg-white/20 text-white px-6 py-3 rounded-full hover:bg-white/30 transition font-bold text-lg tracking-wider w-full'
							>
								Our Services
							</a>
						</motion.div>

						{/* Google Reviews */}
						<motion.a
							variants={textVariant}
							initial='hidden'
							animate='visible'
							custom={5}
							href='https://www.google.com/search?q=B2+Moving+Company&hl=en#lrd=0x808fc7ced3d65939:0xb7b0a0d4f2ec23fe,1'
							target='_blank'
							rel='noopener noreferrer'
							className='mt-6 flex items-center justify-center gap-4 bg-white/10 backdrop-blur-md border border-white/20 px-3 py-4 rounded-full hover:bg-white/20 transition-all w-full sm:w-auto'
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
						</motion.a>
					</div>
					<div className='hidden md:block'></div>
				</div>
			</Container>
		</section>
	)
}

export default Hero