import style from './feedbackForm.module.css'
import React, { useReducer, useState } from 'react'
import emailjs, { init } from 'emailjs-com'
init("user_7CINYP2z8ICW8nhDeIgnc");

const errorMessage =
<div className={style.errorMessage}>
  <div>SORRY ... </div>
  <div>Your message hasn't been sent</div>
</div>

const successMessage =
<div className={style.successMessage}>
  <div>SUCCESS</div>
  <div>Your message has been sent</div>
</div>

function reducer(state, action) {
  switch (action.type) {
    case 'success':
      return {
        ...state, 
        view : successMessage
      }
    case 'error':
      return {
        ...state, 
        view : errorMessage
      }
    case 'loading':
      return {
        ...state, 
        isShowLoading: true
      }  
    case 'reset':
      return {
        ...state,
        view: null, 
        isShowLoading: false
      }  
    default:
      throw new Error();
  }
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


const initialState = {
  view: null,
  isShowLoading: false,
} 

  const [state, dispatch] = useReducer(reducer, initialState)
  
  
  const handleSend = () => {
    dispatch({ type: 'loading' })
    emailjs.send("service_ntqo2if", "template_39g6d8t", input)
    .then(response => {
      dispatch({ type: 'success' })
      setTimeout(handleShowFeedBack, 3000)

      console.log('SUCCESS!', response.status, response.text);
      
    }, function(error) {
      dispatch({ type: 'error' })
      setTimeout(handleShowFeedBack, 3000)
      /*setTimeout(dispatch({ type: 'reset' }), 10000)      
      /*setTimeout(setInput({ senderEmail: "", feedback: "" }), 4000)*/
      console.log('FAILED...', error);
    });
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
        {state.isShowLoading ? <button className={style.buttonLoading}>
          Loading...
        </button> :
        <button className={style.buttonSend} onClick={handleSend}>
          Send
  </button>}         
        <button onClick={handleShowFeedBack} className={style.buttonClose}>
          Close
        </button>
      </div>
    </div>
    {state.view}
  </>
  )

}