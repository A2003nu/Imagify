import React from 'react'
import { assets } from '../assets/assets'

const Description = () => {
  return (
  <div className="flex flex-col items-center justify-center my-24 p-6 md:px-28">
    <h1 className="text-3xl sm:text-4xl font-semibold mb-2">Create AI Images</h1>
    <p className="text-gray-500 mb-8">Turn your imagination into visuals</p>

    <div className='flex flex-col gap-5 md:gap-14 md:flex-row items-center'>
        <img src={assets.sample_img_1} alt="" className='w-80 xl:w-96 rounded-lg' />
        <div>
            <h2 className='text-3xl font-medium max-w-lg mb-4'>Introducing the AI-Powered Text to Image Generator </h2>
            <p className='text-gray-600 mb-4'>"Unleash your creativity with AI-powered image generation! Transform your ideas into stunning visuals simply by describing them in words. Whether you need artwork, concept designs, or just want to explore the endless possibilities of AI-driven creativity, our advanced text-to-image generator brings your imagination to life in seconds. No design skills required—just type, generate, and watch AI create mesmerizing images tailored to your vision!"</p>
        </div>
    </div>
  </div>
  )
}

export default Description