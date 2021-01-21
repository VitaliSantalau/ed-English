import Head from 'next/head'
import Link from 'next/link'
import styles from '../../styles/register.module.css'
import { useState, useContext, useEffect } from 'react'
import { DataContext } from '../../store/globalState'
import { postData } from '../../utils/fetchData'
import Cookie from 'js-cookie'
import { useRouter } from 'next/router'

export default function Login() {
  const initialState = { email: "", password: "" }
  const [userData, setUserData] = useState(initialState)
  const { email, password } = userData

  const {state, dispatch} = useContext(DataContext)
  const { auth } = state

  const router = useRouter()

  const handleChangeInput = e => {
    const { name, value } = e.target
    setUserData({ ...userData, [name]:value })
    dispatch({ type: 'NOTIFY', payload: {} })
  }

  const handleSubmit = async e => {
    e.preventDefault()
    dispatch({ type: 'NOTIFY', payload: {loading: true} })

    const res = await postData('auth/login', userData)
    if(res.err) return dispatch({ type: 'NOTIFY', payload: {error: res.err} })

    dispatch({ type: 'NOTIFY', payload: {success: res.msg} })
    dispatch({ type: 'AUTH', payload: {
      token: res.access_token,
      user: res.user
    } })

    Cookie.set('refreshtoken', res.refresh_token, {
      path: 'api/auth/accessToken',
      expires: 7
    })

    localStorage.setItem('firstLogin', true)
  }

  useEffect(() => {
    if(Object.keys(auth).length !== 0) router.push('/')
  }, [auth])


  return (
    <div className={styles.container}>
      <Head>
        <title>Login to Ed</title>
        <link rel="icon" href="/favicon.ico" /> 
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Login to Ed-English
        </h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="inputEmail">Email adress</label>
          <input type="email" id="inputEmail" placeholder="enter email" 
            name="email" value={email} onChange={handleChangeInput}>
          </input>
          <label htmlFor="inputPassword">Password</label>
          <input type="password" id="inputPassword" placeholder="enter password"
            name="password" value={password} onChange={handleChangeInput}>
          </input>
          <button type="submit">login</button>
          <p>Don't have an account? <Link href="/auth/register"><a>Register</a></Link></p>
        </form>
      </main>
    </div>
  )
}