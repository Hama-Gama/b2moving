import { useEffect } from 'react'
import { useQuoteModal } from '../../context/QuoteModalContext'

const QuoteModal = () => {
	const { isOpen, closeModal } = useQuoteModal()

	useEffect(() => {
		document.body.style.overflow = isOpen ? 'hidden' : ''
		return () => {
			document.body.style.overflow = ''
		}
	}, [isOpen])

	if (!isOpen) return null

	return (
		<>
			{/* ЗАДНИЙ ФОН */}
			<div className='fixed inset-0 bg-black/50 z-40' onClick={closeModal} />

			{/* МОДАЛКА */}
			<div
				className='fixed top-1/2 left-1/2 z-50 w-11/12 max-w-3xl
				-translate-x-1/2 -translate-y-1/2 bg-white rounded-xl shadow-xl p-0 overflow-hidden'
			>
				{/* HEADER */}
				<div className='flex justify-between items-center p-4 border-b'>
					{/* <h2 className='text-2xl font-bold'>Get a Quote</h2> */}
					<button
						onClick={closeModal}
						className='text-gray-600 hover:text-black text-2xl leading-none'
					>
						×
					</button>
				</div>

				{/* ВСТРОЕННАЯ ФОРМА */}
				<iframe
					frameBorder='0'
					src='https://portal.smartmoving.com/embedded/?companyId=8c9490dc-49d9-4b54-bf5d-afee01634264&branchId=0a697e5d-cdf3-4d8a-a202-afee01634324&mode=short'
					style={{
						width: '100%',
						height: '600px',
						border: 0,
					}}
				></iframe>
			</div>
		</>
	)
}

export default QuoteModal
