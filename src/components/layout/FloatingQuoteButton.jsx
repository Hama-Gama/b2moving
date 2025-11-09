'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { Button } from '@/components/ui/button'

const FloatingQuoteButton = () => {
	const [visible, setVisible] = useState(false)

	useEffect(() => {
		const hero = document.getElementById('hero')
		if (!hero) return

		const observer = new IntersectionObserver(
			([entry]) => {
				// Если hero видим хотя бы на 30% — скрываем кнопку
				setVisible(!entry.isIntersecting)
			},
			{ threshold: 0.3 }
		)

		observer.observe(hero)
		return () => observer.disconnect()
	}, [])

	return (
		<AnimatePresence>
			{visible && (
				<motion.div
					initial={{ opacity: 0, y: 80 }}
					animate={{ opacity: 1, y: 0 }}
					exit={{ opacity: 0, y: 80 }}
					transition={{ type: 'spring', stiffness: 120, damping: 15 }}
					className='fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50'
				>
					<Button
						asChild
						size='lg'
						className='bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg px-8 py-5 flex items-center gap-3 font-bold text-lg'
					>
						<a href='#contacts' className='flex items-center gap-2 tracking-wider font-black'>
							GET A QUOTE
						</a>
					</Button>
				</motion.div>
			)}
		</AnimatePresence>
	)
}

export default FloatingQuoteButton
