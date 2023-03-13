import React from 'react'
import { HiXMark } from "react-icons/hi2"

export default function VideoPopup({ visible, onClose }) {

  if (!visible) return null

  return (
    <div className=' fixed bg-black bg-opacity-60 backdrop-blur-sm inset-0 flex justify-center items-center'>
      <div className="bg-white p-3 rounded-md">
        <iframe className="w-full aspect-video rounded-md" width="560" height="315" src="https://www.youtube.com/embed/Ydofxyqcgcs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        
      </div>
      <div className=' bg-white rounded-3xl p-2 ml-3 absolute top-5 right-5'>
      <HiXMark onClick={onClose} className=" cursor-pointer" size={20}/>
      </div>

    </div>
  )
}
