import style from './feedbackForm.module.css'
import React, { useReducer, useState } from 'react'
import emailjs, { init } from 'emailjs-com'
init("user_7CINYP2z8ICW8nhDeIgnc")
import valid from '../utils/validFeedbackForm'


function reducer(state, action) {
  switch (action.type) {
    case 'success':
      return { 
        ...state, 
        message : <div className={style.successMessage}>
                    <div>SUCCESS</div>
                    <div>Your message has been sent</div>
                  </div> 
      }
    case 'error':
      return {
        ...state, 
        message : <div className={style.errorMessage}>
                    <div>SORRY ... </div>
                    <div>Your message hasn't been sent</div>
                  </div>
      }
    case 'loading':
      return {
        ...state, 
        isShowLoading: true
      }  
    case 'reset':
      return {
        ...state, 
        message: null,
        isShowLoading: false
      }  
    case 'valid':
      return {
        ...state, 
        message : <div className={style.validMessage}>
                    {action.payload}
                  </div>
      }  
    default:
      throw new Error();
  }
}

const initialState = {
  isShowLoading: false,
  validMessage: null,
  message: null
}

export default function FeedbackForm({ handleShowFeedBack }) {

  const [input, setInput] = useState({ senderEmail: "", feedback: "" });
  const { senderEmail, feedback } = input
  const handleInput = (e) => {
    setInput({
      ...input,
      [e.target.name] : e.target.value
    })
  }

  const [state, dispatch] = useReducer(reducer, initialState)
   
  const handleSend = () => {
    const validMessage = valid(senderEmail, feedback)
    if(validMessage) {
      dispatch({ type: 'valid', payload: validMessage })
      setTimeout(() => dispatch({ type: 'reset' }), 2000)

    } else {
      dispatch({ type: 'loading' })

      emailjs.send("service_ntqo2if", "template_39g6d8t", input)
      .then(response => {
        dispatch({ type: 'success' })
        setTimeout(handleShowFeedBack, 2000)
        setTimeout(() => dispatch({ type: 'reset' }), 2000)
        setInput({ senderEmail: "", feedback: "" })
  
        console.log('SUCCESS!', response.status, response.text);
        
      }, function(error) {
        dispatch({ type: 'error' })
        setTimeout(handleShowFeedBack, 2000)
        setTimeout(() => dispatch({ type: 'reset' }), 2000)
        setInput({ senderEmail: "", feedback: "" })
        
        console.log('FAILED...', error);
      });
    }
  }

  
  return (
  <>
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
        {state.isShowLoading ? 
          <button className={style.buttonLoading}>
            Loading...
          </button> :
          <button className={style.buttonSend} onClick={handleSend}>
            Send
          </button>
        }         
        <button onClick={handleShowFeedBack} className={style.buttonClose}>
          Close
        </button>
      </div>
    </div>
    {state.message}
  </>
  )
}