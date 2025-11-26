import { ExternalLink } from 'lucide-react'
import Container from './Container'
import { section } from 'motion/react-client'

const TopMoverBadge = () => {
	return (
		<section className='py-10 bg-gray-50'>
			<Container>
				<div className='max-w-[700px] flex flex-col md:flex-row items-center gap-6 bg-white p-6 rounded-2xl shadow-md border m-auto'>
					{/* Badge image */}
					<img
						src='/localmovers.png'
						alt='Local Movers Badge'
						className='object-contain h-50 w-auto'
					/>

					{/* Text */}
					<div className='text-center max-w-xl'>
						<p className='text-gray-700 text-lg leading-relaxed'>
							Delivering efficient and professional moving services across Bay
							Area, B2 Moving Company is honored to be recognized as a Top Mover
							by:
						</p>

						{/* Ссылка на всю строку, по центру */}
						<a
							href='https://localmovers.com/movers-in-los-angeles'
							target='_blank'
							rel='noopener noreferrer'
							className='text-xl mt-2 w-full flex justify-center items-center gap-2 
                   text-blue-600 font-semibold underline hover:text-blue-800'
						>
							LocalMovers.com
							<ExternalLink className='w-4 h-4 opacity-70' />
						</a>
					</div>
				</div>
			</Container>
		</section>
	)
}

export default TopMoverBadge
