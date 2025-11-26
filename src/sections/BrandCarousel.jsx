'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useAnimation } from 'framer-motion'

const brands = [
	{
		name: 'Google',
		logo: '/google-carousel.jpg',
		link: 'https://www.google.com',
	},
	{
		name: 'Thumbtack',
		logo: '/thumbstack.jpg',
		link: 'https://www.thumbtack.com',
	},
	{
		name: 'Yelp',
		logo: '/yelp.png',
		link: 'https://www.yelp.com',
	},
	{
		name: 'HomeAdvisor',
		logo: '/home-adviser.png',
		link: 'https://www.homeadvisor.com',
	},
	{
		name: 'Elite Service',
		logo: '/elite-service.jpeg',
		link: 'https://www.facebook.com',
	},
]

// Дублируем ленту 3 раза для плавного цикла
const duplicatedBrands = [...brands, ...brands, ...brands]

const InfiniteBrandCarousel = () => {
	const controls = useAnimation()
	const sectionRef = useRef(null)
	const [isVisible, setIsVisible] = useState(false)

	// следим, видима ли секция
	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				setIsVisible(entry.isIntersecting && entry.intersectionRatio > 0.5)
			},
			{ threshold: [0.5] }
		)
		if (sectionRef.current) observer.observe(sectionRef.current)
		return () => observer.disconnect()
	}, [])

	// управление autoplay
	useEffect(() => {
		if (isVisible) {
			controls.start({
				x: ['0%', '-100%'],
				transition: {
					x: {
						repeat: Infinity,
						repeatType: 'loop',
						duration: 25,
						ease: 'linear',
					},
				},
			})
		} else {
			controls.stop()
		}
	}, [isVisible, controls])

	// Анимация появления логотипов по очереди (плавнее)
	const logoVariants = {
		hidden: { opacity: 0, y: 20 },
		visible: i => ({
			opacity: 1,
			y: 0,
			transition: {
				delay: i * 0.3, // увеличил задержку между логотипами
				duration: 0.8, // чуть дольше анимация
				ease: 'easeOut',
			},
		}),
	}

	return (
		<section ref={sectionRef} className='py-10 bg-white overflow-hidden'>
			<div className='max-w-7xl mx-auto px-4'>
				<h3 className='text-center text-gray-700 text-3xl font-bold mb-6'>
					Trusted On These Platforms
				</h3>

				<div className='relative overflow-hidden'>
					<motion.div className='flex gap-2' animate={controls}>
						{duplicatedBrands.map((brand, index) => (
							<motion.a
								key={index}
								href={brand.link}
								target='_blank'
								rel='noopener noreferrer'
								className='flex-shrink-0 flex items-center justify-center min-w-[120px] p-2'
								variants={logoVariants}
								initial='hidden'
								whileInView='visible'
								viewport={{ once: true, amount: 0.2 }}
								custom={index}
							>
								<img
									src={brand.logo}
									alt={brand.name}
								
									className='h-16 w-auto object-contain transition-transform hover:scale-105 rounded-md shadow-md'
									draggable={false}
								/>
							</motion.a>
						))}
					</motion.div>
				</div>
			</div>
		</section>
	)
}

export default InfiniteBrandCarousel
