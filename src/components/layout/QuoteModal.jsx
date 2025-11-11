import { useEffect } from 'react'

const QuoteModal = ({ isOpen, onClose }) => {
	// Блокировка скролла при открытой модалке
	useEffect(() => {
		if (isOpen) {
			document.body.style.overflow = 'hidden'
		} else {
			document.body.style.overflow = ''
		}

		return () => {
			document.body.style.overflow = ''
		}
	}, [isOpen])

	if (!isOpen) return null

	return (
		<>
			{/* Фон */}
			<div className='fixed inset-0 bg-black/50 z-40' onClick={onClose}></div>

			{/* Модалка */}
			<div className='fixed top-1/2 left-1/2 z-50 w-11/12 max-w-lg -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg shadow-lg p-6'>
				<h2 className='text-2xl font-bold mb-4'>Get a Quote</h2>
				<form className='space-y-4'>
					<input
						type='text'
						placeholder='Full Name'
						className='w-full border rounded-md px-3 py-2'
						required
					/>
					<input
						type='email'
						placeholder='Email'
						className='w-full border rounded-md px-3 py-2'
						required
					/>
					<input
						type='tel'
						placeholder='Phone'
						className='w-full border rounded-md px-3 py-2'
						required
					/>
					<input
						type='date'
						placeholder='Move Date'
						className='w-full border rounded-md px-3 py-2'
						required
					/>
					<div className='grid grid-cols-2 gap-2'>
						<input
							type='text'
							placeholder='Pick Up Zip'
							className='w-full border rounded-md px-3 py-2'
							required
						/>
						<input
							type='text'
							placeholder='Drop Off Zip'
							className='w-full border rounded-md px-3 py-2'
							required
						/>
					</div>
					<select className='w-full border rounded-md px-3 py-2' required>
						<option value=''>Select your move size</option>
						<option value='studio'>Studio / 1 Bedroom</option>
						<option value='2bed'>2 Bedrooms</option>
						<option value='3bed'>3 Bedrooms</option>
						<option value='4plus'>4+ Bedrooms</option>
					</select>
					<button
						type='submit'
						className='w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition font-bold'
					>
						Get a Quote Now
					</button>
				</form>
			</div>
		</>
	)
}

export default QuoteModal
