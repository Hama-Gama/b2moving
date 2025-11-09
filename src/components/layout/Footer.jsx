import Container from './Container'
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'

const Footer = () => {
	return (
		<footer className='bg-gray-900 text-gray-200 py-12'>
			<Container>
				<div className='grid md:grid-cols-3 gap-8'>
					{/* About / Logo */}
					<div className='space-y-4'>
						<h3 className='text-xl font-bold text-white'>B2Moving</h3>
						<p className='text-gray-400 text-sm leading-relaxed'>
							Professional moving services for homes and offices. We make every
							move safe, simple, and stress-free — trusted by hundreds of
							clients across the city.
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
							<li>
								<a
									href='#reviews-video'
									className='hover:text-blue-500 transition'
								>
									Video Reviews
								</a>
							</li>
							<li>
								<a href='#promo' className='hover:text-blue-500 transition'>
									Promo
								</a>
							</li>
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
								href='https://twitter.com'
								target='_blank'
								rel='noopener noreferrer'
								className='hover:text-blue-400 transition'
							>
								<Twitter size={20} />
							</a>
							<a
								href='https://instagram.com'
								target='_blank'
								rel='noopener noreferrer'
								className='hover:text-pink-500 transition'
							>
								<Instagram size={20} />
							</a>
							<a
								href='https://linkedin.com'
								target='_blank'
								rel='noopener noreferrer'
								className='hover:text-blue-400 transition'
							>
								<Linkedin size={20} />
							</a>
						</div>

						<p className='text-gray-400 text-sm mt-4'>
							123 Main Street, New York, NY 10001 <br />
							<a
								href='tel:+1234567890'
								className='hover:text-blue-500 transition'
							>
								+1 (234) 567-890
							</a>{' '}
							|{' '}
							<a
								href='mailto:info@b2moving.com'
								className='hover:text-blue-500 transition'
							>
								info@b2moving.com
							</a>
						</p>

						<p className='text-gray-500 text-xs mt-6 border-t border-gray-800 pt-4'>
							&copy; {new Date().getFullYear()} B2Moving. All rights reserved.
						</p>
					</div>
				</div>
			</Container>
		</footer>
	)
}

export default Footer
