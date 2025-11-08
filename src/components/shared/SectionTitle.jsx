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

	return (
		<div className={`mb-10 ${alignClass} ${className}`}>
			{subtitle && (
				<motion.p
					className='text-blue-600 text-sm font-semibold tracking-wider uppercase mb-2'
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
				className={`mt-3 h-1 w-16 bg-blue-600 mx-auto ${
					align !== 'center' ? 'mx-0' : ''
				}`}
				initial={{ scaleX: 0 }}
				whileInView={{ scaleX: 1 }}
				viewport={{ once: true }}
				transition={{ duration: 0.5, delay: 0.2 }}
			/>
		</div>
	)
}

export default SectionTitle
