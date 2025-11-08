import Container from './Container'
import { Button } from '@/components/ui/button' // shadcn/ui Button
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'

const Footer = () => {
	return (
		<footer className='bg-gray-900 text-gray-200 py-12'>
			<Container>
				<div className='grid md:grid-cols-3 gap-8'>
					{/* About / Logo */}
					<div className='space-y-4'>
						<h3 className='text-xl font-bold text-white'>B2Moving</h3>
						<p className='text-gray-400 text-sm'>
							Professional moving services for homes and offices. We make every
							move safe and stress-free.
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
							<a href='#' className='hover:text-blue-500 transition'>
								<Facebook size={20} />
							</a>
							<a href='#' className='hover:text-blue-500 transition'>
								<Twitter size={20} />
							</a>
							<a href='#' className='hover:text-blue-500 transition'>
								<Instagram size={20} />
							</a>
							<a href='#' className='hover:text-blue-500 transition'>
								<Linkedin size={20} />
							</a>
						</div>
						<p className='text-gray-400 text-sm'>
							&copy; {new Date().getFullYear()} B2Moving. All rights reserved.
						</p>
					</div>
				</div>
			</Container>
		</footer>
	)
}

export default Footer
