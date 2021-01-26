import Logo from './logo'
import style from './header.module.css'

export default function Header() {
  return (
    <header className={style.header}>
      <Logo />    
      <div className={style.slogan}>
          Learn English by just thinking English
        </div>  
    </header>
  )
}