'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/autoplay'

const brands = [
	{
		name: 'Google',
		logo: '/google-carousel.jpg',
		link: 'https://maps.app.goo.gl/pVXNwjt4BHMhzVfK6',
	},
	{
		name: 'Thumbtack',
		logo: '/thumbstack.jpg',
		link: 'https://www.thumbtack.com/ca/santa-clara/long-distance-movers/b2-moving-company/service/358664438095724561?category_pk=182305297010508254&category_pks=182305297010508254&ir_referrer=FRONT_DOOR_SEARCH&keyword_pk=102906936641276778&lp_request_pk=565988328119140356&project_pk=565988328125087749&service_pk=358664438095724561&zipCode=94509&zip_code=94509&click_origin=pro%20list%2Fclick%20pro%20name&is_sponsored=false',
	},
	{
		name: 'Yelp',
		logo: '/yelp.png',
		link: 'https://www.yelp.com/biz/b2-moving-company-santa-clara?uid=enKkp6FdSe3gKFUmo0YMFA&utm_source=ashare',
	},
	{
		name: 'HomeAdvisor',
		logo: '/home-adviser.png',
		link: 'https://www.homeadvisor.com',
	},
	{
		name: 'Elite Service',
		logo: '/elite-service.jpeg',
		link: 'https://www.homeadvisor.com/',
	},
]

const InfiniteBrandCarousel = () => {
	return (
		<section className='py-10 bg-white'>
			<div className='max-w-7xl mx-auto px-4'>
				<h3 className='text-center text-gray-700 text-3xl font-bold mb-6'>
					Trusted On These Platforms
				</h3>

				<Swiper
					modules={[Autoplay]}
					autoplay={{
						delay: 0,
						disableOnInteraction: true,
						pauseOnMouseEnter: true,
					}}
					speed={3000}
					loop
					slidesPerView={4}
					spaceBetween={20}
					breakpoints={{
						320: { slidesPerView: 2.5 },
						640: { slidesPerView: 3.5 },
						1024: { slidesPerView: 4.5 },
					}}
					className='cursor-pointer'
				>
					{brands.map((brand, index) => (
						<SwiperSlide key={index}>
							<div
								onClick={() => window.open(brand.link, '_blank')}
								className='flex items-center justify-center p-3 transition-transform hover:scale-105'
							>
								<img
									src={brand.logo}
									alt={brand.name}
									className='h-16 w-auto object-contain rounded-md shadow-md'
								/>
							</div>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</section>
	)
}

export default InfiniteBrandCarousel
