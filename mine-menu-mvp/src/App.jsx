import React from 'react'

const App = () => {
  return (
    <div className='mt-4 font-normal'>
      <div className='flex place-content-around'>
        <nav >
          <h1 className='font-bold cursor-pointer'>MenuMine</h1>
        </nav>
        
        <ul className='flex place-content-evenly gap-3'>
          <li>
            About Us
          </li>
          <li>
            Guide
          </li>
          <li>
            Pricing
          </li>
          <li>
            Demo
          </li>
        </ul>
      </div>

      



      <section className="bg-white lg:grid lg:h-screen lg:place-content-center">
  <div className="mx-auto w-screen max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
    <div className="mx-auto max-w-prose text-center">
      <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
        Get Your Online  Custom 
        <strong className="text-indigo-600"> Menu </strong>
        In One setup  
      </h1>

      <p className="mt-4 text-base text-pretty text-gray-700 sm:text-lg/relaxed">
        Create Custom Mneu for you Outlet, Get QRCode Menu in One Click  
      </p>

      <div className="mt-4 flex justify-center gap-4 sm:mt-6">
        <a
          className="inline-block rounded border border-indigo-600 bg-indigo-600 px-5 py-3 font-medium text-white shadow-sm transition-colors hover:bg-indigo-700"
          href="#"
        >
          Create Menu
        </a>

        <a
          className="inline-block rounded border border-gray-200 px-5 py-3 font-medium text-gray-700 shadow-sm transition-colors hover:bg-gray-50 hover:text-gray-900"
          href="#"
        >
          Demo Menu
        </a>
      </div>
    </div>
  </div>
</section>

    </div>
  )
}

export default App
