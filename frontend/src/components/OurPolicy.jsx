import React from 'react'
import { assets } from '../assets/assets'

const OurPolicy = () => {
  return (
    <div className='flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-10 text-xs sm:text-sm md:text-base text-gray-600'>
          <div>
              <img src={assets.exchange_icon} className='m-auto w-12 mb-5' alt="" />
              <p className='font-semibold'>Easy Exchange Policy</p>
              <p className='text-gray-400'>We offer hassle free exchange policy</p>
      </div>
          <div>
              <img src={assets.quality_icon} className='m-auto w-12 mb-5' alt="" />
              <p className='font-semibold'>7Days Return Policy</p>
              <p className='text-gray-400'>We provide 7days free return policy</p>
      </div>
          <div>
              <img src={assets.support_img} className='m-auto w-12 mb-5' alt="" />
              <p className='font-semibold'>Best Customer support</p>
              <p className='text-gray-400'>We provide 24/7 support </p>
      </div>
    </div>
  )
}

export default OurPolicy
