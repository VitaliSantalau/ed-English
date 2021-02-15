import style from './feedbackForm.module.css'
import React, { useEffect, useState } from 'react'
import emailjs, { init } from 'emailjs-com'
init("user_7CINYP2z8ICW8nhDeIgnc");

const initState = {
  senderEmail : "",
  feedback : "",
  isShowFormFeedback: true,
  isShowLoading: false,
  isShowSuccessMessage: false,
  isShowErrorMessage: false,
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

export default function FeedbackForm({ handleShowFeedBack }) {

  /*const [state, dispatch] = useReducer(reducer, initialState) */
  
  /*
  const handleChangeInput = e => {
    dispatch({
      type: "input user answer",
      payload: e.target.value
    })
  }
  */

  const [state, setState] = useState(initState);
  
  const { senderEmail, feedback, isShowLoading, isShowSuccessMessage, isShowErrorMessage, isShowFormFeedback } = state

  const handleInput = (e) => {
    setState({
      ...state,
      [e.target.name] : e.target.value
    })
  }

  const handleSend = () => {
    setState({
      ...state,
      isLoading: true
    })
    emailjs.send("service_ntqo2if", "template_39g6d8t", state)
    .then(response => {
      setState({
        ...state,
        isShowFormFeedback: false,
        isShowSuccessMessage: true,
      })
      setTimeout(handleShowFeedBack, 3000)
      console.log('SUCCESS!', response.status, response.text);
      setTimeout(setState(initState), 3000)
    }, function(error) {
      console.log('FAILED...', error);
    });
  }

  
  return (
    <>
      {isShowFormFeedback && 
      <div className={style.form}>
        <label className={style.email}>
          Email
          <input 
            type="text" 
            className={style.inputEmail}
            autoFocus
            placeholder="Your email address..."
            name="senderEmail"
            value={senderEmail}
            onChange={handleInput}
          />
        </label>
        <label className={style.feedback}>
          Feedback
          <textarea 
            className={style.inputFeedback}
            placeholder="Your feedback..."
            name="feedback"
            value={feedback}
            onChange={handleInput}
          />
        </label>
        <div className={style.containerButtons}>
          {isShowLoading ? <button className={style.buttonLoading}>
            Loading...
          </button> :
          <button className={style.buttonSend} onClick={handleSend}>
          Send
        </button>}         
          <button onClick={handleShowFeedBack} className={style.buttonClose}>
            Close
          </button>
        </div>
      </div>} 
      {isShowSuccessMessage &&
      <div className={style.successMessage}>
        <div>SUCCESS</div>
        <div>Your message has been sent</div>
      </div>}
      {isShowErrorMessage &&
      <div className={style.errorMessage}>
        <div>SORRY ... </div>
        <div>Your message hasn't been sent</div>
      </div>}
    </>
  )
}