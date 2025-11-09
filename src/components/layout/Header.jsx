import { useState } from 'react'
import { Sling as Hamburger } from 'hamburger-react'
import Container from './Container'

const Header = () => {
	const [isOpen, setIsOpen] = useState(false)

	const navLinks = [
		{ id: 'about', label: 'About' },
		{ id: 'services', label: 'Services' },
		{ id: 'gallery', label: 'Gallery' },
		{ id: 'license', label: 'License' },
		{ id: 'promo', label: 'Video' },
		{ id: 'reviews-video', label: 'Reviews' },
		{ id: 'service-area', label: 'Service Area' },
		{ id: 'faq', label: 'FAQ' },
		{ id: 'contacts', label: 'Contacts' },
	]

	const handleNavClick = id => {
		const section = document.getElementById(id)
		if (section) {
			section.scrollIntoView({ behavior: 'smooth' })
			setIsOpen(false) // закрываем мобильное меню
		}
	}

	return (
		<header className='bg-white shadow-md fixed w-full z-50'>
			<Container>
				<div className='flex justify-between items-center py-4'>
					{/* Logo */}
					<a href='#hero' className='text-2xl font-bold text-gray-900'>
						B2Moving
					</a>

					{/* Desktop Navigation */}
					<nav className='hidden md:flex space-x-6'>
						{navLinks.map(link => (
							<button
								key={link.id}
								onClick={() => handleNavClick(link.id)}
								className='text-gray-700 hover:text-blue-600 transition'
							>
								{link.label}
							</button>
						))}
					</nav>

					{/* Mobile Hamburger */}
					<div className='md:hidden'>
						<Hamburger toggled={isOpen} toggle={setIsOpen} size={24} />
					</div>
				</div>

				{/* Mobile Menu */}
				{isOpen && (
					<div className='md:hidden bg-white shadow-md rounded-b-lg mt-2'>
						<nav className='flex flex-col space-y-2 p-4'>
							{navLinks.map(link => (
								<button
									key={link.id}
									onClick={() => handleNavClick(link.id)}
									className='text-gray-700 text-2xl hover:text-blue-600 transition text-center mb-6'
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
