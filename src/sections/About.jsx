import SectionTitle from '../components/shared/SectionTitle'
import Container from '../components/layout/Container'
import { motion } from 'framer-motion'

const About = () => {
	const containerVariants = {
		hidden: {},
		visible: {
			transition: {
				staggerChildren: 0.3,
			},
		},
	}

	const itemVariants = {
		hidden: { opacity: 0, y: 50, scale: 0.9, rotate: -5 },
		visible: {
			opacity: 1,
			y: 0,
			scale: 1,
			rotate: 0,
			transition: { duration: 0.8, ease: 'easeOut' },
		},
	}

	return (
		<section id='about' className='scroll-mt-24 py-10 bg-gray-50'>
			<Container>
				{/* Section Title with animation */}
				<motion.div
					initial={{ opacity: 0, y: -40 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, ease: 'easeOut' }}
					viewport={{ once: true }}
				>
					<SectionTitle subtitle='Who We Are' title='About Our Company' />
				</motion.div>

				{/* Content */}
				<motion.div
					className='mt-12 grid md:grid-cols-2 gap-10 items-center'
					initial='hidden'
					whileInView='visible'
					viewport={{ once: true, amount: 0.4 }}
					variants={containerVariants}
				>
					{/* Text */}
					<motion.div
						className='space-y-6 text-gray-700'
						variants={itemVariants}
					>
						<p className='text-lg font-medium'>
							B2 Moving is a professional moving company dedicated to providing a
							smooth, stress-free relocation experience for both homes and
							offices.
						</p>
						<p className='text-lg font-medium'>
							With years of experience, we take pride in offering reliable
							services, modern equipment, and skilled staff to make your move
							quick and efficient.
						</p>
						<p className='text-lg font-medium'>
							Whether it’s a small apartment or a large office, B2 Moving is
							ready to provide tailored solutions to meet your needs.
						</p>
					</motion.div>

					{/* Image with hover animation */}
					<motion.div
						className='w-full flex justify-center md:justify-end'
						variants={itemVariants}
						whileHover={{ scale: 1.05, rotate: 4 }}
						transition={{ type: 'spring', stiffness: 300 }}
					>
						<div className='relative transform rotate-[-4deg] hover:rotate-0 transition duration-500 ease-out'>
							{/* Синий фон */}
							<div className='absolute inset-0 bg-blue-600 rounded-sm z-0 rotate-[4deg]' />

							{/* Изображение поверх */}
							<img
								src='/about.jpg'
								alt='About MovePro'
								className='relative z-10 rounded-sm shadow-2xl max-w-full h-auto'
							/>
						</div>
					</motion.div>
				</motion.div>
			</Container>
		</section>
	)
}

export default About
