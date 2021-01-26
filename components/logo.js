import style from './logo.module.css'
import Image from 'next/image'
import Link from 'next/link'

export default function Logo() {
    return (
      <div className={style.container}>
        <Link href="/" className={style.logo}>
          <a><Image src="/logo.png" alt="Picture of the logo" width={70} height={70}/></a>
        </Link>
      </div>
    )
  }