import { motion } from 'framer-motion'

const SectionTitle = ({
	title,
	subtitle,
	align = 'center',
	className = '',
}) => {
	const alignClass =
		align === 'left'
			? 'text-left'
			: align === 'right'
			? 'text-right'
			: 'text-center'

	// Варианты анимации линии
	const lineAnimation = {
		initial: { scaleX: 0.5 },
		animate: {
			scaleX: [0.5, 1.5, 0.5], // расширяется и сужается
			transition: {
				duration: 2, // длительность цикла
				repeat: Infinity,
				ease: 'easeInOut',
			},
		},
	}

	return (
		<div className={`mb-10 ${alignClass} ${className}`}>
			{subtitle && (
				<motion.p
					className='text-blue-600 text-base font-bold tracking-wider uppercase mb-2'
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
				>
					{subtitle}
				</motion.p>
			)}

			<motion.h2
				className='text-3xl md:text-4xl font-bold text-gray-900'
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				transition={{ duration: 0.6, delay: 0.1 }}
			>
				{title}
			</motion.h2>

			<motion.div
				className={`mt-3 h-1 w-[100px] bg-blue-600 mx-auto rounded-full ${
					align !== 'center' ? 'mx-0' : ''
				}`}
				initial='initial'
				animate='animate'
				variants={lineAnimation}
			/>
		</div>
	)
}

export default SectionTitle
