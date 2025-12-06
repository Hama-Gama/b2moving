'use client'

import { useState, useEffect } from 'react'
import { Sling as Hamburger } from 'hamburger-react'
import { motion } from 'framer-motion'
import Container from './Container'

const Header = () => {
	const [isOpen, setIsOpen] = useState(false)
	const [isScrolled, setIsScrolled] = useState(false)

	const navLinks = [
		{ id: 'about', label: 'About' },
		{ id: 'gallery', label: 'Gallery' },
		{ id: 'license', label: 'License' },
		{ id: 'reviews', label: 'Reviews' },
		{ id: 'faq', label: 'FAQ' },
		{ id: 'contacts', label: 'Contacts' },
		// { id: 'services', label: 'Services' },
		// { id: 'service-area', label: 'Service Area' },
		// { id: 'reviews-video', label: 'Reviews' },
		// { id: 'promo', label: 'Video' },
	]

	// отслеживаем скролл
	useEffect(() => {
		const handleScroll = () => setIsScrolled(window.scrollY > 50)
		window.addEventListener('scroll', handleScroll)
		return () => window.removeEventListener('scroll', handleScroll)
	}, [])

	const handleNavClick = id => {
		const section = document.getElementById(id)
		if (section) {
			section.scrollIntoView({ behavior: 'smooth' })
			setIsOpen(false)
		}
	}

	return (
		<header
			className={`fixed w-full z-50 transition-all duration-300 ${
				isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
			}`}
		>
			<Container>
				<div className='flex justify-between items-center py-4'>
					{/* АНИМИРОВАННЫЙ ЛОГО */}
					<motion.a
						href='#hero'
						initial={{ opacity: 0, y: -20, scale: 0.8 }}
						animate={{ opacity: 1, y: 0, scale: 1 }}
						transition={{
							duration: 0.8,
							ease: 'easeOut',
							delay: 0.2,
							type: 'spring',
							stiffness: 100,
						}}
						className={`text-3xl font-black tracking-wider transition-all duration-300 ${
							isScrolled ? 'text-gray-900' : 'text-white drop-shadow-lg'
						}`}
					>
						B2 MOVING
					</motion.a>

					{/* Desktop Navigation */}
					<nav className='hidden md:flex space-x-6'>
						{navLinks.map(link => (
							<button
								key={link.id}
								onClick={() => handleNavClick(link.id)}
								className={`transition text-lg font-medium ${
									isScrolled
										? 'text-gray-700 hover:text-blue-600'
										: 'text-white hover:text-blue-300'
								}`}
							>
								{link.label}
							</button>
						))}
					</nav>

					{/* Mobile Hamburger */}
					<div className='md:hidden flex items-center'>
						<Hamburger
							toggled={isOpen}
							toggle={setIsOpen}
							size={24}
							color={isScrolled ? '#1f2937' : '#ffffff'}
						/>
					</div>
				</div>

				{/* Mobile Menu */}
				{isOpen && (
					<div className='md:hidden bg-white shadow-md rounded-lg mt-2 p-6'>
						<nav className='flex flex-col space-y-4 p-4'>
							{navLinks.map(link => (
								<button
									key={link.id}
									onClick={() => handleNavClick(link.id)}
									className='text-gray-700 text-2xl font-bold hover:text-blue-600 transition text-center mb-6 last:mb-0 tracking-wider'
								>
									{link.label}
								</button>
							))}
						</nav>
					</div>
				)}
			</Container>
		</header>
	)
}

export default Header
