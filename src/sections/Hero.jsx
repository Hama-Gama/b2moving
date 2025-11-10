import { motion } from 'framer-motion'
import Container from '../components/layout/Container'

const Hero = () => {
	return (
		<section
			id='hero'
			className='relative min-h-screen flex items-center bg-cover bg-center bg-no-repeat'
			style={{ backgroundImage: "url('/hero-image.jpg')" }}
		>
			{/* затемнение фона для читаемости текста */}
			<div className='absolute inset-0 bg-black/40'></div>

			<Container>
				<div className='relative z-10 grid md:grid-cols-2 gap-8 items-center pt-24 md:pt-32'>
					{/* Text Content */}
					<motion.div
						initial={{ opacity: 0, x: -50 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.8 }}
						className='space-y-6 text-white'
					>
						<h1 className='text-6xl md:text-5xl font-extrabold leading-tight drop-shadow-lg'>
							STRESS-FREE MOVING SOLUTIONS
						</h1>
						<p className='text-lg md:text-xl text-gray-200'>
							B2Moving makes your relocation fast, safe, and hassle-free.
							Trusted by families and businesses alike.
						</p>
						<div className='flex flex-col sm:flex-row gap-4 w-full sm:w-auto'>
							<a
								href='#contacts'
								className='flex-1 text-center bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition font-bold text-2xl tracking-wider'
							>
								Get a Quote
							</a>
							<a
								href='#services'
								className='flex-1 text-center bg-white/20 text-white px-6 py-3 rounded-md hover:bg-white/30 transition font-bold text-2xl tracking-wider'
							>
								Our Services
							</a>
						</div>
					</motion.div>

					{/* Optionally — пустой блок справа для визуального баланса */}
					<div className='hidden md:block'></div>
				</div>
			</Container>
		</section>
	)
}

export default Hero
