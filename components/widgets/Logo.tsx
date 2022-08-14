import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

const Logo: FC = () => {
  return (
    <Link href="/">
        <a className='flex-center space-x-2'>
          <Image
            src="/logo.svg"
            height={40}
            width={40}
            alt="namaste dev logo"
          />
          <p className="text-2xl hidden font-bold opacity-75 md:block">Namaste Dev</p>
        </a>
      </Link>
  )
}

export default Logo