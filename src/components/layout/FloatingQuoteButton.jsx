'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { useQuoteModal } from '../../context/QuoteModalContext'

const FloatingQuoteButton = ({ onOpen }) => {
	const [visible, setVisible] = useState(false)
	const { openModal } = useQuoteModal()

	useEffect(() => {
		const hero = document.getElementById('hero')
		if (!hero) return

		const observer = new IntersectionObserver(
			([entry]) => {
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
					className='fixed bottom-5 left-0 w-full sm:bottom-6 sm:left-1/2 
                    sm:-translate-x-1/2 sm:w-auto z-50 px-4 sm:px-0'
				>
					<Button
						onClick={openModal}
						size='lg'
						className='w-full sm:w-auto bg-gradient-to-r from-blue-500 via-blue-600 
                        to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white font-black 
                        tracking-wide text-lg py-6 sm:py-5 rounded-lg sm:rounded-full 
                        shadow-xl transition-all duration-300 active:scale-[0.98]'
					>
						GET A FREE QUOTE
					</Button>
				</motion.div>
			)}
		</AnimatePresence>
	)
}

export default FloatingQuoteButton
