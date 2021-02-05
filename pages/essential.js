import style from '../styles/essential.module.css'
import { request } from "../utils/connectToDatoCMS";
import { Image } from "react-datocms";
/*import { connectToMongodb } from '../utils/connectToMongodb'*/
import Layout from '../components/layout'
import Header from '../components/header'
/*import Image from 'next/image'*/
import { useReducer } from 'react'
import EssentialNav from '../components/essentialNav';

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

export default function Essential({ data }) {
 
  const [state, dispatch] = useReducer(reducer, initialState) 

  const handleChangeInput= e => {
    dispatch({
      type: "input user answer",
      payload: e.target.value
    })
  }
  
  const handleCheckAnswer = () => { 
    const correctAnswer = data.essentialEnglishWord.correctAnswer
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
  
  const help = <div dangerouslySetInnerHTML={{__html: data.essentialEnglishWord.helpWords}} />;

  return (
    <Layout title="Essential English">
      <Header />
      <main className={style.main}>
        <div className={style.wrapper}>
          <EssentialNav />
          <section>
          <h2 className={style.headerSection}>Essential English words / write</h2>
          <div className={style.containerWords}>
            <div className={style.containerWord}>
              <div className={style.containerImg}>
                <Image data={data.essentialEnglishWord.questionImage.responsiveImage} />
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
                {help}
              </div>  
              {state.result}  
            </div>
          </div>
          </section>
        </div>
      </main>
    </Layout>
  )
}

 
const MY_QUERY = `
  query MyQuery {
    essentialEnglishWord {
      questionImage {
        responsiveImage(imgixParams: { fit: crop, w: 100, h: 80, auto: format }) {
          alt
          srcSet
          webpSrcSet
          sizes
          src
          width
          height
          aspectRatio
          title
          base64
        }
      }
      correctAnswer
      helpWords
    }
  }
`;


export async function getStaticProps() {
  const data = await request({
    query: MY_QUERY,
    variables: { limit: 1 }
  });
  return {
    props: { data }
  };
}


/*
export async function getServerSideProps(context) {
  const { db } = await connectToMongodb();
  const users = await db.collection("users").find({}).toArray();
  return {
    props: {
      users: JSON.parse(JSON.stringify(users))
    },
  };
}*/
