import Image from 'next/image'
import React from 'react'

const Header = () => {
  return (
    <header className='p-14 pb-4'>
      <Image
        src="/assets/logo.svg"
        alt="logo"
        width={150}
        height={150}
      />
    </header>
  )
}

export default Header
