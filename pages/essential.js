import style from '../styles/essential.module.css'
import { connectToMongodb } from '../utils/connectToMongodb'
import Layout from '../components/layout'
import Header from '../components/header'
import Image from 'next/image'
import { useReducer } from 'react'

const initialState = { 
  userAnswer: "",
  result: "",
  classShield: style.shieldHelpWordsClose,
}

function reducer(state, action) {
  switch (action.type) {
    case 'input user answer':
      return {
        ...state, 
        userAnswer : action.payload
      }
    case 'correct':
      return {
        ...state, 
        result : 
          <div className={style.containerCorrect}>
            <p>correct</p>
          </div>
      }
    case 'correct with help':
      return {
        ...state, 
        result : 
          <div className={style.containerCorrect}>
            <p>correct with help</p>
          </div>
      }
    case 'wrong':
      return {
        ...state, 
        result : 
          <div className={style.containerWrong}>
            <p>wrong</p>
          </div>
      }
    case 'open shield':
      return {
        ...state, 
        classShield: style.shieldHelpWordsOpen
      }  
    default:
      throw new Error();
  }
}

export default function Essential() {
 
  const [state, dispatch] = useReducer(reducer, initialState) 

  const handleChangeInput= e => {
    dispatch({
      type: "input user answer",
      payload: e.target.value
    })
  }
  
  const handleCheckAnswer = () => { 
    const correctAnswer = "table"
    let isCorrectAnswer
    if(state.userAnswer === correctAnswer) {
      isCorrectAnswer = true
    } else {
      isCorrectAnswer = false
    }
    
    switch (isCorrectAnswer) {
      case true:
        if(state.classShield === style.shieldHelpWordsClose) {
          return dispatch({type: "correct"})
        } else {
          return dispatch({type: "correct with help"})
        }
      case false:
        return dispatch({type: "wrong"})
    }    
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
              <input 
                type="text"
                name="userAnswer"
                value={state.userAnswer}
                onChange={handleChangeInput} 
              />
              <button 
                type="submit" 
                className={style.checkButton}
                onClick={handleCheckAnswer}
              >check</button>
              <button 
                className={style.helpButton} 
                onClick={() => dispatch({ type: 'open shield' })}
              >help</button>
              <div className={style.containerHelpWords}>
                <div className={state.classShield}></div>
                <p>window</p>
                <p>tree</p>
                <p>yellow</p>
                <p>table</p>
                <p>chair</p>
              </div>  
              {state.result}  
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