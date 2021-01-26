import style from './header.module.css'
import Logo from './logo'
import AuthNav from './authNav'


export default function Header() {
  return (
    <header className={style.header}>
      <Logo />    
      <div className={style.slogan}>
          Learn English by just thinking English
      </div>
      <AuthNav />  
    </header>
  )
}