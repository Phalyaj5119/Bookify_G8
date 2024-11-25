import React from 'react'

const Banner = () => {
  return (
    <div className='px-4 lg:px-24 bg-teal-100 flex items-center'>
        <div className='flex w-full flex-col md:flex-row justify-between items-center gap-12 py-40'>
            {/* left side */}
        <div className='md:w-1/2 space-y-8 h-full'>
            <h2 className='text-5x1 font-bold leading-snug text-black'>Buy And Sell Your Books <span className='text-blue-700'>For the Best Prices</span></h2>
            <p>I welcome you to your favouratuve online library inventory.Read, Write and Explore all at one place. Not only buy but sell books at Bookify. Your favourite lines served to you in just one click!</p>
            <div>
                <input type="search" name="search" id="search" placeholder='Search a book' className='py-2px-2 rounded-s-sm outline-none' />
                <button className='bg-blue-700 px-6 py-2 text-white font-medium hover:bg-black transition-all ease-in duration-200'>Search</button>
            </div>
        </div>
        
        {/* right side */}
        <div><BannerCard></BannerCard></div>
    </div>
</div>
  )
}

export default Banner 