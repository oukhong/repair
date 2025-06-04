import React from 'react'

const Map = () => {
  return (
    <>
    <div class="w-full h-64 sm:h-80 md:h-96 lg:h-[500px] xl:h-[600px] rounded-xl overflow-hidden shadow-lg">
    <iframe
        class="w-full h-full border-0"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3168.927858036381!2d-122.08424968469227!3d37.422065979825934!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb0bb9c27b6a1%3A0x7b7cf3b9d743b5b8!2sGoogleplex!5e0!3m2!1sen!2sus!4v1584474181395!5m2!1sen!2sus"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
    ></iframe>
    </div>

    </>
  )
}

export default Map
