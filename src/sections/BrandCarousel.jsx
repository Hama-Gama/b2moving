'use client'

import { motion } from 'framer-motion'

const brands = [
	{
		name: 'Google',
		logo: '/google-carousel.jpg',
		link: 'https://www.yelp.com',
	},
	{
		name: 'Thumbtack',
		logo: '/thumbstack.jpg',
		link: 'https://www.thumbtack.com',
	},
	{
		name: 'homeadvisor',
		logo: '/home-adviser.png',
		link: 'https://www.trustpilot.com',
	},
	{
		name: 'top mover',
		logo: '/top-mover.jpg',
		link: 'https://www.facebook.com',
	},
	{
		name: 'elite service',
		logo: '/elite-service.jpeg',
		link: 'https://www.facebook.com',
	},
	{
		name: 'top mover',
		logo: '/top-ten.jpg',
		link: 'https://www.facebook.com',
	},
]

// Дублируем для бесконечного скролла
const duplicatedBrands = [...brands, ...brands]

const InfiniteBrandCarousel = () => {
	return (
		<section className='py-10 bg-white overflow-hidden'>
			<div className='max-w-7xl mx-auto px-4'>
				<h3 className='text-center text-gray-700 text-xl font-semibold mb-6'>
					Trusted On These Platforms
				</h3>

				<div className='relative w-full overflow-hidden'>
					<motion.div
						className='flex gap-8 p-4'
						animate={{ x: ['0%', '-50%'] }}
						transition={{
							x: {
								repeat: Infinity,
								repeatType: 'loop',
								duration: 20,
								ease: 'linear',
							},
						}}
					>
						{duplicatedBrands.map((brand, index) => (
							<a
								key={index}
								href={brand.link}
								target='_blank'
								rel='noopener noreferrer'
								className='flex-shrink-0'
							>
								<img
									src={brand.logo}
									alt={brand.name}
									className='h-24 w-auto object-contain transition-transform hover:scale-105 rounded-lg shadow-lg'
									draggable={false} // предотвращаем “тянущие” события на мобильных
								/>
							</a>
						))}
					</motion.div>
				</div>
			</div>
		</section>
	)
}

export default InfiniteBrandCarousel
