import React from 'react'

const Hero = () => {
  return (
<div class="bg-black text-white mx-auto px-4 py-10">
  <div class="flex flex-col items-center">
    <div class="text-center">
      <h1 class="text-4xl font-bold mb-4">
        Create a modern project management website with Taskxio
      </h1>
      <p class="text-lg mb-8">
        Experience a modern Webflow template for a project management site. Create websites for Build It companies, startups, tech firms, corporate businesses, consulting firms, freelancers, and nonprofits business.
      </p>
      <div class="flex justify-center items-center space-x-4">
        <a href="#demo" class="relative inline-block bg-white text-black font-medium py-3 px-6 rounded hover:bg-gray-200 transition-colors duration-300">
          <span class="relative z-10">Explore Demo</span>
          <div class="absolute inset-0 bg-gradient-to-r from-gray-100 to-gray-300 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
        </a>
        <div class="flex items-center space-x-2">
          <a href="https://www.youtube.com/watch?v=hrhIuJFxePI" class="flex items-center justify-center w-10 h-10 bg-gray-800 text-white rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="21" viewBox="0 0 15 21" fill="none">
              <path d="M13.871 9.71006C14.5445 10.195 14.5445 11.1975 13.871 11.6824L1.97601 20.2468C1.17219 20.8255 0.0507813 20.2511 0.0507813 19.2606L0.0507819 2.13186C0.050782 1.14136 1.17219 0.566934 1.97601 1.14569L13.871 9.71006Z" fill="currentColor"></path>
            </svg>
          </a>
          <div class="text-white">Watch Video</div>
        </div>
      </div>
    </div>
    {/* <div class="relative w-full h-64 mt-8">
      <div class="absolute top-0 left-1/2 transform -translate-x-1/2 w-64 h-64 bg-blue-400 rounded-full blur-lg"></div>
      <div class="absolute top-0 left-1/2 transform translate-x-1/2 w-64 h-64 bg-pink-400 rounded-full blur-lg"></div>
    </div> */}
  </div>
</div>
  )
}

export default Hero