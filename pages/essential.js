import style from '../styles/essential.module.css'
import { connectToMongodb } from '../utils/connectToMongodb'
import Layout from '../components/layout'
import Header from '../components/header'
import Image from 'next/image'
import { useReducer, useState } from 'react'

const initialState = {}

function reducer(state, action) {
  switch (action.type) {
    case 'correct':
      return (
        <div className={style.containerCorrect}>
          <p>correct</p>
        </div>
      )
    case 'wrong':
      return (
        <div className={style.containerWrongWord}>
          <p>wrong</p>
        </div>
      )
    default:
      throw new Error();
  }
}

export default function Essential() {

  const [classShield, setclassShield] = useState(style.shieldHelpWordsClose)
  
  const [state, dispatch] = useReducer(reducer, initialState) 

  const hadleRemoveShield = () => {
    setclassShield(style.shieldHelpWordsOpen)
  }

  return (
    <Layout title="Essential English">
      <Header />
      <main className={style.main}>
        <div className={style.wrapper}>
          <h3>Essential English words</h3>
          <div className={style.containerWords}>
            <div className={style.containerWord}>
              <div className={style.containerImg}>
                <Image 
                  src="/essential words/table.png"
                  alt="Picture of the author"
                  width={150}
                  height={120}
                />
              </div>
              <input type="text" />
              <button 
                type="submit" 
                className={style.checkButton}
                onClick={() => dispatch({type: "correct"})}
              >check</button>
              <button 
                className={style.helpButton} 
                onClick={hadleRemoveShield}
              >help</button>
              <div className={style.containerHelpWords}>
                <div className={classShield}></div>
                <p>window</p>
                <p>tree</p>
                <p>yellow</p>
                <p>table</p>
                <p>chair</p>
              </div>  
              <div className={style.containerCorrect}>
          <p>correct</p>
        </div>            
            </div>
          </div>
        </div>
      </main>
    </Layout>
  )
}

      

export async function getServerSideProps(context) {
  const { db } = await connectToMongodb();
  const users = await db.collection("users").find({}).toArray();
  return {
    props: {
      users: JSON.parse(JSON.stringify(users))
    },
  };
}