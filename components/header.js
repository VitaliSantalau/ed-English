import style from './header.module.css'
import Image from 'next/image'
import Logo from './logo'
import AuthNav from './authNav'


export default function Header() {
  return (
    <header className={style.header}>
      <div className={style.firstLevel}>
        <Logo /> 
        <div className={style.containerImageEvolution}>
        <div className={style.containerImage}>
            <Image 
              src="/header-evolution-start.png"
              alt="Picture of the author"
              layout="responsive"
              width={70}
              height={80}
            />
          </div>
          <div className={style.containerImage}>
            <Image 
              src="/header-evolution-second.png"
              alt="Picture of the author"
              layout="responsive"
              width={60}
              height={130}
            />
          </div>
          <div className={style.containerImage}>
            <Image 
              src="/header-evolution-third.png"
              alt="Picture of the author"
              layout="responsive"
              width={60}
              height={180}
            />
          </div>
          <div className={style.containerImage}>
            <Image 
              src="/header-evolution-fourth.png"
              alt="Picture of the author"
              layout="responsive"
              width={60}
              height={160}
            />
          </div>
        </div>
        <div className={style.slogan}>
          Learn English by just thinking English
        </div>
        <div className={style.containerImageLast}>
            <Image 
              src="/header-evolution-last.png"
              alt="Picture of the author"
              layout="responsive"
              width={110}
              height={100}
            />
          </div>
        <AuthNav />
      </div>
           
    </header>
  )
}