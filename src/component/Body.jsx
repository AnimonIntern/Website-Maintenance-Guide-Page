import React from 'react'
import Download_btn_id from './Buttons/Download-btn-id'

export default function Body() {
  return (
    <section>
      <div className=' flex flex-col items-center'>
        <div className=' w-full bg-white font-light text-4xl mx-4 p-10 pb-3 text-center max-sm:text-2xl'>
          <h2 className=' text-blue-900'>Guide on</h2>
          <h2 className=' text-red-600'>6 things to keep in mind <br></br>when maintaining a website</h2>
        </div>
        <div>
          <img src="https://www.animonlive.com/wp-content/uploads/2023/01/divider.png" alt="divider" width={90} />
        </div>
      </div>

      <div className=' grid grid-cols-1 gap-4 m-auto py-7 w-10/12 lg:grid-cols-2 '>
        <div className=' w-fit col-span-1 m-auto'>
          <img src="https://www.animonlive.com/wp-content/uploads/2023/02/6-things-you-need-to-know-to-keep-your-website-secure-and-updated-Website-Maintenance-Guide.webp" alt="6-things-you-need-to-know-to-keep-your-website-secure-and-updated-Website-Maintenance-Guide" className=' w-fit' />
        </div>
        <div className=' w-fit col-span-1 m-3 flex flex-col'>
          <h3 className=' font-normal text-lg mb-2'>Are you looking to secure your website and protect your business reputation?</h3>
          <span className=' text-lg mb-2'>Here are <strong>6 things you need to know to keep your website secure and updated.</strong></span>
          <span className=' text-lg mb-2'>Look no further!</span>
          <span className=' text-lg mb-2'>The free website maintenance guide will help you to know how:</span>
          <ul className=' list-disc my-5 pl-7 text-xl font-semibold text-cyan-800'>
            <li className=' border-b-cyan-900 border-b-2 py-2'>Security features for your website</li>
            <li className=' border-b-cyan-900 border-b-2 py-2'>Website backup to go online in-case anything goes wrong with the website</li>
            <li className=' border-b-cyan-900 border-b-2 py-2'>Speed of your website</li>
            <li className=' border-b-cyan-900 border-b-2 py-2'>Why to ensure - links are working properly</li>
            <li className=' border-b-cyan-900 border-b-2 py-2'>Importance of testing forms and automated messages</li>
            <li className=' border-b-cyan-900 border-b-2 py-2'>Checking your website on different browsers</li>
          </ul>
          <span className=' text-lg mb-2'>So, what are you waiting for?</span>
          <span className=' text-lg mb-2'>Download this Guide and secure your website.</span>
          <Download_btn_id />
        </div>
        
      </div>
    </section>
  )
}
