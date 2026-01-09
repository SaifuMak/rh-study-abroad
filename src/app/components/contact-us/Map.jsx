'use client'
import React from 'react'

function Map() {
  return (
    <div className="relative lg:h-[600px] h-[400px]  w-full overflow-hidden">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3922.715877425633!2d76.2218314!3d10.523029799999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba7ee4fc74e6d71%3A0x4a3ba4feb3710fb3!2sRH%20Study%20Abroad!5e0!3m2!1sen!2sin!4v1767939307733!5m2!1sen!2sin"
        className="absolute inset-0 w-full h-full border-0 outline-none focus:outline-none"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="RH Study Abroad Location"
      />
    </div>
  )
}

export default Map
