import Container from './Container'
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'

const Footer = () => {
	return (
		<footer className='bg-gray-900 text-gray-200 py-12'>
			<Container>
				<div className='grid md:grid-cols-3 gap-8'>
					{/* About / Logo */}
					<div className='space-y-4'>
						<img src='/logo.png' alt='B2 Moving' className='h-20 w-auto' />
						<p className='text-gray-400 text-sm leading-relaxed'>
							Professional moving services for homes and offices. We make every
							move safe, simple, and stress-free — trusted by hundreds of
							clients across the city.
						</p>
						<p className='text-gray-400 text-sm leading-relaxed'>
							B2 Moving is licensed by the California Public Utility Commission
							(CPUC), Carrier ID – MTR0192394
						</p>
					</div>

					{/* Quick Links */}
					<div>
						<h4 className='text-lg font-semibold text-white mb-4'>
							Quick Links
						</h4>
						<ul className='space-y-2'>
							<li>
								<a href='#hero' className='hover:text-blue-500 transition'>
									Home
								</a>
							</li>
							<li>
								<a href='#services' className='hover:text-blue-500 transition'>
									Services
								</a>
							</li>
							<li>
								<a href='#about' className='hover:text-blue-500 transition'>
									About
								</a>
							</li>
							<li>
								<a href='#gallery' className='hover:text-blue-500 transition'>
									Gallery
								</a>
							</li>
							<li>
								<a href='#reviews' className='hover:text-blue-500 transition'>
									Reviews
								</a>
							</li>
							{/* <li>
								<a
									href='#reviews-video'
									className='hover:text-blue-500 transition'
								>
									Video Reviews
								</a>
							</li> */}
							{/* <li>
								<a href='#promo' className='hover:text-blue-500 transition'>
									Promo
								</a>
							</li> */}
							<li>
								<a href='#faq' className='hover:text-blue-500 transition'>
									FAQ
								</a>
							</li>
							<li>
								<a href='#contacts' className='hover:text-blue-500 transition'>
									Contact
								</a>
							</li>
						</ul>
					</div>

					{/* Social & Contact */}
					<div className='space-y-4'>
						<h4 className='text-lg font-semibold text-white mb-2'>
							Connect With Us
						</h4>
						<div className='flex space-x-4'>
							<a
								href='https://facebook.com'
								target='_blank'
								rel='noopener noreferrer'
								className='hover:text-blue-500 transition'
							>
								<Facebook size={20} />
							</a>
							<a
								href='https://instagram.com'
								target='_blank'
								rel='noopener noreferrer'
								className='hover:text-pink-500 transition'
							>
								<Instagram size={20} />
							</a>
						</div>

						<p className='text-gray-400 text-sm mt-4'>
							30508 Union City Blvd, Union City, CA 94587 <br />
							<a
								href='tel:+16699995505'
								className='hover:text-blue-500 transition'
							>
								(669) 999-5505
							</a>{' '}
							|{' '}
							<a
								href='mailto:info@b2movingcompany.com'
								className='hover:text-blue-500 transition'
							>
								info@b2movingcompany.com
							</a>
						</p>

						<p className='text-gray-500 text-xs mt-6 border-t border-gray-800 pt-4'>
							&copy; {new Date().getFullYear()} B2 Moving. All rights reserved.
						</p>
					</div>
				</div>
			</Container>
		</footer>
	)
}

export default Footer
