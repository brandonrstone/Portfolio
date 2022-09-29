import React from 'react'
import { NextPage } from 'next'
import Image from 'next/image'
import { Cursor, useTypewriter } from 'react-simple-typewriter'

import { BackgroundCircles } from '../components'
import { HakiNFT } from '../assets'
import Link from 'next/link'

type Props = {}

const Hero: NextPage = ({}: Props) => {
  const [text, count] = useTypewriter({
    words: [
      "Hi there, I'm Brandon!",
      'JavaScript nerd :^)',
      '<Web3 Developer />',
      '...turned aspiring Blockchain Engineer.'
    ],
    loop: true,
    delaySpeed: 1500
  })
  return (
    <div className='relative h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
      <BackgroundCircles />
      <div className='relative top-20 overflow-hidden'>
        <Image
          src={HakiNFT}
          className='rounded-full mx-auto'
          width={175}
          height={175}
          objectFit='cover'
          alt='Portfolio Picture'
        />
      </div>
      <div className='relative flex flex-col items-center justify-center text-center top-16 xs:top-14 z-20'>
        <h1 className='text-sm uppercase text-gray-500 pb- tracking-[15px] text-center xs:tracking-[12px]'>
          Front End Engineer
        </h1>
        <h1 className='text-5xl lg:text-6xl font-semibold scroll-px-10 xs:h-[75px]'>
          <span className='text-4xl mr-3 sm:text-3xl'>{text}</span>
          <span className='relative right-3'>
            <Cursor cursorColor='#f7ab0a' />
          </span>
        </h1>

        <div className='pt-5 xs:grid xs:grid-rows-2 xs:grid-cols-2 sm:pt-4 xs:pb-10'>
          <Link href='#about'>
            <button className='relative heroButton xs:text-xl xs:left-5'>
              About
            </button>
          </Link>
          <Link href='#experience'>
            <button className='relative heroButton xs:text-xl xs:right-5'>
              Experience
            </button>
          </Link>
          <Link href='#skills'>
            <button className='relative heroButton xs:text-xl xs:left-5'>
              Skills
            </button>
          </Link>
          <Link href='#projects'>
            <button className='relative heroButton xs:text-xl xs:right-9'>
              Projects
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Hero
