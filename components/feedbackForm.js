import style from './feedbackForm.module.css'
import React, { useState } from 'react'
import emailjs from 'emailjs-com'
import{ init } from 'emailjs-com';
init("user_7CINYP2z8ICW8nhDeIgnc");



export default function FeedbackForm({ handleShowFeedBack }) {

  const initState = {
    senderEmail : "",
    feedback : ""
  }
  const [state, setState] = useState(initState);
  
  const { senderEmail, feedback } = state

  const handleInput = (e) => {
    setState({
      ...state,
      [e.target.name] : e.target.value
    })
  }

  const handleSend = () => {
    emailjs.send("service_ntqo2if", "template_39g6d8t", state)
    .then(function(response) {
      
      console.log('SUCCESS!', response.status, response.text);
      setState(initState)
    }, function(error) {
      console.log('FAILED...', error);
    });

  }
  
  return (
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
      <button className={style.buttonSend} onClick={handleSend}>
        Send
      </button>
      <button onClick={handleShowFeedBack} className={style.buttonClose}>
        Close
      </button>
      </div>
    </div>   
  )
}