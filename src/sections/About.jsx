import SectionTitle from '../components/shared/SectionTitle'
import Container from '../components/layout/Container'
import { motion } from 'framer-motion'

const About = () => {
	return (
		<section id='about' className='scroll-mt-24 py-10 bg-gray-50'>
			<Container>
				{/* Section Title */}
				<SectionTitle subtitle='Who We Are' title='About Our Company' />

				{/* Content */}
				<motion.div
					className='mt-10 grid md:grid-cols-2 gap-8 items-center'
					initial='hidden'
					whileInView='visible'
					viewport={{ once: true, amount: 0.3 }}
					variants={{
						hidden: {},
						visible: {
							transition: {
								staggerChildren: 0.2,
							},
						},
					}}
				>
					{/* Text */}
					<motion.div
						className='text-[16px] space-y-4 text-gray-700'
						variants={{
							hidden: { opacity: 0, y: 20 },
							visible: { opacity: 1, y: 0 },
						}}
					>
						<p>
							B2Moving is a professional moving company dedicated to providing a
							smooth, stress-free relocation experience for both homes and
							offices. Our team of experts ensures that your belongings are
							handled with care from start to finish.
						</p>
						<p>
							With years of experience, we take pride in offering reliable
							services, modern equipment, and skilled staff to make your move
							quick and efficient. Customer satisfaction is our top priority.
						</p>
						<p>
							Whether it’s a small apartment or a large office, B2Moving is
							ready to provide tailored solutions to meet your needs.
						</p>
					</motion.div>

					{/* Optional Image */}
					<motion.div
						className='w-full flex justify-center md:justify-end'
						variants={{
							hidden: { opacity: 0, y: 20 },
							visible: { opacity: 1, y: 0 },
						}}
					>
						<img
							src='/assets/images/about-image.jpg'
							alt='About MovePro'
							className='rounded-lg shadow-lg max-w-full h-auto'
						/>
					</motion.div>
				</motion.div>
			</Container>
		</section>
	)
}

export default About
