import style from './header.module.css'
import Logo from './logo'
import AuthNav from './authNav'
import PageNav from './pageNav'


export default function Header() {
  return (
    <header className={style.header}>
      <div className={style.firstLevel}>
        <Logo />    
        <div className={style.slogan}>
          Learn English by just thinking English
        </div>
        <AuthNav />
      </div>
      <PageNav />      
    </header>
  )
}